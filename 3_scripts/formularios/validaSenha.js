function validaSenha() {
  const senha = document.getElementById("senha");
  const senhaErro = document.getElementById("senha_erro");

  if (senha.value.length < 8 || senha.value === "" || senha.value === null) {
    senhaErro.innerText = "Senha inválida";
    senha.classList.add("input_erro");
    erros = true;
  } else {
    senhaErro.innerText = "";
    senha.classList.remove("input_erro");
    erros = false;
  }

  return;
}
