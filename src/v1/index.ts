import express, {Express, NextFunction, Response, Request} from "express";
import dotenv from "dotenv";
import profileRouter from "./routes/profiles";
import hotmRouter from "./routes/hotm";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

const cacheControlMiddleware = (req: Request, res: Response, next: NextFunction) => {
  res.set('Cache-Control', 'public, max-age=3600'); // Cache for 1 hour
  next();
};

const apiV1 = express.Router();
// apiV1 = /api/v1/, .use('path') = /api/v1/path
apiV1.use('/profiles', profileRouter)
apiV1.use('/hotm', hotmRouter)

// apiV1.use('/mining/', miningRouter)

app.use('/api/v1', apiV1)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

