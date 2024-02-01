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

// let spinCount = 4; // Initial spin count

// function randomNum() {
//   var prizeNum = Math.random() * 8;
//   prizeNum = Math.floor(prizeNum);
//   console.log(prizeNum);
//   return prizeNum;
// }

// // function removeClass() {
// //   prize = randomNum();

// //   document.getElementById("spinner").classList.remove("spin");
// //   document.getElementById("spin-btn").classList.remove("disabled");

// //   document.getElementById("spinner").style.transform =
// //     "rotate(" + prize * 30 + "deg)";

// //   $(".pop-up-content").fadeIn();

// //   setTimeout(function () {
// //     document.getElementById("spin-btn").disabled = false;
// //     activeBtn = false;
// //   }, 2000);

// //   prizeText = prizes[prize].msg;

// //   document.getElementsByClassName("pop-up-para")[0].innerHTML = prizeText;
// //   $(".pop-up").fadeIn();
// //   document.getElementById("overlays").style.visibility = "hidden";
// // }


// // function removeClass() {
// //   const prize = randomNum();

// //   document.getElementById("spinner").classList.remove("spin");
// //   document.getElementById("spin-btn").classList.remove("disabled");

// //   document.getElementById("spinner").style.transform =
// //     "rotate(" + prize * 30 + "deg)";

// //   document.getElementById("overlays").style.visibility = "visible";
// //   document.getElementById("modal-wrapper").style.visibility = "visible";

// //   setTimeout(function () {
// //     document.getElementById("spin-btn").disabled = false;
// //     activeBtn = false;
// //   }, 2000);

// //   const prizeText = prizes[prize].msg;

// //   document.getElementsByClassName("pop-up-para")[0].innerHTML = prizeText;

// //   // Decrease spin count if the message is "SEM SORTE"
// //   if (prizeText === "SEM SORTE :( TENTE NOVAMENTE") {
// //     spinCount--;
// //     console.log("Spin count: " + spinCount);

// //     // You can add additional logic here when spinCount reaches 0
// //     if (spinCount === 0) {
// //       alert("No more spins left!");
// //     }
// //   }
// // }


// // with bottom win 
// function removeClass() {
//   const prize = randomNum();

//   document.getElementById("spinner").classList.remove("spin");
//   document.getElementById("spin-btn").classList.remove("disabled");

//   document.getElementById("spinner").style.transform =
//     "rotate(" + prize * 30 + "deg)";

//   document.getElementById("overlays").style.visibility = "visible";
//   document.getElementById("modal-wrapper").style.visibility = "visible";

//   const prizeText = prizes[prize].msg;

//   document.getElementsByClassName("pop-up-para")[0].innerHTML = prizeText;

//   // Decrease spin count if the message is "SEM SORTE"
//   if (prizeText === "SEM SORTE :( TENTE NOVAMENTE") {
//     spinCount--;

//     // You can add additional logic here when spinCount reaches 0
//     if (spinCount === 0) {
//       alert("No more spins left!");
//     }
//   } else if (prizeText === "BÔNUS DE ATÉ R$ 1888") {
//     // Display congrats message
//     document.getElementsByClassName("pop-up-para")[0].innerHTML = "Parabéns! Você ganhou um bônus de até R$ 1888.";
//     // Change button text to "Close"
//     document.querySelector("#modal-wrapper button").innerHTML = "Close";
//   }
// }
// // with bottom win  end

// function closeModal() {
//   document.getElementById("overlays").style.visibility = "hidden";
//   document.getElementById("modal-wrapper").style.visibility = "hidden";
// }

// // function spinLeft() {
// //   // Adjust the rotation for spinning left
// //   document.getElementById("spinner").style.transform =
// //     "rotate(" + (spinCount * 30) + "deg)";

// //   // Update spin count
// //   spinCount--;

// //   console.log("Spin count: " + spinCount);

// //   // You can add additional logic here when spinCount reaches 0
// //   if (spinCount === 0) {
// //     alert("No more spins left!");
// //   }
// // }

// function spin() {
//   activeBtn = true;
//   document.getElementById("spinner").classList.add("spin");
//   document.getElementById("spin-btn").disabled = true;
//   setTimeout(removeClass, 5000);
// }
// activeBtn = false;
// function spin() {
//   let spinCount = 3;
//   activeBtn = true;
//   document.getElementById("spinner").classList.add("spin");
//   document.getElementById("spin-btn").disabled = true;
//   setTimeout(removeClass, 5000);
  
// }

// document.addEventListener("keydown", (event) => {
//   console.log(event);

//   if (event.key === " " && activeBtn === false) {
//     $("#spin-btn").trigger("click");
//   }
// });


function randomNum() {
  var prizeNum = Math.random() * 8;
  prizeNum = Math.floor(prizeNum);
  console.log(prizeNum);
  return prizeNum;
}

// function removeClass() {
//   prize = randomNum();

//   document.getElementById("spinner").classList.remove("spin");
//   document.getElementById("spin-btn").classList.remove("disabled");

//   document.getElementById("spinner").style.transform =
//     "rotate(" + prize * 30 + "deg)";

//   $(".pop-up-content").fadeIn();

//   setTimeout(function () {
//     document.getElementById("spin-btn").disabled = false;
//     activeBtn = false;
//   }, 2000);

//   prizeText = prizes[prize].msg;

//   document.getElementsByClassName("pop-up-para")[0].innerHTML = prizeText;
//   $(".pop-up").fadeIn();
//   document.getElementById("overlays").style.visibility = "hidden";
// }


function removeClass() {
  const prize = randomNum();

  document.getElementById("spinner").classList.remove("spin");
  document.getElementById("spin-btn").classList.remove("disabled");

  document.getElementById("spinner").style.transform =
    "rotate(" + prize * 30 + "deg)";

  document.getElementById("overlays").style.visibility = "visible";
  document.getElementById("modal-wrapper").style.visibility = "visible";

  setTimeout(function () {
    document.getElementById("spin-btn").disabled = false;
    activeBtn = false;
  }, 2000);

  const prizeText = prizes[prize].msg;

  document.getElementsByClassName("pop-up-para")[0].innerHTML = prizeText;
}

activeBtn = false;
function spin() {
  let spinCount = 3;
  activeBtn = true;
  document.getElementById("spinner").classList.add("spin");
  document.getElementById("spin-btn").disabled = true;
  setTimeout(removeClass, 5000);
  
}

document.addEventListener("keydown", (event) => {
  console.log(event);

  if (event.key === " " && activeBtn === false) {
    $("#spin-btn").trigger("click");
  }
});
