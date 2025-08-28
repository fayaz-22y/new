class Product {
  constructor({ id, name, description, price, category, brand, size_range, color, image_url, stock_quantity }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
    this.brand = brand;
    this.size_range = size_range;
    this.color = color;
    this.image_url = image_url;
    this.stock_quantity = stock_quantity;
  }
}
module.exports = Product;
