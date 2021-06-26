setInterval(seletHora, 1000);

const horaPonteiro = document.querySelector("[data-hora-ponteiro]");
const minutoPonteiro = document.querySelector("[data-minuto-ponteiro]");
const segundoPonteiro = document.querySelector("[data-segundo-ponteiro]");

function seletHora(){
    const atualDate = new Date();
    const segundoDef = (atualDate.getSeconds() / 60);
    const minutoDef = ((segundoDef + atualDate.getMinutes()) / 60);
    const horaDef = ((minutoDef + atualDate.getHours()) / 12);
    definirRotacao(segundoPonteiro, segundoDef);
    definirRotacao(minutoPonteiro, minutoDef);
    definirRotacao(horaPonteiro, horaDef);
}

function definirRotacao(elementos, razaoRotacao){
    elementos.style.setProperty("--rotacao", razaoRotacao * 360);
}

seletHora();