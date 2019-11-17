let erros = true;
const form = document.getElementById("form");

form.addEventListener("submit", e => {
  e.preventDefault();

  if (erros) {
    validaForm();
  }

  setTimeout(() => {
    form.reset();
  }, 500);
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
