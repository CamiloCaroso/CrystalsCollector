const numberE = document.getElementById("number");
const countE = document.getElementById("count");

const winCount = document.getElementById("wins");
const lossesCount = document.getElementById("losses");

const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");



let count = 0;

countE.textContent = count;

let win = 0;
winCount.textContent = win;

let lose = 0;
lossesCount.textContent = lose;

let random;
function randomIntFromInterval5(min, max) { // min and max included 
    random = Math.floor(Math.random() * (max - min + 1) + min);
    numberE.textContent = random;
    console.log(random);

    
}
randomIntFromInterval5(30, 120);

function Counter(){
    if (count === random){
        win++
        winCount.textContent = win;
        random = 0;
        numberE.textContent = random;
        count= 0;
        countE.textContent = count;
        randomIntFromInterval5(30, 120);
        randomIntFromInterval1(2, 12);
        randomIntFromInterval2(2, 12);
        randomIntFromInterval3(2, 12);
        randomIntFromInterval4(2, 12);
    } else if (count > random){
        lose++;
        lossesCount.textContent = lose;
        random = 0;
        numberE.textContent = random;
        count= 0;
        countE.textContent = count;
        randomIntFromInterval5(30, 120);
        randomIntFromInterval1(2, 12);
        randomIntFromInterval2(2, 12);
        randomIntFromInterval3(2, 12);
        randomIntFromInterval4(2, 12);
    }
}


let button1;

function randomIntFromInterval1(min, max) { // min and max included 
    button1 = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(button1);
}
randomIntFromInterval1(2, 12);

b1.addEventListener('click', function(){
    count = button1 + count
    countE.textContent = count;
    Counter()
});

let button2;

function randomIntFromInterval2(min, max) { // min and max included 
    button2 = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(button2);
}
randomIntFromInterval2(2, 12);

b2.addEventListener('click', function(){
    count = button2 + count
    countE.textContent = count;
    Counter()
});

let button3;

function randomIntFromInterval3(min, max) { // min and max included 
    button3 = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(button3);
}
randomIntFromInterval3(2, 12);

b3.addEventListener('click', function(){
    count = button3 + count
    countE.textContent = count;
    Counter()
});

let button4;

function randomIntFromInterval4(min, max) { // min and max included 
    button4 = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(button4);
}
randomIntFromInterval4(2, 12);

b4.addEventListener('click', function(){
    count = button4 + count
    countE.textContent = count;
    Counter()
});









