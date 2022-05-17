import {carritoLS} from "./localStorage.js";
import {hiddeCarrito, terminarCompra, hiddeCompra, reload} from "./carritoFunciones.js"

//ELEMENTOS DEL CARRITO
export let carrito = [];
carritoLS != null && (carrito = JSON.parse(localStorage.getItem("carrito"))); //si el carrito del LS NO da null, le agrego la info que contenga a carrito

const iconoCarrito = document.getElementById("iconoCarrito");
iconoCarrito.addEventListener("click", hiddeCarrito);

//invoco el btn aceptar y le agrego las funciones necesarias para cuando se haga click
const aceptar = document.getElementById("aceptar");
aceptar.addEventListener("click", terminarCompra);
aceptar.addEventListener("click", hiddeCarrito);
aceptar.addEventListener("click", hiddeCompra);

//invoco el btn cancelar. Lo unico que hace es ocultar el carrito
const cancelar = document.getElementById("cancelar");
cancelar.addEventListener("click", hiddeCarrito);

//ELEMENTOS Div COMPRA
//invoco el btn finalizar. lo unico que hace es ocultar el cuadro con la info de la compra (div Compra)
const finalizar = document.getElementById("finalizar");
finalizar.addEventListener("click", hiddeCompra);

//cuando se recarga la pagina, si hay info en el LS, el carrito vuelve a renderizarce con la info guardad
window.addEventListener("load", reload);