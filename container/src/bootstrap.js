import { mount } from "products/ProductsIndex";
import { mountCart } from "cart/CartShow";

console.log("container");

mountProducts(document.querySelector("#my-products"));
mountCart(document.querySelector("#my-cart"));
