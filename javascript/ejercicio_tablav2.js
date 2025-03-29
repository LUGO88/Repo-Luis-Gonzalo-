const datos = [
    { id: 1, nombre: "Luis", apellido: "González", correo: "luis.gonzalez@example.com", telefono: "1234567890", comentario: "Este es un comentario 1" },
    { id: 2, nombre: "Ana", apellido: "Martínez", correo: "ana.martinez@example.com", telefono: "0987654321", comentario: "Este es un comentario 2" },
    { id: 3, nombre: "Carlos", apellido: "Pérez", correo: "carlos.perez@example.com", telefono: "1122334455", comentario: "Este es un comentario 3" },
    { id: 4, nombre: "María", apellido: "López", correo: "maria.lopez@example.com", telefono: "5566778899", comentario: "Este es un comentario 4" },
    { id: 5, nombre: "Jorge", apellido: "Hernández", correo: "jorge.hernandez@example.com", telefono: "6677889900", comentario: "Este es un comentario 5" },
];

const tabla = document.querySelector('#tabla');

function crearTabla() {
    let cadena = "<table>";
    cadena += "<thead>";
    cadena += "<tr>";
    cadena += "<th>ID</th>";
    cadena += "<th>Nombre</th>";
    cadena += "<th>Apellido</th>";
    cadena += "<th>Correo</th>";
    cadena += "<th>Teléfono</th>";
    cadena += "<th>Comentario</th>";
    cadena += "<th>Acciones</th>"; // Nueva columna para el botón "Eliminar"
    cadena += "</tr>";
    cadena += "</thead>";
    cadena += "<tbody>";

    for (const dato of datos) {
        cadena += "<tr>";
        cadena += `<td>${dato.id}</td>`;
        cadena += `<td>${dato.nombre}</td>`;
        cadena += `<td>${dato.apellido}</td>`;
        cadena += `<td>${dato.correo}</td>`;
        cadena += `<td>${dato.telefono}</td>`;
        cadena += `<td>${dato.comentario}</td>`;
        cadena += `<td><button class="btn-eliminar" onclick="deleteRow(this)">Eliminar</button></td>`; // Botón "Eliminar"
        cadena += "</tr>";
    }

    cadena += "</tbody>";
    cadena += "</table>";
    tabla.innerHTML = cadena;
}

function agregarFila() {
    const id = document.getElementById('id').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const comentario = document.getElementById('comentario').value;

    if (id && nombre && apellido && correo && telefono && comentario) {
        const body = tabla.querySelector('tbody');
        const nuevaFila = body.insertRow();

        nuevaFila.innerHTML = `
            <td>${id}</td>
            <td>${nombre}</td>
            <td>${apellido}</td>
            <td>${correo}</td>
            <td>${telefono}</td>
            <td>${comentario}</td>
            <td><button class="btn-eliminar" onclick="deleteRow(this)">Eliminar</button></td>
        `;

        document.getElementById('formulario').reset();
        cerrarFormulario();
    } else {
        alert('Por favor, completa todos los campos.');
    }
}

function deleteRow(button) {
    const fila = button.parentNode.parentNode; // Obtiene la fila del botón
    fila.remove(); // Elimina la fila
}

function mostrarModal() {
    document.getElementById('contenedor-formulario').style.display = 'flex';
}

function cerrarFormulario() {
    document.getElementById('contenedor-formulario').style.display = 'none';
}

// Crear la tabla al cargar la página
crearTabla();