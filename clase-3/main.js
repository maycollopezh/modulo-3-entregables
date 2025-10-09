let frutas = ["manzana", "fresa", "platano", "papaya", "manzana", "manzana", "papaya", "platano", "platano", "platano", "platano"];

let manzanas = 0;
let fresas = 0;
let platanos = 0;
let papayas = 0;

for (i=0; i<frutas.length; i++){
    if (frutas[i] === "manzana"){
        manzanas++;
    } else if (frutas[i] === "fresa"){
        fresas++;
    } else if (frutas[i] === "platano"){
        platanos++;
    } else {
        papayas++;
    }
}

console.log("manzanas: " + manzanas);
console.log("fresas: " + fresas);
console.log("platanos: " + platanos);
console.log("papayas: " + papayas);