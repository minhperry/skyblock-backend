import express from "express";
import {profileHandler, profilesHandler, selectedProfileHandler} from "./handlers";

const profileRouter = express.Router();

// Base: /api/v1/profiles
profileRouter.get('/', profilesHandler);
profileRouter.get('/profile', profileHandler);
profileRouter.get('/selected', selectedProfileHandler);

export default profileRouter;
