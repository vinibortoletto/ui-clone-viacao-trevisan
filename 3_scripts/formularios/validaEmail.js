function validaEmail(form) {
  let email;
  let emailErro;

  if (form === "login") {
    email = document.getElementById("email_login");
    emailErro = document.getElementById("emailLogin_erro");
  } else if (form === "cadastro") {
    email = document.getElementById("email_cadastro");
    emailErro = document.getElementById("emailCadastro_erro");
  } else if (form === "" || form === null) {
    email = document.getElementById("email");
    emailErro = document.getElementById("email_erro");
  }

  const regexEmail = /\S+@\S+\.\S+/;

  if (
    email.value === "" ||
    email.value === null ||
    !regexEmail.test(email.value)
  ) {
    emailErro.innerText = "Preencha seu email corretamente";
    email.classList.add("input_erro");
    erros = true;
  } else {
    emailErro.innerText = "";
    email.classList.remove("input_erro");
    erros = false;
  }

  return;
}
