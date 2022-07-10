function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    deliveryOrders.push(order)
  }
  return deliveryOrders
}

function refundOrder(num, deliveryOrders) {

  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === num ) {
      deliveryOrders.splice([i], 1);
      return deliveryOrders
    }
  }
}

function listItems(deliveryOrders) {
  let items = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
    items.push(deliveryOrders[i].item);
  }
  return items.join(", ");
}

function searchOrder(deliveryOrders, item) {
  var result = false
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item.includes(item)) {
    result = true
}}
    return result
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
