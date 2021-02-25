import { baseUrl } from "../settings/api.js";
import displayMessage from "../components/displayMessage.js";

const plantUrl = baseUrl + "plants";
const featuredContainer = document.querySelector(".featuredContainer");

const getFeaturedProductsFromApi = async () => {
    try {
        const response = await fetch(plantUrl);
        const json = await response.json();

        console.log(json);

        const results = json;


        renderFeaturedProducts(results);

    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".featuredContainer")
    }
};

function renderFeaturedProducts(results) {

    results.forEach(function (featuredProducts) {
        
        let isFeatured = results.isFeatured;

        if(isFeatured == false) {
            featuredContainer.innerHTML += `<div class="col-sm">
                                                <div class="card" style="width: 18rem;">
                                                    <img src="${featuredProducts.image}" class="card-img-top" alt="${featuredProducts.name}">
                                                    <div class="card-body">
                                                        <h5 class="card-title">${featuredProducts.name}</h5>
                                                        <p class="card-text">$ ${featuredProducts.price}</p>
                                                    </div>
                                                    <div class="card-body">
                                                        <div class="d-grid gap-2">
                                                            <a href="details.html?id=${featuredProducts.id}"<button class="btn btn-primary" type="button">Details</button></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>`
            
            } else {
                featuredContainer.innerHTML = "";
            }
            
    });
}

export function initFeaturedProducts() {

    getFeaturedProductsFromApi();
    
    }



// async function callApi() {
//     const response = await fetch(plantUrl);
//     const json = await response.json();

//     const results = json;

//     console.log(results);

//     results.forEach(function (result) {

//     let isFeatured = result.isFeatured;

//     if(isFeatured == true) {
//         featuredContainer.innerHTML += `    
//                                         <div class="col-sm">
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




