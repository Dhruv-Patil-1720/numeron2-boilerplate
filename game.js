// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
let num1 =Math.round(Math.random()*100)
let num2 =Math.round(Math.random()*100)

const number1=document.getElementById("number1")
const number2=document.getElementById("number2")

number1.innerHTML=num1
number2.innerHTML=num2
// Iteration 3: Creating variables required to make the game functional
var score =0;
var operator;
 let plus=document.getElementById("plus")
 let minus=document.getElementById("minus")
 let mul=document.getElementById("mul")
 let divide =document.getElementById("divide")
 let modulus=document.getElementById("modulus")




// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
const number3= document.getElementById("number3")
var num3;

// Iteration 5: Creating a randomise function to make the game functional
function randomise(){
    num1 =Math.round(Math.random()*100)
    num2 =Math.round(Math.random()*100)
    //edge case
    if(num1<num2){
       let temp=num1
       num1=num2
       num2=temp
    }
    //take a random operator
    let operator= Math.round(Math.random()*5)
  switch(operator){
    case 1:
        num3=num1+num2
        break
    case 2:
        num3=num1-num2
        break
    case 3:
        num3=num1*num2  
        break   
    case 4:
        num3=num1/num2  
        break   
    case 5:
        num3=num1%num2 
        break  
    case 0:
        randomise()
        break          
  }
number1.innerHTML=num1
number2.innerHTML=num2
number3.innerHTML=num3

  }
  randomise()


// Iteration 6: Making the Operators (button) functional
plus.onclick =()=>{
    if(num1+num2==num3){
        score++;
        randomise()
        resetTimer(timerId)
    }
    else{
        location.href="gameover.html?score="+score;
    }
}
minus.onclick =()=>{
    if(num1-num2==num3){
        score++;
        randomise()
        resetTimer(timerId)
    }
    else{
        location.href="gameover.html?score="+score;
    }
}
mul.onclick =()=>{
    if(num1*num2==num3){
        score++;
        randomise()
        resetTimer(timerId)
    }
    else{
        location.href="gameover.html?score="+score;
    }
}
divide.onclick =()=>{
    if(num1/num2==num3){
        score++;
        randomise()
        resetTimer(timerId)
    }
    else{
        location.href="gameover.html?score="+score;
    }
}
modulus.onclick =()=>{
    if(num1%num2==num3){
        score++;
        randomise()
        resetTimer(timerId)
    }
    else{
        location.href="gameover.html?score="+score;
    }
}
// url -query set of info that we pass to the url act as a local storgae

// Iteration 7: Making Timer functional
const timer = document.getElementById("timer")
var timerId

function startTimer(){
    let time =10
    timer.innerHTML=time;
    timerId =setInterval(()=>{
        time--
        localStorage.setItem("score",score)
        if(time==0){
            window.location.href="./gameover.html"
        }
        timer.innerHTML=time;
        
    },1000)
    //   store the score
    
};
function resetTimer(timerId){
    clearInterval(timerId)
    startTimer()
}
startTimer()

