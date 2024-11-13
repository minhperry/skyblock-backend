import express from "express";
import {levelHandler, powderAmountHandler} from "./handlers";

const hotmRouter = express.Router();

// Base: /api/v1/hotm
hotmRouter.get('/powders', powderAmountHandler)
hotmRouter.get('/level', levelHandler)

export default hotmRouter;
