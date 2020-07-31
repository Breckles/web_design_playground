let wordTypes = new Map<string, string[]>();
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

let blankElRefs: HTMLCollectionOf<HTMLSpanElement> = document.getElementsByClassName(
  "blank"
) as HTMLCollectionOf<HTMLSpanElement>;

let person = "";

let playButton: HTMLButtonElement = document.querySelector(
  "#startGameBtn"
) as HTMLButtonElement;

playButton.addEventListener("click", (event: Event) => {
  // person = (<HTMLInputElement>document.querySelector("#name")).value;
  person = "true";
  if (person) {
    // Placing this here so that invalid field popup still triggers on invalid form submission
    event.preventDefault();
  }
});

// Will be placed in the 'if' statement in the eventlistener above
let surfaceNavEl: HTMLDivElement = document.querySelector(
  "#surfaceNav"
) as HTMLDivElement;
playGame(person, surfaceNavEl);
///////////////////////////////////

function playGame(person: string, container: HTMLElement) {
  container.style.display = "flex";
  container.append(createOptionNode("test"));
  let blanks = document.getElementsByClassName("blank") as HTMLCollectionOf<
    HTMLSpanElement
  >;
  console.log(blanks);

  for (const blank of blanks) {
    let wordType = blank.innerText;
    console.log(wordType);
    if (wordType === "person") {
    } else {
      let options = wordTypes.get(wordType)!;
      console.log(options);

      for (const option of options) {
        container.append(createOptionNode(option));
      }
    }
  }
}

function createOptionNode(content: string): HTMLElement {
  let node = document.createElement("div");
  node.classList.add("node");
  node.innerText = content;
  return node;
}
