import createMenu from "./components/createMenu.js";
import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/displayMessage.js";
import addToCart from "./utils/addToCart.js";

createMenu();

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

if (!id) {
    document.location.href = "/";
}

const productUrl = baseUrl + "plants/" + id;

// console.log(productUrl);

(async function () {
    try {
        const response = await fetch(productUrl);
        const details = await response.json();

        document.title = details.name;

        const container = document.querySelector(".detailContainer");

        container.innerHTML= `<div class="card mb-3" style="max-width: 1200px;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img class="img-fluid" src="${details.image}" alt="${details.name}">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">${details.name}</h5>
                                            <p class="card-text" style="max-width: 600px;">${details.description}</p>
                                            <p class="card-text">$ ${details.price}</p>
                                            <button class="btn btn-primary addToCart" type="button" data-id="${details.id}" data-name="${details.name}" data-image="${details.image}" data-price="${details.price}">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
                            
    } catch (error) {
        displayMessage("error", error, ".detailContainer");
    }

const addToCartButton = document.querySelectorAll(".addToCart");

addToCartButton.forEach((button) => {
    button.addEventListener("click", addToCart);
});

})();