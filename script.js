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
let indoParaVideo = false;
let digitacaoTimer = null;
let interromperDigitacao = false;

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
    const hearts = ["❤", "💕", "💖", "💗"];
    heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 22 + 16 + "px";
    heart.style.setProperty("--drift", (Math.random() * 80 - 40) + "px");
    heart.style.setProperty("--spin", (Math.random() * 120 - 60) + "deg");
    heart.style.animationDuration = (Math.random() * 2 + 2.8) + "s";
    heart.style.opacity = (Math.random() * 0.5 + 0.35).toFixed(2);

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 5200);
}, 300);

function sim() {
    interromperDigitacao = false;
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
    if (indoParaVideo) {
        return;
    }
    interromperDigitacao = false;

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
    if (indoParaVideo) {
        return;
    }
    indoParaVideo = true;

    audioNao.pause();
    audioNao.currentTime = 0;

    const texto = document.getElementById("textoDigitado");
    if (texto) {
        texto.innerHTML = "";
    }

    const gif = document.getElementById("gifFinal");
    if (gif) {
        gif.style.display = "none";
    }
    interromperDigitacao = true;
    if (digitacaoTimer) {
        clearTimeout(digitacaoTimer);
        digitacaoTimer = null;
    }

    window.location.replace("sua-foto.html");
}

function escreverTexto() {
    const elemento = document.getElementById("textoDigitado");
    const gif = document.getElementById("gifFinal");
    if (elemento) {
        elemento.innerHTML = "";
    }
    if (gif) {
        gif.style.display = "none";
    }




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
        if (interromperDigitacao || indoParaVideo) {
            return;
        }

        elemento.innerHTML = texto.slice(0, i).replace(/\n/g, "<br>");
        i++;

        if (i <= texto.length) {
            digitacaoTimer = setTimeout(digitar, 40);
        } else {
            gif.style.display = "block";
            digitacaoTimer = null;
        }
    }

    digitar();
}
