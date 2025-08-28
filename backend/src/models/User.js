class User {
  constructor({ id, email, password, first_name, last_name, phone }) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.first_name = first_name;
    this.last_name = last_name;
    this.phone = phone;
  }
}
module.exports = User;
