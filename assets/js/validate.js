const form = document.querySelector("#form");
const nameInput = document.querySelector("#nome");
const nameSpan = document.querySelector(".name-required");
const emailInput = document.querySelector("#email");
const emailSpan = document.querySelector(".email-required");
const assuntoInput = document.querySelector("#assunto");
const assuntoSpan = document.querySelector(".assunto-required");
const mensagemInput = document.querySelector("#mensagem");
const mensagemSpan = document.querySelector(".mensagem-required");
const botaoEnviar = document.querySelector("#botao_enviar");

let send = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkErros(nameInput, emailInput, assuntoInput, mensagemInput);

  if (send === 0) {
    form.submit();
  }
});

// Verifica erros do formulario
function checkErros(name, email, assunto, mensagem) {

  // Nome
  if (name.value < 3) {
    nameSpan.classList.add("active");
    return send = 1;
  } else {
    nameSpan.classList.remove("active");
  }

  // Email
  if (email.value < 3) {
    emailSpan.classList.add("active");
    return send = 1;
  } else {
    emailSpan.classList.remove("active");
  }

  // Assunto
  if (assunto.value < 3) {
    assuntoSpan.classList.add("active");
    return send = 1;
  } else {
    assuntoSpan.classList.remove("active");
  }

  // Mensagem
  if ((mensagem.value).length < 10) {
    mensagemSpan.classList.add("active");
    return send = 1;
  } else {
    mensagemSpan.classList.remove("active");
    console.log(mensagem.value);
  }

  send = 0;

  return send;
}