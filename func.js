function greetUser(name) {
  if (name = "Admin") { // ❌ Ошибка: используется оператор присваивания (=) вместо оператора сравнения (===)
    console.log("Welcome, administrator!");
  } else {
    console.log("Hello, " + name + "!");
  }
}
