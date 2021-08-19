const cartBtn = document.querySelector('.cart-btn');
const closeCartBtn = document.querySelector('.close-cart');
const clearCartBtn = document.querySelector('.clear-cart');
const cartDOM = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
const productsDOM = document.querySelector('.products-center');

//cart for purchased items to be pushed into 
let cart = [];

//getting products 
class Products {
    async getProducts() {
        //fetching and destructuring json data
        try{
    let result = await fetch('products.json');
    let data = await result.json();
    let products = data.items;
    products = products.map(item => {
        const {title, price} = item.fields;
        const {id} = item.sys;
        //structure due to usage of contentful : / but it sorta makes sense
        const image = item.fields.image.fields.file.url;
        return {title, price, id , image}
    })
        return products;
        }
        catch (err) {
            console.log(err);
        }
    }
}

//displaying products
class UI {

}

//local storage 
class Storage {

}

document.addEventListener('DOMContentLoaded' , () => {
const ui = new UI();
const products = new Products();

products.getProducts().then(data => console.log(data))
})





