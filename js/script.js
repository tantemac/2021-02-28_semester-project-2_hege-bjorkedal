import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/displayMessage.js";
import createMenu from "./components/createMenu.js";
import { renderPlants } from "./utils/renderPlants.js";
import { renderBanner } from "./utils/renderBanner.js";


const plantUrl = baseUrl + "plants";

createMenu();
renderBanner();

const getProductsFromAPI = async () => {
    try {
        const response = await fetch(plantUrl);
        const json = await response.json();

        console.log(json);

        const plants = json;

        renderPlants(plants);
    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".apiContainer")
    }
};

getProductsFromAPI();
