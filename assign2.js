let numButtons = document.querySelectorAll(`.num`);
let opButtons = document.querySelectorAll(`.operation`);
let input1 = document.querySelector("#input1");
let input2 = document.querySelector(`#input2`);
let output = document.querySelector(`#output`);
let calculator = document.querySelector(`.calculator`);

let flag = 0;
let sum;
let method;

numButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (flag === 0) {
      input1.value += button.innerText;
    } else if (flag === 1) {
      input2.value += button.innerText;
    }
  });
});

calculator.addEventListener("click", (e) => {
  console.log(e.target.classList[1]);
  if (e.target.id === "input1") {
    flag = 0;
  } else if (e.target.id === "input2") {
    flag = 1;
  } else if (e.target.classList[1] === "plus") {
    console.log("plus");
    method = add;
  } else if (e.target.classList[1] === "equal") {
    sum = `${method(+input1.value, +input2.value)}`;
    output.value = sum;
  } else if (e.target.class === "reset") {
    input1.reset();
    input2.reset();
    flag = 0;
  }
});

const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = () => {};

const multiply = () => {};

const divide = () => {};

const resetAll = () => {};
