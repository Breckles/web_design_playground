interface Offsets {
  top: number;
  left: number;
}

let currentRotation = 0;
let transition = "transform 0.25s linear";
let optionNodeWidth = 10;

const iconPaths = [
  "/src/assets/cheese.svg",
  "/src/assets/hamburger.svg",
  "/src/assets/hotdog.svg",
  "/src/assets/ice-cream.svg",
  "/src/assets/pizza-slice.svg",
  "/src/assets/cheese.svg",
  "/src/assets/hamburger.svg",
  "/src/assets/hotdog.svg",
  "/src/assets/ice-cream.svg",
  "/src/assets/pizza-slice.svg",
];

const dialContainerEl: HTMLDivElement = document.querySelector(
  "#dialContainer"
) as HTMLDivElement;

const actionButtonEl: HTMLButtonElement = document.querySelector(
  "#actionBtn"
) as HTMLButtonElement;
actionButtonEl.addEventListener("click", rotateDial.bind(this));

playGame(dialContainerEl);

function playGame(container: HTMLElement) {
  container.append(createOptionDial(iconPaths));
}

function createOptionDial(iconPaths: string[]): HTMLDivElement {
  const offsets = calculateOffsets();

  const dial = document.createElement("div");
  dial.setAttribute("id", "dial");
  dial.style.width = "100%";
  dial.style.height = "100%";
  dial.style.transition = transition;

  for (let i = 0; i < iconPaths.length; i++) {
    const newNode = createOptionNode(iconPaths[i]);
    newNode.style.top = `${offsets[i].top}%`;
    newNode.style.left = `${offsets[i].left}%`;
    dial.append(newNode);
  }

  return dial;
}

function createOptionNode(iconPath: string): HTMLDivElement {
  let node = document.createElement("div");
  node.classList.add("optionNode");
  node.style.width = `${optionNodeWidth}%`;
  node.style.height = `${optionNodeWidth}%`;
  node.style.padding = `${optionNodeWidth / 5}%`;
  node.style.position = "absolute";
  node.style.transition = transition;

  let svgIcon = document.createElement("img");
  svgIcon.setAttribute("src", iconPath);
  svgIcon.style.width = "100%";
  svgIcon.style.height = "100%";

  node.append(svgIcon);

  return node;
}

function rotateDial() {
  currentRotation += 360 / iconPaths.length;
  const dialEl = document.querySelector("#dial") as HTMLDivElement;
  const optionNodes = document.getElementsByClassName(
    "optionNode"
  ) as HTMLCollectionOf<HTMLDivElement>;
  dialEl.style.transform = `rotate(${currentRotation}deg)`;
  for (const el of optionNodes) {
    el.style.transform = `rotate(${-currentRotation}deg)`;
  }
}

function calculateOffsets(): Offsets[] {
  const offsets: Offsets[] = [];

  let containerWidth = +window
    .getComputedStyle(dialContainerEl)
    .getPropertyValue("width")
    .replace("px", "");

  let radius = containerWidth / 2 - containerWidth / optionNodeWidth / 2;
  let originX = containerWidth / 2;
  let originY = containerWidth / 2;
  // let radians = Math.PI / 4;
  let radians = 0;

  for (let i = 0; i < iconPaths.length; i++) {
    let offsetX =
      containerWidth -
      (originX + radius * Math.cos(radians)) -
      containerWidth / optionNodeWidth / 2;
    let offsetY =
      containerWidth -
      (originY + radius * Math.sin(radians)) -
      containerWidth / optionNodeWidth / 2;

    const offsetYPercent = (offsetY / containerWidth) * 100;
    const offsetXPercent = (offsetX / containerWidth) * 100;

    offsets.push({ top: offsetYPercent, left: offsetXPercent });

    radians = radians + (2 * Math.PI) / iconPaths.length;
  }

  return offsets;
}
