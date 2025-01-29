// Função para calcular o tempo passado desde o início do namoro
function atualizarContagem() {
    const dataInicio = new Date('2024-12-29'); // Data de início do namoro
    const agora = new Date();
    const tempoPassado = agora - dataInicio; // Tempo em milissegundos

    const dias = Math.floor(tempoPassado / (1000 * 60 * 60 * 24)); // Calcula dias
    const horas = Math.floor((tempoPassado % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Calcula horas

    document.getElementById('contador').textContent = `${dias} dias e ${horas} horas`;
}

// Atualiza a contagem a cada hora
setInterval(atualizarContagem, 1000 * 60 * 60);
atualizarContagem(); // Chama a função imediatamente para exibir ao carregar