function createRestaurant(name, menus, pizzaRestaurant, arepaRestaurant) {
  pizzaRestaurant =
  {
    name: name,
    menus: {breakfast:[], lunch:[], dinner:[]}
  }

  //var pizzaRestaurant;
  // console.log(pizzaRestaurant)
  // console.log(arepaRestaurant)
  // console.log("Menus test: ", pizzaRestaurant.menus)
  //console.log(pizzaRestaurant.menus)
  // for (var i = 0; i < pizzaRestaurant; i++)
  // if (pizzaRestaurant.name[i])
  return pizzaRestaurant
}

function addMenuItem(pizzaRestaurant, food) {
  if (food.type === "lunch" && !pizzaRestaurant.menus.lunch.includes(food)) {
  pizzaRestaurant.menus.lunch.push(food)
} else if (food.type === "breakfast" && !pizzaRestaurant.menus.breakfast.includes(food)) {
  pizzaRestaurant.menus.breakfast.push(food)
} else if (food.type === "dinner" && !pizzaRestaurant.menus.dinner.includes(food)) {
  pizzaRestaurant.menus.dinner.push(food)
}

  // console.log("What is in pizza restaurant?", pizzaRestaurant)
  // console.log("lunch?", pizzaRestaurant.menus)
}

function removeMenuItem(restaurant, food, type) {
    for (var i = 0; i < restaurant.menus[type].length; i++) {
      restaurant.menus[type].splice(i, 1)
      return `No one is eating our ${food} - it has been removed from the ${type} menu!`
    }
    if (!restaurant.menus[type].includes(food)) {
    return `Sorry, we don't sell ${food}, try adding a new recipe!`
  }
}


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
