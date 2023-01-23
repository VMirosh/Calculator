let outputResult = document.querySelector(".scren");
// let showWrite = document.querySelector(".show-write");
// let resultShower = document.querySelector(".result");
let result;
let operation;
let second;
let first;
let inputData = [];

let operations = {
  '+': (first, second) => { return first + second; },
  '-': (first, second) => { return first - second; },
  '×': (first, second) => { return first * second; },
  '÷': (first, second) => { return first / second; },
  
}

let buttons = document.querySelector(".buttons");
buttons.addEventListener("click", listener);

function listener(event) {
  let btnContent = event.target.textContent;
  if ( btnContent == '=') {
    calculate();
    inputData = [];
    return;
  }
  if (btnContent == 'C') {
    inputData = [];
    console.log(inputData);
    return;
  }
  
  if (event.target.nodeName == 'TD') {
    let lastElement = inputData[inputData.length - 1];
    
    if ((!isNaN(Number(lastElement))) && ((!isNaN(Number(btnContent)))||(btnContent == '.'))) {
      inputData[inputData.length - 1] = lastElement + btnContent;
      
    } else {
      inputData.push(btnContent);
    }
    
    console.log(inputData);
  }
  if (btnContent == '←') {
        inputData.pop(btnContent);
        inputData.pop(btnContent);
        console.log(inputData);
      }
}
function calculateEval() {
  let string = inputData.join('');
  console.log(string);
  result = eval(string);
  console.log(result);
}

function calculate() {
  result = Number(inputData[0]);

  for (let i = 0; i < inputData.length - 1; i += 2) {
    second = Number(inputData[i + 2]);
    operation = inputData[i + 1];
    result = operations[operation](result, second);

    // switch (operation) {
    //   case '+':
    //     result = result + second;
    //     break;
    //   case '-':
    //     result = result - second;
    //     break;
    //   case '×':
    //     result = result * second;
    //     break;
    //   case '÷':
    //     result = result / second;
    //     break;
    //   }

  }
  console.log(result.toFixed(4));
}

    
      
      // let textContent = `${inputDate}`;
      // outputResult.append();









