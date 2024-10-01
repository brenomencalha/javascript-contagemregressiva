// Função para calcular o tempo até a data futura
function tempo_restante(data_futura) {
    const agora = new Date(); // data atual
    const diferenca = data_futura - agora;

    // Calcular o tempo em dias, horas, minutos e segundos
    const segundos_totais = Math.floor(diferenca/1000);
    const dias = Math.floor(segundos_totais / (60 * 60 *24));
    const horas = Math.floor((segundos_totais % (60 * 60 * 24)) / (60 * 60));
    const minutos = Math.floor ((segundos_totais % (60 * 60)) / 60);
    const segundos = Math.floor (segundos_totais % 60);

    return { dias, horas, minutos, segundos };
}

// Função para atualizar o temporizador
function temporizador() {
    const data_futura = new Date('2024-12-31T00:00:00');
    const resto = tempo_restante(data_futura)

    // Atualizar os elementos HTML
    document.getElementById('dias').innerText = `Dias: ${resto.dias}`;
    document.getElementById('horas').innerText = `Horas: ${resto.horas}`;
    document.getElementById('minutos').innerText = `Minutos: ${resto.minutos}`;
    document.getElementById('segundos').innerText = `Segundos: ${resto.segundos}`;
}

// Atualiza o temporizador a cada segundo
setInterval(temporizador, 1000);
