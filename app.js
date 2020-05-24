let min=1, max=10, winningNum=2, guessesLeft=3;

const games=document.querySelector('#game'),
minNum=document.querySelector(".min-num"),
maxNum=document.querySelector(".max-num"),
guessBtn=document.querySelector("#guess-btn"),
guessInput=document.querySelector('#guess-input'),
message=document.querySelector('.message');

minNum.textContent=min;
maxNum.textContent=max;

guessBtn.addEventListener('click',function(){
    if(guessesLeft>0){
    let guess=parseInt(guessInput.value);
    console.log(guess);
    if(isNaN(guess) || guess<min || guess>max){
        setMessage(`Please enter no between ${min} and ${max}`,'red')
    }
    if(guess===winningNum){
        guessInput.disabled=true;
        guessInput.style.borderColor='green';
        setMessage(`${guess} is correct ` ,'green')
        var btn=document.createElement('button');
        btn.textContent="Play Again";
        btn.setAttribute('id','playAgain');
        message.appendChild(btn);
        document.getElementById('playAgain').addEventListener('click',function(){
            guessInput.disabled=false;
            message.textContent='';
            guessesLeft=3;
        })
    }
    else{
        guessesLeft-=1;
        setMessage(`${guess} is not correct guess, ${guessesLeft} chances left`,'red');
    }}
    else{
        setMessage("No chances are left, your game is over","red");
        guessInput.disabled=true;
        var btn=document.createElement('button');
        btn.textContent="Play Again";
        btn.setAttribute('id','playAgain');
        message.appendChild(btn);
        document.getElementById('playAgain').addEventListener('click',function(){
            guessInput.disabled=false;
            message.textContent='';
            guessesLeft=3;
        })
    }
    guessInput.value='';
})

function setMessage(msg,color){
    message.style.color=color;
message.textContent=msg;
}