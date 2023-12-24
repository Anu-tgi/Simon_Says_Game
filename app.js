let gameSeq = [];
let userSeq = [];

let btns = ["c1","c2","c3","c4"];

let started = false;
let level = 0;
let highest = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        started = true;
    }
    levelUp();
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerHTML = `level ${level}  <br><br> Highest Score is ${highest}`;
    
    let ind = Math.floor(Math.random()*3);
    let randomColor = btns[ind];
    let randBtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    btnFlash(randBtn);
}

function checkAns(indx){
    if(userSeq[indx] === gameSeq[indx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        if(highest <= level){
            highest = level;
        }
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b> <br>Press any key to start again.<br><br> Highest Score is ${highest}`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "#A7A88A";
        }, 150);
        reset();
    }
}

function btnPress(){
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
