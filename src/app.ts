let subnavRef: HTMLUListElement | null = null;

function onClickSubnav(id: string, ev: Event): void {
  // Stop event from bubbling and triggering the document scope click event
  ev.stopPropagation();

  // Reset size and close any subnav that is already being displayed
  if (subnavRef) {
    subnavRef.style.height = "0";
    subnavRef.style.display = "none";
  }

  subnavRef = document.getElementById(id) as HTMLUListElement;
  subnavRef.style.display = "block";

  console.log(subnavRef.children.item(0));

  window.setTimeout(
    (subnavRef: HTMLUListElement) => {
      subnavRef.style.height = `calc(${subnavRef.children.length} * 3em)`;

      for (let i = 0; i < subnavRef.children.length; i++) {
        const liRef = subnavRef.children.item(i) as HTMLLIElement;
        liRef.style.color = "white";
      }
    },
    10,
    subnavRef
  );
}

document.addEventListener("click", () => {
  console.log("document clicked");

  if (subnavRef) {
    subnavRef.style.display = "none";
  }
});
