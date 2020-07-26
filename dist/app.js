"use strict";
let adjectives = ["sorry", "sad", "happy", "pleasant", "evil", "pathetic"];
let pluralNouns = ["houses", "ponies", "barrels", "birds", "sandwiches"];
let singleNoun = ["bat", "turtle", "dimebag", "sock", "condom"];
let blankElRefs = document.getElementsByClassName("blank");
let person = "";
let playButton = document.querySelector("#startGameBtn");
playButton.addEventListener("click", (event) => {
    person = document.querySelector("#name").value;
    if (person) {
        // Placing this here so that invalid field popup still triggers on invalid form submission
        event.preventDefault();
        console.log("Person name present");
    }
});
//# sourceMappingURL=app.js.map