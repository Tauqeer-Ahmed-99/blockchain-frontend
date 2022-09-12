import React, { useContext, useEffect, useReducer } from "react";

import BlockchainContext, {
  initialState,
  BlockchainContextStateType,
} from "./BlockchainContext";
import {
  Payload,
  BlockchainDetailsType,
} from "../../utilities/blockchain.types";
import {
  ADD_NODE,
  DELETE_NODE,
  ERROR_BOX,
  FETCH_BLOCKCHAIN,
  MININIG_BLOCK,
  TRANSFER_FUNDS,
} from "./constants";
import UserContext from "../UserContext/UserContext";

type Action = {
  type: string;
  payload?: Payload;
};

const userBlockchainDetailsReducer = (
  state: BlockchainContextStateType = initialState,
  action: Action
) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_BLOCKCHAIN.START:
      return {
        ...state,
        isLoading: true,
        loadingMessage: "Blockchain details are loading, please wait...",
      };
    case FETCH_BLOCKCHAIN.SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        loadingMessage: "",
        message: payload?.message as string,
        userBlockchainDetails: payload as BlockchainDetailsType,
      };
    case FETCH_BLOCKCHAIN.FAIL:
      return {
        ...state,
        isLoading: false,
        loadingMessage: "",
        isError: true,
        errorMessage: payload?.message ?? "Blockchain details loading failed.",
      };
    case ADD_NODE.START:
      return {
        ...state,
        isLoading: true,
        loadingMessage: "Adding node, please wait...",
      };
    case ADD_NODE.SUCCESS:
      return {
        ...state,
        isLoading: false,
        loadingMessage: "",
        userBlockchainDetails: {
          ...state.userBlockchainDetails,
          all_available_peer_nodes: payload?.all_available_peer_nodes,
        } as BlockchainDetailsType,
        message: payload?.message as string,
      };
    case ADD_NODE.FAIL:
      return {
        ...state,
        isLoading: false,
        loadingMessage: "",
        isError: true,
        errorMessage: payload?.message as string,
      };
    case DELETE_NODE.START:
      return {
        ...state,
        isLoading: true,
        loadingMessage: "Removing node, please wait...",
      };
    case DELETE_NODE.SUCCESS:
      return {
        ...state,
        isLoading: false,
        loadingMessage: "",
        userBlockchainDetails: {
          ...state.userBlockchainDetails,
          all_available_peer_nodes: payload?.all_available_peer_nodes,
        } as BlockchainDetailsType,
        message: payload?.message as string,
      };
    case DELETE_NODE.FAIL:
      return {
        ...state,
        isLoading: false,
        loadingMessage: "",
        isError: true,
        errorMessage: payload?.message as string,
      };
    case MININIG_BLOCK.START:
      return {
        ...state,
        isLoading: true,
        loadingMessage: "Mining block, please wait...",
      };
    case MININIG_BLOCK.SUCCESS:
      return {
        ...state,
        isLoading: false,
        loadingMessage: "",
        userBlockchainDetails: {
          ...state.userBlockchainDetails,
          blockchain: payload?.blockchain,
          wallet: payload?.wallet,
          open_transactions: payload?.open_transactions,
        } as BlockchainDetailsType,
        message: payload?.message as string,
      };
    case MININIG_BLOCK.FAIL:
      return {
        ...state,
        isLoading: false,
        loadingMessage: "",
        isError: true,
        errorMessage: payload?.message as string,
      };
    case TRANSFER_FUNDS.START:
      return {
        ...state,
        isMakingTxn: true,
        loadingMessage: "Transaction is under process, please wait...",
      };
    case TRANSFER_FUNDS.SUCCESS:
      return {
        ...state,
        isMakingTxn: false,
        loadingMessage: "",
        userBlockchainDetails: {
          ...state.userBlockchainDetails,
          wallet: payload?.wallet,
          open_transactions: payload?.open_transactions,
        } as BlockchainDetailsType,
        message: payload?.message as string,
      };
    case TRANSFER_FUNDS.FAIL:
      return {
        ...state,
        isMakingTxn: false,
        loadingMessage: "",
        isError: true,
        errorMessage: payload?.message as string,
      };
    case ERROR_BOX.CLOSE:
      return {
        ...state,
        isError: false,
        errorMessage: "",
      };
    default:
      return state;
  }
};

const BlockchainProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [userBlockchainDetails, dispatch] = useReducer(
    userBlockchainDetailsReducer,
    initialState
  );

  const fetchBlockchain = async (uid: string) => {
    try {
      dispatch({ type: FETCH_BLOCKCHAIN.START });

      const fetchBlockchainURL =
        process.env.REACT_APP_DEV_ADDRESS + "/blockchain/" + uid;
      const blockchainResponse = await fetch(fetchBlockchainURL);
      const parsedBlockchainResponse = await blockchainResponse.json();

      dispatch({
        type: FETCH_BLOCKCHAIN.SUCCESS,
        payload: parsedBlockchainResponse as Payload,
      });
    } catch (error: any) {
      dispatch({
        type: FETCH_BLOCKCHAIN.FAIL,
        payload: { message: error.message },
      });
      console.log(error.message);
    }
  };

  const addNode = async (uid: string, node: string) => {
    try {
      dispatch({ type: ADD_NODE.START });
      const addNodeURL = process.env.REACT_APP_DEV_ADDRESS + "/node";

      const addNodeResponse = await fetch(addNodeURL, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({ uid, node }),
      });

      const parsedAddNodeResponse = await addNodeResponse.json();

      console.log(parsedAddNodeResponse);

      dispatch({
        type: ADD_NODE.SUCCESS,
        payload: {
          all_available_peer_nodes:
            parsedAddNodeResponse.all_available_peer_nodes,
          message: parsedAddNodeResponse.message,
        },
      });
    } catch (error: any) {
      dispatch({ type: ADD_NODE.FAIL, payload: { message: error.message } });
      console.log(error.message);
    }
  };

  const deleteNode = async (uid: string, node: string) => {
    try {
      dispatch({ type: DELETE_NODE.START });

      const deleteNodeURL = process.env.REACT_APP_DEV_ADDRESS + "/node";
      const deleteNodeResponse = await fetch(deleteNodeURL, {
        method: "DELETE",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({ uid, node }),
      });
      const parsedDeleteNodeResponse = await deleteNodeResponse.json();

      dispatch({
        type: DELETE_NODE.SUCCESS,
        payload: {
          all_available_peer_nodes:
            parsedDeleteNodeResponse.all_available_peer_nodes,
          message: parsedDeleteNodeResponse.message,
        },
      });
    } catch (error: any) {
      dispatch({ type: DELETE_NODE.FAIL, payload: { message: error.message } });
      console.log(error.message);
    }
  };

  const mineBlock = async (uid: string) => {
    try {
      dispatch({ type: MININIG_BLOCK.START });

      const mineBlockURL = process.env.REACT_APP_DEV_ADDRESS + "/mine/" + uid;
      const mineBlockResponse = await fetch(mineBlockURL, { method: "POST" });
      const parsedMineBlockResponse = await mineBlockResponse.json();

      dispatch({
        type: MININIG_BLOCK.SUCCESS,
        payload: {
          blockchain: parsedMineBlockResponse.blockchain,
          wallet: parsedMineBlockResponse.wallet,
          open_transactions: parsedMineBlockResponse.open_transactions,
          message: parsedMineBlockResponse.message,
        },
      });
    } catch (error: any) {
      dispatch({
        type: MININIG_BLOCK.FAIL,
        payload: { message: error.message },
      });
      console.log(error.message);
    }
  };

  const transferFunds = async (
    uid: string,
    sender: string,
    recipient: string,
    amount: string
  ) => {
    try {
      dispatch({ type: TRANSFER_FUNDS.START });

      const makeTxnURL = process.env.REACT_APP_DEV_ADDRESS + "/transaction";
      const makeTxnResponse = await fetch(makeTxnURL, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({ uid, sender, recipient, amount }),
      });
      const parsedMakeTxnResponse = await makeTxnResponse.json();
      if (!makeTxnResponse.ok) throw new Error(parsedMakeTxnResponse.message);
      dispatch({
        type: TRANSFER_FUNDS.SUCCESS,
        payload: {
          wallet: parsedMakeTxnResponse.wallet,
          open_transactions: parsedMakeTxnResponse.open_transactions,
          message: parsedMakeTxnResponse.message,
        },
      });
    } catch (error: any) {
      dispatch({
        type: TRANSFER_FUNDS.FAIL,
        payload: { message: error.message },
      });
      console.log(error.message);
    }
  };

  const closeErrorMessageBox = () => {
    dispatch({ type: ERROR_BOX.CLOSE });
  };

  const userContext = useContext(UserContext);

  useEffect(() => {
    if (
      blockchainContext.userBlockchainDetails?.userBlockchainDetails === null &&
      userContext.state.user?.uid
    ) {
      blockchainContext.fetchBlockchain(userContext.state.user?.uid as string);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userContext]);

  const blockchainContext = {
    userBlockchainDetails,
    fetchBlockchain,
    addNode,
    deleteNode,
    mineBlock,
    transferFunds,
    closeErrorMessageBox,
  };

  return (
    <BlockchainContext.Provider value={blockchainContext}>
      {children}
    </BlockchainContext.Provider>
  );
};

export default BlockchainProvider;
