const apiKey = "89c0dd5bc3764ea28ec7085b75df0ce2";
const recipeListEl = document.getElementById("recipe-list");

function displayRecipe(recipes) {
  recipeListEl.innerHTML = ""
  recipes.forEach(recipe => {
    const recipeItemEl = document.createElement("li");
    recipeItemEl.classList.add("recipe-item");
    const recipeImageEl = document.createElement("img");
    recipeImageEl.src = recipe.image
    recipeImageEl.alt = "recipe Image";
    const recipeTitleEl = document.createElement("h2");
    recipeTitleEl.textContent = recipe.title;
    const recipeIngredientsEl = document.createElement("p");
    recipeIngredientsEl.innerHTML = `<strong>Ingredients:</strong> ${recipe.extendedIngredients.map((ingredient) => ingredient.original).join(", ")}`;
    const linkEl = document.createElement("a");
    linkEl.href = recipe.sourceUrl;
    linkEl.textContent = "View More"

    recipeItemEl.appendChild(recipeImageEl)
    recipeItemEl.appendChild(recipeTitleEl)
    recipeItemEl.appendChild(recipeIngredientsEl)
    recipeItemEl.appendChild(linkEl);

    recipeListEl.appendChild(recipeItemEl)
  });
}

async function getRecipes() {
  const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${apiKey}`);

  const data = await response.json();

  return data.recipes;
};

async function init() {
  const recipes = await getRecipes();
  console.log(recipes);

  displayRecipe(recipes);
};

init();