import express from "express";
import userController from "./controller/user.controller.js";

const router = express();

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.post("/logout", userController.logout);

export default router;
