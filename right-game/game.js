let board =[
    Array(5).fill("X"),
    Array(5).fill("X"),
    Array(5).fill("X"),
    Array(5).fill("X"),
    Array(5).fill("X"),
];
let life=3;
let isWin = false;

const message = document.getElementById("message");
message.innerText = `You have ${life} live(s)` ;
var x = document.getElementById("LoseAudio"); 
var r = document.getElementById("WrongAudio");
var g = document.getElementById("WinAudio");

const rr = Math.floor(Math.random()*5);
const rc = Math.floor(Math.random()*5);
board[rr][rc] = "0";

let htmlCode = "";

let rowNumber = 0;
for(const row of board){
    let colNumber = 0;
    let html= "";
    for(const col of row){
        const id=`btn${rowNumber}${colNumber}`;
        html += `<div class="button" id="${id}" onClick='check("${id}","${col}")'><i class="fa-solid fa-circle"></i></div>`
        colNumber++;
    }
        htmlCode += `<div>${html}</div>`;
        rowNumber++;
}

const container = document.getElementById("container");
container.innerHTML = htmlCode;

function check(id,value){
    const btn = document.getElementById(id);

    if(life===0 || isWin === true || btn.innerHTML.indexOf("fa-circle") < 0){
        return;
    }

    const m= document.getElementById("message");

    if(value==="X"){
        btn.innerHTML = '<i class="fa-solid fa-skull-crossbones"></i>';
        life--;
        r.play();
        m.innerText = `You have ${life} live(s)`;
    } else {
        btn.innerHTML = '<i class="fa-solid fa-face-laugh-squint"></i>';
        m.innerText = `You are 'Nah i'd win'`;
        g.play();
        isWin = true;
    }
    
    if(life===0){
        m.innerText = "Are you 'Stand proud you are strong' because you are 'Nah I'd win', or are you 'Nah I'd win' because you are 'Stand proud you are strong'";
        x.play(); 
    }
}