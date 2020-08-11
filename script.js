// change to checked state upon click of list item
var list = document.querySelector('ul');
list.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
  }
});

// call addItem() upon enter in input field
var input = document.getElementById("new-item");
input.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
        addItem();
    }
})


function addItem () {
    // create new list item
    var li = document.createElement("li");
    inputText = document.getElementById("new-item").value;
    var textNode = document.createTextNode(inputText)
    li.appendChild(textNode);

    // if input not empty add list item to list
    if (inputText.length >= 1) {
        document.getElementById("list").append(li);
    }

    // reset input field
    document.getElementById("new-item").value = "";

    // add delete item button
    var button = document.createElement("button");
    var textNode = document.createTextNode("x");
    button.className = "closeBtn";
    button.appendChild(textNode);
    li.appendChild(button);

    button.onclick = deleteItem;
}

// delete list item upon close button click
function deleteItem () {
    let item = this.parentNode;
    let parent  = item.parentNode;
    parent.removeChild(item);
}

// delete all list items upon clear all items button click
function clearAllItems () {
    var ul = document.getElementById("list");
    while(ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
}