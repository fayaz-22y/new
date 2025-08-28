class Order {
  constructor({ id, user_id, order_number, total_amount, status, shipping_address, payment_method, payment_status }) {
    this.id = id;
    this.user_id = user_id;
    this.order_number = order_number;
    this.total_amount = total_amount;
    this.status = status;
    this.shipping_address = shipping_address;
    this.payment_method = payment_method;
    this.payment_status = payment_status;
  }
}
module.exports = Order;
