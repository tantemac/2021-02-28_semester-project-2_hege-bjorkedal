import createMenu from "./components/createMenu.js";
import displayMessage from "./components/displayMessage.js";
import { saveToken, saveUser } from "./utils/storage.js";
import { baseUrl } from "./settings/api.js";


const form = document.querySelector("#loginForm");
const username = document.querySelector("#inputUsername");
const password = document.querySelector("#InputPassword");
const message = document.querySelector(".messageContainer");

createMenu();

form.addEventListener("submit", submitForm);

function submitForm(event) {

    event.preventDefault();

    message.innerHTML = "";

    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if(usernameValue.length === 0 || passwordValue.length === 0) {
        return displayMessage ("warning", "Invalid values", ".messageContainer");
    }

    doLogin(usernameValue, passwordValue);

}

async function doLogin(username, password) {
    
    const url = baseUrl + "auth/local";

    const data = JSON.stringify({ identifier: username, password: password});

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json"
        }
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);

        if(json.user) {

            saveToken(json.jwt);
            saveUser(json.user);

            location.href = "index.html";
        }

        if(json.error) {
            displayMessage("warning", "Invalid login details", ".messageContainer");
        }

    } catch(error) {
        console.log(error);
    }

}