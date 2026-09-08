let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');
let coloreddiv = document.getElementById('bgc');

function changeRed() {
    coloreddiv.style.backgroundColor = "rgb(255,0,0)";
    b1.style.opacity = "1";
    b2.style.opacity = "0.3";
    b3.style.opacity = "0.3";
    b4.style.opacity = "0.3";
};

function changeGreen() {
    coloreddiv.style.backgroundColor = "rgb(0,128,0)";
    b2.style.opacity = "1";
    b1.style.opacity = "0.3";
    b3.style.opacity = "0.3";
    b4.style.opacity = "0.3";
};

function changeYellow() {
    coloreddiv.style.backgroundColor = "rgb(255,255,0)";
    b3.style.opacity = "1";
    b2.style.opacity = "0.3";
    b1.style.opacity = "0.3";
    b4.style.opacity = "0.3";
};

function changeBlue() {
    coloreddiv.style.backgroundColor = "rgb(0,0,255)";
    b4.style.opacity = "1";
    b2.style.opacity = "0.3";
    b3.style.opacity = "0.3";
    b1.style.opacity = "0.3";
};