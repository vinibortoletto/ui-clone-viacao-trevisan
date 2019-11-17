function validaNome() {
  const nome = document.getElementById("nome");
  const nomeErro = document.getElementById("nome_erro");

  if (nome.value === "" || nome.value === null) {
    nomeErro.innerText = "Preecha seu nome";
    nome.classList.add("input_erro");
    erros = true;
  } else if (nome.value.length <= 2) {
    nomeErro.innerText = "Nome deve conter mais que duas letras";
    nome.classList.add("input_erro");
  } else {
    nomeErro.innerText = "";
    nome.classList.remove("input_erro");
    erros = false;
  }

  return;
}
