const content = document.querySelector(".content");
const aCard = document.querySelector(".card_a");
const bCard = document.querySelector(".card_b");
const cCard = document.querySelector(".card_c");
const aBtn = document.querySelector(".a_btn");
const bBtn = document.querySelector(".b_btn");
const cBtn = document.querySelector(".c_btn");

aBtn.addEventListener("click", () => reveal("a"));
bBtn.addEventListener("click", () => reveal("b"));
cBtn.addEventListener("click", () => reveal("c"));


// reveal functon, creates a html string then adds it to the correct card based on letter clicked
function reveal(letter){
    const letterCard = `
        <img src="./assets/image/css-letter-${letter}.png" alt="broken"/>
        <button class="${letter}_hide">Hide Result</button>
    `;

    if (letter == "a") {
        aCard.innerHTML = letterCard;
    }
    if (letter == "b") {
      bCard.innerHTML = letterCard;
    }
    if (letter == "c") {
      cCard.innerHTML = letterCard;
    }

    //creating a listener for the created button
    document.querySelector(`.${letter}_hide`).addEventListener("click", () => hide(letter));
}

// resetting the html to empty
function hide(letter){
    if (letter == "a") {
      aCard.innerHTML = "";
    }
    if (letter == "b") {
      bCard.innerHTML = "";
    }
    if (letter == "c") {
      cCard.innerHTML = "";
    }
}