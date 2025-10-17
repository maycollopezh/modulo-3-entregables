let librosLeidos = [];

function agregarLibro (titulo) {
    librosLeidos.push(titulo);
    console.log("Se agrego el libro: " + titulo);
}

function mostrarLibrosLeidos () {
    if (librosLeidos.length === 0) {
        console.log("Aún no has leído ningún libro");
    } else {
        for (i=0; i<librosLeidos.length; i++){
            console.log((i+1) + ". " + librosLeidos[i]);
        }
    }
}

agregarLibro("Harry Poter");
agregarLibro("El señor de los anillos");
agregarLibro("Charlas TED");

mostrarLibrosLeidos();