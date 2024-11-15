export interface MiningStats {
  mining_core: {
    nodes: {
      [key: string]: number | boolean;
    },
    tokens_spent: number
  }
}
