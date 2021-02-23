import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/displayMessage.js";
import createMenu from "./components/createMenu.js";
import { renderPlants } from "./utils/renderPlants.js";
import { searchProduct } from "./utils/searchProduct.js";


const plantUrl = baseUrl + "plants";

createMenu();


const getProductsFromAPI = async () => {
    try {
        const response = await fetch(plantUrl);
        const json = await response.json();

        console.log(json);

        const plantsToRender = json;

        renderPlants(plantsToRender);
        searchProduct(plantsToRender);
        
    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".apiContainer")
    }
};

getProductsFromAPI();