// Função para calcular o tempo de namoro
function calcularTempoNamoro(dataInicio) {
    const agora = new Date();
    const diferenca = agora - dataInicio; // Diferença em milissegundos

    // Converter para unidades de tempo
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

    coracao.classList.toggle('open'); // Alterna a classe do coração

    if (coracao.classList.contains('open')) {
        balao.style.display = 'block';
        setTimeout(() => {
            balao.style.opacity = '1'; // Faz o balão aparecer suavemente
        }, 100);
    } else {
        balao.style.opacity = '0';
        setTimeout(() => {
            balao.style.display = 'none';
        }, 500);
    }
}

// Configurar a data de início do namoro (ano, mês-1, dia)
const dataInicioNamoro = new Date(2025, 0, 5);

// Atualizar o contador
const contadorElemento = document.getElementById('contador');

function atualizarContador() {
    if (contadorElemento) {
        contadorElemento.textContent = calcularTempoNamoro(dataInicioNamoro);
    }
}

// Atualiza o contador imediatamente e a cada segundo
atualizarContador();
setInterval(atualizarContador, 1000);