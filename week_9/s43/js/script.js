// Modificación de arrays

//! .map(función)
// El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

let nums = [1, 2, 3, 4, 5];
console.log(nums);

//TODO: Usando map
let numsPorDos = nums.map((n) => n * 2);

console.log(numsPorDos);
// El arreglo original no se modifica
console.log(nums);

// 3 -> Del arreglo de strings, crear un nuevo arreglo con la siguiente pauta: Si la palabra tiene más de 7 letras se pondrá "palabra larga", en caso contrario se pondrá "palabra corta"
let palabras = [
  "hola",
  "computadora",
  "casa",
  "programacion",
  "javascript",
  "ciclo",
];

// * solucion 1
let palabrasNew = palabras.map((palabra) => {
  if (palabra.length < 7) {
    return "palabra corta";
  }

  return "palabra larga";
})

// * solucion 2
let palabrasSize = palabras.map((p) => p.length > 7 ? "palabra larga" : "palabra corta");

// * solucion 3
let palabrasTamaño = palabras.map((p) => `palabra ${p.length > 7 ? "larga" : "corta"}` )

console.log(palabrasNew);
console.log(palabrasSize);
console.log(palabrasTamaño);

//! .reduce()
// El método reduce() aplica una función a un acumulador y a cada valor de un array (de izquierda a derecha) para reducir a un único valor.

console.log(nums);

let suma = nums.reduce((a, b) => a + b, 0);
console.log(suma);

let mul = nums.reduce((a, b) => a * b, 1);
console.log(mul);

//! .sort()
let puntos = [11, 2, 1, 21, 23, 10];
console.log(puntos);

// Ordeno el arreglo por defecto
puntos.sort();
console.log("Ordenamiento por defecto");
console.log(puntos);

// Ordenamiento numérico estricto
puntos.sort((a, b) => a - b);
console.log("Ordenamiento numérico estricto");
console.log(puntos);


/*
? holmjn
! jdnso
* dsñ,d
TODO: kslnc
*/