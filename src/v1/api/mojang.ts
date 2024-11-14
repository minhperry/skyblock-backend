import axios from "axios";
import {ErrorMessage} from "./error";

export class Player {
  private _name_: string;
  private readonly _uuid_: string;

  private constructor(name: string, uuid: string) {
    this._name_ = name;
    this._uuid_ = uuid;
  }

  static async create(name: string): Promise<Player> {
    try {
      const response = await axios.get(`https://api.mojang.com/users/profiles/minecraft/${name}`);
      const uuid = response.data.id;
      return new Player(name, uuid);
    } catch (error) {
      throw new Error(ErrorMessage.MOJANG_PLAYER_DOES_NOT_EXIST(name));
    }
  }

  get uuid(): string {
    return this._uuid_;
  }

  get name(): string {
    return this._name_
  }
}
