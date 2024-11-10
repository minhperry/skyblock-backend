import dotenv from 'dotenv'
import Hypixel from 'hypixel-api-reborn'

dotenv.config()

const HYPIXEL_KEY = process.env.HYPIXEL_API_KEY;

const client = new Hypixel.Client(HYPIXEL_KEY as string)

export function skyblock() {
  function profiles(player: string) {
    return client.getSkyblockProfiles(player)
  }

  return {profiles}
}
