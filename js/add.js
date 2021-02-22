import displayMessage from "./components/displayMessage.js";
import createMenu from "./components/createMenu.js";
import { getToken } from "./utils/storage.js";
import { baseUrl } from "./settings/api.js";

createMenu();

const form = document.querySelector("form");
const name = document.querySelector("#name");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const image = document.querySelector("#image");
const message = document.querySelector(".messageContainer");

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    message.innerHTML = "";

    const nameValue = name.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();
    const imageValue = image.value.trim();

    if(nameValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0 || imageValue.length === 0) {
        return displayMessage("warning", "Please provide proper product details before adding product", ".messageContainer");
    }

    addProduct(nameValue, priceValue, descriptionValue, imageValue);

    console.log("nameValue", nameValue);
    console.log("priceValue", priceValue);
    console.log("descriptionValue", descriptionValue);
    console.log("imageValue", imageValue);

}

async function addProduct(name, price, description, image) {
    const url = baseUrl + "plants";

    console.log("url",url);

    const data = JSON.stringify({name: name, price: price, description: description, image: image });

    const token = getToken();

    const options = {
        method: "POST", 
        body: data, 
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        console.log(json)

        if(json.created_at) {
            displayMessage("success", "Product added", ".messageContainer");
        }

        if(json.error) {
            displayMessage("error", json.message, ".messageContainer");
        }

    } catch(error) {
        console.log(error)
    }
}