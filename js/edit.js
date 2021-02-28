import createMenu from "./components/createMenu.js";
import { getToken } from "./utils/storage.js";
import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/displayMessage.js";
import deleteButton from "./components/deleteButton.js";

createMenu();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
    document.location.href = "/";
}

const productUrl = baseUrl + "plants/" + id;

const form = document.querySelector("form");
const name = document.querySelector("#name");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const image = document.querySelector("#image");
const featured = document.querySelector("#featured");
const idInput = document.querySelector("#id");
const message = document.querySelector(".messageContainer");

(async function() {
    try {
        const response = await fetch(productUrl);
        const details = await response.json();

        name.value = details.name;
        price.value = details.price;
        description.value = details.description;
        image.value = details.image;
        idInput.value = details.id;

        if(details.isFeatured) {
            featured.checked = true;
        }

        deleteButton(details.id);

        // console.log(details);

    } catch (error) {
        console.log(error);
    }

})();

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    message.innerHTML = "";

    const nameValue = name.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();
    const imageValue = image.value.trim();
    const featuredValue = featured.checked;
    const idValue = idInput.value;
    

    if(nameValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0 || imageValue.length === 0) {
        return displayMessage("warning", "Please provide proper product details before editing product", ".messageContainer");
    }


    updateProduct(nameValue,priceValue, descriptionValue, imageValue, featuredValue, idValue);

}

async function updateProduct(name, price, description, image, isFeatured, id) {

    const url = baseUrl + "plants/" + id;
    const data = JSON.stringify({name: name, price: price, description: description, image: image, isFeatured});
    const token = getToken();

    const options = {
        method: "PUT", 
        body: data, 
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json(); 
        console.log(json);

        if(json.updated_at) {
            displayMessage("success", "Product updated", ".messageContainer");
        }

        if(json.error) {
            displayMessage("error", json.message, ".messageContainer");
        }

    } catch(error) {
        console.log(error)
    }
}