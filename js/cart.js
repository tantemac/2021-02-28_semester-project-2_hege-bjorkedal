import createMenu from "./components/createMenu.js";
import { getExistingCart } from "./utils/getCart.js";
// import { removeFromCart } from "./components/removeCartButton.js";

createMenu();

const cart = getExistingCart();

const cartTitlesContainer = document.querySelector(".cartTitlesContainer");
const cartContainer = document.querySelector(".cartContainer");
const totalPriceContainer = document.querySelector(".totalPriceContainer");


if(cart.length === 0) {
    cartContainer.innerHTML = "You have not added any products to your cart yet.";
    totalPriceContainer.innerHTML = "";
    cartTitlesContainer.innerHTML = "";
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
                                        <button class="RemoveButton">Remove</button>
                                    </div>
                                </div>
                            </div>`
});



cartTitlesContainer.innerHTML += `<div class="row row-cols-4 cartTitles">
                                    <div class="col">
                                    </div>
                                    <div class="col">
                                        <h6>Product</h6>
                                    </div>
                                    <div class="col">
                                        <h6>Price</h6>
                                    </div>
                                    <div class="col">
                                    </div>
                                </div>`

 

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

// removeFromCart();