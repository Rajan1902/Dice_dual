var num1 = Math.random()*6;
var finalNum1 = Math.floor(num1)+1;
if(finalNum1 === 1){
    document.querySelector("#dice1 img").setAttribute("src", "images/dice1.png")
}
else if(finalNum1 === 2){
    document.querySelector("#dice1 img").setAttribute("src", "images/dice2.png")
}
else if(finalNum1 === 3){
    document.querySelector("#dice1 img").setAttribute("src", "images/dice3.png")
}
else if(finalNum1 === 4){
    document.querySelector("#dice1 img").setAttribute("src", "images/dice4.png")
}
else if(finalNum1 === 5){
    document.querySelector("#dice1 img").setAttribute("src", "images/dice5.png")
}
else{
    document.querySelector("#dice1 img").setAttribute("src", "images/dice6.png")
}

//2nd dice
var num2 = Math.random()*6;
var finalNum2 = Math.floor(num2)+1;
// console.log(finalNum2);
if(finalNum2 === 1){
    document.querySelector("#dice2 img").setAttribute("src", "images/dice1.png")
}
else if(finalNum2 === 2){
    document.querySelector("#dice2 img").setAttribute("src", "images/dice2.png")
}
else if(finalNum2 === 3){
    document.querySelector("#dice2 img").setAttribute("src", "images/dice3.png")
}
else if(finalNum2 === 4){
    document.querySelector("#dice2 img").setAttribute("src", "images/dice4.png")
}
else if(finalNum2 === 5){
    document.querySelector("#dice2 img").setAttribute("src", "images/dice5.png")
}
else{
    document.querySelector("#dice2 img").setAttribute("src", "images/dice6.png")
}

if(finalNum1>finalNum2){
    document.querySelector(".winnerText").innerHTML = "Player 1 wins"
}
else if(finalNum1<finalNum2){
    document.querySelector(".winnerText").innerHTML = "Player 2 wins"
}
else{
    document.querySelector(".winnerText").innerHTML = "It was a draw! play Again"
}