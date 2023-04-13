// Obtener elementos del DOM
const input = document.getElementById('tarea');
const btnAgregar = document.getElementById('agregar');
const lista = document.getElementById('lista');

// Función para agregar tarea a la lista
function agregarTarea() {
	// Obtener valor del input
	const tarea = input.value;

	// Validar que el input no esté vacío
	if (tarea.trim() === '') {
		alert('Por favor, ingrese una tarea.');
		return;
	}

	// Crear elemento li y agregar contenido
	const li = document.createElement('li');
	li.classList.add('list-group-item');
	li.innerText = tarea;

	// Crear botón para eliminar tarea
	const btnEliminar = document.createElement('button');
	btnEliminar.classList.add('btn', 'btn-danger', 'ml-4');
	btnEliminar.innerText = 'Eliminar';

	// Agregar evento al botón eliminar
	btnEliminar.addEventListener('click', () => {
		li.remove();
	});

	// Agregar botón eliminar a la tarea
	li.appendChild(btnEliminar);

	// Agregar tarea a la lista
	lista.appendChild(li);

	// Limpiar valor del input
	input.value = '';
}

// Agregar evento al botón agregar
btnAgregar.addEventListener('click', agregarTarea);