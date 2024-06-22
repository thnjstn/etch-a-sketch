const container = document.querySelector(".container");

function createDivCol(num) {
    for (let i = 0; i < num; i++) {
        const box = document.createElement("div");
        box.classList.add("col");
        container.appendChild(box);
    }
}

function createDivRow(num) {
    for (let i = 0; i < num; i++) {
        const box = document.createElement("div");
        box.classList.add("row");
        container.appendChild(box);
    }
}

createDivCol(16);
createDivRow(16);