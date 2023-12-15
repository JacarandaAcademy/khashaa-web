const stickMan = {
    name: 'Boby',
    changeName: function (value) {
        const name = document.getElementById("stickmanName");
        name.innerHTML =  `<h1>${value}</h1>`
    },
    head: {
        color: "gold",
        changeHead: function (value) {
            const head = document.getElementById("head");
            head.style.backgroundColor = value;
        },
    },
    arms: {
        leftArm: {color: "gold"},
        changelefta: function (value) {
            const lefta = document.getElementById("leftArm");
            lefta.style.backgroundColor = value;
        },
        rightArm: {color: "gold"},
        changerighta: function (value) {
            const righta = document.getElementById("rightArm");
            righta.style.backgroundColor = value;
        },
    },
    torso: {
        color: "gold",
        changetorso : function (value) {
            const torso = document.getElementById("torso");
            torso.style.backgroundColor = value;
        },
    },
    legs: {
        leftLeg: {color: "gold"},
        changeleftl : function (value) {
            const leftl = document.getElementById("leftLeg");
            leftl.style.backgroundColor = value;
        },
        rightLeg: {color: "gold"},
        changerightl : function (value) {
            const rightl = document.getElementById("rightLeg");
            rightl.style.backgroundColor = value;
        },
    },
};

const container = document.getElementById('container').innerHTML = `
<div class="stickman">
    <h1 id="stickmanName">${stickMan.name}</h1>
        <div id="head" style="background-color: ${stickMan.head.color}"></div>
        <div id="body">
            <div class="arm" id="leftArm" style="background-color: ${stickMan.arms.leftArm.color}"></div>
            <div id="torso" style="background-color: ${stickMan.torso.color}"></div>
            <div class="arm" id="rightArm" style="background-color: ${stickMan.arms.rightArm.color}"></div>
        </div>
        <div id="legs">
            <div class="leg" id="leftLeg" style="background-color: ${stickMan.legs.leftLeg.color}"></div>
            <div class="leg" id="rightLeg" style="background-color: ${stickMan.legs.rightLeg.color}"></div>
        </div>
    </div>
`;

function changeName(){
    const inputName = document.getElementById("inputName").value;
    stickMan.changeName(inputName);
}
function changeHead(){
    const inputHead = document.getElementById("inputHead").value;
    stickMan.head.changeHead(inputHead);
}
function changeLeftArm(){
    const inputLeftArm = document.getElementById("inputLeftArm").value;
    stickMan.arms.changelefta(inputLeftArm);
}
function changeRightArm(){
    const inputRightArm = document.getElementById("inputRightArm").value;
    stickMan.arms.changerighta(inputRightArm);
}
function changeTorso(){
    const inputTorso = document.getElementById("inputTorso").value;
    stickMan.torso.changetorso(inputTorso);
}
function changeLeftLeg(){
    const inputLeftLeg = document.getElementById("inputLeftLeg").value;
    stickMan.legs.changeleftl(inputLeftLeg);
}
function changeRightLeg(){
    const inputRightLeg = document.getElementById("inputRightLeg").value;
    stickMan.legs.changerightl(inputRightLeg);
}