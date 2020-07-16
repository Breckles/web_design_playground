"use strict";
var subnavRef = null;
function onClickSubnav(id, ev) {
    // Stop event from bubbling and triggering the document scope click event
    ev.stopPropagation();
    // Reset size and close any subnav that is already being displayed
    if (subnavRef) {
        subnavRef.style.height = "0";
        subnavRef.style.display = "none";
    }
    subnavRef = document.getElementById(id);
    subnavRef.style.display = "block";
    console.log(subnavRef.children.item(0));
    window.setTimeout(function (subnavRef) {
        subnavRef.style.height = "calc(" + subnavRef.children.length + " * 3em)";
        for (var i = 0; i < subnavRef.children.length; i++) {
            var liRef = subnavRef.children.item(i);
            liRef.style.color = "white";
        }
    }, 10, subnavRef);
}
document.addEventListener("click", function () {
    console.log("document clicked");
    if (subnavRef) {
        subnavRef.style.display = "none";
    }
});
//# sourceMappingURL=app.js.map