/*
Open t9 folder in your IDE/editor. This is continuation to previous task.
There is only one text field left, where the user writes the calculation (addition, subtraction, multiplication or division) (4p)
You can use the includes and split methods.
eval() function is prohibited
No need to support decimal numbers, calculating integers is enough.
Example inputs: 3+5, 2-78, 3/6, etc..
*/
'use strict';

function calc(){
    let x = document.getElementById("calculation").value;
    let array_of_numbers =

if (x.includes('+')) {
    let calculation = parseInt(number1) + parseInt(number2)
    document.getElementById("result").innerHTML = calculation;
}

else if (x.includes('-')) {
    let calculation = parseInt(number1) - parseInt(number2)
    document.getElementById("result").innerHTML = calculation;
}

else if (x.includes('*')) {
    let calculation = parseInt(number1) * parseInt(number2)
    document.getElementById("result").innerHTML = calculation;
}

else if (x.includes('/')) {
    let calculation = parseInt(number1) / parseInt(number2)
    document.getElementById("result").innerHTML = calculation;
}

}

const button = document.querySelector('button');

button.onclick = calc;