const products = [
        { id: 1, name: "Radio", Image: "data:image/;base64,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", price: 680 },
        { id: 2, name: "laptop", Image: "https://th.bing.com/th?id=OPHS.hgzOvXQ%2fYkNWew474C474&w=143&h=122&c=17&qlt=100&o=6&dpr=2&pid=3.11", price: 1550 },
        { id: 3, name: "watch", Image: "https://www.bing.com/th?id=OIP.2FhYSQT91VIipHlxrqoOzQHaHa&w=161&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2", price: 800 },
        { id: 4, name: "cycle", Image: "https://www.bing.com/th?id=OIP.5UXekoE4Ie7NGMU2fQ3jwAHaEq&w=177&h=185&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2", price: 5000 },
        { id: 5, name: "Mobile", Image: "https://th.bing.com/th?id=ODL.378872c428776967cb7065009016be29&w=94&h=146&c=7&rs=1&qlt=80&o=6&pid=RichNav", price: 20000 },
        { id: 6, name: "Toy", Image: "https://www.bing.com/th?id=OIP.0lhRqMnywcnBtz1S1oK1MQHaFG&w=189&h=185&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2", price: 68 },
        { id: 7, name: "Mouse", Image: "https://th.bing.com/th?id=OPHS.alvLlkHuc%2b6ZiA474C474&w=130&h=78&c=17&o=6&pid=21.1", price: 200 },
        { id: 8, name: "speaker", Image: "https://www.bing.com/th?id=OIP.medH8AHxIVWF2APIhp3NggHaHa&w=141&h=150&c=8&rs=1&qlt=90&o=6&cb=15&pid=3.1&rm=2", price: 5000 },
        { id: 9, name: "Bag", Image: "data:image/jpeg;base64,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", price: 1500 },
        { id: 10, name: "airphone", Image: "https://www.bing.com/th?id=OIP.8KUO8ss_kumIVcmKWuxEAAHaIb&w=128&h=150&c=8&rs=1&qlt=90&o=6&cb=15&pid=3.1&rm=2", price: 3000 },
    ]
    // Render Products

function renderProducts(products, productList) {
    const container = document.getElementById(productList);
    container.innerHTML = "";
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product-item");
        productDiv.innerHTML = `
            <img src="${product.Image}"/>
            <h3>${product.name}</h3>
            <h2>${product.price}</h2>
            <button onclick = "addToCart(${product.id})">Add to Cart</button>
            `
        container.appendChild(productDiv);
    })
}

// Search fuctionality
function searchProduct(query) {
    const filterProducts = products.filter(product =>
        product.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    )
    renderProducts(filterProducts, "productList");
}

//Add EventListner to button
document.getElementById("searchButton") ? .addEventListener("click", () => {
        const query = document.getElementById("productSearch").value;
        searchProduct(query);

    })
    // Sorting
function sortProducts(criteria) {
    if (criteria === "price") {
        return products.sort((a, b) => a.price - b.price);
    }
    return products;
}

//Adding Event listners
document.getElementById("sortOptions") ? .addEventListener("change", (event) => {
    const sortedproducts = sortProducts(event.target.value);
    renderProducts(sortedproducts, "productList");
})


//Add to cart

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} is added to cart`)
    renderCart();
}

// Render items in cart

function renderCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const container = document.getElementById("cartItems");
    container.innerHTML = "";
    if (cart.length == 0) {
        container.innerHTML = "<h1>Your cart is Empty</h1>"
    }
    cart.forEach(item => {
        const cartDiv = document.createElement("div");
        cartDiv.classList.add("cart-item");
        cartDiv.innerHTML = `
            <img src="${item.Image}"/>
            <h3>${item.name}</h3>
            <h2>${item.price}</h2>
            <button onclick="removeFromCart(${item.id})">Remove</button>
            `
        container.appendChild(cartDiv);
    })
}

//Remove from cart
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`Product is removed successfully`);
    renderCart();
}

// Calculate subtotal
function renderSubtotal(cart) {
    const subtotal = cart.reduce((total, item) => total + item.price, 0);
    const subtotalContainer = document.getElementById("subtotal");
    if (cart.length > 0) {
        subtotalContainer.innerHTML = `Subtotal :Rs. ${subtotal}`
    } else {
        subtotalContainer.innerHTML = `No items in the cart`
    }
}

if (document.getElementById("productList")) renderProducts(products, "productList");
if (document.getElementById("cartItems")) renderCart();