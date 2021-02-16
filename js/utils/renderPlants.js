import { getUserName } from "../utils/storage.js";

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
                            <button class="btn btn-primary addToCart" type="button" data-id="${plants.id}" data-name="${plants.name}">Buy</button>
                        </div>
                    </div>
                </div>
            </div>`
    }
});

}


