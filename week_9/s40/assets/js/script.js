//Mini Proyecto
// iniciamos nuestro arreglo con nombres de marcas de vehículos
let cars = ["bmw", "volvo", "saab", "ford", "fiat", "audi"];
//A traves de un for recorremos todos los elementos del arreglo y los mostramos en el html por medio de imagenes
let text = "";
for (let i = 0; i < cars.length; i++) {
    text += '<img src="assets/img/' + cars[i] + '.png" width="100"></img>';
}
// ocupamos innerHTML para mostrar el arreglo
document.getElementById("demo").innerHTML = text;

// Al hacer click en Shift eliminamos el primer elemento
let b3 = document.getElementById("btn_push"); // Encuentra el elemento "btn_push" en el sitio
b3.onclick = funcionPush; // Agrega función onclick al elemento

function funcionPush() {
  // Actualizamos el array
  cars.push("lexus");
  text = "";
  mostrarImagenes();
}

// Al hacer click en Shift eliminamos el primer elemento
let b4 = document.getElementById("btn_pop"); // Encuentra el elemento "btn_pop" en el sitio
b4.onclick = funcionPop; // Agrega función onclick al elemento

function funcionPop() {
  if (cars.length > 0) {
    cars.pop();
    mostrarImagenes();
  } else {
    alert("No puede seguir eliminando valores, ya que el arreglo esta vacío.");
  }
}

let btnShift = document.getElementById("btn_shift"); 
btnShift.onclick = funcionShift; 

function funcionShift() {
    if (cars.length > 0) {
        cars.shift();
        mostrarImagenes();
    } else {
        alert("No puede seguir eliminando valores, ya que el arreglo esta vacío.");
    }

}

let btnUnshift = document.getElementById("btn_unshift"); 
btnUnshift.onclick = funcionUnshift; 

function funcionUnshift() {
    cars.unshift("ferrari");
    text = "";
    mostrarImagenes();
}

// Slice
let btnSlice = document.getElementById("btn_slice");
bynSlice.onclick = funcionSlice;

function funcionSlice() {
  let begin = document.getElementById("begin").value;
  let end = document.getElementById("end").value;

  // Nos preguntamos si no son strings vacías
  if (begin != "" && end != "") {
    // Actualizamos el array
    cars = cars.slice(begin, end);
    // Cargamos las imágenes nuevamente
    mostrarImagenes();
  } else {
    alert("Los campos no pueden estar vacíos");
  }
}

// Esta funcion carga las imágenes en el elemento demo
function mostrarImagenes() {
  text = "";

  for (let car of cars) {
    text += `<img src="assets/img/${car}.png" alt="${car}" width="100">`;
  }

  document.getElementById("demo").innerHTML = text;
}

// Mostramos las imágenes al inicio
mostrarImagenes();