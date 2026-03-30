// Interfaces
interface Tarea {
    id: number;
    text: string;
    estado: boolean;
}

interface Tareas {
    [key: number]: Tarea;
}

// los IDs
const formulario = document.getElementById('formulario') as HTMLFormElement;
const lista_tareas = document.getElementById('lista-tareas') as HTMLElement;
const template_alert = (document.getElementById('template_alert') as HTMLTemplateElement).content;
const fragment = document.createDocumentFragment();
const input = document.getElementById('input') as HTMLInputElement;
let tareas: Tareas = {};

// Code
formulario.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    setTarea(e);
});

document.addEventListener('DOMContentLoaded', () => {
    const stored = localStorage.getItem('tareas');
    if (stored) {
        tareas = JSON.parse(stored);
    }
    pintarTareas();
});

lista_tareas.addEventListener('click', (e: Event) => {
    btnAccion(e);
});

const setTarea = (e: Event): void => {
    if (input.value.trim() === '') {
        console.log('esta vacio');
        return;
    }

    const tarea: Tarea = {
        id: Date.now(),
        text: input.value,
        estado: false
    };

    tareas[tarea.id] = tarea;
    formulario.reset();
    input.focus();
    pintarTareas();
};

const pintarTareas = (): void => {
    localStorage.setItem('tareas', JSON.stringify(tareas));

    if (Object.values(tareas).length === 0) {
        lista_tareas.innerHTML = `
            <div class="alert-darck">
                No hay tareas pendientes 
            </div>
        `;
        return;
    }

    lista_tareas.innerHTML = '';

    Object.values(tareas).forEach((tarea: Tarea) => {
        const clone = template_alert.cloneNode(true) as DocumentFragment;

        const p = clone.querySelector('p');
        if (p) p.textContent = tarea.text;

        if (tarea.estado) {
            const container = clone.querySelector('.container_tarea');
            if (container) container.classList.add('completada');

            const iconoEstado = clone.querySelectorAll('.fas')[0] as HTMLElement;
            if (iconoEstado) iconoEstado.classList.replace('fa-circle-check', 'fa-rotate-left');

            if (p) p.style.textDecoration = 'line-through';
        }

        const iconos = clone.querySelectorAll('.fas');
        if (iconos[0]) (iconos[0] as HTMLElement).dataset.id = String(tarea.id);
        if (iconos[1]) (iconos[1] as HTMLElement).dataset.id = String(tarea.id);

        fragment.appendChild(clone);
    });

    lista_tareas.appendChild(fragment);
};

const btnAccion = (e: Event): void => {
    const target = e.target as HTMLElement;
    const id = Number(target.dataset.id);

    if (target.classList.contains('fa-circle-check')) {
        tareas[id].estado = true;
        pintarTareas();
    }

    if (target.classList.contains('fa-circle-minus')) {
        delete tareas[id];
        pintarTareas();
    }

    if (target.classList.contains('fa-rotate-left')) {
        tareas[id].estado = false;
        pintarTareas();
    }

    e.stopPropagation();
};
