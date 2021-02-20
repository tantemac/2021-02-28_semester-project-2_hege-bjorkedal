import { getUserName } from "../utils/storage.js";
// import { getExistingCart } from "../utils/getCart.js";

const plantContainer = document.querySelector(".apiContainer");

export function renderPlants(json) {

    const username = getUserName();

    plantContainer.innerHTML = "";

    json.forEach(function (plants) {

    if (username) {
        plantContainer.innerHTML += `<div class="col-sm">
                <div class="card" style="width: 18rem;">
                    <img src="${plants.image}" class="card-img-top" alt="${plants.name}">
                    <div class="card-body">
                        <h5 class="card-title">${plants.name}</h5>
                        <p class="card-text">$ ${plants.price}</p>
                    </div>
                    <div class="card-body">
                        <a href="edit.html?id=${plants.id}" class="btn btn-primary">Edit</a>
                        <a href="#" class="btn btn-primary">Delete</a>
                    </div>
                </div>
            </div>`
    } else {
        plantContainer.innerHTML += `<div class="col-sm">
                <div class="card" style="width: 18rem;">
                    <img src="${plants.image}" class="card-img-top" alt="${plants.name}">
                    <div class="card-body">
                        <h5 class="card-title">${plants.name}</h5>
                        <p class="card-text">$ ${plants.price}</p>
                    </div>
                    <div class="card-body">
                        <div class="d-grid gap-2">
                            <a href="details.html?id=${plants.id}"<button class="btn btn-primary showDetails" type="button">Details</button></a>
                        </div>
                    </div>
                </div>
            </div>`
    }
});

// const addToCartButton = document.querySelectorAll(".addToCart");

// addToCartButton.forEach((button) => {
//     button.addEventListener("click", handleClick);
// });

// function handleClick() {
//     // console.log(event);

//     const id = this.dataset.id;
//     const name = this.dataset.name;
//     const image = this.dataset.image;
//     const price = this.dataset.price;
    
//     // console.log("name", name);

//     const currentCart = getExistingCart();

//     const plantProduct = { id: id, name: name, image: image, price: price };
//     currentCart.push(plantProduct);

//     saveCart (currentCart);
// }

// function saveCart(cart) {
//     localStorage.setItem("cartProducts", JSON.stringify(cart));

// }

}


