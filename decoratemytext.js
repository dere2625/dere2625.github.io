function decorate(){
    //document.getElementById("input").style.fontSize = "24pt";
    // var textarea = document.getElementById("input");
    // var fontSize = parseFloat(window.getComputedStyle(textarea).getPropertyValue('font-size'));
    // textarea.style.fontSize = fontSize+2+'px';
    setInterval(increasefont,500);
    
}

function increasefont(){
    var textarea = document.getElementById("input");
    var fontSize = parseFloat(window.getComputedStyle(textarea).getPropertyValue('font-size'));
    textarea.style.fontSize = fontSize+2+'px';
}

function blinged(){
    const checked = document.getElementById('bling').checked;
    const textarea = document.getElementById("input");
    if(checked){
        textarea.style.fontWeight = "bold";
        textarea.style.color = "green";
        textarea.style.textDecoration = "underline";
    }else{
        textarea.style.fontWeight = "normal";
        textarea.style.color = "black";
        textarea.style.textDecoration = "none";
    }
}