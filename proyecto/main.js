function agregarComentario (e) {

    const entradaComentario = e.target.parentElement.children[0].children[1];
    const textoComentario = entradaComentario.value;

    if(textoComentario != ""){
        const comentarioContenedor = document.createElement('div');
        comentarioContenedor.classList.add('comentariosAgregadosContenedor')
        document.body.children[2].appendChild(comentarioContenedor);

        const fechaComentario = document.createElement('h5');
        let fechaActual = new Date();
        fechaComentario.innerText = fechaActual.toLocaleDateString() + ' ' + fechaActual.toLocaleTimeString();
        comentarioContenedor.appendChild(fechaComentario);

        const fila = document.createElement('div');
        fila.classList.add("filaComentario");
        comentarioContenedor.appendChild(fila);

        const nuevoComentario = document.createElement('p');
        nuevoComentario.textContent = textoComentario;
        fila.appendChild(nuevoComentario)

        let eliminarComentarioBoton = document.createElement('button');
        eliminarComentarioBoton.textContent = "Eliminar";
        fila.appendChild(eliminarComentarioBoton);

        entradaComentario.value= "";
        eliminarComentarioBoton.addEventListener ("click", (e) => eliminarComentario(e))
    } else {
        alert("Por favor ingresa un comentario antes de agregarlo.");
    }

}   


function eliminarComentario (e){
    const comentarioAEliminar = e.target.parentElement.parentElement;
    comentarioAEliminar.remove();
}

const body = document.querySelector('body');
const botonAgregarComentario = body.children[1].children[1];

botonAgregarComentario.addEventListener ('click', (e) => agregarComentario(e))