AddRow = () => {
    var row = document.createElement('div');
    row.innerHTML = `
    <input class = "one" type="text"><input class = "two" type="text"><button 
    onclick="SwapUp(this)" >↑</button><button
    onclick="SwapDown(this)" >↓</button><button
    onclick="DeleteRow(this)" >x</button>
  `;
    document.querySelector('#container').appendChild(row);
}

DeleteRow = (row) => {
    row.parentNode.remove();
}

SwapUp = (elem) => {
    var parentRow = elem.parentElement;
    var previousPow = parentRow.previousElementSibling;
    if (previousPow)
        parentRow.after(previousPow);


}
SwapDown = (elem) => {
    var parentRow = elem.parentElement;
    var nextRow = parentRow.nextElementSibling;
    if (nextRow)
        parentRow.before(nextRow);

}

SaveValues = () => {
    var firstInputs = document.querySelectorAll('.one');
    var secondInputs = document.querySelectorAll('.two');

    let list = '';

    for (i = 0; i < firstInputs.length; i++) {
        list += `"${firstInputs[i].value
            }":"${secondInputs[i].value
            }", `;
    }

    document.querySelector("text").innerHTML = `{${list.slice(0, -2)}}`;
}
AddRow();