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
