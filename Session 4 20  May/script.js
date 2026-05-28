function processUser(name, callback) {
  console.log("Processing user: " + name);
  callback(name);
}

function welcome(name) {
  console.log("Welcome, " + name);
}

processUser("Aman", welcome);
