document.addEventListener("DOMContentLoaded", function () {
  const active = () => {
    const buttons = document.querySelectorAll(".tip-buttons button");
    const total = parseInt(document.querySelector("#total").value);
    const people = parseInt(document.querySelector("#people").value);

    if (!isNaN(total) && total > 0 && !isNaN(people) && people > 0) {
      buttons.forEach((button) => {
        button.style.backgroundColor = "#663060";
        button.style.pointerEvents = "all";
        button.style.border = "5px inset #663060";
      });
    } else {
      buttons.forEach((button) => {
        button.style.backgroundColor = "rgba(102, 48, 96, 0.4)";
        button.style.pointerEvents = "none";
        button.style.border = "none";
      });
    }
  };

  document.querySelector("#total").addEventListener("input", active);
  document.querySelector("#people").addEventListener("input", active);
});

const addTip = (e, tip) => {
  e.preventDefault();

  document.querySelector("#tipPercent").value = tip;
};

const calculate = () => {
  let total = parseInt(document.querySelector("#total").value);
  let people = parseInt(document.querySelector("#people").value);
  let tipInput = document.querySelector("#tipPercent");

  if (isNaN(total) || isNaN(people) || people <= 0) {
    alert("enter the appropriate values");
    return;
  }

  if (tipInput.value !== "") {
    let calcPercent = parseInt(tipInput.value);
    const totalPrice = total + (calcPercent * total) / 100;
    document.querySelector("#result span").innerHTML = (
      totalPrice / people
    ).toFixed(2);
  } else {
    const resultPrice = total / people;
    document.querySelector("#result span").innerHTML = resultPrice.toFixed(2);
  }
};

const split = document
  .querySelector("#splitBtn")
  .addEventListener("click", (e) => {
    e.preventDefault();
    calculate();
  });

const reset = () => {
  document.querySelector(".insert").reset();
  document.querySelector("#result span").innerHTML = "0";
  const buttons = document.querySelectorAll(".tip-buttons button");

  buttons.forEach((button) => {
    button.style.backgroundColor = "rgba(102, 48, 96, 0.4)";
    button.style.pointerEvents = "none";
    button.style.border = "none";
  });

  totalInput.value = "";
  peopleInput.value = "";
};

document.querySelector("#resetBtn").addEventListener("click", (e) => {
  e.preventDefault();
  reset();
});
