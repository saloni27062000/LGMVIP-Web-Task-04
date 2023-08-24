var input_box=document.getElementById("res");

function display(input){
    var oinput=input_box.value;
    var ninput=oinput+""+input;
    input_box.value=ninput;
}

function CalculateValue(){
    console.log("Click");
    var input= input_box.value;
    var result=eval(input);
    input_box.value = result;
}

function clearAll(){
    console.log("clear");
    var oinput = "";
    var ninput = "";
    input_box.value = null;
    
}