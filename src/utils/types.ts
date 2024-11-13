export interface MiningStats {
  mining_core: {
    nodes: HotmNodeNames,
    tokens_spent: number
  }
}

// https://github.com/SkyCryptWebsite/SkyCrypt/blob/development/src/constants/hotm.js
export interface HotmNodeNames {
  // HOTM 10
  gemstone_infusion: number;
  crystalline: number;
  gifts_from_the_departed: number;
  mining_master: number;
  hungry_for_more: number;
  vanguard_seeker: number;
  sheer_force: number;
  // HOTM 9
  metal_head: number;
  rags_to_riches: number;
  eager_adventurer: number;
  // HOTM 8
  miners_blessing: number;
  no_stone_unturned: number;
  strong_arm: number;
  steady_hand: number;
  warm_hearted: number;
  surveyor: number;
  mineshaft_mayhem: number;
  // HOTM 7
  mining_speed_2: number;
  powder_buff: number;
  mining_fortune_2: number;
  // HOTM 6
  anomalous_desire: number;
  blockhead: number;
  subterranean_fisher: number;
  keep_it_cool: number;
  lonesome_miner: number;
  great_explorer: number;
  maniac_miner: number;
  // HOTM 5
  daily_grind: number;
  special_0: number;
  daily_powder: number;
  // HOTM 4
  daily_effect: number;
  old_school: number;
  professional: number;
  mole: number;
  fortunate: number;
  mining_experience: number;
  front_loaded: number;
  // HOTM 3
  random_event: number;
  efficient_miner: number;
  forge_time: number;
  // HOTM 2
  mining_speed_boost: number;
  precision_mining: number;
  mining_fortune: number;
  titanium_insanium: number;
  pickaxe_toss: number;
  // HOTM 1
  mining_speed: number;
}

