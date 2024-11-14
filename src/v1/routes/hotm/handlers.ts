import {Request, Response} from "express"
import {SkyblockProfile, SkyblockProfileData} from "../../api/profiles";
import {skyblock} from "../../api/client";
import Hypixel from "hypixel-api-reborn";

// /api/v1/hotm?name=Name&profile=PNAME
export async function hotmHandler(req: Request, res: Response) {
  const name = req.query.name as string;
  if (!name) {
    res.status(400).json({message: 'No name provided!'});
    return
  }

  const pName = req.query.profile as string;
  if (!pName) {
    res.status(400).json({message: 'No profile name provided!'});
    return
  }


  const profile = await SkyblockProfile.create(name);
  const profileUuid = profile.findByProfileName(pName)

  if (!profileUuid) {
    res.status(404).json({message: `Profile ${pName} not found!`});
    return
  }

  const profileData = new SkyblockProfileData(profile, profileUuid)
  await profileData.fetchProfileData()
  res.status(200).json(
    postProcessMiningData(profileData.memberData.mining_core)
  );
}

function postProcessMiningData(MCO: any) {
  const hotmNodes = Object.entries(MCO.nodes).filter(
    ([key, value]) => !key.startsWith("toggle_") && typeof value !== "boolean"
  )
  const powder = {
    mithril: {
      spent: MCO.powder_spent_mithril || 0,
      current: MCO.powder_mithril || 0,
      total: (MCO.powder_spent_mithril || 0) + (MCO.powder_mithril || 0)
    },
    gemstone: {
      spent: MCO.powder_spent_gemstone || 0,
      current: MCO.powder_gemstone || 0,
      total: (MCO.powder_gemstone || 0) + (MCO.powder_spent_gemstone)
    },
    glacite: {
      spent: MCO.powder_spent_glacite || 0,
      current: MCO.powder_glacite || 0,
      total: (MCO.powder_glacite || 0) + (MCO.powder_spent_glacite || 0),
    }
  }

  return {
    hotmTree: Object.fromEntries(hotmNodes),
    tokens: MCO.tokens_spent as number || 0,
    powders: powder,
    hotmXp: MCO.experience as number || 0
  }
}
