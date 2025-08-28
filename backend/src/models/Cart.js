class CartItem {
  constructor({ id, user_id, product_id, quantity }) {
    this.id = id;
    this.user_id = user_id;
    this.product_id = product_id;
    this.quantity = quantity;
  }
}
module.exports = CartItem;
