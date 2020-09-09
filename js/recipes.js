import { getBreakfastRecipes } from "./api.js";

const recipesContainer = document.querySelector(".recipes-grid");

/* Testing */
const userPreferences = localStorage.getItem("UserPreferences");

//get Recipe Data
/* const recipeData = getBreakfastRecipes();
console.log("from recipes: ", recipeData); */

generateHTML();

function generateHTML() {
  let generatedHTML = "";

  getBreakfastRecipes().then((recipes) => {
    recipes.map((recipe) => {
      console.log(recipe);
      generatedHTML += `
      <li class="recipe-item">
                    <img src="${recipe.image}" alt="pasta" srcset="">
                    <div class="recipe-info">
                        <h4>${recipe.title}</h4>
                        <p>healthy</p>
                    </div>
                </li>
            `;
    });
    recipesContainer.innerHTML = generatedHTML;
  });

  /*     recipes.map((recipe) => {
        console.log("html: ", recipe);
        generateHTML += `
        <div class="item">
            <img src="${recipe.image}" alt="img">
        </div>
        `
    }); */
}
