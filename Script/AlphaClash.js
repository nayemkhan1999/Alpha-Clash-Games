function hideElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}

function showElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')
}

//  Set Background color 
function setBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-amber-500')
}
//  Remove Background color 
function removeBackgroundColor (elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-amber-500')
}

// if & else function create
function getTextElementById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}
function setTextElementValueById(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

// every round remove the text color
function getTextColorRemoveById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}
 // get A Random Alphabet create a function 

 function getARandomAlphabet(){
    const randomAlphabets = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = randomAlphabets.split('');
    

    const randomNumber = Math.random()*25
    const index = Math.round(randomNumber)

    const alphabet = alphabets[index]
      return alphabet;
    
 }

