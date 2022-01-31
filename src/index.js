const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hello World");
});

app.post("/users", (req, res) => {
  const { name, age, email } = req.body; //in object i want name age email what goes to server is always in body

  //const name = req.body.name //means were deconstructing

  const user = { name, age, email };

  const result = `my name is ${user.name}, i am ${user.age} years old and my email is ${user.email}`;

  res.send(result);
});

app.listen(3000, () => {
  console.log("We be listening on 3000");
});
