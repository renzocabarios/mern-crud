import mongoose from "mongoose";
import CONST from "../constants/index.js";

const schema = mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
});

export default mongoose.model(CONST.MODEL.USER, schema);
