let main;
let modalPost;
let addPost;
let btnShowPost;
let btnCancelPost;
/**
 * CUANDO SE CARGE TODO NUESTRO DOM
 */
window.addEventListener("load", () => {
  main = document.querySelector("#main");
  modalPost = document.getElementById("modal-post-section");
  addPost = document.getElementById("btn-upload-post");
  btnShowPost = document.getElementById("btn-post-submit");
  btnCancelPost = document.getElementById("btn-post-cancel");
  addPost.addEventListener("click", ShowPostModal);
  btnCancelPost.addEventListener("click", ClousePostModal);
});
/**
 * FUNCIONES
 */
const ShowPostModal = () => {
  main.style.display = "none";
  modalPost.style.display = "block";
  setTimeout(() => {
    modalPost.style.transform = "translateY(0)";
    1;
  }, 1);
};
const ClousePostModal = () => {
  main.style.display = "block";
  modalPost.style.transform = "translateY(100vh)";
};
