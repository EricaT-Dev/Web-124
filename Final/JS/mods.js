let button =document.getElementById("calculate");
button.addEventListener("click",function(e){
    add(e);
    subtract(e);
    multiply(e);
    divide(e);
});
function add(){
    let number=document.getElementById("num");
    let numberInput=number.value;
        //console.log(numberInput);
        let result="";
    for(let i=1; i<11; i++){
        //console.log(i);
        calculations = i + parseInt(numberInput);
        result += "<br>" + i +" + "+ numberInput + " = " + calculations +" ";
        console.log(result);
        let addSection=document.getElementById("addition");
        addSection.innerHTML = result;
    }
}
function subtract(){
    let number=document.getElementById("num");
    let numberInput=number.value;
        //console.log(numberInput);
        let result="";
    i=1
    while(i<11){
        //console.log(i);
        calculations = i - parseInt(numberInput);
        result += "<br>" + i +" - "+ numberInput + " = " + calculations +" ";
        console.log(result);
        i++;
        let addSection=document.getElementById("subtraction");
        addSection.innerHTML = result;
    }
}
function multiply(){
    let number=document.getElementById("num");
    let numberInput=number.value;
        //console.log(numberInput);
        let result="";
    i=1
    do {
        //console.log(i);
        calculations = i * parseInt(numberInput);
        result += "<br>" + i +" * "+ numberInput + " = " + calculations +" ";
        console.log(result);
        i++;
        let addSection=document.getElementById("multiplication");
        addSection.innerHTML = result;
    }while(i<11)
}
function divide(){
    let number=document.getElementById("num");
    let numberInput=number.value;
        //console.log(numberInput);
        let result="";
    for(let i=1; i<11; i++){
        //console.log(i);
        calculations = i / parseInt(numberInput);
        result += "<br>" + i +" / "+ numberInput + " = " + calculations.toFixed(2) +" ";
        console.log(result);
        let addSection=document.getElementById("division");
        addSection.innerHTML = result;
    }
}
