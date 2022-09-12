import { createContext } from "react";
import { BlockchainDetailsType } from "../../utilities/blockchain.types";

export type BlockchainContextStateType = {
  userBlockchainDetails: BlockchainDetailsType | null;
  isLoading: boolean;
  isError: boolean;
  loadingMessage: string;
  message: string;
  errorMessage: string;
  isMakingTxn: boolean;
};

export const initialState: BlockchainContextStateType = {
  userBlockchainDetails: null,
  isLoading: false,
  isError: false,
  loadingMessage: "",
  message: "",
  errorMessage: "",
  isMakingTxn: false,
};

type BlockchainContextType = {
  userBlockchainDetails: BlockchainContextStateType | null;
  fetchBlockchain: (uid: string) => void;
  addNode: (uid: string, node: string) => void;
  deleteNode: (uid: string, node: string) => void;
  mineBlock: (uid: string) => void;
  transferFunds: (
    uid: string,
    sender: string,
    recipient: string,
    amount: string
  ) => void;
  closeErrorMessageBox: () => void;
};

const context: BlockchainContextType = {
  userBlockchainDetails: initialState,
  fetchBlockchain: (uid: string) => {},
  addNode: (uid: string, node: string) => {},
  deleteNode: (uid: string, node: string) => {},
  mineBlock: (uid: string) => {},
  transferFunds: (
    uid: string,
    sender: string,
    recipient: string,
    amount: string
  ) => {},
  closeErrorMessageBox: () => {},
};

const BlockchainContext = createContext(context);

export default BlockchainContext;
