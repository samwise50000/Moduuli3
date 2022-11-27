/*
Open t8 folder in your IDE/editor. Make a simple calculator. (4p)
There are two input fields where user enters numbers.
Based on the drop-down list, calculator performs addition, subtraction, multiplication or division of these two numbers.
Use the value attribute of <option> elements to decide which operation the calculator needs to do. Example.
Show the result in <p id="result"> when the button is clicked.
*/

function calc(){
    let x = document.getElementById("operation").value;
    let number1 = document.getElementById('num1').value;
    let number2 = document.getElementById('num2').value;

if (x == 'add') {
    let calculation = parseInt(number1) + parseInt(number2)
    document.getElementById("result").innerHTML = calculation;
}

else if (x == 'sub') {
    let calculation = parseInt(number1) - parseInt(number2)
    document.getElementById("result").innerHTML = calculation;
}

else if (x == 'multi') {
    let calculation = parseInt(number1) * parseInt(number2)
    document.getElementById("result").innerHTML = calculation;
}

else if (x == 'div') {
    let calculation = parseInt(number1) / parseInt(number2)
    document.getElementById("result").innerHTML = calculation;
}

}

const button = document.querySelector('button');

button.onclick = calc;









