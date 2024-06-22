const container = document.querySelector(".container");
body = document.querySelector("body");
body.appendChild(container);

function createGrid(num) { 
    for (let i = 0; i < num; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);

            for (let j = 0; j < num; j++) {
                const box = document.createElement("div");
                const list = box.classList;
                list.add("box");
                list.add(`col${j}`);
                row.appendChild(box);
            }
    }
}

createGrid(16);