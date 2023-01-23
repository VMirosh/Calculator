let outputResult = document.querySelector(".scren");
let buttons = document.querySelector(".buttons");

buttons.addEventListener("click", listener);
document.addEventListener("keydown", function (event) {

  switch (event.key) {
    case 'Enter':
      listener;
      break;
  }
})

let result;
let operation;
let second;
let first;
let inputData = [];
//Обьект в котором записаны функции для операций
let operations = {
  '+': (first, second) => { return first + second; },
  '-': (first, second) => { return first - second; },
  '×': (first, second) => { return first * second; },
  '÷': (first, second) => { return first / second; },
}

function listener(event) {

  let btnContent = event.target.textContent;

  if (event.target.nodeName == 'TD') {
    if (btnContent == '=') {
      calculate();
      inputData = [];
      console.log(inputData);
      return;
    }
    if (btnContent == 'C') {
      inputData = [];
      outputResult.textContent = '0';
      console.log(inputData);
      return;
    }

    let lengthData = inputData.length;
    let lastElementData = inputData[lengthData - 1];

    if ((!isNaN(Number(lastElementData))) && ((!isNaN(Number(btnContent))) || (btnContent == '.'))) {
      inputData[lengthData - 1] = lastElementData + btnContent;
    } else {
      inputData.push(btnContent);
    }

    if (btnContent == '←') {
      if ((lengthData == 2) || (lengthData == 0) || (lengthData == 1)) {
        inputData.pop(btnContent);
        inputData = [];
        outputResult.textContent = `0`;
        console.log(inputData);
        return;
      } else {
        inputData.pop(btnContent);
        inputData.pop(btnContent);
      }
    }
    let string = inputData.join('');
    outputResult.textContent = `${string}`;
    console.log(inputData);
  }
}

function calculate() {
  result = Number(inputData[0]);
  for (let i = 0; i < inputData.length - 1; i += 2) {
    second = Number(inputData[i + 2]);
    operation = inputData[i + 1];
    result = operations[operation](result, second);
  }
  outputResult.textContent = result.toFixed(2);
  console.log(result.toFixed(2));
}















