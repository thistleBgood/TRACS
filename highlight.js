function highlightSelection(t) {
    var userSelection = window.getSelection().getRangeAt(0);
    if (t === "e") {
        highlightExpression(userSelection);
    } else {
        highlightStatement(userSelection);
    }

}

function highlightExpression(range) {
    var newNode = document.createElement("span");
    newNode.setAttribute(
       "class",
       "expression"
    );
    range.surroundContents(newNode);
}

function highlightStatement(range) {
    var newNode = document.createElement("div");
    newNode.setAttribute(
       "class",
       "statement"
    );
    range.surroundContents(newNode);
}