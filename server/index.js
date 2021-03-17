const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./controllers/userRoutes");

const MONGO_URI =
  "mongodb+srv://peter:test123@cluster0.rl0o1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const users = [];

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send(`<h1>Welcome Home 2</h1>`);
});

app.use("/users", userRoutes);

const start = async () => {
  try {
    await mongoose
      .connect("mongodb://localhost:27017/mongo-test", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((db) => console.log("mongodb connected"))
      .catch((err) => console.log(err));

    app.listen(PORT, (err) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }

      console.log(`server started on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
