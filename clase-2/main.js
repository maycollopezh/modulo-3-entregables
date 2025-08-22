let nombreEstudiante = prompt("Ingrese su nombre");
let nota = prompt("Ingrese su nota");

if (nota >= 90 && nota <= 100) {
    console.log(nombreEstudiante + " Aprovaste, EXCELENTE");
} else if (nota >= 75 && nota <= 89){
    console.log(nombreEstudiante + " Aprovaste, BIEN");
} else if (nota >= 60 && nota <=74){
    console.log(nombreEstudiante + " Aprovaste, SUFICIENTE");
} else if (nota < 60 && nota >= 1){
    console.log(nombreEstudiante + " Reprovaste");
} else {
    console.error("Error");
}