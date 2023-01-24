let outputResult = document.querySelector(".scren");
let buttons = document.querySelector(".buttons");

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
  '%': (first, second) => { return  first * (second / 100);},
  '√': (first, second) => { return  Math.pow(second, 1/first)},
}

buttons.addEventListener("click", listener);
document.addEventListener("keydown", function (event) {
  if(!isNaN(event.key)){
    inputData.push(event.key);
  }else{
  switch (event.key) {
    case 'Backspace':
      inputData.push('←');
      break;
    case '-':
      inputData.push('-');
      break;
    case '+':
      inputData.push('+');
      break;
    case '*':
      inputData.push('×');
      break;
    case '/':
      inputData.push('÷');
      break;
    case '.':
      inputData.push('.');
      break;    
     
         
  }}

  if ((!isNaN(Number(inputData[inputData.length - 2]))) && ((!isNaN(Number(inputData[inputData.length - 1]))) || (inputData[inputData.length - 1] == '.'))) {
    inputData[inputData.length - 2] = inputData[inputData.length - 2] + inputData[inputData.length - 1];
    inputData.length -= 1;
  }
  if (inputData[0] == '←'){
    inputData.pop(inputData[inputData.length - 1]);
      inputData = [];
      outputResult.textContent = `0`;
      return;
  }
  else if (isNaN(inputData[0])) {
    alert('Error');
    inputData = [];
    outputResult.textContent = '0';
    return;
  }
  if (inputData[inputData.length - 1] == '←') {
    if ((inputData.length == 0) || (inputData.length == 1) || (inputData.length == 2)) {
      inputData.pop(inputData[inputData.length - 1]);
      inputData = [];
      outputResult.textContent = `0`;
      return;
    } else {
      inputData.pop(inputData[inputData.length - 1]);
      inputData.pop(inputData[inputData.length - 1]);
    }
  }
  let string = inputData.join('');
  outputResult.textContent = `${string}`;
});
document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case 'Enter':
      calculate();
      inputData = [];
      break;
      case '=':
      calculate();
      inputData = [];
      break;
    case 'Escape':
      inputData = [];
      outputResult.textContent = '0';
      break;
    case 'Delete':
      inputData = [];
      outputResult.textContent = '0';
      break;
  }
}
);
function listener(event) {
  let btnContent = event.target.textContent;
  if (event.target.nodeName == 'TD') {

    if (btnContent == '=') {
      calculate();
      inputData = [];
      return;
    }
    if (btnContent == 'C') {
      inputData = [];
      outputResult.textContent = '0';
      return;
    }

    let lengthData = inputData.length;
    let lastElementData = inputData[lengthData - 1];
    if ((!isNaN(Number(lastElementData))) && ((!isNaN(Number(btnContent))) || (btnContent == '.'))) {
      inputData[lengthData - 1] = lastElementData + btnContent;
    } else {
      inputData.push(btnContent);

      if (btnContent == '←'){
        inputData.pop(btnContent);
        inputData = [];
        outputResult.textContent = `0`;
          return;
      }
      else if (isNaN(inputData[0])) {
        alert('Error');
        inputData = [];
        outputResult.textContent = '0';
        return;
      }
    }

    if (btnContent == '←') {
      if ((lengthData == 0) || (lengthData == 1)) {
        inputData.pop(btnContent);
        inputData = [];
        outputResult.textContent = `0`;
        return;
      } else {
        inputData.pop(btnContent);
        inputData.pop(btnContent);
      }
    }

    let string = inputData.join('');
    outputResult.textContent = `${string}`;
  }
}

function calculate() {
  result = Number(inputData[0]);
  for (let i = 0; i < inputData.length - 1; i += 2) {
    second = Number(inputData[i + 2]);
    if (second == 0) {
      alert('Error');
      inputData = [];
      outputResult.textContent = '0';
      return;
    }
    operation = inputData[i + 1];
    result = operations[operation](result, second);
  }
  outputResult.textContent = result;
}















