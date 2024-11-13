import {HYPIXEL_KEY} from "../utils/secrets";

const Header = {
  headers: {
    'Api-Key': HYPIXEL_KEY // as string
  }
}
const URL = 'https://api.hypixel.net/v2/skyblock'
const TestUuid = '95bb24bd-73f6-427d-b35c-248295674ba1'

export {Header, URL, TestUuid}
