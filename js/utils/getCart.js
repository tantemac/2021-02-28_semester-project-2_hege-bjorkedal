export function getExistingCart() {

    const cart = localStorage.getItem("cartProducts");

    // console.log(cart);

    if(!cart) {
        return [];
    } else {
        return JSON.parse(cart);
    }
}
