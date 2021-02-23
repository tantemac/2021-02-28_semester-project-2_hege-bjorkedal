import { getExistingCart } from "./getCart.js";

export default function removeItem(item) {
    const id = item.target.dataset.id;
    // console.log("Id", id);
    
    const currentCartItem = getExistingCart();

    const newCart = currentCartItem.filter((item) => item.id !== id);

    saveNewCart(newCart);
}

function saveNewCart(product) {
    localStorage.setItem("cartProducts", JSON.stringify(product));

    location.reload();
}