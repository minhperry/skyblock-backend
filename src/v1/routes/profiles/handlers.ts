import {skyblock} from "../../api/client";
import {Request, Response} from "express"
import {SkyblockProfile} from "hypixel-api-reborn/typings"

interface LocalSkyblockProfile {
  profileId: string,
  profileName: string,
  gameMode: string | null,
  selected: boolean,
}

// /api/v1/profiles?name=NAME
export function profilesHandler(req: Request, res: Response) {
  const name = req.query.name as string;

  if (!name) {
    res.status(400).json({message: 'No name provided!'});
    return
  }

  skyblock(name)
    .profiles()
    .then((profiles: SkyblockProfile[]) => {
      let ret: LocalSkyblockProfile[] = []
      profiles.forEach(p => {
        ret.push({
          profileId: p.profileId,
          profileName: p.profileName,
          gameMode: p.me.gameMode || 'normal',
          selected: p.selected
        })
      })
      return res.status(200).json(ret)
    })
    .catch((err) => {
      return res.status(500).json({message: 'Internal server error!', error: err.toString()});
    })
}

// Either &uuid=UUID and &pName=PNAME, but not both
// /api/v1/profiles/profile?name=NAME&<the other one>
export function profileHandler(req: Request, res: Response) {
  const name = req.query.name as string;
  if (!name) {
    res.status(400).json({message: 'No name provided!'});
    return
  }

  const uuid = req.query.uuid as string;
  const pName = req.query.profile as string;

  // None are present
  if (!uuid && !pName) {
    res.status(400).json({message: 'Provide either uuid or profile name!'});
    return
  }

  // Check if both uuid and profileName are provided
  if (uuid && pName) {
    res.status(400).json({message: 'Provide either uuid or profile name, but not both!'});
    return
  }

  skyblock(name)
    .profiles()
    .then((profiles: SkyblockProfile[]) => {
      let found = profiles.find((p) => p.profileId === uuid || p.profileName === pName)
      if (found) {
        res.status(200).json(found)
      } else {
        res.status(404).json({message: 'Profile not found!'})
      }
      return
    })
    .catch((err) => {
      return res.status(500).json({message: 'Internal server error!', error: err.toString()});
    })
}

// TODO: this one kinda useless
// /api/v1/profiles/selected?name=NAME
export function selectedProfileHandler(req: Request, res: Response) {
  const name = req.query.name as string;
  if (!name) {
    res.status(400).json({message: 'No name provided!'});
    return
  }

  skyblock(name)
    .profiles()
    .then((profiles: SkyblockProfile[]) => {
      let found = profiles.find((p) => p.selected)
      if (found) {
        res.status(200).json(found)
      } else {
        console.error("No profile with 'selected: true' found, which should not happen.");
        return res.status(500).json({message: "Internal error: Expected profile with 'selected: true' not found."});
      }
    }).catch((err) => {
    return res.status(500).json({message: 'Internal server error!', error: err.toString()});
  })
}
