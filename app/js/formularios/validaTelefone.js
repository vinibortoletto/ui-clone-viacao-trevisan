$(document).ready(function() {
  $("#telefone").mask("(00) 0000-0000");
  $("#celular").mask("(00) 0 0000-0000");
});

function validaTelefone() {
  const telefone = document.getElementById("telefone");
  const telefoneErro = document.getElementById("telefone_erro");

  if (telefone.value === "" || telefone.value === null) {
    telefoneErro.innerText = "Preecha seu telefone";
    telefone.classList.add("input_erro");
    erros = true;
  } else if (telefone.value.length < 9) {
    telefoneErro.innerText = "Telefone deve seguir o formato (00) 0000-0000";
    telefone.classList.add("input_erro");
  } else {
    telefoneErro.innerText = "";
    telefone.classList.remove("input_erro");
    erros = false;
  }

  return;
}
