import * as carrito from "./carrito.js"
import * as artistas from "./artistas.js"
import * as obras from "./obras.js"
import * as imagenesGrandes from "./imagenesGrandes.js"

const d = document;

const cambiarFondo = () => {
    let top = window.scrollY;
    const navBar = d.getElementById ("navBar");
    const home = d.getElementById ("home");    
    
    top >= home.offsetHeight
    ? navBar.classList.add ("fondoBlanco")
    : navBar.classList.remove ("fondoBlanco") 

    /* top >= (hv 100) 
    ? navBar.classList.add ("fondoBlanco")
    : navBar.classList.remove ("fondoBlanco") */ 
}

window.addEventListener ("scroll", cambiarFondo)
