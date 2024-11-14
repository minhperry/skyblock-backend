import express, {Express} from "express";
import dotenv from "dotenv";
import profileRouter from "./routes/profiles";
import hotmRouter from "./routes/hotm";
import {SkyblockProfile, SkyblockProfileData} from "./api/profiles";
import {MiningStats, HotmNodeNames} from "./utils/types";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

const apiV1 = express.Router();
// apiV1 = /api/v1/, .use('path') = /api/v1/path
apiV1.use('/profiles', profileRouter)
apiV1.use('/hotm', hotmRouter)

// apiV1.use('/mining/', miningRouter)

app.use('/', apiV1)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

// https://stackoverflow.com/questions/27712768/how-to-modularize-routing-with-node-js-express
