// Função para calcular o tempo de namoro
function calcularTempoNamoro(dataInicio) {
    const agora = new Date();
    const diferenca = agora - dataInicio; // Diferença em milissegundos

    // Converter a diferença para dias, meses e anos
    const segundos = Math.floor(diferenca / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);
    const meses = Math.floor(dias / 30);
    const anos = Math.floor(meses / 12);

    // Ajustar meses e dias restantes
    const mesesRestantes = meses % 12;
    const diasRestantes = dias % 30;

    // Montar o texto do contador
    let textoContador = '';
    if (anos > 0) textoContador += `${anos} ano${anos > 1 ? 's' : ''}, `;
    if (mesesRestantes > 0) textoContador += `${mesesRestantes} mes${mesesRestantes > 1 ? 'es' : ''}, `;
    textoContador += `${diasRestantes} dia${diasRestantes > 1 ? 's' : ''}`;

    return textoContador;
}

// Função para abrir o coração
function abrirCoracao() {
    const coracaoInterno = document.getElementById('coracao-interno');
    if (coracaoInterno.style.display === 'none' || coracaoInterno.style.display === '') {
        coracaoInterno.style.display = 'block';
    } else {
        coracaoInterno.style.display = 'none';
    }
}

// Configurar a data de início do namoro (ano, mês-1, dia)
const dataInicioNamoro = new Date(2025, 0, 5); // 05 de janeiro de 2025

// Atualizar o contador
const contadorElemento = document.getElementById('contador');
contadorElemento.textContent = calcularTempoNamoro(dataInicioNamoro);

// Atualizar o contador a cada minuto
setInterval(() => {
    contadorElemento.textContent = calcularTempoNamoro(dataInicioNamoro);
}, 60000); // 60000 milissegundos = 1 minuto
