const loadProducts = (category) => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res => res.json())
        .then(products => displayProducts(products))
}

const loadAllProducts = () => {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(products => displayProducts(products))
}

const displayProducts = (products) => {
    const productsContainer = document.getElementById("products-container");
    productsContainer.innerHTML = "";

    products.forEach(product => {
        console.log(product);
        const card = document.createElement("div");

        card.innerHTML = `
            <div class="card bg-base-100 h-104 shadow-sm">
            <figure class="bg-gray-200">
                <img class="h-56"
                src= "${product.image}"
                alt="Shoes" />
            </figure>
            <div class="card-body">
                <div class="flex justify-between">
                <h3 class="bg-purple-300 px-2 font-medium rounded text-lg">${product.category}</h3>
                <h3 class="font-medium text-slate-400 text-lg"><i class="fa-solid fa-star text-yellow-500"></i>${product.rating.rate} (${product.rating.count})</h3>
                </div>
                <h2 class="card-title w-full line-clamp-1 font-semibold">
                ${product.title}
                </h2>
                <h1 class="text-2xl font-bold">$${product.price}</h1>
                <div class="flex justify-between">
                    <button class="btn"><i class="fa-regular fa-eye"></i>Details</button>
                    <button class="btn btn-primary"><i
                            class="fa-solid fa-cart-plus"></i>Add</button>
                </div> 
            </div>
            </div>
        `
        productsContainer.appendChild(card);

//         "id": 1,
// "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
// "price": 109.95,
// "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
// "category": "men's clothing",
// "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
// "rating": {
// "rate": 3.9,
// "count": 120
    })
}