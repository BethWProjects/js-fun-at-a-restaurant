function createRestaurant(name, menus, pizzaRestaurant, arepaRestaurant, breakfast, lunch, dinner) {
  pizzaRestaurant =
  {
    name: name,
    menus: {breakfast:[], lunch:[], dinner:[]}
  }

  //var pizzaRestaurant;
  console.log(pizzaRestaurant)
  console.log(arepaRestaurant)
  console.log("Menus test: ", pizzaRestaurant.menus)
  //console.log(pizzaRestaurant.menus)
  // for (var i = 0; i < pizzaRestaurant; i++)
  // if (pizzaRestaurant.name[i])
  return pizzaRestaurant
}

module.exports = {
  createRestaurant,
  // addMenuItem,
  // removeMenuItem
}
