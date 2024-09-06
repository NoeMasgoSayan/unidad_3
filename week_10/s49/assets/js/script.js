$(document).ready(function () {
  // Sintaxis de jQuery -> $(selector).accion();
  // Con js
  document.querySelector("#title").innerHTML = "DOM con JS"
  // Con jQuery
  $("#title").html("DOM con jQuery");

  // Seleccionar por clase
  $(".demo").html("Clase seleccionada");
  // Solo usar el primero de una clase
  $(".demo").first().html("Primer elemento de la clase");

  // Seleccionar elemento y cambiar un atributo
  // .attr("atributo", "valor")
  $("#koala").attr(
    "src",
    "https://static.vecteezy.com/system/resources/previews/005/161/891/non_2x/cartoon-baby-koala-sitting-on-tree-stump-free-vector.jpg"
  );

  // Evento de click
  // $(#btn).click(() => $(#resultado).toggle());
  $("#btn").click(function () {
    $("#resultado").toggle();
  });
});
