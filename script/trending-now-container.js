const loadAllProductsForTrending = () => {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(products => displayTrendingProducts(products))
}

const displayTrendingProducts = (products) => {

    const topThreeRattingProducts = [...products].sort((a, b) => b.rating.rate - a.rating.rate).slice(0, 3);

    const trendingNowContainer = document.getElementById("trending-now-container");
    trendingNowContainer.innerHTML = "";

    topThreeRattingProducts.forEach(product => {

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
                <h3 class="bg-violate-300 px-2 font-medium rounded text-lg">${product.category}</h3>
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
        trendingNowContainer.appendChild(card);
    })
}

loadAllProductsForTrending();