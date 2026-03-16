const productsCategoryContainer = document.getElementById("products-category-container");

document.getElementById("products-btn").addEventListener("click", () => {
    productsCategoryContainer.innerHTML = "";

    const title = document.createElement("p");
    title.classList.add("text-2xl", "font-bold");
    title.innerText = "Our Products";

    productsCategoryContainer.appendChild(title);

    loadProductsCategory();
})

const loadProductsCategory = () => {
    fetch("https://fakestoreapi.com/products/categories")
        .then(res => res.json())
        .then(categories => displayProductsCategory(categories))
}

const displayProductsCategory = (categories) => {
    const productsCategoryDiv = document.createElement("div");
    productsCategoryDiv.classList.add("flex", "gap-3", "flex-wrap");

    const allBtn = document.createElement("button");
    allBtn.classList.add("btn", "btn-primary");
    allBtn.innerText = "ALL";

    productsCategoryDiv.appendChild(allBtn);

    categories.forEach(category => {

        const productCategoryBtn = document.createElement("button");
        productCategoryBtn.classList.add("btn", "btn-primary");
        productCategoryBtn.innerText = category;
       
        productsCategoryDiv.appendChild(productCategoryBtn);
    })

    productsCategoryContainer.appendChild(productsCategoryDiv);
}