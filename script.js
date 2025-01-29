// Função para calcular o tempo de namoro
function calcularTempoNamoro(dataInicio) {
    const agora = new Date();
    const diferenca = agora - dataInicio; // Diferença em milissegundos

    const segundos = Math.floor(diferenca / 1000) % 60;
    const minutos = Math.floor(diferenca / (1000 * 60)) % 60;
    const horas = Math.floor(diferenca / (1000 * 60 * 60)) % 24;
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    // Atualiza o contador no HTML
    const contadorElemento = document.getElementById('contador');
    contadorElemento.textContent = `${dias} dias, ${horas}h ${minutos}m ${segundos}s`;
}

// Atualiza o contador a cada segundo
setInterval(() => {
    const dataInicioNamoro = new Date(2025, 0, 5, 0, 0, 0); // 05 de janeiro de 2025, 00:00:00
    calcularTempoNamoro(dataInicioNamoro);
}, 1000);

// Função para animar o coração partindo ao meio
function abrirCoracao() {
    const coracao = document.querySelector('.coracao');
    coracao.classList.toggle('aberto'); // Alterna entre aberto e fechado
}