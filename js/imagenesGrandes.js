import { toggleHiddeElement } from "./obrasFunciones.js";

const contenedorObras = document.getElementById("contenedorObras");


//funcion para abrir la imagen en tamaño - Se agrega la Img de formadinamica al DOM
const abrirImagenGrande = (event) => {
  if (event.target.tagName == "IMG") {
        
    const imgObraGrande = document.createElement("img");  
    imgObraGrande.classList.add("imgObraGrande", "hidden");
    imgObraGrande.src = `${event.target.src}`;
    imgObraGrande.alt = `${event.target.alt}`;
    imgObraGrande.id = "imgGrande";
  
    const contenedorImgGrandes = document.getElementById("contenedorImgGrandres");
    
    contenedorImgGrandes.appendChild(imgObraGrande);
  
    const img = document.getElementById("imgGrande");
    setTimeout(() => {          
      toggleHiddeElement(img);
    }, 10);
  } 

}

contenedorObras.addEventListener ("click", abrirImagenGrande);

const contenedorImgGrandes = document.getElementById("contenedorImgGrandres");

//funcion para quitar la imagen grande
const eliminarImagen = (event) => {
  const contenedorImgGrandes = document.getElementById("contenedorImgGrandres");
  const img = document.getElementById("imgGrande")
  toggleHiddeElement(img);
  img.addEventListener('transitionend', () => img.remove());  
}

contenedorImgGrandes.addEventListener("click", eliminarImagen);