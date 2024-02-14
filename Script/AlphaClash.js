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
 // get A Random Alphabet create a function

 function getARandomAlphabet(){
    const randomAlphabets = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = randomAlphabets.split('');
    

    const randomNumber = Math.random()*25
    const index = Math.round(randomNumber)

    const alphabet = alphabets[index]
      return alphabet;
    
 }

