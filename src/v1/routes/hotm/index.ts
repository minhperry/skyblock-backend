import express from "express";
import {hotmHandler} from "./handlers";

const hotmRouter = express.Router();

hotmRouter.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.set('Cache-Control', 'no-store')
  next()
})

// Base: /api/v1/hotm
hotmRouter.get('/', hotmHandler)

export default hotmRouter;
