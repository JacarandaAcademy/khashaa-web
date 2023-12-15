const person = {
    name : "Spongebob Squarepants" ,
    changeName : function (newName) {
        const nameElement = document.getElementById("name");
        nameElement.innerHTML = `<h1>${newName}</h1>`
    },
    gender : "Male" ,
    changeGender : function (newGender) {
        const genderElement = document.getElementById("Gender");
        genderElement.innerHTML = `<div> Gender : ${newGender}</div>`
    },
    likedFood : "Krabby Patty" ,
    changeFood : function (newFood) {
        const foodElement = document.getElementById("Food");
        foodElement.innerHTML = `<div> LikedFood :${newFood}</div>`
    },
    color : "Yellow" ,
    changeColor : function (newColor) {
        const colorElement = document.getElementById("Color");
        colorElement.innerHTML = `<div> Color : ${newColor}</div>`
    },
    addresses : [
        "bla bla" ,
        "bla2" ,
    ]
}

const container = document.getElementById("container");

container.innerHTML =`
    <h1 id="name">${person.name}</h1>
    <input id="nameInput" type="text" />
    <button onclick="onChangeName()"> Name Change </button>
    <div id="Food"> Liked food : ${person.likedFood} </div>
    <input id="foodInput" type="text" />
    <button onclick="onChangeFood()"> LikedFood Change </button>
    <div id="Gender"> Gender : ${person.gender} </div>
    <input id="GenderInput" type="text" />
    <button onclick="onChangeGender()"> Gender Change </button>
    <div id="Color"> Color : ${person.color} </div>
    <input id="ColorInput" type="color" />
    <button onclick="onChangeColor()"> Color Change </button>
    <div> ${person.addresses[0]} , ${person.addresses[1]}</div>
`;

person.changeName("Achka");
person.changeGender("Male");
person.changeFood("Krabby Patty");
person.changeColor("Yellow");

function onChangeName() {
    const inputName = document.getElementById("nameInput").value;
    person.changeName(inputName);   
}
function onChangeFood() {
    const inputFood = document.getElementById("foodInput").value;
    person.changeFood(inputFood);   
}
function onChangeGender() {
    const inputGender = document.getElementById("GenderInput").value;
    person.changeGender(inputGender);   
}
function onChangeColor() {
    const inputColor = document.getElementById("ColorInput").value;
    person.changeColor(inputColor);   
}

// It's just kind of fun to write here sometimes y'know.
// I just feel like sometimes I don't have anyone to talk about my problems.
// And because of that I feel horrible.
// But like what am I supposed to do right.
// Started to not care about what others felt.
// But that just made me feel emotionless sometimes.
// Sometimes I just want a break from life.
// I hate how love works in mysterious ways.
// Your crush can fall in love with just about anyone.
// And you just have to sit there and listen to them talk about there own crush and how amazing they are and that "crushes" you from the inside hehe.See what I did there.
// But honestly if there crush makes them happy then I'm fine with it.
// But like why do you have to be so cute girl XD.
// I mean if you really love someone you would want them to be happy right.
// Anyways sometimes I just feel like I'm not good enough sometimes.
// Like I'm unlovable by anyone.
// Well It's all just life in the end.
// These things happen.
// You feel sad in one moment then you feel happy the next.
// You'll feel love and heartbreak but you get over it eventually.
// Not that I've ever broken up or felt heartbreak before lol.
// I just want someone that can support me.
// That can tell me that "Everythings going to be alright".
// That can help me go through this thing called life together.
// Ofcourse I'm gonna support them too.
// Hehe. It's kind of funny to think about how desperate we humans can be for love.