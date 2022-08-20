import service from "../service/user.service.js";
import bcrypt from "bcrypt";
import ENV from "../env/index.js";

const getAll = async (req, res) => {
  const data = await service.getAll();
  res.send({
    data,
    status: "success",
    message: "Successfully retrieved all users",
  });
};

const getModelById = async (req, res) => {
  const { id } = req.params;
  const data = await service.getById(id);
  res.send({
    data: [data],
    status: "success",
    message: "Successfully retrieved user",
  });
};

const addModel = async (req, res) => {
  const { password, ...rest } = req.body;
  const encrypted = await bcrypt.hash(password, ENV.HASH_SALT);
  console.log({ password: encrypted, ...rest });
  const data = await service.add({ password: encrypted, ...rest });
  res.send({
    data: [data],
    status: "success",
    message: "Successfully added a user",
  });
};

const updateModel = async (req, res) => {
  const { id } = req.params;
  const { password, ...rest } = req.body;
  const data = await service.update(id, { rest });
  res.send({ data, status: "success", message: "Successfully updated a user" });
};

const deleteModelById = async (req, res) => {
  const { id } = req.params;
  const data = await service.deleteById(id);
  res.send({ data, status: "success", message: "Successfully deleted a user" });
};

export { getAll, getModelById, addModel, updateModel, deleteModelById };
