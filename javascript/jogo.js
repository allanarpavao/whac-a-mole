/** variaveis **/
var acertos = 0;
var toupeirasPerdidas = 0;
var marteladasErradas = 0;
var tempoIntervaloToupeira = 5000;
var janelaToupeiraExposta = 2000;
var timerToupeiraForaBuraco = null;
var intervaloJogo = null;


onload = function () {
    document.getElementById('start').addEventListener('click', start);
    document.getElementById('idGramado').addEventListener('mousedown', marteloBaixo);
    document.getElementById('idGramado').addEventListener('mouseup', marteloCima);
    document.getElementById('buraco0').addEventListener('click', martelada);
    document.getElementById('buraco1').addEventListener('click', martelada);
    document.getElementById('buraco2').addEventListener('click', martelada);
    document.getElementById('buraco3').addEventListener('click', martelada);
    document.getElementById('buraco4').addEventListener('click', martelada);
};

/**
 * Sobe uma toupeira
 * Remove o evento do botão start
 */

function start() {
    var botaoStart = document.getElementById('start');
    var botaoStop = document.getElementById('stop');
    botaoStart.removeEventListener('click', start);
    botaoStart.disabled = true;
    botaoStart.style.display = 'none';
    botaoStop.style.display = 'inline-block';
    botaoStop.addEventListener('click', stop);
    sobeToupeira();
    if (intervaloJogo !== null) clearInterval(intervaloJogo);
    intervaloJogo = setInterval(sobeToupeira, tempoIntervaloToupeira);
    // Remove o setTimeout de sobeToupeira() e usa setInterval
}

function sobeToupeira() {
    var buraco = Math.floor(Math.random() * 5);
    var objBuraco = document.getElementById('buraco' + buraco);
    objBuraco.src = 'images/hole-mole.png';
    timerToupeiraForaBuraco = setTimeout(tiraToupeira, janelaToupeiraExposta, buraco)
    /* só deve ativar a funcao tiraToupeira quando o jogador não acertar a toupeira */
}

function tiraToupeira(buraco) {
    var objBuraco = document.getElementById('buraco' + buraco);
    objBuraco.src = 'images/hole.png';
    toupeirasPerdidas++;
    mostraPontuacao();
}

function mostraPontuacao() {
    mostraPontuacaoDe('acertos', acertos);
    mostraPontuacaoDe('perdidos', toupeirasPerdidas);
    mostraPontuacaoDe('errados', marteladasErradas);
    mostraPontuacaoDe('saldo', Math.max(acertos - toupeirasPerdidas - marteladasErradas, 0));
}

function mostraPontuacaoDe(display, valor) {
    let objCentena = document.getElementById(display).firstChild;
    let objDezena = objCentena.nextSibling;
    let objUnidade = objDezena.nextSibling;

    let centena = parseInt(valor/100);
    let dezena = parseInt((valor/10)%10);
    let unidade = (valor % 10);

    // muda a imagem e o valor do atributo para ledor de tela
    objCentena.src = 'images/caractere_' + centena + '.gif';
    objCentena.alt = centena;
    objDezena.src = 'images/caractere_' + dezena + '.gif';
    objDezena.alt = dezena;
    objUnidade.src = 'images/caractere_' + unidade + '.gif';
    objUnidade.alt = unidade;
}

function marteloBaixo() {
    document.getElementById('idGramado').style.cursor = 'url(images/hammerDown.png), default'
}

function marteloCima() {
    document.getElementById('idGramado').style.cursor = 'url(images/hammer.png), default'
}

function martelada(evento) {
    if (evento.target.src.includes('hole-mole')){
        // acertou
        acertos++;
        evento.target.src = "images/hole.png";
        clearTimeout(timerToupeiraForaBuraco);
    }
    else {
        // errou
        marteladasErradas++;
    }
    mostraPontuacao();
}

function baixaTodasToupeiras() {
    for (let i = 0; i < 5; i++) {
        let buraco = document.getElementById('buraco' + i);
        if (buraco.src.includes('hole-mole')) {
            buraco.src = 'images/hole.png';
        }
    }
    // Limpa o timer da toupeira atual, se houver
    clearTimeout(timerToupeiraForaBuraco);
    timerToupeiraForaBuraco = null;
}

function stop() {
    var botaoStart = document.getElementById('start');
    var botaoStop = document.getElementById('stop');
    botaoStart.disabled = false;
    botaoStart.style.display = 'inline-block'; // Mostra o Start
    botaoStop.style.display = 'none'; // Esconde o Stop
    botaoStart.addEventListener('click', start);
    botaoStop.removeEventListener('click', stop);
    clearInterval(intervaloJogo);
    intervaloJogo = null;
    baixaTodasToupeiras();
}
