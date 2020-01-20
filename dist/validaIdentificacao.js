// Login
const formLogin = document.getElementById("form_login");

let erroIdentificacao = true;

formLogin.addEventListener("submit", function(event) {
  event.preventDefault();

  if (erroIdentificacao) {
    validaLogin();
  }

  setTimeout(() => {
    formLogin.reset();
  }, 500);
});

formLogin.addEventListener("focusout", () => {
  validaLogin();
});

function validaLogin() {
  validaEmail("login");
  validaSenha();
}

// Cadastro
const formCadastro = document.getElementById("form_cadastro");

formCadastro.addEventListener("submit", function(event) {
  event.preventDefault();

  if (erroIdentificacao) {
    validaCadastro();
  }

  setTimeout(() => {
    formCadastro.reset();
  }, 500);
});

formCadastro.addEventListener("focusout", () => {
  validaCadastro();
});

function validaCadastro() {
  validaNome();
  validaEmail("cadastro");
}
