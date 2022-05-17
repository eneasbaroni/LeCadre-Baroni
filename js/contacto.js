const mensajeEnviado = () => {
  Toastify({
    text: "Mensaje Enviado",
    offset: {
      x: 40, 
      y: 50, 
    },
    style: {
      background: "#2f00ff",
    },
    duration: 3000,
  }).showToast();
};

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  mensajeEnviado();
  form.reset();
});
