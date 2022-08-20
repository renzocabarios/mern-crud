import model from "../model/user.model.js";

const getAll = async () => {
  return await model.find();
};

const getById = async (id) => {
  return await model.findById({ _id: id });
};

const add = async (body) => {
  return await model.create(body);
};

