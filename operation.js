function calculate(a, b, operant) {
  let result = null;

  switch (operant) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '×':
      result = a * b;
      break;
    case '÷':
      if (b == 0) {
        alert("На ноль делить нельзя! ");
        break;
      }
      result = a / b;
      break;
    // case '%':
    //   result = a * (b / 100);
    //   break;
    // case '√':
    //   result = Math. sqrt(a)
    //   break;
    default:
      break;

  }
}
