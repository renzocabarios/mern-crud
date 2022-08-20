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

const update = async (id, body) => {
  return await model.findByIdAndUpdate({ _id: id }, body, { new: true });
};

const deleteById = async (id) => {
  return await model.findByIdAndDelete({ _id: id });
};

export default { getAll, getById, add, update, deleteById };
