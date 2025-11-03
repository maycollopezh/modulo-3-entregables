function agregarComentario (e) {
    let textoComentario = e.target.parentElement.children[0].children[1].value;
    let nuevoComentario = document.createElement('p');
    nuevoComentario.textContent = textoComentario;
    document.body.children[2].appendChild(nuevoComentario)
}   

const body = document.querySelector('body');
console.log(body);

const botonAgregarComentario = body.children[1].children[1];

botonAgregarComentario.addEventListener ('click', (e) => agregarComentario(e))