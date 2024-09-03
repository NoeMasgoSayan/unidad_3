// Modificación de arrays

//! .map(función)
let nums = [1, 2, 3, 4, 5];
console.log(nums);

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

//! .reverse()
const arr = [true, 1, "hola", 54.76, "a"];
console.log(arr);

arr.reverse();
console.log(arr);

//! .split()
const frase = "Hola buenos días a todos";
console.log(frase);

let palabra = frase.split(" ");
console.log(palabra);

const csv = "Perú,Argentina,Chile,Colombia";
console.log(csv);

let paises = csv.split(",");
console.log(paises);

//! .join()
let strPalabras = palabra.join(" ");
console.log(strPalabras);

let strPaises = paises.join();
console.log(strPaises);

/*
? holmjn
! jdnso
* dsñ,d
TODO: kslnc
*/