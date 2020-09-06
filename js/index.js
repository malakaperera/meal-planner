 const steps = Array.from(document.querySelectorAll('form .step'));
const form = document.querySelector('form');
const nextButton = document.querySelectorAll('form .next-button');
const previousButton = document.querySelectorAll('form .previous-button'); 


nextButton.forEach((button) => {
  button.addEventListener("click", () => {
    //e.preventDefault();
    changeStep('next');
  });
});

previousButton.forEach((button) => {
  button.addEventListener("click", () => {
    //e.preventDefault();
    changeStep('previous');
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const pantryItems = [];
  const allergies = [];
  const preferedDiets = [];

  form.querySelectorAll('input[name="pantry-item"]:checked').forEach((input) => {
    const { name, value } = input;
    pantryItems.push({ name, value });
  });

  form.querySelectorAll('input[name="allergy-item"]:checked').forEach((input) => {
    const { name, value } = input;
    allergies.push({ name, value });
  });

  form.querySelectorAll('input[name="diet-item"]:checked').forEach((input) => {
    const { name, value } = input;
    preferedDiets.push({ name, value });
  });


  console.log('Pantry Items ', pantryItems);
  console.log('Allergy Items ', allergies);
  console.log('Diet Items ', preferedDiets);
  form.reset();

  console.log("Go to Recipes.html");
  window.open("./recipes.html");
  
});

function changeStep(button) {
  let index = 0;
  const active = document.querySelector('.active');
  index = steps.indexOf(active);
  steps[index].classList.remove('active');

  if (button === "next") {
    index++;
  } else if (button === "previous") {
    index--;
  }
  steps[index].classList.add('active');

}



/* const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const form = document.querySelector("form");

nextBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("next");
  });
});
prevBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("prev");
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = [];
  form.querySelectorAll("input").forEach((input) => {
    const { name, value } = input;
    inputs.push({ name, value });
  });
  console.log(inputs);
  form.reset();
});


function changeStep(btn) {
  let index = 0;
  const active = document.querySelector(".active");
  index = steps.indexOf(active);
  steps[index].classList.remove("active");
  if (btn === "next") {
    index++;
  } else if (btn === "prev") {
    index--;
  }
  steps[index].classList.add("active");
} */

