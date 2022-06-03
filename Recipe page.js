let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};
let ingredientList = recipeObj.ingredients;

let recipeTitleEl = document.getElementById("recipeTitle");
recipeTitleEl.textContent = recipeObj.title;

let imgContainerEl = document.getElementById("imgContainer");
let imgEl = document.getElementById("img");
imgEl.setAttribute("src", recipeObj.imgSrc);
imgContainerEl.appendChild(imgEl);

let ingredientItemContainerEl = document.getElementById("ingredientItemContainer");
for (let ingredient of ingredientList) {
    let ingredientItemEl = document.createElement("li");
    ingredientItemEl.classList.add("ingredient");
    ingredientItemEl.textContent = ingredient;
    ingredientItemContainerEl.appendChild(ingredientItemEl);
}