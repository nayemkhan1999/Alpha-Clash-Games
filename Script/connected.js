function keyBoardConnectedToPress(e){
    const playerPress = e.key;
    // stop the game if you press the (Esc) Button
    if(playerPress === 'Escape'){
        gameOver()
    }
    // get the expected Alphabet
    const displayAlphabet = document.getElementById('Display')
    const displayWord = displayAlphabet.innerText;
    const convertToLowerCase = displayWord.toLowerCase();
    // console.log(convertToLowerCase,playerPress)

    //check Right or Wrong keypress
    if(playerPress === convertToLowerCase){

        const currentScore = getTextElementById('current-score')
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score',updatedScore)
       
        removeBackgroundColor(playerPress)
        continueGameLoop();   
    }else{

        const currentLife = getTextElementById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life',updatedLife)
  
        if(updatedLife === 0){ 
            gameOver()
        }
    }
}
// Above the function name call function on the function make put on the call function name like (keyBoardConnectedToPress) !!
document.addEventListener('keyup',keyBoardConnectedToPress)

// keyBoard connected to press Alphabets
function continueGameLoop(){
    const alphabet = getARandomAlphabet()
   
    const displayShow = document.getElementById('Display')
    displayShow.innerText = alphabet
    //  Set Background color 
    setBackgroundColor(alphabet)
  
}

function play(){
    //Hide everything show only the play-Ground
    hideElementById('home-screen')
    hideElementById('final-score')
    showElementById('play-ground')
    // reset score and life
    setTextElementValueById('current-life', 5)
    setTextElementValueById('current-score', 0)
    
    continueGameLoop()  
  
}

function gameOver(){
    hideElementById('play-ground')
    showElementById('final-score')
    //updated final score
    //1. get the final score
    const lastScore = getTextElementById('current-score')
    console.log(lastScore)
    setTextElementValueById('last-score',lastScore)

    // clear the last selected alphabet remove color
    const currentAlphabet = getTextColorRemoveById('Display')
    removeBackgroundColor(currentAlphabet);
}
