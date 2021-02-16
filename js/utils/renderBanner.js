import { baseUrl } from "../settings/api.js";
// import displayMessage from "../components/displayMessage.js";

const bannerContainer = document.querySelector(".bannerContainer");

const bannerUrl = baseUrl + "herobanners";

const getBannerFromAPI = async () => {
    try {
        const response = await fetch(bannerUrl);
        const json = await response.json();

        console.log(json);

        const banner = json;

        renderBanner(banner);
    } catch (error) {
        console.log(error);
        // displayMessage("error", error, ".heroBanner")
    }
};

getBannerFromAPI();

export function renderBanner(json) {

    bannerContainer.innerHTML ="";

    json.forEach(function (banner) {

        if (banner) {
            bannerContainer.innerHTML += `<img src="${banner.heroBanner}" class="img-fluid">`
        } else {
            console.log(error);
            // displayMessage("error", error, ".heroBanner");
        }
    });
};