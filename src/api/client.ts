import dotenv from 'dotenv'
import Hypixel from 'hypixel-api-reborn'

dotenv.config()

const HYPIXEL_KEY = process.env.HYPIXEL_API_KEY;

export const client = new Hypixel.Client(HYPIXEL_KEY as string, {cache: true})

export function skyblock(player: string) {

  function profiles() {
    return client.getSkyblockProfiles(player)
  }
  
  return {profiles}
}
