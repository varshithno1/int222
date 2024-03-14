const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const jwt = require("jsonwebtoken");
const jwtpassword = "12345";

const All_users = [
  {
    username: "raunakraj544@gmail.com",
    password: "raunak1234",
    name: "raunak raj",
  },
  {
    username: "anuragvardhan12@gmail.com",
    password: "anurag1234",
    name: "Anurag vardhan",
  },
  {
    username: "Rohan123@gmail.com",
    password: "rohan1234",
    name: "Rohan raj",
  },
];

function userValidate(req, res, next) {
  let flag = false;
  const { username, password } = req.body;
  for (user in All_users) {
    if (
      username == All_users[user].username &&
      password == All_users[user].password
    ) {
      flag = true;
      break;
    } else {
      continue;
    }
  }
  if (flag == false) {
    res.status(404).json({
      msg: "User Not Found",
    });
  } else {
    next();
  }
}

app.post("/sign", userValidate, (req, res) => {
  var token = jwt.sign({ username: req.body.username }, jwtpassword);
  res.status(200).json({
    token,
  });
});

app.listen(3000);