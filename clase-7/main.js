const rangoEntrada = document.querySelector(".rango-entrada input");
const generadorFormulario = document.querySelector(".generar-formulario form")
const copearContraseñaBoton = document.querySelector(".generar-contraseña img");
function cambioRangoEntrada (e) {
    const tituloRangoEntrada = document.querySelector(".rango-entrada h1");
    const rango = e.target.value;
    tituloRangoEntrada.textContent = rango;
}

function generarContraseña (e) {
    e.preventDefault();
    const contraseñaLargo = rangoEntrada.value;
    const arregloEntradas = Array.from(document.querySelectorAll(".caja-verificacion input"));
    const contraseñaConfiguracion = {
        incluirMayusculas: arregloEntradas[0].checked,
        incluirMinusculas: arregloEntradas[1].checked,
        incluirNumeros: arregloEntradas[2].checked,
        incluirSimbolos: arregloEntradas[3].checked,
    }

    let caracteresAleatorios = "";
    
    if (contraseñaConfiguracion.incluirMayusculas){
        caracteresAleatorios += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if (contraseñaConfiguracion.incluirMinusculas){
        caracteresAleatorios += "abcdefghijklmnopqrstuvwxyz"
    }
    if (contraseñaConfiguracion.incluirNumeros){
        caracteresAleatorios += "1234567890"
    }
    if (contraseñaConfiguracion.incluirSimbolos){
        caracteresAleatorios += "!#%$&?"
    }

    let contraseñaGenerado = "";

    for (let i = 0; i < contraseñaLargo; i++) {
        let numeroAleatorio = Math.floor(Math.random() * caracteresAleatorios.length);
        contraseñaGenerado += caracteresAleatorios.charAt(numeroAleatorio);
    }

    const contraseñaTitulo = document.querySelector(".generar-contraseña h1");
    contraseñaTitulo.textContent = contraseñaGenerado;

}

function copearContraseña () {
    const contraseñaTitulo = document.querySelector(".generar-contraseña h1");
    navigator.clipboard.writeText(contraseñaTitulo.textContent);
}


rangoEntrada.addEventListener ("change", (e) => cambioRangoEntrada(e));
generadorFormulario.addEventListener ("submit", (e) => generarContraseña(e));
copearContraseñaBoton.addEventListener ("click", () => copearContraseña())