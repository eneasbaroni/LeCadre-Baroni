class Artista {
  constructor(nombre, bio, src, alt) {
    this.nombre = nombre;
    this.bio = bio;    
    this.src = src;
    this.alt = alt;    
  }  
}

//creo cada uno de los artistas como un nuevo objeto
const artista01 = new Artista("Marta Vovk", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto nemo nostrum laboriosam quia doloribus autem repellendus magnam impedit nisi a officiis ad quae laudantium maiores, deleniti voluptatem amet culpa, velit provident dolorem iste? Ipsa consectetur blanditiis, ad quidem at rem inventore hic quo doloremque minima, laboriosam odio sed nam. Dolor!", "marta_vovk.jpg", "marta vovk");
const artista02 = new Artista("Boicut", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto nemo nostrum laboriosam quia doloribus autem repellendus magnam impedit nisi a officiis ad quae laudantium maiores, deleniti voluptatem amet culpa, velit provident dolorem iste? Ipsa consectetur blanditiis, ad quidem at rem inventore hic quo doloremque minima, laboriosam odio sed nam. Dolor!", "boicut.jpg", "boicut");
const artista03 = new Artista("Anna Nero", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto nemo nostrum laboriosam quia doloribus autem repellendus magnam impedit nisi a officiis ad quae laudantium maiores, deleniti voluptatem amet culpa, velit provident dolorem iste? Ipsa consectetur blanditiis, ad quidem at rem inventore hic quo doloremque minima, laboriosam odio sed nam. Dolor!", "anna_nero.jpg", "anna nero");
const artista04 = new Artista("Bea Bonafini", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto nemo nostrum laboriosam quia doloribus autem repellendus magnam impedit nisi a officiis ad quae laudantium maiores, deleniti voluptatem amet culpa, velit provident dolorem iste? Ipsa consectetur blanditiis, ad quidem at rem inventore hic quo doloremque minima, laboriosam odio sed nam. Dolor!", "bea_bonafini.png", "bea bonafini");
const artista05 = new Artista("Jason Revok", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto nemo nostrum laboriosam quia doloribus autem repellendus magnam impedit nisi a officiis ad quae laudantium maiores, deleniti voluptatem amet culpa, velit provident dolorem iste? Ipsa consectetur blanditiis, ad quidem at rem inventore hic quo doloremque minima, laboriosam odio sed nam. Dolor!", "jason_revok.jpg", "jason revok");
const artista06 = new Artista("Andrew Salgado", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto nemo nostrum laboriosam quia doloribus autem repellendus magnam impedit nisi a officiis ad quae laudantium maiores, deleniti voluptatem amet culpa, velit provident dolorem iste? Ipsa consectetur blanditiis, ad quidem at rem inventore hic quo doloremque minima, laboriosam odio sed nam. Dolor!", "andrew_salgado.jpg", "andrew salgado");

//array con todos los artistas
const artistas = [
    artista01,
    artista02,
    artista03,
    artista04,
    artista05,
    artista06    
];

const contenedor = document.getElementById("contenedorArtistas");
const fragmento02 = document.createDocumentFragment();

//agrego los artistas al DOM
for (const artista of artistas) {
    
    const div = document.createElement("div");
    const artistaBio = document.createElement("p");
    const artistaImg = document.createElement("img");    
    const artistaNombre = document.createElement("h3");    

    div.classList.add("artista", "col-12", "col-md-6", "p-0", "justify-content-center", "text-center");
    artistaBio.classList.add("bio", "mx-1", "pt-3", "px-5");
    
    artistaImg.classList.add("px-1");   
    artistaImg.src = `./images/${artista.src}`;
    artistaImg.alt = `${artista.alt}`;


    artistaBio.innerHTML = `${artista.bio}`;
    artistaNombre.innerHTML = `${artista.nombre}`;

    div.append(artistaBio);
    div.append(artistaImg);
    div.append(artistaNombre);    

    fragmento02.appendChild(div);
}

contenedor.appendChild(fragmento02);
