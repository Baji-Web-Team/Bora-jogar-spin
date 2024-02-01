const prizes = [
  {
    id: 0,
    msg: "BÔNUS DE ATÉ R$ 1888",
  },
  {
    id: 1,
    msg: "SEM SORTE :( TENTE NOVAMENTE",
  },
  {
    id: 2,
    msg: "SEM SORTE :( TENTE NOVAMENTE",
  },
  {
    id: 3,
    msg: "BÔNUS DE ATÉ R$ 1888",
  },
  {
    id: 4,
    msg: "SEM SORTE :( TENTE NOVAMENTE",
  },
  {
    id: 5,
    msg: "SEM SORTE :( TENTE NOVAMENTE",
  },
  {
    id: 6,
    msg: "BÔNUS DE ATÉ R$ 1888",
  },
  {
    id: 7,
    msg: "SEM SORTE :( TENTE NOVAMENTE",
  },
];

// ------------------------
let spinCount = 3; // Initial spin count

const audioPlay = new Audio("/assets/audio/wheel-audio.mp3");
const audioWin = new Audio("/assets/audio/win.mp3");
const audioLose = new Audio("/assets/audio/lose.mp3");
function randomNum() {
  var prizeNum = Math.random() * 8;
  prizeNum = Math.floor(prizeNum);
  // console.log(prizeNum);
  return prizeNum;
}

function removeClass() {
  const prize = randomNum();

  document.getElementById("spinner").classList.remove("spin");
  document.getElementById("spin-btn").classList.remove("disabled");

  document.getElementById("spinner").style.transform =
    "rotate(" + prize * 30 + "deg)";

  setTimeout(function () {
    document.getElementById("overlays").style.visibility = "visible";
    document.getElementById("modal-wrapper").style.visibility = "visible";

    const prizeText = prizes[prize].msg;

    document.getElementsByClassName("pop-up-para")[0].innerHTML = prizeText;

    if (prizeText === "SEM SORTE :( TENTE NOVAMENTE") {
      spinCount--;
      audioLose.play();
      document.getElementsByClassName("pop-up-para")[0].innerHTML = `
          <h2 class="modal-title">INFELIZMENTE, VOCÊ NÃO TEVE
          SORTE EM SUA PRIMEIRA RODADA.</h2> 

          <p class="modal-title-desc"> VOCÊ AINDA TEM MAIS ${spinCount} RODADAS GRATÍS</p>
          `;
      document.getElementById("congrats-btn").innerHTML = "Gire novamente!";
      document.getElementById("congrats-btn").onclick = spinAgain;

      if (spinCount === 0) {
        alert("No more spins left!");
        closeModal();
        document.getElementById("spin-btn").disabled = true;
        document.getElementById("spin-btn").style.cursor = "not-allowed";
      }
    } else if (prizeText === "BÔNUS DE ATÉ R$ 1888") {
      audioWin.play();
      document.getElementsByClassName("pop-up-para")[0].innerHTML = `
          <h1 class="modal-title">Parabéns</h1> 
          <p>VOCÊ ACABOU DE GANHAR SEU BÔNUS DE R$ 1888! </p>
          <p class="wheel-text2"> CLIQUE ABAIXO PARA RESGATAR</p>
          `;
      document.getElementById("congrats-btn").innerHTML = "Reivindicar Bônus";
      document.getElementById("congrats-btn").onclick = claimBonus;
    }
  }, 1500);
}

function closeModal() {
  document.getElementById("overlays").style.visibility = "hidden";
  document.getElementById("modal-wrapper").style.visibility = "hidden";
  document.getElementById("spin-btn").disabled = false;
}

function spin() {
  activeBtn = true;
  audioPlay.play();
  document.getElementById("spinner").classList.add("spin");
  document.getElementById("spin-btn").disabled = true;
  setTimeout(removeClass, 5000);
}

function spinAgain() {
  closeModal();
  spin();
  audioPlay.play();

}

function claimBonus() {
  window.open("https://sshortly.net/T7FIU9", "_blank");
}

document.addEventListener("keydown", (event) => {
  console.log(event);

  if (event.key === " " && activeBtn === false) {
    spin();
  }
});
