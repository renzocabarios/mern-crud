import { Router } from "express";
import {
  getAll,
  getModelById,
  addModel,
  updateModel,
  deleteModelById,
} from "../controller/user.controller.js";

const router = Router();
router.route("/").get(getAll).post(addModel);
router
  .route("/:id")
  .get(getModelById)
  .patch(updateModel)
  .delete(deleteModelById);

export default router;
