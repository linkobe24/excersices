window.onload = init;
//button to be ready when the window load
function init(){
    let reverseBtn = document.getElementById("reverse-button");
    reverseBtn.onclick = handleReverseBtn;
}
//get the text when click on the button then print the string
function handleReverseBtn(){
    let text = document.getElementById("text");
    let word = text.value;
    print(reverseWord(word));
}
//reverse the string by splitting it into an array and revers it, then join again into a string
function reverseWord(word){
    let arrayWord = word.split("");
    let newArray = [];
    for(let i = arrayWord.length; i >= 0; i--){
        newArray.push(arrayWord[i]);
    }
    return newArray.join('');
}

//print the message on the page
function print(string){
    msg = string;
    document.getElementById("reverse-para").innerHTML = msg;
}
