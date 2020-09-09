'use strict';

const steps = Array.from(document.querySelectorAll("form .step"));
const form = document.querySelector("form");
const nextButton = document.querySelectorAll("form .next-button");
const previousButton = document.querySelectorAll("form .previous-button");

//Functions
function changeStep(button) {
  let index = 0;
  const active = document.querySelector(".active");
  index = steps.indexOf(active);
  steps[index].classList.remove("active");

  if (button === "next") {
    index++;
  } else if (button === "previous") {
    index--;
  }
  steps[index].classList.add("active");
 
}

function getUserIngredients() {
  const userIngredients = [];

  form
    .querySelectorAll('input[name="pantry-item"]:checked')
    .forEach((input) => {
      /*       const { name, value } = input;
      userIngredients.push({ name, value }); */

      const ingredient = input.value;
      userIngredients.push(ingredient);
    });

  console.log("ingredients ", userIngredients);

  return userIngredients;
}

function getUserAllergies() {
  const userAllergies = [];

  form
    .querySelectorAll('input[name="allergy-item"]:checked')
    .forEach((input) => {
      /*       const { name, value } = input;
      userAllergies.push({ name, value }); */

      const allergy = input.value;
      userAllergies.push(allergy);
    });

  return userAllergies;
}

function getUserDiets() {
  const userDiets = [];

  form.querySelectorAll('input[name="diet-item"]:checked').forEach((input) => {
    /*     const { name, value } = input;
    userDiets.push({ name, value }); */

    const diet = input.value;
    userDiets.push(diet);
  });

  return userDiets;
}

function getUserPreferences(event) {
  event.preventDefault();

  const preferences = {
    "someRef": "BUTTER",
    ingredients: getUserIngredients(),
    allergies: getUserAllergies(),
    diets: getUserDiets(),
  };

  //alert("ingre: " + preferences.diets + "   " + preferences.allergies);

  console.warn("Added ", {preferences});

  //saving to localstorage
  localStorage.setItem("UserPreferences", JSON.stringify(preferences));

  window.location.href = './recipes.html';
}

function saveToLocal() {

}


document.addEventListener("DOMContentLoaded", () => {

  //Event Listners
  nextButton.forEach((button) => {
    button.addEventListener("click", () => {
      changeStep("next");
    });
  });
  
  previousButton.forEach((button) => {
    button.addEventListener("click", () => {
      changeStep("previous");
    });
  });
  
  if (form)
  form.addEventListener('submit', getUserPreferences);
  //console.log('Print: ', getUserPreferences());
});
