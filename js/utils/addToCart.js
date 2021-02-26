import { getExistingCart } from "./getCart.js";
import displayMessage from "../components/displayMessage.js";

export default function addToCart() {

    const id = this.dataset.id;
    const name = this.dataset.name;
    const image = this.dataset.image;
    const price = this.dataset.price;
    
    // console.log("name", name);

    const currentCart = getExistingCart();

    const plantProduct = { id: id, name: name, image: image, price: price };
    currentCart.push(plantProduct);

    saveCart (currentCart);
}

function saveCart(cart) {
    localStorage.setItem("cartProducts", JSON.stringify(cart));

    displayMessage ("success", "The product has been added to your cart", ".messageContainer");
}