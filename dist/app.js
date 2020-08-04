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
const surfaceNavEl = document.querySelector("#surfaceNav");
playGame(surfaceNavEl);
function playGame(container) {
    container.append(createOptionDial(wordTypes.get("adjective")));
}
function createOptionDial(optionList) {
    const svgRoot = document.createElementNS(svgNameSpaceURI, "svg");
    svgRoot.setAttribute("id", "svgRoot");
    const svgDial = document.createElementNS(svgNameSpaceURI, "g");
    svgDial.setAttribute("id", "svgDial");
    svgDial.style.transition = "transform 1s linear";
    for (const option of optionList) {
        let newNode = createOptionNode(option);
        svgDial.append(newNode);
    }
    svgRoot.append(svgDial);
    return svgRoot;
}
function createOptionNode(textContent) {
    let node = document.createElementNS(svgNameSpaceURI, "g");
    node.classList.add("optionNode");
    node.style.transform = "translate(25%, 50%)";
    let circle = document.createElementNS(svgNameSpaceURI, "circle");
    circle.setAttribute("r", "10%");
    circle.setAttribute("fill", "white");
    circle.setAttribute("stroke", "black");
    circle.setAttribute("stroke-width", "2");
    let text = document.createElementNS(svgNameSpaceURI, "text");
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "middle");
    text.textContent = textContent;
    node.append(circle, text);
    return node;
}
//# sourceMappingURL=app.js.map