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
