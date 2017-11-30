// use strict;
let arr = [];

let calculate = function() {
  operation();
}

let operation = function() {
  let firstNo = parseFloat(document.getElementById("first-no").value);
  let secondNo = parseFloat(document.getElementById("second-no").value);

  if(document.getElementById("select-operation").value == "+") {
    let summCalculate = firstNo + secondNo;
    arr.push(document.getElementById("result-input").value = summCalculate);
  }
  else if(document.getElementById("select-operation").value == "-") {
    let diffCalculate = firstNo - secondNo;
    arr.push(document.getElementById("result-input").value = diffCalculate);
  }
  else if(document.getElementById("select-operation").value == "*") {
    let multiplyCalculator = firstNo * secondNo;
    arr.push(document.getElementById("result-input").value = multiplyCalculator);
  }
  else if(document.getElementById("select-operation").value == "/") {
    let divideCalculator = firstNo / secondNo;
    arr.push(document.getElementById("result-input").value = divideCalculator);
  }
  else if(document.getElementById("select-operation").value == "^") {
    let powerCalculator = firstNo ** secondNo;
    arr.push(document.getElementById("result-input").value = powerCalculator);
  }
}
