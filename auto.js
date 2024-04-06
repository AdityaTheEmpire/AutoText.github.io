const containerE1 = document.querySelector(".container")

const names = ["Ram", "Aditya", "Manikanta","Venkata"]

let nameIndex = 0;

let charcterIndex =0;

updateText();

function updateText(){
    charcterIndex++;
    containerE1.innerHTML=`<h1>I am ${names[nameIndex].slice(0,charcterIndex)}</h1>`;

    if(charcterIndex === names[nameIndex].length){
        nameIndex++;
        charcterIndex=0;
    }

    if( nameIndex === names.length){
        nameIndex=0;
    }

    setTimeout(updateText,400);
}