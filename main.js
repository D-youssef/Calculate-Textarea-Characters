/*
    Calculate Textarea Characters While Writing
*/

var myTextarea = document.getElementById("my-text"),
    mySpan = document.getElementById("my-span");

myTextarea.onkeyup = function () {

    'use strict';

    mySpan.textContent = 10 - this.value.length;

    if (mySpan.textContent < 0) {
        
        mySpan.style.color = '#F00';

    } else {
        
        mySpan.style.color = '#000';
    }

    // we can use also this line of code
    // mySpan.textContent < 0 ? mySpan.style.color = '#F00' : mySpan.style.color = '#000'; 
};