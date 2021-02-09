import { baseUrl } from "./settings/api.js";
// import { renderPlants} from "./utils/renderPlants.js";


const plantUrl = baseUrl + "plants";

const getProductsFromAPI = async () => {
    try {
        const response = await fetch(plantUrl);
        const json = await response.json();

        console.log(json);

        const plants = json;

        // renderArticles(plants);
    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".apiContainer")
    }
};

getProductsFromAPI();