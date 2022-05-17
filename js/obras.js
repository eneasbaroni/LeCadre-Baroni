import { carrito } from "./carrito.js";
import { carritoLS, obrasCompradasLS } from "./localStorage.js";
import { toggleHiddeElement, someObraLS, adquirir, deshacer, toastiAdquirir, toastiDeshacer} from "./obrasFunciones.js";

//traigo las obras de un archivo JSON local
const url = "./json/obras.json";
fetch (url)
    .then (info => info.json()) 
    .then ( obras => {agregarObrasAlDom(obras)});


//Inserto las obras en el HTML
const contenedor = document.getElementById("contenedorObras");
const fragmento01 = document.createDocumentFragment();

const agregarObrasAlDom = (obras) => {
  
  for (const obra of obras) {
  
    //creo los elementos HTML
    const div = document.createElement("div");
    const imgObra = document.createElement("img");
    const btnAdquirir = document.createElement("button");
    const btnDeshacer = document.createElement("button");
    const obraNombre = document.createElement("p");
    const obraPrecio = document.createElement("p");
    const obraAutor = document.createElement("h3");
  
    //le agrego las clases CSS
    div.classList.add("obra", "col-12", "col-md-6", "col-xl-4", "p-0", "justify-content-center", "text-center");
    imgObra.classList.add("px-1", "imgObra");
    btnAdquirir.className = "botonCompra text-center";
    btnDeshacer.className = "botonDeshacer text-center hidden";
    obraNombre.className = "obraNombre hidden";
    obraPrecio.className = "obraPrecio hidden";
    obraAutor.className = "obraAutor";
  
    //les agrego el contenido
    imgObra.src = `./images/${obra.src}`;
    imgObra.alt = `${obra.alt}`;
    btnAdquirir.append("ADQUIRIR");
    btnDeshacer.append("DESHACER");
    btnAdquirir.name = `${obra.alt}`;
    btnDeshacer.name = `${obra.alt}`;
  
    //defino algunas funciones necesarias para agregar a los elementos HTML
    const hiddenObraNombre = () => toggleHiddeElement(obraNombre);
    const hiddenObraPrecio = () => toggleHiddeElement(obraPrecio);
    const hiddeBotonAdquirir = () => toggleHiddeElement(btnAdquirir);
    const hiddeBotonDeshacer = () => toggleHiddeElement(btnDeshacer);
  
    //verifico si hay obras en carrito del Local Storage - De ser así intercambio los botones adquirir y deshacer
    if (someObraLS(carritoLS, btnAdquirir.name)) {
      hiddeBotonAdquirir();
      hiddeBotonDeshacer();
    }
  
    //verifico si hay obras compradas en el Local Storage - De ser así oculto el boton adquirir
    if (someObraLS(obrasCompradasLS, btnAdquirir.name)) {
      hiddeBotonAdquirir();
    }
  
    //agrego los eventos necesarios con sus funciones
    imgObra.addEventListener("mouseover", hiddenObraNombre);
    imgObra.addEventListener("mouseleave", hiddenObraNombre);
    imgObra.addEventListener("mouseover", hiddenObraPrecio);
    imgObra.addEventListener("mouseleave", hiddenObraPrecio);
  
    btnAdquirir.addEventListener("click", () => adquirir(obras, btnAdquirir));
    btnAdquirir.addEventListener("click", hiddeBotonAdquirir);
    btnAdquirir.addEventListener("click", hiddeBotonDeshacer);
    btnAdquirir.addEventListener("click", toastiAdquirir);    
  
    btnDeshacer.addEventListener("click", () => deshacer(carrito, obras, btnDeshacer));
    btnDeshacer.addEventListener("click", hiddeBotonDeshacer);
    btnDeshacer.addEventListener("click", hiddeBotonAdquirir);
    btnDeshacer.addEventListener("click", toastiDeshacer); 
  
    //hago el append de todos los elementos
    obraNombre.append(obra.nombre);
    obraPrecio.append(`$${obra.precio}`);
    obraAutor.append(obra.autor);
    div.appendChild(imgObra);
    div.append(btnAdquirir);
    div.append(btnDeshacer);
    div.append(obraNombre);
    div.append(obraPrecio);
    div.append(obraAutor);
  
    //meto todo en un fragmento
    fragmento01.appendChild(div);
  
  }
  
  //meto el fragmento en el contenedor HTML
  contenedor.appendChild(fragmento01);
}


