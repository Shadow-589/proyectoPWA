let main;
let modalPost;
let addPost;
let btnShowPost;
let btnCancelPost;
let install;

let deferredPrompt; // Guardará el evento de instalación

window.addEventListener("load", async () => {
  main = document.querySelector("#main");
  modalPost = document.getElementById("modal-post-section");
  addPost = document.getElementById("btn-upload-post");
  btnShowPost = document.getElementById("btn-post-submit");
  btnCancelPost = document.getElementById("btn-post-cancel");
  install = document.getElementById("banner-install");

  addPost.addEventListener("click", ShowPostModal);
  btnCancelPost.addEventListener("click", ClousePostModal);
  install.addEventListener("click", installApp);

  // Registrar service worker
  if ("serviceWorker" in navigator) {
    const response = await navigator.serviceWorker.register("sw.js");
    if (response) {
      console.log("Service worker registrado");
    }
  }
});

// Captura el evento antes de instalación
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault(); // Evita que el navegador muestre su banner
  deferredPrompt = e; // Lo guardamos para usarlo después
  install.style.display = "block"; // Mostramos el botón de instalar
});

const ShowPostModal = () => {
  main.style.display = "none";
  modalPost.style.display = "block";
  setTimeout(() => {
    modalPost.style.transform = "translateY(0)";
  }, 1);
};

const ClousePostModal = () => {
  main.style.display = "block";
  modalPost.style.transform = "translateY(100vh)";
};

const installApp = async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt(); // Lanza el diálogo nativo
    const { outcome } = await deferredPrompt.userChoice; // Espera la respuesta
    console.log("El usuario eligió:", outcome);
    deferredPrompt = null; // Se limpia porque solo puede usarse una vez
    install.style.display = "none"; // Ocultamos el botón
  }
};
