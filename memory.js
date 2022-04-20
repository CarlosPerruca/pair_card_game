const cards = [
    { name: "Guilliman", img: "Guilliman.webp" },
    { name: "Horus", img: "Horus.webp" },
    { name: "Konrad", img: "Konrad.webp" },
    { name: "Leman", img: "Leman.webp" },
    { name: "Lion", img: "Lion.webp" },
    { name: "Magnus", img: "Magnus.webp" },
    { name: "Mortarion", img: "Mortarion.webp" },
    { name: "Sanguinius", img: "Sanguinius.webp" },
];

const memoryGame = new MemoryGame(cards);

window.addEventListener("load", (event) => {
    let html = "";
    memoryGame.cards.forEach((pic) => {
        html += `
        <div class="card" data-card-name="${pic.name}">
          <div class="back" name="${pic.img}"></div>
          <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
        </div>
      `;
    });

    // Add all the divs to the HTML
    document.querySelector("#memory-board").innerHTML = html;

    // Bind the click event of each element to a function
    document.querySelectorAll(".card").forEach((card) => {
        card.addEventListener("click", () => {
            // TODO: write some code here
            console.log(`Card clicked: ${card}`);
        });
    });
});
