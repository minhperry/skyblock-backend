import {Player} from "./mojang";
import {skyblock} from "./client";
import {ErrorMessage} from "./error";
import axios from "axios";
import {Header} from "./directApi";

export class SkyblockProfile {
  private readonly _player_: Player;
  // map profileUuid to profileName
  private profileMap: Map<string, string> = new Map();

  private constructor(player: Player) {
    this._player_ = player;
  }

  static async create(name: string): Promise<SkyblockProfile> {
    try {
      const player = await Player.create(name);
      const data = new SkyblockProfile(player)
      await data.fillMap()
      return data
    } catch (e) {
      throw new Error(ErrorMessage.PROFILE_CREATION_FAILED() + e);
    }
  }

  private async fillMap() {
    try {
      const profiles = await skyblock(this._player_.name).profiles();
      profiles.forEach((profile) => {
        this.profileMap.set(profile.profileId, profile.profileName);
      });
    } catch (error) {
      console.error("Failed to fill profile map:", error);
    }
  }

  findByProfileName(profileName: string): string | undefined {
    for (let item of this.profileMap) {
      if (item[1] === profileName) {
        return item[0]
      }
    }
    return undefined
  }

  findByProfileId(profileId: string): string | undefined {
    if (this.profileMap.has(profileId)) return this.profileMap.get(profileId)
    else return undefined
  }

  get player() {
    return this._player_;
  }
}

export class SkyblockProfileData {
  private sbProfile: SkyblockProfile;
  private readonly _profileId_: string;
  private _memberData_: any;

  constructor(sbp: SkyblockProfile, profileId: string) {
    this.sbProfile = sbp;
    this._profileId_ = profileId;
  }

  async fetchProfileData(): Promise<void> {
    try {
      const playerUuid = this.sbProfile.player.uuid;
      const response = await axios.get(
        `https://api.hypixel.net/v2/skyblock/profile?profile=${this._profileId_}`,
        Header
      );

      if (response.data.success) {
        // Find the player data within "members" based on the player's UUID
        const members = response.data.profile.members;
        this._memberData_ = members[playerUuid.replace(/-/g, "")]; // Remove dashes from UUID
      }
    } catch (error) {
      console.error(`Error fetching data for profile ${this._profileId_}:`, error);
    }
  }

  // Retrieves the player's data stored under the profile
  get memberData(): any | undefined {
    return this._memberData_;
  }
}
