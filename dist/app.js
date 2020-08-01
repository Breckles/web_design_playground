"use strict";
const svgNameSpaceURI = "http://www.w3.org/2000/svg";
let wordTypes = new Map();
wordTypes.set("adjective", [
    "sorry",
    "sad",
    "happy",
    "pleasant",
    "evil",
    "pathetic",
]);
wordTypes.set("pluralNoun", [
    "houses",
    "ponies",
    "barrels",
    "birds",
    "sandwiches",
]);
wordTypes.set("singleNoun", ["bat", "turtle", "dimebag", "sock", "condom"]);
let blankElRefs = document.getElementsByClassName("blank");
let person = "";
let playButton = document.querySelector("#startGameBtn");
playButton.addEventListener("click", (event) => {
    // person = (<HTMLInputElement>document.querySelector("#name")).value;
    person = "true";
    if (person) {
        // Placing this here so that invalid field popup still triggers on invalid form submission
        event.preventDefault();
    }
});
// Will be placed in the 'if' statement in the eventlistener above
let surfaceNavEl = document.querySelector("#surfaceNav");
let svgCircleEl = document.querySelector("#svgCircle");
playGame(person, surfaceNavEl);
///////////////////////////////////
function playGame(person, container) {
    container.style.display = "flex";
    container.append(createOptionDial(wordTypes.get("adjective")));
    let blanks = document.getElementsByClassName("blank");
    // console.log(blanks);
    for (const blank of blanks) {
        let wordType = blank.innerText;
        // console.log(wordType);
        if (wordType === "person") {
        }
        else {
            let options = wordTypes.get(wordType);
            // console.log(options);
        }
    }
}
function createOptionDial(optionList) {
    let x = 20;
    let y = 20;
    const svgContainer = document.createElementNS(svgNameSpaceURI, "svg");
    svgContainer.setAttribute("id", "svgContainer");
    for (const option of optionList) {
        let newNode = createOptionNode(option);
        newNode.setAttribute("transform", `translate(${x}, ${y})`);
        // newNode.style.transform = `translate(${x}, ${y})`;
        x += 80;
        y += 80;
        svgContainer.append(newNode);
    }
    return svgContainer;
}
function createOptionNode(textContent) {
    let node = document.createElementNS(svgNameSpaceURI, "g");
    node.classList.add("optionNode");
    node.setAttribute("fill", "white");
    node.setAttribute("stroke", "black");
    node.setAttribute("stroke-width", "2");
    let circle = document.createElementNS(svgNameSpaceURI, "circle");
    circle.setAttribute("r", "10%");
    const text = document.createElementNS(svgNameSpaceURI, "text");
    text.textContent = textContent;
    node.append(circle, text);
    return node;
}
//# sourceMappingURL=app.js.map