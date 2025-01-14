const mountCart = (el) => {
  const numberOfProducts = Math.floor(100 * Math.random()).toString();

  const content = `<div>you have ${numberOfProducts} products in your cart</div>`;

  el.innerHTML = content;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("dev-cart");
  if (el) {
    mountCart(el);
  }
}

export { mountCart };
