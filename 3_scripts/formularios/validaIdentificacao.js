let erros = true;

// Login
const formLogin = document.getElementById("form_login");

formLogin.addEventListener("submit", e => {
  e.preventDefault();

  if (erros) {
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

formCadastro.addEventListener("submit", e => {
  e.preventDefault();

  if (erros) {
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
