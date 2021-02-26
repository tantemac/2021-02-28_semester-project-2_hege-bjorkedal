import { baseUrl } from "../settings/api.js";
import displayMessage from "../components/displayMessage.js";

const bannerContainer = document.querySelector(".bannerContainer");

const bannerUrl = baseUrl + "herobanners";

const getBannerFromAPI = async () => {
    try {
        const response = await fetch(bannerUrl);
        const json = await response.json();

        // console.log(json);

        renderBanner(json);
    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".bannerContainer")
    }
};

function renderBanner(json) {

    bannerContainer.innerHTML ="";

    json.forEach(function (banner) {

        if (banner) {

            bannerContainer.innerHTML += `<img src="${banner.heroBanner}" class="img-fluid">
                                            <div class="absoluteContainer">
                                                <h1>Make your home green</h1>
                                                <a href="products.html"><button type="button" class="btn btn-outline-dark btn-lg">View plants</button></a>
                                            </div>`

        } else {
            console.log(error);
            displayMessage("error", error, ".bannerContainer")
        }
    });
};

export function initBanner() {
getBannerFromAPI();
}
