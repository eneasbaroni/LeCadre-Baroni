import {carritoLS} from "./localStorage.js";
import {toggleHiddeElement} from "./obrasFunciones.js";
import {carrito} from "./carrito.js";


//ELEMENTOS NECESARIOS PARA LAS FUNCIONES
const totalCompra = document.getElementById("total");
const btnsDeshacer = document.getElementById("contenedorObras").getElementsByClassName("botonDeshacer");
const cuotas = document.getElementById("cuotas");
const detalleObras = document.getElementById("detalleObras");

//incio obrasCompradas. verifico si en el localStorage ya hay obras compradas, si hay, se la agrego al array, y si no hay inicio el array vacio
let obrasCompradas = JSON.parse(localStorage.getItem("obrasCompradas")) || [];

const detalleObrasCompradas = document.getElementById("detalleObrasCompradas");

//FUNCIONES DEL CARRITO
export const hiddeCarrito = () => toggleHiddeElement(document.getElementById("carrito"));

const total = (arr) => {
    return arr.reduce((acc, el) => acc + el.precio, 0);
};

//funcion para poner el div carrito en blanco
const carritoEnBlanco = () => {
  detalleObras.innerHTML = "";
  totalCompra.innerHTML = "";
  cuotas.innerHTML = "";
}

//funcion para meter en un div un p con la info de las obras del carritoLS (Carrito del Local Storage)
const agregarDetalleObra = (div) => {

  const carritoLS = JSON.parse(localStorage.getItem("carrito"));

  for (const obra of carritoLS) {
    const p = document.createElement("p");
    p.append(`Obra: ${obra.nombre} - Autor: ${obra.autor} - Precio: ${obra.precio}`);
    div.append(p);
  }

}

//agrega la info de cada obra del carritoLS mas el detalle del total y las cuotas que se pueden seleccionar
const agregarObra = () => {

  const carritoLS = JSON.parse(localStorage.getItem("carrito")); 
   
  agregarDetalleObra(detalleObras); 

  totalCompra.append(`El total es $${total(carritoLS)}`);

  cuotas.append(`Elija la cantidad de cuotas a realizar la compra`);
  cuotas.innerHTML += (
    `<br><input class="form-check-input" type="radio" name="cuotas" id="cuota1" value="option1" checked>Una cuota de $${total(carritoLS)} (0% de interes)</input> <br>
    <input class="form-check-input" type="radio" name="cuotas" id="cuota3" value="option2">Tres cuotas de $${parseInt((total(carritoLS) / 3) * 1.15)} (15% de interes)</input> <br>
    <input class="form-check-input" type="radio" name="cuotas" id="cuota6" value="option3">Seis cuotas de $${parseInt((total(carritoLS) / 6) * 1.25)} (25% de interes)</input> <br>`
  )

}

//Funcion para renderizar el div carrito. primero inicia  en blanco, luego verifico si hay info en carritoLS, si la hay, la agrego con la funcion agregarObra
export const renderizarCarrito = () => {
  
  const carritoLS = JSON.parse(localStorage.getItem("carrito"));

  carritoEnBlanco();

  (carritoLS != null && carritoLS.length != 0) && agregarObra();    

}

//cuando se recarga la pagina, si el carritoLS no es NULL, es decir que tiene contenido, vuelvo a renderizar el div carrito
export const reload = () => {
  carritoLS != null && renderizarCarrito()
};

//FUNCIONES DEL DIV COMPRA (finalizar compra)
export const hiddeCompra = () => toggleHiddeElement(document.getElementById("compra"));

//verifico cual de los tres imput radio (cantidad de cuotas) se seleccionó y en base a eso agrego el contenido
const agregarDetalleCuota = (div, carritoLS) => {

  const cuota1 = document.getElementById("cuota1");
  const cuota3 = document.getElementById("cuota3"); 
  
  cuota1.checked == true
  ? div.innerHTML = (`<h3>Detalle de la Compra:</h3><h4>Una cuota de $${total(carritoLS)}</h4>`)
  : cuota3.checked == true
      ? div.innerHTML = (`<h3>Detalle de la Compra:</h3><h4>Tres cuotas de $${parseInt((total(carritoLS) / 3) * 1.15)}</h4>`)
      : div.innerHTML = (`<h3>Detalle de la Compra:</h3><h4>Seis cuotas de $${parseInt((total(carritoLS) / 6) * 1.25)}</h4>`)
    
}

//el div compra inicia en blanco, verifico si hay info en carritoLS, si la hay, renderizo el detalle de la compra
const agregarDetalleCompra = () => {

  const detalleCompra = document.getElementById("detalleCompra");
  const carritoLS = JSON.parse(localStorage.getItem("carrito"));
  detalleCompra.innerHTML = "";

  (carritoLS != null && carritoLS.length != 0) && agregarDetalleCuota(detalleCompra, carritoLS);
    
}

//renderizar compra - agrega el detalle de la compra y el detalle de las obras compradas
const renderizarCompra = () => {

  agregarDetalleCompra();

  const carritoLS = JSON.parse(localStorage.getItem("carrito"));

  detalleObrasCompradas.innerHTML = "";

  (carritoLS == null || carritoLS.length == 0) ? detalleObrasCompradas.innerHTML = "" : agregarDetalleObra(detalleObrasCompradas); 

}

//Funcion para ocultar los btns Deshacer de las obras que se confirman la compra
const eliminarBtnsDeshacer = () => {
  for (const btn of btnsDeshacer) {
    for (const el of carrito) {
      btn.name == el.alt && btn.classList.add("hidden")      
    }
  }
};

const agregarACompradas = () => {
  for (const obra of carrito) {
    obrasCompradas.push(obra);
  }
};

const vaciarCarrito = () => {
  carrito.splice(0, carrito.length);
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

export const terminarCompra = () => {
  renderizarCompra();
  eliminarBtnsDeshacer();
  agregarACompradas();
  localStorage.setItem("obrasCompradas", JSON.stringify(obrasCompradas));
  vaciarCarrito();
  renderizarCarrito();
};