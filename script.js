// Configurar a data de início do namoro (ano, mês-1, dia, hora, minuto, segundo)
const dataInicioNamoro = new Date(2025, 0, 5, 0, 0, 0); // 05 de janeiro de 2025, 00:00:00

// Atualiza o contador de tempo
function atualizarContador() {
    const agora = new Date();
    let diferenca = agora - dataInicioNamoro; // Diferença em milissegundos

    const segundos = Math.floor(diferenca / 1000) % 60;
    const minutos = Math.floor(diferenca / (1000 * 60)) % 60;
    const horas = Math.floor(diferenca / (1000 * 60 * 60)) % 24;
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    // Atualiza o contador no HTML
    const contadorElemento = document.getElementById('contador');
    contadorElemento.textContent = `${dias} dias, ${horas}h ${minutos}m ${segundos}s`;
}

// Atualiza o contador a cada segundo
setInterval(atualizarContador, 1000);
atualizarContador(); // Chamada inicial

// Função para animar o coração partindo ao meio
function abrirCoracao() {
    const coracao = document.querySelector('.coracao-externo');
    const mensagem = document.getElementById('coracao-interno');

    if (!coracao.classList.contains('aberto')) {
        coracao.classList.add('aberto');
        setTimeout(() => {
            mensagem.style.display = 'block';
        }, 500); // Mostra a mensagem após a animação
    } else {
        mensagem.style.display = 'none';
        coracao.classList.remove('aberto');
    }
}