function greetUser(name) {
  if (name === "Admin") {// исправлено с = на ===
    console.log("Welcome, administrator!");
  } else {
    console.log("Hello, " + name + "!");
  }
}