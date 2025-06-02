import express from "express";
import { sendMail } from "../controllers/emailController";

const emailRoutes = express.Router();

emailRoutes.post('/sendMail', sendMail)

export default emailRoutes;