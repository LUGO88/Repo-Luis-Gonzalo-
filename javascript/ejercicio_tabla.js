const datos = [
    { id: 1, nombre: "Luis", apellido: "González", correo: "luis.gonzalez@example.com", telefono: "1234567890", comentario: "Este es un comentario 1" },
    { id: 2, nombre: "Ana", apellido: "Martínez", correo: "ana.martinez@example.com", telefono: "0987654321", comentario: "Este es un comentario 2" },
    { id: 3, nombre: "Carlos", apellido: "Pérez", correo: "carlos.perez@example.com", telefono: "1122334455", comentario: "Este es un comentario 3" },
    { id: 4, nombre: "María", apellido: "López", correo: "maria.lopez@example.com", telefono: "5566778899", comentario: "Este es un comentario 4" },
    { id: 5, nombre: "Jorge", apellido: "Hernández", correo: "jorge.hernandez@example.com", telefono: "6677889900", comentario: "Este es un comentario 5" },
    { id: 6, nombre: "Lucía", apellido: "Ramírez", correo: "lucia.ramirez@example.com", telefono: "7788990011", comentario: "Este es un comentario 6" },
    { id: 7, nombre: "Pedro", apellido: "Gómez", correo: "pedro.gomez@example.com", telefono: "8899001122", comentario: "Este es un comentario 7" },
    { id: 8, nombre: "Sofía", apellido: "Torres", correo: "sofia.torres@example.com", telefono: "9900112233", comentario: "Este es un comentario 8" },
    { id: 9, nombre: "Diego", apellido: "Vargas", correo: "diego.vargas@example.com", telefono: "1011121314", comentario: "Este es un comentario 9" },
    { id: 10, nombre: "Elena", apellido: "Morales", correo: "elena.morales@example.com", telefono: "1213141516", comentario: "Este es un comentario 10" }
];

tabla = document.querySelector('#tabla');

function crearTabla() {
    var cadena = "<table>";
    cadena = cadena + "<thead>";
    cadena = cadena + "<tr>";
    cadena = cadena + "<th>ID</th>";
    cadena = cadena + "<th>Nombre</th>";
    cadena = cadena + "<th>Apellido</th>";
    cadena = cadena + "<th>Correo</th>";
    cadena = cadena + "<th>Teléfono</th>";
    cadena = cadena + "<th>Comentario</th>";
    cadena = cadena + "</tr>";
    cadena = cadena + "</thead>";
    cadena = cadena + "<tbody>";

    for(const dato of datos) {
        cadena = cadena + "<tr>";
        cadena = cadena + "<td>" + dato.id + "</td>";
        cadena = cadena + "<td>" + dato.nombre + "</td>";
        cadena = cadena + "<td>" + dato.apellido + "</td>";
        cadena = cadena + "<td>" + dato.correo + "</td>";
        cadena = cadena + "<td>" + dato.telefono + "</td>";
        cadena = cadena + "<td>" + dato.comentario + "</td>";
        cadena = cadena + "</tr>";
    }
    cadena = cadena + "</tbody>";
    cadena = cadena + "</table>";
    tabla.innerHTML = cadena;
}

function agregarFila(){
    alert('Agregando fila');
    const id = document.getElementById('id').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const comentario = document.getElementById('comentario').value;
    // Validar que los campos no estén vacíos
    alert('Datos: ' + id + ' ' + nombre + ' ' + apellido + ' ' + correo + ' ' + telefono + ' ' + comentario);
    if(id && nombre && apellido && correo && telefono && comentario){
        //crear nueva fila en la tabla con los datos del formulario
        const body = tabla.getElementsByTagName('tbody')[0];
        var nuevaFila = body.insertRow();
        nuevaFila.innerHTML = ` 
        <td>${id}</td>
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${correo}</td>
        <td>${telefono}</td>
        <td>${comentario}</td>
        `;
        document.getElementById('formulario').reset();

    }else{
        alert('Datos incompletos');
    }
}

crearTabla();