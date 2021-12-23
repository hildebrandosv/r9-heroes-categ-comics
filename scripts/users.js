const URL_USERS = 'http://localhost:3001/usuarios/'
const URL_MARVEL = 'http://localhost:3002/marvel/'
const URL_DC = 'http://localhost:3003/dc'

let formulario = document.getElementById('formulario')
let btnCorreo = document.getElementById('btnCorreo')
let btnEditar = document.getElementById('btnEditar')
let btnEliminar = document.getElementById('btnEliminar')

document.addEventListener('DOMContentLoaded', async () => {
    document.getElementById('id').style.display = 'none'
    document.getElementById('label-edit').style.display = 'none'
})

formulario.addEventListener('submit', async (e) => {
    e.preventDefault()
    let name = document.getElementById('name').value
    let lastName = document.getElementById('lastName').value
    let email = document.getElementById('email').value

    let resp = await fetch(URL_USERS, {
        method: 'POST',
        body: JSON.stringify({
            nombre: name,
            apellido: lastName,
            correo: email
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    let data = await resp.json()
    console.log(data);
})

btnCorreo.addEventListener('click', async () => {
    document.getElementById('id').style.display = 'block'
    document.getElementById('label-edit').style.display = 'block'

    let email = document.getElementById('email').value

    document.getElementById('email').readOnly = true

    let resp = await fetch(URL_USERS)
    let data = await resp.json()
    console.log(data);
    let modificar = data.find(user => user.correo === email)

    const { nombre, apellido, correo, id } = modificar
    console.log(nombre, apellido, correo, id);

    document.getElementById('name').value = nombre
    document.getElementById('lastName').value = apellido
    document.getElementById('email').value = correo
    document.getElementById('id').value = id
})

btnEditar.addEventListener('click', async () => {
    let idModificar = document.getElementById('id').value
    let nameModificar = document.getElementById('name').value
    let lastNameModificar = document.getElementById('lastName').value
    let emailModificar = document.getElementById('email').value

    if (idModificar) {
        let resp = await fetch(`${URL_USERS}${idModificar}`, {
            method: 'PUT',
            body: JSON.stringify({
                id: idModificar,
                nombre: nameModificar,
                apellido: lastNameModificar,
                correo: emailModificar
            }),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        })
        let data = resp.json()
        console.log(data);
    } else {
        alert('¡No hay datos para actualizar!: Antes de usar el botón <Editar>, debe buscar el usuario con su email. ');
        console.log('¡No hay datos para actualizar!: Antes de usar el botón <Editar>, debe buscar el usuario con su email. ');
    }
})

btnEliminar.addEventListener('click', async () => {
    let idEliminar = document.getElementById('id').value
    if (idEliminar) {
        let res = await fetch(URL_USERS + idEliminar, {
        method: 'DELETE'
    })
    let data = await res.json()
    console.log(data);
} else {
    alert('¡No hay datos para eliminar!: Antes de usar el botón <Eliminar>, debe buscar el usuario con su email. ');
    console.log('¡No hay datos para eliminar!: Antes de usar el botón <Editar>, debe buscar el usuario con su email. ');
}
})