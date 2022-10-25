const container = document.getElementsByClassName("container")[0];


function GenerateGrid(rows, columns)
{
    for (let i = 0; i < rows; i++){
        const divRow = document.createElement('div');
        divRow.classList.add("row");
    
        for (let j = 0; j < columns; j++){
            const divBox = document.createElement('div');
            divBox.classList.add("box");
            divRow.append(divBox)
        }
        container.append(divRow);
    }

    // add hover listener to all boxes
    const boxes = Array.from(document.getElementsByClassName("box"));
    boxes.forEach((box) => {box.addEventListener('mouseover', (event) => {box.style.backgroundColor = "red";})});
}

GenerateGrid(16, 16)


const btn = document.getElementById("btn");

btn.addEventListener('click', (event) => {
    const rows = Array.from(document.getElementsByClassName("row"));
    rows.forEach((row) => {container.removeChild(row)})
    GenerateGrid(parseInt(prompt("Enter number of rows")), parseInt(prompt("Enter number of columns")))

});