"use strict";

var currentFrame = 0;
var defaultSpeed = 250;
var turboSpeed = 150;
var selectedAnimation = '';
var interval;

function startAnimation(){
    stopAnimation();
    var animationType = document.getElementById('animation');
    var turbo = document.getElementById('speed').checked;
    var speed = 0;
    if(turbo){
        speed = turboSpeed;
    }
    else{
        speed = defaultSpeed;
    }
    currentFrame = 0;
    selectedAnimation = animationType.options[animationType.selectedIndex].text;
    document.getElementById('start').disabled = true;
    document.getElementById('stop').disabled = false;
    interval = setInterval(animate,speed);
}

function animate(){
    var displayArea = document.getElementById('animarea');
    const animSource = ANIMATIONS[selectedAnimation].split('=====\n');
    console.log(animSource.length);
    if(currentFrame < animSource.length){
        displayArea.innerHTML = animSource[currentFrame++];
    }
    if(currentFrame === animSource.length){
        currentFrame = 0;
    }
    
}

function stopAnimation(){
    clearInterval(interval);
    document.getElementById('start').disabled = false;
    document.getElementById('stop').disabled = true;
}

function sizeChange(){
    var displayArea = document.getElementById('animarea');
    var selectedFont = document.getElementById('size');
    var fontSize = selectedFont.options[selectedFont.selectedIndex].value;
    if(fontSize === 'tiny'){
        displayArea.style.fontSize = '7pt';
    }
    if(fontSize === 'small'){
        displayArea.style.fontSize = '10pt';
    }
    if(fontSize === 'medium'){
        displayArea.style.fontSize = '12pt';
    }
    if(fontSize === 'large'){
        displayArea.style.fontSize = '16pt';
    }
    if(fontSize === 'extralarge'){
        displayArea.style.fontSize = '24pt';
    }
    if(fontSize === 'xxl'){
        displayArea.style.fontSize = '32pt';
    }
}

