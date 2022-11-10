//crear variables
const TICKET = 200;
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.querySelector("#mail");
const cantidad = document.querySelector("#cantidadTickets");
const categoria = document.querySelector("#categoriaSelect");
const totalPago = document.querySelector("#totalPago");
const formulario = document.getElementById("formtickets")

const btnBorrar = document.querySelector("#btnBorrar");
const btnCalcular = document.querySelector("#btnResumen");

//capturar eventos
btnBorrar.addEventListener("click", borrar);
btnCalcular.addEventListener("click", mostrarTotal);
formulario.addEventListener("submit", validar)

//validar datos
function validar(e){
  e.preventDefault()

  alert("Antes de abonar, verifique los datos ingresados.")
}

//borrar datos
function borrar() {
  nombre.value = "";
  apellido.value = "";
  email.value = "";
  cantidad.value = "";
  cantidad.value = "";
  totalPago.textContent = "";
}

//calcular descuentos
function calcularDescuento() {
  switch (categoria.value) {
  
    case "0":
      return 1;
    case "1":
      return 0.2;
    case "2":
      return 0.5;
    case "3":
      return 0.85;
    default:
      return false;
  }
}

//calcular total
function calcularTotal() {
  let total = 0;
  if(isNaN(parseInt(cantidad.value))){
    totalPago = 0
  } else{

  total = parseInt(cantidad.value) * calcularDescuento() * TICKET;
  return total;
  }
}

//mostrar total
function mostrarTotal() {
  totalPago.textContent = calcularTotal();
}
 
