//TODO: Objetos literales
const persona = {
  nombre: 'Juan',
  apellido: "Díaz",
  edad: 25,
  dni_cedula: "36451268",
};

// Mostramos el objeto
console.log(persona);

// ACCEDER O MOSTRAR UN OBJETO
// objeto.clave = valor; Notación de punto
// objeto["clave"] = valor; Notación de corchetes

//* Accedemos a una propiedad
console.log(persona.nombre);
console.log(persona["nombre"]);
console.log(persona.dni_cedula);
console.log(persona["dni_cedula"]);

//* Agregar propiedades
persona.correo = "micorreo@correo.com";
console.log(persona);

//* Modificar propiedades
persona.correo = "juandiaz15@correo.com";
console.log(persona);

//! hola
//? hola
//* hola
//TODO: hola
//@param miahysa


