import createMenu from "./components/createMenu.js";
import { initBanner } from "./utils/renderBanner.js";
import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/displayMessage.js";

createMenu();
initBanner();



const plantUrl = baseUrl + "plants";
const featuredContainer = document.querySelector(".featuredContainer");
const featuredTitle = document.querySelector(".featuredTitle");

featuredContainer.innerHTML = "";

async function callApi() {
    try {
        const response = await fetch(plantUrl);
        const json = await response.json();
        const results = json;

        renderFeaturedProducts(results);

        // console.log(results);
    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".featuredContainer");
    }
}

callApi();

function renderFeaturedProducts(results) {

    featuredContainer.innerHTML = "";

    if (results.isFeatured = true) { 
        featuredTitle.innerHTML += `<h2 class="headerspaceBottom paddingTop">In season</h2>`
    }

    results.forEach(function (product) {

        let isFeatured = product.isFeatured;
        // console.log(isFeatured);

        if (isFeatured) {
            featuredContainer.innerHTML += `<div class="col-sm">
                                            <div class="card" style="width: 18rem;">
                                                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                                                <div class="card-body">
                                                    <h5 class="card-title">${product.name}</h5>
                                                    <p class="card-text">$ ${product.price}</p>
                                                </div>
                                                <div class="card-body">
                                                    <div class="d-grid gap-2">
                                                        <a href="details.html?id=${product.id}"<button class="btn btn-primary" type="button">Details</button></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>`

        }
    });

}







//     featuredContainer.innerHTML = "";

//     results.forEach(function (result) {

//     let isFeatured = result.isFeatured;

//     console.log("isFeatured", isFeatured);

//    if(isFeatured == true) {
//         featuredContainer.innerHTML += `<div class="col-sm">
//                                             <div class="card" style="width: 18rem;">
//                                                 <img src="${result.image}" class="card-img-top" alt="${result.name}">
//                                                 <div class="card-body">
//                                                     <h5 class="card-title">${result.name}</h5>
//                                                     <p class="card-text">$ ${result.price}</p>
//                                                 </div>
//                                                 <div class="card-body">
//                                                     <div class="d-grid gap-2">
//                                                         <a href="details.html?id=${result.id}"<button class="btn btn-primary" type="button">Details</button></a>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>`

//         } else {
//             featuredContainer.innerHTML = "";
//         }


//     })
// }

// callApi();




