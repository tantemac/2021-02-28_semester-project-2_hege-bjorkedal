import { baseUrl } from "../settings/api.js";
import { getToken } from "../utils/storage.js";

export default function deleteButton(id) {

    const container = document.querySelector(".deleteBtnContainer");

    container.innerHTML += `<button type="button" class="btn btn-primary delete">
                            Delete
                            </button>`;

    const button = document.querySelector("button.delete");
    
    button.onclick = async function() {
        console.log(id);

        const doDelete = confirm("Are you sure you want to delete this product?");
        console.log(doDelete);

        if (doDelete) {
            const url = baseUrl + "plants/" + id;
            const token = getToken();
            const options = {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
    
            try {
                const response = await fetch(url, options);
                const json = await response.json();

                location.href = "products.html";
    
                console.log(json);
            } catch(error) {
                console.log(error);
            }
        }
    };
}