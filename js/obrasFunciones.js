import { carrito} from "./carrito.js";
import { renderizarCarrito } from "./carritoFunciones.js";

//funcion para ocultar o mostrar elementos
export const toggleHiddeElement = (el) => {
  el.classList.toggle("hidden");
};

//funcion para verificar el estado de los arrays del LS
export const someObraLS = (arrayLS, objeto) => {
  if (arrayLS == null) {
    return false;
  } else if (arrayLS.some((el) => el.alt == objeto)) {
    return true;
  } 
};

//funcion del bnt adquirir
export const adquirir = (obras, btn) => {
  
  const obraComprada = obras.find((el) => el.alt === btn.name);
  
  carrito.push({
    nombre: obraComprada.nombre,
    autor: obraComprada.autor,
    precio: obraComprada.precio,
    alt: obraComprada.alt,
  });  
  
  localStorage.setItem("carrito", JSON.stringify(carrito));
  
  renderizarCarrito();
  
};

//funcion del bnt deshacer (Elimina Obra de carrito)
export const deshacer = (carrito, obras, btn) => {
  
  const indexDeshacer = carrito.findIndex((obra) => obra.alt === btn.name); 
  carrito.splice(indexDeshacer, 1);

  localStorage.setItem("carrito", JSON.stringify(carrito));

  renderizarCarrito();

};

export const toastiAdquirir = () => {
  Toastify ({
    text: "Obra Agregada al Carrio",    
    offset: {
      x: 40, 
      y: 50 
    },
    style: {
      background: "#2f00ff",
    },
    duration: 3000    
    }).showToast();
}

export const toastiDeshacer = () => {
  Toastify ({
    text: "Obra Quitada del Carrio",  
    offset: {
      x: 40, 
      y: 50 
    },  
    style: {
      background: "#e5ff00",
      color: "black",
    },
    duration: 3000    
    }).showToast();
}

