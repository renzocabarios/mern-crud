import model from "../model/user.model.js";

const getAll = async () => {
  return await model.find();
};

