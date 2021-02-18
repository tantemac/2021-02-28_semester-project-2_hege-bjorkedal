import createMenu from "./components/createMenu.js";
import { getExistingCart } from "./utils/getCart.js";

createMenu();

const cart = getExistingCart();

const cartContainer = document.querySelector(".cartContainer");

if(cart.length === 0) {
    cartContainer.innerHTML = "You have not added any products to your cart yet.";
}

cart.forEach((cartProduct) => {

    cartContainer.innerHTML += `<div class="row row-cols-3 cartTitles">
                                    <div class="col">
                                        
                                    </div>
                                    <div class="col">
                                        <h6>Product</h6>
                                    </div>
                                    <div class="col">
                                        <h6>Price</h6>
                                    </div>
                                </div>
                                <div class="row row-cols-3 cartProduct">
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
                                </div>
                                <div class="row row-cols-3 cartTotal">
                                <div class="col">
                                
                                </div>
                                <div class="col">
                                    <h4>Total price:</h4>
                                </div>
                                <div class="col">
                                    <h4>$ Total price</h4>
                                </div>
                            </div>`
});