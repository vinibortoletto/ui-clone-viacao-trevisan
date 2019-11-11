let erros = true;
const btnLogin = document.getElementById("btn_login");

// Login -----------------------------------------------------------------
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

function validaEmailLogin() {
  const loginEmail = document.getElementById("login_email");
  const loginEmailErro = document.getElementById("loginEmail_erro");

  const regexEmail = /\S+@\S+\.\S+/;

  if (
    loginEmail.value === "" ||
    loginEmail.value === null ||
    !regexEmail.test(loginEmail.value)
  ) {
    loginEmailErro.innerText = "Preencha seu email corretamente";
    loginEmail.classList.add("input_erro");
    erros = true;
  } else {
    loginEmailErro.innerText = "";
    loginEmail.classList.remove("input_erro");
    erros = false;
  }

  return;
}

function validaSenhaLogin() {
  const loginSenha = document.getElementById("login_password");
  const loginSenhaErro = document.getElementById("loginSenha_erro");

  if (
    loginSenha.value.length < 8 ||
    loginSenha.value === "" ||
    loginSenha.value === null
  ) {
    loginSenhaErro.innerText = "Senha inválida";
    loginSenha.classList.add("input_erro");
    erros = true;
  } else {
    loginSenhaErro.innerText = "";
    loginSenha.classList.remove("input_erro");
    erros = false;
  }

  return;
}

function validaLogin() {
  validaEmailLogin();
  validaSenhaLogin();
}

// Cadastro -----------------------------------------------------------------
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

function validaNomeCadastro() {
  const cadastroNome = document.getElementById("cadastro_nome");
  const cadastroNomeErro = document.getElementById("cadastroNome_erro");

  if (cadastroNome.value === "" || cadastroNome.value === null) {
    cadastroNomeErro.innerText = "Preecha seu nome";
    cadastroNome.classList.add("input_erro");
    erros = true;
  } else if (cadastroNome.value.length <= 2) {
    cadastroNomeErro.innerText = "Nome deve conter mais que duas letras";
  } else {
    cadastroNomeErro.innerText = "";
    cadastroNome.classList.remove("input_erro");
    erros = false;
  }

  return;
}

function validaEmailCadastro() {
  const cadastroEmail = document.getElementById("cadastro_email");
  const cadastroEmailErro = document.getElementById("cadastroEmail_erro");

  const regexEmail = /\S+@\S+\.\S+/;

  if (
    cadastroEmail.value === "" ||
    cadastroEmail.value === null ||
    !regexEmail.test(cadastroEmail.value)
  ) {
    cadastroEmailErro.innerText = "Preencha seu email corretamente";
    cadastroEmail.classList.add("input_erro");
    erros = true;
  } else {
    cadastroEmailErro.innerText = "";
    cadastroEmail.classList.remove("input_erro");
    erros = false;
  }

  return;
}

function validaCadastro() {
  validaNomeCadastro();
  validaEmailCadastro();
}
