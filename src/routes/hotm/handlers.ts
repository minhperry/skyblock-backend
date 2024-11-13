import {Request, Response} from "express"
import {skyblock} from "../../api/client";

// /api/v1/hotm/powders?name=Name&profile=PNAME
export function powderAmountHandler(req: Request, res: Response) {
  const name = req.query.name as string;
  if (!name) {
    res.status(400).json({message: 'No name provided!'});
    return
  }

  const profile = req.query.profile as string;

  skyblock(name)
    .hotm2(profile)
    .powders()
    .then((x) => {
      res.status(200).json(x)
      return
    }).catch((err) => {
    return res.status(500).json({message: 'Internal server error!', error: err.toString()});
  })
}

export function levelHandler(req: Request, res: Response) {
  const name = req.query.name as string;
  if (!name) {
    res.status(400).json({message: 'No name provided!'});
    return
  }

  const profile = req.query.profile as string;

  skyblock(name)
    .hotm2(profile)
    .level()
    .then((x) => {
      res.status(200).json(x)
      return
    }).catch((err) => {
    return res.status(500).json({message: 'Internal server error!', error: err.toString()});
  })
}
