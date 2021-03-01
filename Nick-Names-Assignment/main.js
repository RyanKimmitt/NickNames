//Nick names


//html elements
let oneBtn = document.getElementById("btn-one");
let allBtn = document.getElementById("btn-all");

let container = document.getElementById("host");
//Global variables
let myData = ["Cutie", "The Beauty", "The CEO", "Cool Guy", "The Homie"];

//event listner
oneBtn.addEventListener("click", oneName);
allBtn.addEventListener("click", allNames);

function oneName(){
printNames("one");
}

function allNames(){
    printNames("all");
}

function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}



function printNames(amount) {
    //Name box
    let firstName = document.getElementById("first").value;
    let lastName = document.getElementById("last").value;

    container.innerHTML = "";

    if (amount === "one") {
        console.log("test1")
        let randName = myData[randomInt(0, myData.length)];
        container.innerHTML = `<div>${firstName} ${randName} ${lastName}</div>`;
    } else if (amount === "all") {
        console.log("tesst2");
        for (let i = 0; i < myData.length; i++) {
            container.innerHTML += `<div>${firstName} ${myData[i]} ${lastName}</div>`;
        }
    }
}