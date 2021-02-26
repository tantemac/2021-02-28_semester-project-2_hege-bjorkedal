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
            // bannerContainer.innerHTML += `<div style="background-image: url(${image}); background-repeat: no-repeat; width: 100%; height: 100%;"></div>`
            bannerContainer.innerHTML += `<img src="${banner.heroBanner}" class="img-fluid">
                                            <div>Make your home green</div>
                                            <a href="products.html"><button type="button" class="btn btn-outline-dark btn-lg">View plants</button></a>`
        } else {
            console.log(error);
            displayMessage("error", error, ".bannerContainer")
        }
    });
};

export function initBanner() {
getBannerFromAPI();
}