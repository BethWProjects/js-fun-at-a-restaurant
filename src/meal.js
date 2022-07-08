function nameMenuItem(food) {
  return `Delicious ${food}`
}

function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price,
    type: type
  }
  return menuItem
}

function addIngredients(food, ingredients) {
  if (ingredients.includes(food)) {
    ingredients.pop();
  }
    ingredients[ingredients.length] = food;
    console.log(ingredients);
    return ingredients
}

function formatPrice(price) {
  return `$${price}`
}

function decreasePrice(price) {
  return price - price * .10
}

function createRecipe(title, ingredients, type) {
  recipe = {
    title, ingredients, type
  }
  return recipe
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
