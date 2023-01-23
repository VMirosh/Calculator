let outputResult = document.querySelector(".scren");
// let showWrite = document.querySelector(".show-write");
// let resultShower = document.querySelector(".result");
 let result;
 let operation;
 let second ;
 let first;
 let inputData = [];
 
 let operations= {
  '+': (first,second)=>{return first + second;},
  '-': (first,second)=>{return first - second;},
  '×': (first,second)=>{return first * second;},
  '÷': (first,second)=>{return first / second;},
  '•': (first,second)=>{return Number(String(first)+"."+String(second))}
   }

let buttons = document.querySelector(".buttons");
buttons.addEventListener("click", listener);

function listener(event) {
  if (event.target.textContent == '='){
    calculate();
    inputData = [];
    return;
  }

  if (event.target.nodeName == 'TD') {

    if ((!isNaN(Number(inputData[inputData.length-1])))&&(!isNaN(Number(event.target.textContent)))){
      inputData[inputData.length-1] = inputData[inputData.length-1] + event.target.textContent;

    }else{
      inputData.push(event.target.textContent);
    }
    
    console.log(inputData);
  }
}
function calculateEval(){
  let string = inputData.join('');
  console.log(string);
  result = eval(string);
  console.log(result);
}

function calculate(){  
  result = Number(inputData[0]);

  for (let i = 0; i < inputData.length-1; i += 2) { 
    second = Number(inputData[i+2]);
    operation = inputData[i+1];
    debugger;
    result = operations[operation](result,second);

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
    console.log(result);
  }

      // if ((event.target.textContent == '=') || (event.target.textContent == 'C')) {
      //   inputDates = [];
      //   console.log(inputDates);
      // }
      // if (event.target.textContent == '←') {
      //   inputDates.pop(event.target.textContent);
      //   inputDates.pop(event.target.textContent);
      //   console.log(inputDates);
      // }
      // let textContent = `${inputDate}`;
      // outputResult.append();

    

  
  




