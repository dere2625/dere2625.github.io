function calculateTip(){
    var subtotal = parseFloat(document.getElementById("subtotal").value);
    var tip = parseFloat((document.getElementById("tip").value/100));
    var total = subtotal+(tip *subtotal);
    console.log(tip);

    if(isNaN(subtotal) || subtotal <= 0){
        alert("Invalid total amount")
        return;
    }

    else if(isNaN(tip) || tip>1 || tip <= 0){
        alert("Invalid tip amount");
        return;
    }

    var element =  document.getElementById("total");
    element.innerHTML = '$'+total;
}