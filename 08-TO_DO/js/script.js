//los IDs
const formulario = document.getElementById('formulario');
const lista_tareas = document.getElementById('lista-tareas');
const template_alert = document.getElementById('template_alert').content;
const fragment = document.createDocumentFragment();
const input = document.getElementById('input')
let tareas = {};

// Code
formulario.addEventListener('submit', e => {
    e.preventDefault();    //Quita lo que esta predeterminado en html
    setTarea(e); 
});

document.addEventListener('DOMContentLoaded',() =>{
    if(localStorage.getItem('tareas')){
        tareas = JSON.parse(localStorage.getItem('tareas')) 
    }
    pintarTareas();
})

lista_tareas.addEventListener('click', e => {
    btnAccion(e);
});

//valida si el input esta vacio en el dado caso de que no crea una tarea 
const setTarea = e => {
    if(input.value.trim() === ''){
        console.log('esta vacio');
        return
    }

    const tarea  = {
        id: Date.now(),
        text: input.value,
        estado: false
    }

    tareas[tarea.id] = tarea
    
    formulario.reset(); 
    input.focus();  

    pintarTareas();
};

// crea un clone y lo muestra en el html utilizando template(es como una plantilla)
const pintarTareas = () => {

    localStorage.setItem('tareas', JSON.stringify(tareas));

    if ( Object.values(tareas).length === 0){
        lista_tareas.innerHTML = `
            <div class="alert-darck">
                No hay tareas pendientes 😍
            </div>
        `
        return 
    }
    lista_tareas.innerHTML = ''
    Object.values(tareas).forEach(tarea => {
        const clone = template_alert.cloneNode(true);
        clone.querySelector('p').textContent = tarea.text;

        if(tarea.estado){
            clone.querySelector('.container_tarea').classList.add('completada');
            clone.querySelectorAll('.fas')[0].classList.replace('fa-circle-check','fa-rotate-left');
            clone.querySelector('p').style.textDecoration = 'line-through' 
        }


        clone.querySelectorAll('.fas')[0].dataset.id = tarea.id
        clone.querySelectorAll('.fas')[1].dataset.id = tarea.id
        fragment.appendChild(clone);
    }) 

    lista_tareas.appendChild(fragment);
}

const btnAccion = e => {
    if (e.target.classList.contains('fa-circle-check')){
        tareas[e.target.dataset.id].estado = true
        pintarTareas()
    }

    if(e.target.classList.contains('fa-circle-minus')){
        delete tareas[e.target.dataset.id]
        pintarTareas()
    }

    if (e.target.classList.contains('fa-rotate-left')){
        tareas[e.target.dataset.id].estado = false
        pintarTareas()
    }

    e.stopPropagation()
};