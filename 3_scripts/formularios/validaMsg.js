function validaMsg() {
  const msg = document.getElementById("msg");
  const msgErro = document.getElementById("msg_erro");

  if (msg.value === "" || msg.value === null) {
    msgErro.innerText = "Preecha sua mensagem";
    msg.classList.add("input_erro");
    erros = true;
  } else if (msg.value.length < 10) {
    msgErro.innerText = "Elabore melhor sua mesagem";
    msg.classList.add("input_erro");
  } else {
    msgErro.innerText = "";
    msg.classList.remove("input_erro");
    erros = false;
  }

  return;
}
