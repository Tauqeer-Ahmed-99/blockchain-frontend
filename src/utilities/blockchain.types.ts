export type Transaction = {
  amount: number;
  recipient: string;
  sender: string;
  signature: string;
};

export type Block = {
  index: number;
  previous_hash: string;
  proof: number;
  time: number;
  transactions: Transaction[] | [];
};

export type Blockchain = Block[];

export type Wallet = {
  balance: number;
  public_key: string;
  private_key: string;
  wallet_set_up: boolean;
};

export type NodeResponse = {
  all_available_peer_nodes: string[];
  blockchain: Blockchain;
  message: string;
  open_transactions: Transaction[] | [];
  wallet: Wallet;
};
