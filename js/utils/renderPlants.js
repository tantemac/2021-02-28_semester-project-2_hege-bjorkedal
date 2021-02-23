import { getUserName } from "../utils/storage.js";

const plantContainer = document.querySelector(".apiContainer");

export function renderPlants(plantsToRender) {

    const username = getUserName();

    plantContainer.innerHTML = "";

    plantsToRender.forEach(function (plants) {

    if (username) {
        plantContainer.innerHTML += `
            <div class="col-sm">
                <div class="card" style="width: 18rem;">
                    <img src="${plants.image}" class="card-img-top" alt="${plants.name}">
                    <div class="card-body">
                        <h5 class="card-title">${plants.name}</h5>
                        <p class="card-text">$ ${plants.price}</p>
                    </div>
                    <div class="card-body">
                        <div class="d-grid gap-2">
                            <a href="edit.html?id=${plants.id}" class="btn btn-primary">Edit</a>
                        </div>
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

}


