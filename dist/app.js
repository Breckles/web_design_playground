"use strict";
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
playGame(person, surfaceNavEl);
///////////////////////////////////
function playGame(person, container) {
    container.style.display = "flex";
    container.append(createOptionNode("test"));
    let blanks = document.getElementsByClassName("blank");
    console.log(blanks);
    for (const blank of blanks) {
        let wordType = blank.innerText;
        console.log(wordType);
        if (wordType === "person") {
        }
        else {
            let options = wordTypes.get(wordType);
            console.log(options);
            for (const option of options) {
                container.append(createOptionNode(option));
            }
        }
    }
}
function createOptionNode(content) {
    let node = document.createElement("div");
    node.classList.add("node");
    node.innerText = content;
    return node;
}
//# sourceMappingURL=app.js.map