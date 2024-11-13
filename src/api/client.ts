import dotenv from 'dotenv'
import Hypixel from 'hypixel-api-reborn'

dotenv.config()

const HYPIXEL_KEY = process.env.HYPIXEL_API_KEY;

export const client = new Hypixel.Client(HYPIXEL_KEY as string, {cache: true})

export function skyblock(player: string) {

  function profiles() {
    return client.getSkyblockProfiles(player)
  }


  /*
  function hotm(profile: string) {
    return profiles().then((profiles: SkyblockProfile[]) => {
      const foundProfile = profiles.find((p: SkyblockProfile) => p.profileName === profile)

      if (!foundProfile) {
        throw new Error("No profile found!")
      }

      return foundProfile.me.hotm
    })
  }

  function hotm2(profile: string) {
    return {
      async powders() {
        const profilez = await profiles();
        const foundProfile = profilez.find((p: SkyblockProfile) => p.profileName === profile);
        if (!foundProfile) {
          return Promise.reject(new Error("No profile found!"));
        }
        return foundProfile.me.hotm.powder;
      },

      async level() {
        const profilez = await profiles();
        const foundProfile = profilez.find((p: SkyblockProfile) => p.profileName === profile);
        if (!foundProfile) {
          return Promise.reject(new Error("No profile found!"));
        }
        let exp = foundProfile.me.hotm.experience
        return {level: exp.level, exp: exp.xp};
      }
    };
  }
  */

  return {profiles}
}
