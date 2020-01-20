const form = document.getElementById("form");
const msgEnviada = document.getElementById("msg_enviada");

let erros = true;

form.addEventListener("submit", e => {
  e.preventDefault();

  if (erros) {
    validaForm();
  } else {
    setTimeout(() => {
      msgEnviada.style.display = "flex";

      setTimeout(() => {
        msgEnviada.style.display = "none";
        form.reset();
      }, 2000);
    }, 2000);
  }
});

form.addEventListener("focusout", () => {
  validaForm();
});

function validaForm() {
  validaNome();
  validaEmail();
  validaTelefone();
  validaMsg();
}
