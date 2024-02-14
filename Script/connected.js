function keyBoardConnectedToPress(e){
    const playerPress = e.key;
    console.log('player press the button',playerPress)

    // get the expected Alphabet
    const displayAlphabet = document.getElementById('Display')
    const displayWord = displayAlphabet.innerText;
    const convertToLowerCase = displayWord.toLowerCase();
    // console.log(convertToLowerCase,playerPress)

    //check Right or Wrong keypress
    if(playerPress === convertToLowerCase){
        console.log('you got a point')
        //Update Score:
        //1. get the current score
        const currentScore = document.getElementById('current-score');
        const currentInnerText = currentScore.innerText;
        const convertToParseInt = parseInt(currentInnerText);
        console.log(convertToParseInt)
        //2. increase the score by 1
        const newScore = convertToParseInt + 1;
        //3. show the update score
        currentScore.innerText = newScore
        //4. start a new round
        removeBackgroundColor(playerPress)
        continueGameLoop();
    }else{
        console.log('your life is date')
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
    hideElementById('home-screen')
    showElementById('play-ground')
    continueGameLoop()
  
}
