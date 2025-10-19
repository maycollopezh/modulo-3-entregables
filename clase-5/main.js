class Libro {
    constructor(titulo, autor, anio, estado) {
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.estado = estado;
    }

    describirLibro(){
        console.log(`Libro titulado ${this.titulo}, escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    }
}

const libro1 = new Libro ("Raza de Bronce", "Alcides Arguedas", 1919, "Disponible");
const libro2 = new Libro ("Aluvión de Fuego", "Oscar Cerruto", 1935 , "Prestado");
const libro3 = new Libro ("Los deshabitados", "Marcelo Quiroga Santa Cruz", 1959 , "Prestado");
const libro4 = new Libro ("Jonás y la Ballena Rosada", "Wolfango Montes Vannuci", 1987 , "Prestado");
const libro5 = new Libro ("Potosí 1600", "Ramón Rocha Monroy", 2001 , "Disponible");

libro1.describirLibro();
libro2.describirLibro();
libro3.describirLibro();
libro4.describirLibro();
libro5.describirLibro();