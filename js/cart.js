import createMenu from "./components/createMenu.js";
import { getExistingCart } from "./utils/getCart.js";
import removeItem from "./utils/removeFromCart.js";

createMenu();

const cart = getExistingCart();
console.log(cart);

const cartTitlesContainer = document.querySelector(".cartTitlesContainer");
const cartContainer = document.querySelector(".cartContainer");
const totalPriceContainer = document.querySelector(".totalPriceContainer");


if(cart.length === 0) {
    cartContainer.innerHTML = "You have not added any products to your cart yet.";
    totalPriceContainer.innerHTML = "";
} 

let totalPrice = 0;

cart.forEach((cartProduct) => {
    totalPrice += parseInt(cartProduct.price);
    cartContainer.innerHTML += `<div class="row row-cols-4 cartProduct">
                                    <div class="col">
                                        <img src="${cartProduct.image}" class="img-thumbnail" alt="${cartProduct.name}">
                                    </div>
                                    <div class="col align-self-center">
                                        <a href="details.html?id=${cartProduct.id}">
                                            <h5>${cartProduct.name}</h5>
                                            </a>
                                    </div>
                                    <div class="col align-self-center">
                                        <h5>$ ${cartProduct.price}</h5>
                                    </div>
                                    <div class="col align-self-center">
                                    <i class="fas fa-trash fa-lg" data-id="${cartProduct.id}"></i>
                                    </div>
                                </div>
                            </div>`

});

totalPriceContainer.innerHTML += `<div class="row row-cols-4 cartTotal">
                                    <div class="col">
                                    </div>
                                    <div class="col">
                                    </div>
                                    <div class="col">
                                    <h6>Total price:</h6>
                                    </div>
                                    <div class="col">
                                    <h6>$ ${totalPrice}</h6>
                                    </div>
                                    </div>`


const removeButton = document.querySelectorAll(".cartProduct i");

removeButton.forEach((button) => {
    button.addEventListener("click", removeItem);
});

