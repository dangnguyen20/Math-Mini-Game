import { getResult } from "./get.js";

export function pressButton(operator) {
  let mathButton = document.getElementById("math");
  mathButton.value = operator;
}

export function handleSubmit() {
  let number1 = document.getElementById("inputNumber1").innerHTML;
  let phepToan = document.getElementById("math").value;
  let number2 = document.getElementById("inputNumber2").innerHTML;
  let ketQua = getResult(number1, number2, phepToan);
  console.log(number1, number2, phepToan);
  console.log(ketQua);

  if (ketQua == document.getElementById("result").innerHTML) {
    revealSuccess();
    alert("Thành Công");
  } else {
    alert("Thất bại");
  }
}

export function shuffleSelection() {
  const selectionForm = document.getElementById("selection");
  const buttons = Array.from(selectionForm.children);

  buttons.sort(() => Math.random() - 0.5);

  selectionForm.innerHTML = "";
  buttons.forEach((button) => selectionForm.appendChild(button));
}

export let maxTime = 0;
export function handleOutputButton(e) {
  let number = e.target.textContent;
  if (number !== "") {
    e.target.textContent = "";
  }
  maxTime--;
}

export function handleSelectionButton(e) {
  let number = e.target.innerHTML;
  if (number !== "" && maxTime < 2) {
    let outputButton = document.querySelectorAll("#output button:empty");
    if (outputButton.length > 0) {
      outputButton[0].innerHTML = number;
      maxTime++;
    } else if (maxTime == 2) {
      return false;
    }
  }
  console.log(maxTime);
}

export function resetTime() {
  maxTime = 0;
}

export function revealSuccess() {
  let success = document.getElementById("success");
  if (success.style.display === "none") {
    success.style.display = "block";
  }
}
