document.addEventListener("click", (event) => {
    if (event.target && event.target.id === "btnNao") {
        return;
    }

    const audio = document.getElementById("musica");
    if (audio) {
        audio.muted = false;
        audio.play().catch(() => {});
    }
}, { once: true });

const audioNao = new Audio("nao.mp3?v=1");
audioNao.preload = "auto";
audioNao.loop = true;

function vincularClique(id, handler) {
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.addEventListener("click", handler);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    vincularClique("btnSim", sim);
    vincularClique("btnNao", nao);
    vincularClique("btnTela3Sim", irFoto);
    vincularClique("btnTela3Nao", noFoto);
});

function mostrar(id) {
    ["tela1", "tela2", "tela3"].forEach(tela => {
        document.getElementById(tela).classList.add("escondido");
    });
    document.getElementById(id).classList.remove("escondido");
}


setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
}, 300);

function sim() {
    audioNao.pause();
    audioNao.currentTime = 0;

    const audio = document.getElementById("musica");
    if (audio) {
        audio.muted = false;
        audio.play().catch(() => {});
    }
    mostrar("tela2");
    escreverTexto();
}

function nao() {
    const audio = document.getElementById("musica");
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
        audio.muted = true;
    }

    audioNao.currentTime = 0;
    audioNao.play().catch(() => {});
    mostrar("tela3");
}

function noFoto() {
    audioNao.pause();
    audioNao.currentTime = 0;

    const audio = document.getElementById("musica");
    if (audio) {
        audio.muted = false;
        audio.play().catch(() => {});
    }
    mostrar("tela2");
    escreverTexto();
}

function irFoto() {
    window.location.href = "sua-foto.html";
}

function escreverTexto() {
    const elemento = document.getElementById("textoDigitado");
    const gif = document.getElementById("gifFinal");




 const texto = `Lorena, você é e sempre vai ser o amor da minha vida e nao quero q tu nunca esqueça disso.
Eu te amo mais do que tudo nesse mundo grta. Só quero q tu saiba q eu nunca vou deixar de te amar, cada segundo q passa o meu amor por vc só aumenta e eu n consigo explicar isso
eu só sei q eu necessito de vc, tu é uma grta incrivel, me salva todos os dias. mrm q meu dia seja horrivel eu tenho voce aq, infelizmente vc n ta aq do meu ladinho pra eu te beijar muitao 
mas eu sempre fico imaginando vc aq cmg. agradeço mto a Deus por ter te colocado na minha vida meu amor, as vezes nem acredito q uma grta q eu conheci em um jogo ia se tornar o amor da minha vida e eu amar tanto assim (serio amor eu te amo tanto q chega a doer)
eu to escrevendo isso aq so pensando em como eu queria q tu tivesse aq pra eu falar isso tudo pra vc e poder demonstrar o meu amor por vc. me perdoa n ter feito nenhum texto pra vc no nosso dia, mais de uma vez né.
eu te acho tao perfeita amor, o jeitinho q tu me trata e o teu jeitinho tbm, amo qnd tu começa a falar mto e n para mais, eu amo voce e sou completamente apaixonado por vc garota
jaja vamos fazer 2 anos juntinhos ne nenem, eu poderia ficar aq digitando o dia todo o quanto te amo e sou apaixonado por vc, mas tu quer mto q eu te mando isso logo ne amor.
entao é isso meu amor, eu so fiz isso pra mostrar o nivel q eu sou apaixonado por vc e n quero q vc pensa o contrario independente de tudo q aconteça com nós dois nenem.
EU TE ALMO, MINHA PRINCESINHA, UM DIA EU QUERO Q VC LEMBRE DISSO E CONTA PRA AURORA TA

Vamo casar logo e ter nossos filhinhos, meu momo ❤️`;

    let i = 0;

    function digitar() {
        elemento.innerHTML = texto.slice(0, i).replace(/\n/g, "<br>");
        i++;

        if (i <= texto.length) {
            setTimeout(digitar, 40);
        } else {
            gif.style.display = "block";
        }
    }

    digitar();
}
