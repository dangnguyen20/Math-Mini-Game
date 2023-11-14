import {
  handleOutputButton,
  handleSelectionButton,
  handleSubmit,
  pressButton,
  resetTime,
  shuffleSelection,
} from "../Functions/feat.js";
import {
  getRandomOperator,
  getResult,
  getUniqueNumbers,
} from "../Functions/get.js";

export let first, second, third, fourth, fifth, sixth, operator;

function main() {
  first = getUniqueNumbers(1, 5);
  operator = getRandomOperator();
  second = getUniqueNumbers(6, 10);
  third = getUniqueNumbers(1, 5);
  fourth = getUniqueNumbers(6, 10);
  fifth = getUniqueNumbers(1, 5);
  sixth = getUniqueNumbers(6, 10);
  console.log(first, operator, second);
  document.getElementById("result").innerHTML = getResult(
    first || second || third || fourth,
    second || third || fourth || first,
    operator
  );

  while (
    first === third ||
    second === fourth ||
    first === fourth ||
    second === third ||
    third === fifth ||
    fourth === sixth ||
    fifth === sixth
  ) {
    third = getUniqueNumbers(1, 5);
    fourth = getUniqueNumbers(6, 10);
    fifth = getUniqueNumbers(1, 5);
    sixth = getUniqueNumbers(6, 10);
  }

  document.getElementById("number1").innerHTML = first;
  document.getElementById("number2").innerHTML = second;
  document.getElementById("number3").innerHTML = third;
  document.getElementById("number4").innerHTML = fourth;
  document.getElementById("number5").innerHTML = fifth;
  document.getElementById("number6").innerHTML = sixth;
  document.querySelectorAll("#output button").forEach(function (button) {
    button.addEventListener("click", handleOutputButton);
  });
  document.querySelectorAll("#selection button").forEach(function (button) {
    button.addEventListener("click", handleSelectionButton);
  });
  document.getElementById("number1").addEventListener("click", function () {
    first = getUniqueNumbers(1, 5);
    document.getElementById("number1").innerHTML = first;
  });

  document.getElementById("number2").addEventListener("click", function () {
    second = getUniqueNumbers(6, 10);
    document.getElementById("number2").innerHTML = second;
  });

  document.getElementById("number3").addEventListener("click", function () {
    third = getUniqueNumbers(1, 5);
    document.getElementById("number3").innerHTML = third;
  });

  document.getElementById("number4").addEventListener("click", function () {
    fourth = getUniqueNumbers(6, 10);
    document.getElementById("number4").innerHTML = fourth;
  });
  document.getElementById("number5").addEventListener("click", function () {
    fifth = getUniqueNumbers(1, 5);
    document.getElementById("number5").innerHTML = fifth;
  });
  document.getElementById("number6").addEventListener("click", function () {
    sixth = getUniqueNumbers(6, 10);
    document.getElementById("number6").innerHTML = sixth;
  });
  document.getElementById("add").addEventListener("click", function () {
    pressButton("+");
  });

  document.getElementById("subtract").addEventListener("click", function () {
    pressButton("-");
  });

  document.getElementById("multiply").addEventListener("click", function () {
    pressButton("*");
  });

  document.getElementById("divide").addEventListener("click", function () {
    pressButton("/");
  });
  document.getElementById("math").addEventListener("click", function () {
    pressButton("");
  });
  document.getElementById("submit").addEventListener("click", handleSubmit);
  document.getElementById("reset").addEventListener("click", resetValues);
}

function resetValues() {
  first = getUniqueNumbers(1, 5);
  operator = getRandomOperator();
  second = getUniqueNumbers(6, 10);
  third = getUniqueNumbers(1, 5);
  fourth = getUniqueNumbers(6, 10);
  console.log(first, operator, second);
  document.getElementById("result").innerHTML = getResult(
    first,
    second,
    operator
  );
  while (
    first === third ||
    second === fourth ||
    first === fourth ||
    second === third
  ) {
    third = getUniqueNumbers(1, 5);
    fourth = getUniqueNumbers(6, 10);
  }
  document.getElementById("number1").innerHTML = first;
  document.getElementById("number2").innerHTML = second;
  document.getElementById("number3").innerHTML = third;
  document.getElementById("number4").innerHTML = fourth;
  document.getElementById("result").innerHTML = getResult(
    first,
    second,
    operator
  );
  const inputNumbers = document.querySelectorAll("#output button");
  for (let i = 0; i < inputNumbers.length; i++) {
    inputNumbers[i].innerHTML = "";
  }
  resetTime();
  shuffleSelection();
  document.getElementById("success").style.display = "none";
  document.getElementById("math").value = "";
}

main();
