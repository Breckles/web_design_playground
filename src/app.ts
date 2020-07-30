let adjectives = ["sorry", "sad", "happy", "pleasant", "evil", "pathetic"];
let pluralNouns = ["houses", "ponies", "barrels", "birds", "sandwiches"];
let singleNoun = ["bat", "turtle", "dimebag", "sock", "condom"];

let blankElRefs: HTMLCollectionOf<HTMLSpanElement> = document.getElementsByClassName(
  "blank"
) as HTMLCollectionOf<HTMLSpanElement>;

let person = "";

let playButton: HTMLButtonElement = document.querySelector(
  "#startGameBtn"
) as HTMLButtonElement;

playButton.addEventListener("click", (event: Event) => {
  person = (<HTMLInputElement>document.querySelector("#name")).value;
  if (person) {
    // Placing this here so that invalid field popup still triggers on invalid form submission
    event.preventDefault();
    let surfaceNavEl: HTMLDivElement = document.querySelector(
      "#surfaceNav"
    ) as HTMLDivElement;
    surfaceNavEl.style.display = "flex";
    surfaceNavEl.append(createOptionNode("test"));
    console.log("Person name present");
  }
});

function createOptionNode(content: string): HTMLDivElement {
  let node = document.createElement("div");
  node.classList.add("node");
  node.innerText = content;
  return node;
}
