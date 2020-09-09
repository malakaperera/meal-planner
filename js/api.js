
const BASE_URL = './../assets/random-breakfast.json';

getBreakfastRecipes();

async function getBreakfastRecipes() {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    const recipes = await data.recipes;
    return recipes;
}

export {
    getBreakfastRecipes
}