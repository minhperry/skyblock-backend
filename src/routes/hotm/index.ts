import express from "express";
import {hotmHandler} from "./handlers";

const hotmRouter = express.Router();

// Base: /api/v1/hotm
hotmRouter.get('/', hotmHandler)

export default hotmRouter;
