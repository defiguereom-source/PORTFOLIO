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
    console.log(tareas); 
    
    formulario.reset(); 
    input.focus();

    pintarTareas();
};

// crea un clone y lo muestra en el html utilizando template(es como una plantilla)
const pintarTareas = () => {
    lista_tareas.innerHTML = ''

    Object.values(tareas).forEach(tarea => {
        const clone = template_alert.cloneNode(true);

        clone.querySelector('p').textContent = tarea.text;
        
        fragment.appendChild(clone);
    }) 

    lista_tareas.appendChild(fragment);
}
