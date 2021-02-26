import { getUserName } from "../utils/storage.js";
import logoutButton from "./logoutButton.js";

export default function createMenu() {
    const { pathname } = document.location;

    // console.log(pathname);

    const username = getUserName();

    let authLink = `<li class="nav-item">
                        <a class="menuIcon nav-link ${pathname === "/login.html" ? "active" : ""}" href="login.html"><i class="fas fa-user-circle fa-1x"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="menuIcon nav-link ${pathname === "/cart.html" ? "active" : ""}" href="cart.html"><i class="fas fa-shopping-cart fa-1x"></i></a>
                    </li>`;

    if(username) {
        authLink = `<li class="nav-item">
                        <a class="nav-link ${pathname === "/add.html" ? "active" : ""}" aria-current="page" href="add.html">Add product</i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${pathname === "/products.html" ? "active" : ""}" aria-current="page" href="products.html">Edit product</a>
                    </li>
                    <li class="nav-item">
                        <button class="btn btn-outline-primary btn-md menuIcon" id="logout">Logout</button>
                    </li>`;
    }

    // console.log(username);

    const container = document.querySelector(".menuContainer");

    container.innerHTML = `<button class="navbar-toggler" 
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            >
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link ${pathname === "/index.html" ? "active" : ""}" aria-current="page" href="index.html">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link ${pathname === "/products.html" ? "active" : ""}" href="products.html">Products</a>
                                    </li>
                                    ${authLink}
                                </ul>
                            </div>`;

    logoutButton();

}