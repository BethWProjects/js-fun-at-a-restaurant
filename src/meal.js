function nameMenuItem(food) {
  return `Delicious ${food}`
}

function createMenuItem() {
  var menuItem = {
    name: "Delicious French Toast",
    price: "10.99",
    type: "breakfast"
  }
  return menuItem
}

function addIngredients(food, ingredients) {
  if (ingredients.includes(food)) {
    ingredients.pop();
  }
    ingredients[ingredients.length] = food;
    console.log(ingredients);
    //return ingredients
}

function formatPrice() {
  return `$`+ price; 
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  // decreasePrice,
  // createRecipe
}
