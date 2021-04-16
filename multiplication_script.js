function getSelectedValue(){
    var e = document.getElementById("select-multi");
    var num = e.value; 
    return num;
}


function multiplication(getSelectedValue){
    let num = getSelectedValue();
    let output = "";
    for(let i = 1; i <=10; i++){
        let multi = num * i;
        output += multi + " ";
    }
    document.getElementById("results-message").innerHTML = output;
};

