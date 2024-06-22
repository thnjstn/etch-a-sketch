const container = document.querySelector(".container");
body = document.querySelector("body");

const containerSizeBtn = document.createElement("button");
containerSizeBtn.classList.add("containerSizeBtn");
containerSizeBtn.textContent = "Adjust Size";
body.appendChild(containerSizeBtn);
body.appendChild(container);

createGrid(16);

function createGrid(num) { 
    for (let i = 0; i < num; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);

            for (let j = 0; j < num; j++) {
                const box = document.createElement("div");
                box.textContent = "";
                const list = box.classList;
                list.add("box");
                list.add(`col${j}`);
                row.appendChild(box);

                box.addEventListener("mouseenter", (e) => {
                   e.target.style.background = randomColor();
                });
            }
    }
}

containerSizeBtn.addEventListener("click", () => {
    let num = prompt("Please enter a number between 0 and 100");

    if (num !== null) {
        num = parseInt(num);
        if (!isNaN(num) && num > 0 && num <= 100) {
            container.innerHTML = '';
            createGrid(num);
        } else {
            alert("Please enter a number between 1 and 100.");
        }
    }
});

function random(min, max) {
    return Math.floor((Math.random()) * (max - min + 1)) + min;
}

function randomColor() {
    const r = random(0, 255);
    const g = random(0, 255);
    const b = random(0, 255);
    const rgb = `rgb(${r},${g},${b})`;
    return rgb;
}
