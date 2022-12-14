import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./app/db/index.js";
import ENV from "./app/env/index.js";
import userRoute from "./app/routes/user.route.js";

const app = express();

app.use(bodyParser.json(), bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/user", userRoute);

const start = () => {
  connectDB(ENV.MONGO_CON).then(() => {
    console.log(`Database connected to ${ENV.MONGO_CON}`);

    app.listen(ENV.PORT, () => {
      console.log(`Server started on port ${ENV.PORT}`);
    });
  });
};

start();
