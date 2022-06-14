const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const morgan = require("morgan");
const authRoutes = require("./Routes/authRoutes");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

//middleware array
const middleware = [
  morgan("dev"),
  express.urlencoded({ extended: true }),
  express.json(),
];
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(middleware);
app.use("/", authRoutes);
app.use(cookieParser());


app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

mongoose
  .connect("mongodb://localhost:27017/node-test")
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
