const numberOfProducts = Math.floor(100 * Math.random()).toString();

const content = `<div>you have ${numberOfProducts} products in your cart</div>`;

document.querySelector("#dev-cart").innerHTML = content;
