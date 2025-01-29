// Função para criar estrelas
function criarEstrelas() {
    const fundoEstrelado = document.getElementById('fundo-estrelado');
    const numeroEstrelas = 100; // Número de estrelas

    for (let i = 0; i < numeroEstrelas; i++) {
        const estrela = document.createElement('div');
        estrela.className = 'estrela';
        estrela.style.top = `${Math.random() * 100}%`;
        estrela.style.left = `${Math.random() * 100}%`;
        estrela.style.animationDelay = `${Math.random() * 5}s`;
        fundoEstrelado.appendChild(estrela);
    }
}

// Adiciona estrelas ao carregar a página
criarEstrelas();

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