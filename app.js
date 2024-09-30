const express = require("express");
const app = express();
const router = require("./router/main");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.use(error);

app.listen(3000, (err) => {
  if (err) {
    console.log("somthing went wrong");
  } else {
    console.log("running in port 3000");
  }
});

function error(err, req, res, next) {
  res.status(500).json("Please try again");
}
