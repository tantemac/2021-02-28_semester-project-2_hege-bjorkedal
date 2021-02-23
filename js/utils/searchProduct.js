import { renderPlants } from "./renderPlants.js";

export function searchProduct(plantsToRender) {
    const search = document.querySelector(".search");

    search.onkeyup = function (event) {
        console.log(event);

        const searchValue = event.target.value.trim().toLowerCase();

        const filteredPlants = plantsToRender.filter(function (plant) {
            if (plant.name.toLowerCase().includes(searchValue) | plant.description.toLowerCase().includes(searchValue)) {
                return true;
            }
        });

        renderPlants(filteredPlants);
    };
}