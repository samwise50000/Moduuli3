/*
Open t9 folder in your IDE/editor. This is continuation to previous task.
There is only one text field left, where the user writes the calculation (addition, subtraction, multiplication or division) (4p)
You can use the includes and split methods.
eval() function is prohibited
No need to support decimal numbers, calculating integers is enough.
Example inputs: 3+5, 2-78, 3/6, etc..
*/
'use strict';

function calculate(){
    let x = document.getElementById("calculation").value;
    let num_array = x.split("")
    let calculation = ''

num_array.forEach((i) => calculation += i);
    let result = Function('return ' + calculation)();
    document.getElementById("result").innerHTML = result;
}


const button = document.querySelector('button');
button.onclick = calculate;