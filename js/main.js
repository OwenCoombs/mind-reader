// main.js


function show(shown, hidden1, hidden2, hidden3, hidden4, hidden5) {
  document.getElementById(shown).style.display = 'block';
  document.getElementById(hidden1).style.display = 'none';
  document.getElementById(hidden2).style.display = 'none';
  document.getElementById(hidden3).style.display = 'none';
  document.getElementById(hidden4).style.display = 'none';
  document.getElementById(hidden5).style.display = 'none';
  return false;
}




// creating div by 9

const myArray = ["!", "+", "#", "$", "%", "^"];
console.log(myArray.length);
function randomSymbol(){
   return Math.floor(Math.random() * myArray.length )
}



function listNumbersWithSymbol(divisor, symbol) {
  let outputHtml = '';

  for (let i = 0; i <= 99; i++) {
    let output = i;
    if (i % divisor === 0) {
      output += " " + symbol;
    } else {
      output += " " + myArray[randomSymbol()];

    }
    outputHtml += '<p>' + output + '</p>'; // Append each output to the HTML content
  }
  document.getElementById('numberContainer').innerHTML = outputHtml; // Set the generated HTML content to the numberContainer <div>
  document.getElementById('symboldiv').innerHTML = symbol;
}



listNumbersWithSymbol(9, myArray[randomSymbol()])











