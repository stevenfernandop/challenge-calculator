displayNumber = "";

const buttons = document.querySelectorAll("button");

buttons.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      let result = (displayNumber = eval(displayNumber));
      document.querySelector("input").value = displayNumber;
    } else if (e.target.innerHTML == "C") {
      displayNumber = "";
      document.querySelector("input").value = displayNumber;
    } else {
      // console.log(e.target);
      displayNumber = displayNumber + e.target.innerHTML;
      document.querySelector("input").value = displayNumber;
    }
  });
});

// function cekNaN(result) {
//   if (isNaN(result)) {
//     displayNumber = "NaN, Coba Lagi";
//     // console.log(isNaN);
//   } else {
//     displayNumber = "";
//   }
// }
// cekNaN();
