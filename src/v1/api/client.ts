import dotenv from 'dotenv'
import Hypixel from 'hypixel-api-reborn'
import {SkyblockProfile} from "hypixel-api-reborn/typings";

dotenv.config()

const HYPIXEL_KEY = process.env.HYPIXEL_API_KEY;

export const client = new Hypixel.Client(HYPIXEL_KEY as string, {cache: true})

export function skyblock(player: string) {

  function profiles() {
    return client.getSkyblockProfiles(player)
  }

  // Should only be called when name and id is verified
  async function profile(profileId: string) {
    const profilez = await profiles();
    return profilez.find((p) => p.profileId === profileId) as Hypixel.SkyblockProfile;
  }

  return {profiles, profile}
}
