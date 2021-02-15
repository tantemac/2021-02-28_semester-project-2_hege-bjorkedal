import { getUserName } from "../utils/storage.js";

const plantContainer = document.querySelector(".apiContainer");

export function renderPlants(json) {

    const username = getUserName();

    plantContainer.innerHTML = "";

    json.forEach(function (plants) {

    if (username) {
        plantContainer.innerHTML += `<div class="row">
            <div class="col-sm">
                <img src="${plants.image}">
                <h4>${plants.name}</h4>
                <p>Price: ${plants.price}</p>
                <a href="edit.html?id=${plants.id}"><i class="far fa-edit"></i></a>
            </div>
        </div>`
    } else {
        `<div class="row">
            <div class="col-sm">
                <img src="${plants.image}>
                <h4>${plants.name}</h4>
                <p>Price: ${plants.price}</p>
            </div>
        </div>`
    }
});

}