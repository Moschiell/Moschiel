// Função para calcular o tempo de namoro
function calcularTempoNamoro(dataInicio) {
    const agora = new Date();
    const diferenca = agora - dataInicio;

    const segundos = Math.floor(diferenca / 1000) % 60;
    const minutos = Math.floor(diferenca / (1000 * 60)) % 60;
    const horas = Math.floor(diferenca / (1000 * 60 * 60)) % 24;
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    return `${dias} Dias ${horas} Horas ${minutos} Minutos ${segundos} Segundos`;
}

// Função para abrir o coração e exibir o balão de texto
function abrirCoracao() {
    const coracao = document.querySelector('.coracao-externo');
    const balao = document.getElementById('coracao-interno');

    coracao.classList.toggle('open');

    if (coracao.classList.contains('open')) {
        coracao.style.animation = 'none';
        balao.style.display = 'block';
        setTimeout(() => {
            balao.style.opacity = '1';
            digitarMensagemCoração();
        }, 100);
    } else {
        coracao.style.animation = 'bater 1s infinite';
        balao.style.opacity = '0';
        setTimeout(() => {
            balao.style.display = 'none';
        }, 500);
    }
}

// Configurar a data de início do namoro
const dataInicioNamoro = new Date(2025, 0, 5); // Certifique-se de que a data está correta

// Atualizar o contador
const contadorElemento = document.getElementById('contador');

function atualizarContador() {
    if (contadorElemento) {
        contadorElemento.textContent = calcularTempoNamoro(dataInicioNamoro);
    }
}

if (contadorElemento) {
    atualizarContador();
    setInterval(atualizarContador, 1000);
}

// Quiz do Nosso Amor
const perguntas = [
    {
        pergunta: "Onde foi nosso primeiro encontro?",
        respostas: ["No parque", "No shopping", "Em show"],
        respostaCorreta: 1,
    },
    {
        pergunta: "Onde nos conhecemos?",
        respostas: ["Instagram", "Jogos", "Aplicativo de relacionamento"],
        respostaCorreta: 2,
    },
    {
        pergunta: "Onde foi nosso primeiro beijo?",
        respostas: ["No shopping", "No parque", "Na sua casa"],
        respostaCorreta: 2,
    },
    {
        pergunta: "Quando eu te dei a aliança?",
        respostas: ["05/01", "12/01", "31/12"],
        respostaCorreta: 0,
    },
];

let perguntaAtual = 0;
const perguntaElemento = document.getElementById('pergunta');
const respostasElemento = document.getElementById('respostas');
const resultadoQuizElemento = document.getElementById('resultado-quiz');

function carregarPergunta() {
    const pergunta = perguntas[perguntaAtual];
    perguntaElemento.textContent = pergunta.pergunta;
    respostasElemento.innerHTML = '';

    pergunta.respostas.forEach((resposta, index) => {
        const botao = document.createElement('button');
        botao.textContent = resposta;
        botao.addEventListener('click', () => verificarResposta(index));
        respostasElemento.appendChild(botao);
    });
}

function verificarResposta(respostaIndex) {
    const pergunta = perguntas[perguntaAtual];
    if (respostaIndex === pergunta.respostaCorreta) {
        resultadoQuizElemento.textContent = "Resposta correta! 🎉";
        perguntaAtual++;
        if (perguntaAtual < perguntas.length) {
            setTimeout(carregarPergunta, 1500);
        } else {
            resultadoQuizElemento.textContent = "Fico feliz da senhora lembrar ❤️";
        }
    } else {
        resultadoQuizElemento.textContent = "Resposta errada. Tente novamente! 😢";
    }
}

carregarPergunta();

// Efeito de digitação no texto do coração
const textoCoraçãoElemento = document.getElementById('texto-coracao');
const textoCoração = "Amor da minha vida, eu amo muito você. Você foi a melhor coisa que me aconteceu, e cada momento ao seu lado é um presente. Sua presença ilumina meus dias, e seu sorriso é a minha paz. Eu sou imensamente grato por ter você comigo, compartilhando sonhos, risadas e amor. Nada no mundo se compara ao que sinto por você, e mal posso esperar para viver muitos outros momentos inesquecíveis ao seu lado. Você é e sempre será o meu grande amor.";

let indexCoração = 0;
let intervaloDigitação;

function digitarMensagemCoração() {
    textoCoraçãoElemento.textContent = '';
    indexCoração = 0;

    intervaloDigitação = setInterval(() => {
        if (indexCoração < textoCoração.length) {
            textoCoraçãoElemento.textContent += textoCoração.charAt(indexCoração);
            indexCoração++;
        } else {
            clearInterval(intervaloDigitação);
        }
    }, 75);
}

// Botão de surpresa
const botaoSurpresa = document.getElementById('botao-surpresa');
botaoSurpresa.addEventListener('click', () => {
    window.location.href = "https://aceita-ser-minha-noiva.netlify.app/";
});