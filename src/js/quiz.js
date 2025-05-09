document.addEventListener("DOMContentLoaded", () => {
  const pergunta = document.getElementById("pergunta");
  const resposta = document.getElementById("resposta");
  const proximaPergunta = document.getElementById("proximo");
  const mensagem = document.getElementById("mesage");
  const containerPerguntas = document.getElementById("container-perguntas");
  const containerResultado = document.getElementById("container-resultado");
  const listaResultado = document.getElementById("lista-resultado");
  const reiniciarBotao = document.getElementById("inicio-btn");

  const questoes = [
    "Qual linguage de programação você utiliza?",
    "Descreva essa linguagem",
    "De que ano surgiu a linguagem utilizada?",
    "Você se considera um programador sênior?",
  ];

  let perguntas = 0;
  const respostas = [];

  function mostrarPergunta() {
    if (perguntas < questoes.length) {
      pergunta.textContent = questoes[pergunta];
      resposta.value = "";
      mensagem.textContent = "";
    } else {
      mostrarResultado();
    }
  }

  function mostrarResultado() {
    containerPerguntas.classList.add("hidden");
    containerResultado.classList.remove("hidden");
    listaResultado.innerHTML = "";

    questoes.forEach((questoes, index) => {
      const listaItem = document.createElement("li");
      listaItem.innerHTML = `<strong>${questoes}</strong><br>
        Sua Resposta: <span>${respostas[index]}</span>`;
      listaResultado.appendChild(listaItem);
    });
  }

  function nextQuestao(){
    const respostaAtual = resposta.value.trim()
    if(respostaAtual === ''){
        mensagem.textContent = 'Por favor, digit uma resposta'
        return
    }
    respostas.push(respostaAtual)
    perguntas++
    mostrarPergunta()
  }

  function reiniciarQuiz(){
    perguntas = 0
    respostas, length = 0 
    containerResultado.classList.add('hidden')
    containerPerguntas.classList.remove('hidden')
    mostrarPergunta()
  }
  proximaPergunta.addEventListener('click', nextQuestao)
  reiniciarBotao.addEventListener('click', reiniciarQuiz)
  mostrarPergunta()
});
