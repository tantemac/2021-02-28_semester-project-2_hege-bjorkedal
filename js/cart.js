// import displayMessage from "./components/displayMessage.js";
import createMenu from "./components/createMenu.js";
// import { getToken } from "./utils/storage.js";
// import { baseUrl } from "./settings/api.js";
import { renderPlants } from "./utils/renderPlants.js";
import { getExistingCart } from "./utils/getCart.js";

createMenu();
renderPlants();

const addToCartButton = document.querySelectorAll(".addToCart");

addToCartButton.forEach((button) => {
    button.addEventListener("click", handleClick);
});

function handleClick() {
    // console.log(event);

    const id = this.dataset.id;
    const name = this.dataset.name;
    
    // console.log("name", name);

    const currentCart = getExistingCart();

    const plantProduct = { id: id, name: name };
    currentCart.push(plantProduct);

    saveCart (currentCart);
}

function saveCart(cart) {
    localStorage.setItem("cartProducts", JSON.stringify(cart));

}