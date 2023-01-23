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
}

buttons.addEventListener("click", listener);
document.addEventListener("keydown", function (event) {
 
  
  switch (event.key) {
    case 'Backspace':
      inputData.push('←');
      console.log(inputData);
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
    case '0':
      inputData.push('0');
      break;
    case '1':
      inputData.push('1');
      
      break;
    case '2':
      inputData.push('2');
      break;
    case '3':
      inputData.push('3');
      break;
    case '4':
      inputData.push('4');
      break;
    case '5':
      inputData.push('5');
      break;
    case '6':
      inputData.push('6');
      break;
    case '7':
      inputData.push('7');
      break;
    case '8':
      inputData.push('8');
      break;
    case '9':
      inputData.push('9');
       break;
  }

  

  
  if ((!isNaN(Number(inputData[inputData.length-2]))) && ((!isNaN(Number(inputData[inputData.length-1]))) || (inputData[inputData.length-1] == '.'))) {
    inputData[inputData.length-2] = inputData[inputData.length-2] + inputData[inputData.length-1];
    inputData.length -= 1;
          
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
    case 'Escape':
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
      if ((lengthData == 0) || (lengthData == 1)) {
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















