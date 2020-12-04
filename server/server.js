const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/user");
const cors = require("cors");

dotenv.config();

const app = express();

mongoose.connect(
  process.env.DATABASE,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("connecter à la BDD");
    }
  }
);

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.get("/", (req, res) => {
//   res.json("Amazon site cloner");
// });

// app.post("/", (req, res) => {
//   var user = new User();
//   user.name = req.body.name;
//   user.email = req.body.email;
//   user.password = req.body.password;

//   user.save((err) => {
//     if (err) {
//       res.json(err);
//     } else {
//       res.json("bien enregistrer!!");
//     }
//   });
// });

const productRoutes = require("./routes/product");
app.use("/api", productRoutes);

const categoryRoutes = require("./routes/category");
app.use("/api", categoryRoutes );

const ownerRoutes = require("./routes/owner");
app.use("/api", ownerRoutes );

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("ecouter", 3000);
  }
});
