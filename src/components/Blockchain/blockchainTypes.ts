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
