import express, {Express} from "express";
import dotenv from "dotenv";
import profileRouter from "./routes/profiles";
import hotmRouter from "./routes/hotm";
import {SkyblockProfile, SkyblockProfileData} from "./api/profiles";
import {MiningStats} from "./utils/types";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

const apiV1 = express.Router();
// apiV1 = /api/v1/, .use('path') = /api/v1/path
apiV1.use('/profiles', profileRouter)
apiV1.use('/hotm', hotmRouter)

// apiV1.use('/mining/', miningRouter)

app.use('/api/v1', apiV1)
app.use('/test', async () => {
  try {
    const profile = await SkyblockProfile.create('minhperry02')
    const profileData = new SkyblockProfileData(profile, profile.findByProfileName('Papaya') as string)

    await profileData.fetchProfileData()
    const data = profileData.memberData as MiningStats;
    console.log(data.mining_core.nodes, data.mining_core.tokens_spent);
  } catch (e) {
    console.error(e)
  }
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

// https://stackoverflow.com/questions/27712768/how-to-modularize-routing-with-node-js-express
