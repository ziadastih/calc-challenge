const title = document.querySelector(".title");
const themesText = document.querySelector(".themes");
const theme2 = document.getElementById("two");
const theme1 = document.getElementById("one");
const theme3 = document.getElementById("three");
const animationContainer = document.querySelector(".animation-container");
const circle = document.querySelector(".circle");

const screen = document.querySelector(".screen");
const calcBg = document.querySelector(".calculator-grid");
const grids = document.querySelectorAll(".grid");
const deleteBtn = document.getElementById("del");
const resetBtn = document.getElementById("reset");
const equalBtn = document.getElementById("equal");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");

let calcData = [];

// =======LOAD PAGE WITH SCREEN VALUE ''
window.addEventListener("DOMContentLoaded", function () {
  screen.textContent = "";
});

// =======THEME SWITCH==========
theme1.addEventListener("click", function () {
  document.body.style.background = `hsl(222, 26%, 31%)`;
  switchTheme("");
  removeTheme(3);
  removeTheme(2);
});
theme2.addEventListener("click", function () {
  document.body.style.background = `hsl(0, 0%, 90%)`;
  switchTheme(2);
  removeTheme(3);
  removeTheme(1);
});

theme3.addEventListener("click", function () {
  document.body.style.background = `hsl(268, 75%, 9%)`;
  switchTheme(3);
  removeTheme(1);
  removeTheme(2);
});

// ===========calc function==========
grids.forEach(function (grid) {
  grid.addEventListener("click", function () {
    let number = parseInt(grid.textContent);
    if (number) {
      screen.textContent += number;

      if (screen.textContent.length > 15) {
        alert("can't add more than 15 digits!");
      }
    } else if (!number && grid.id === "decimal") {
      screen.textContent += ".";
    } else if (grid.id === "zero") {
      screen.textContent += 0;
    }
  });
});

plusBtn.addEventListener("click", function () {
  calcthroughBtn(plusBtn);

  console.log(calcData);
});

minusBtn.addEventListener("click", function () {
  calcthroughBtn(minusBtn);

  console.log(calcData);
});

divideBtn.addEventListener("click", function () {
  calcthroughBtn(divideBtn);

  console.log(calcData);
});
multiplyBtn.addEventListener("click", function () {
  calcthroughBtn(multiplyBtn);

  console.log(calcData);
});

resetBtn.addEventListener("click", function () {
  calcData = [];
  screen.textContent = "";
  console.log(calcData);
});
equalBtn.addEventListener("click", function () {
  calcData.push(screen.textContent);
  calculateArr();
  screen.textContent = calcData[0];
  calcData = [];

  console.log(calcData);
});
deleteBtn.addEventListener("click", function () {
  let str = screen.textContent;
  screen.textContent = str.slice(0, str.length - 1);
});

// ======GLOBAL FUNCTION===========
function switchTheme(num) {
  title.classList.add(`title${num}`);
  themesText.classList.add(`themes${num}`);
  animationContainer.classList.add(`animation-container${num}`);
  circle.classList.add(`circle${num}`);
  calcBg.classList.add(`calculator-grid${num}`);
  grids.forEach(function (grid) {
    grid.classList.add(`grid${num}`);
  });
  equalBtn.classList.add(`equal${num}`);
  resetBtn.classList.add(`reset${num}`);
  deleteBtn.classList.add(`del${num}`);
  screen.classList.add(`screen${num}`);
}

function removeTheme(num) {
  title.classList.remove(`title${num}`);
  themesText.classList.remove(`themes${num}`);
  animationContainer.classList.remove(`animation-container${num}`);
  circle.classList.remove(`circle${num}`);
  calcBg.classList.remove(`calculator-grid${num}`);
  grids.forEach(function (grid) {
    grid.classList.remove(`grid${num}`);
  });
  equalBtn.classList.remove(`equal${num}`);
  resetBtn.classList.remove(`reset${num}`);
  deleteBtn.classList.remove(`del${num}`);
  screen.classList.remove(`screen${num}`);
}

function calculateArr() {
  let num1 = parseFloat(calcData[0]);
  let num2 = parseFloat(calcData[2]);
  if (calcData[1] == "plus") {
    currentTotal = num1 + num2;
    calcData[0] = currentTotal;
    calcData.splice(calcData.length - 2, 1);
    calcData.splice(1, 1);
  } else if (calcData[1] == "minus") {
    currentTotal = num1 - num2;
    calcData[0] = currentTotal;
    calcData.splice(calcData.length - 2, 1);
    calcData.splice(1, 1);
  } else if (calcData[1] == "multiply") {
    currentTotal = num1 * num2;
    calcData[0] = currentTotal;
    calcData.splice(calcData.length - 2, 1);
    calcData.splice(1, 1);
  } else if (calcData[1] == "divide") {
    currentTotal = num1 / num2;
    calcData[0] = currentTotal;
    calcData.splice(calcData.length - 2, 1);
    calcData.splice(1, 1);
  }
}

function calcthroughBtn(btn) {
  if (calcData.length === 0) {
    calcData.push(screen.textContent);
    screen.textContent = "";
    calcData.push(btn.id);
  } else {
    calcData.push(screen.textContent);
    screen.textContent = "";
    calcData.push(btn.id);
    calculateArr();
  }
}

function alertError() {
  if (screen.textContent === "") {
    screen.textContent = `error`;
  }
}
