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

    console.log("priceValue", priceValue);

    if(nameValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0 || imageValue.length === 0) {
        displayMessage("warning", "Please provide proper product details before adding product", ".messageContainer");
    }

    addProduct(nameValue, priceValue, descriptionValue, imageValue);

}

async function addProduct(name, price, description, image) {
    const url = baseUrl + "plants";

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

    } catch(error) {
        console.log(error)
    }
}