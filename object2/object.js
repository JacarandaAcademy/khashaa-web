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
