import {skyblock} from "../utils/client";
import {Request, Response} from "express"
import {removePrefix} from "../utils/string.utils";

export const profilesHandler = (req: Request, res: Response) => {
  const name = req.query.name as string;

  if (!name) {
    res.status(400).json({status: 400, message: 'No name provided'});
  }

  skyblock()
    .profiles(name)
    .then((prof: any) => {
      console.log('th', prof)
      res.json(prof);
    })
    .catch((err) => {
      res.status(500).json({message: removePrefix(err.message as string)});
    })
}
