import { ethers, Contract } from "ethers";
import {
  RECEIVE_REFUND_ABI,
  RECEIVE_REFUND_ADDRESS,
} from "../contractInfo/ReceiveRefund";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const refundTicketLevelOne = async (
  homeOrAway: boolean,
  tokenId: string,
  signer: any
): Promise<void> => {
  const ReceiveRefundContract = new Contract(
    RECEIVE_REFUND_ADDRESS,
    RECEIVE_REFUND_ABI,
    signer
  );
  try {
    const tx = await ReceiveRefundContract.refundTicketLevelOne(
      homeOrAway,
      tokenId,
      { value: ethers.utils.parseEther("5") }
    );
    await tx.wait();
    toast.success(`The Contract Has Successfully Sent You Ticket ${tokenId}!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error: any) {
    toast.error(
      "Transaction Failed, Make Sure You Have Enough Funds And Check The Activity Page To See If This TokenId Is On Sale",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
    console.log(error);
  }
};

export const refundTicketLevelTwo = async (
  homeOrAway: boolean,
  tokenId: string,
  signer: any
): Promise<void> => {
  const ReceiveRefundContract = new Contract(
    RECEIVE_REFUND_ADDRESS,
    RECEIVE_REFUND_ABI,
    signer
  );
  try {
    const tx = await ReceiveRefundContract.refundTicketLevelTwo(
      homeOrAway,
      tokenId,
      {
        value: ethers.utils.parseEther("4"),
      }
    );
    await tx.wait();
    toast.success(`The Contract Has Successfully Sent You Ticket ${tokenId}!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error: any) {
    toast.error(
      "Transaction Failed, Make Sure You Have Enough Funds And Check The Activity Page To See If This TokenId Is On Sale",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
    console.log(error);
  }
};

export const refundTicketLevelThree = async (
  homeOrAway: boolean,
  tokenId: string,
  signer: any
): Promise<void> => {
  const ReceiveRefundContract = new Contract(
    RECEIVE_REFUND_ADDRESS,
    RECEIVE_REFUND_ABI,
    signer
  );
  try {
    const tx = await ReceiveRefundContract.refundTicketLevelThree(
      homeOrAway,
      tokenId,
      {
        value: ethers.utils.parseEther("3"),
      }
    );
    await tx.wait();
    toast.success(`The Contract Has Successfully Sent You Ticket ${tokenId}!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error: any) {
    toast.error(
      "Transaction Failed, Make Sure You Have Enough Funds And Check The Activity Page To See If This TokenId Is On Sale",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
    console.log(error);
  }
};

export const refundTicketLevelFour = async (
  homeOrAway: boolean,
  tokenId: string,
  signer: any
): Promise<void> => {
  const ReceiveRefundContract = new Contract(
    RECEIVE_REFUND_ADDRESS,
    RECEIVE_REFUND_ABI,
    signer
  );
  try {
    const tx = await ReceiveRefundContract.refundTicketLevelFour(
      homeOrAway,
      tokenId,
      {
        value: ethers.utils.parseEther("2"),
      }
    );
    await tx.wait();
    toast.success(`The Contract Has Successfully Sent You Ticket ${tokenId}!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error: any) {
    toast.error(
      "Transaction Failed, Make Sure You Have Enough Funds And Check The Activity Page To See If This TokenId Is On Sale",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
    console.log(error);
  }
};

export const refundTicketLevelFive = async (
  homeOrAway: boolean,
  tokenId: string,
  signer: any
): Promise<void> => {
  const ReceiveRefundContract = new Contract(
    RECEIVE_REFUND_ADDRESS,
    RECEIVE_REFUND_ABI,
    signer
  );
  try {
    const tx = await ReceiveRefundContract.refundTicketLevelFive(
      homeOrAway,
      tokenId,
      {
        value: ethers.utils.parseEther("1"),
      }
    );
    await tx.wait();
    toast.success(`The Contract Has Successfully Sent You Ticket ${tokenId}!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error: any) {
    toast.error(
      "Transaction Failed, Make Sure You Have Enough Funds And Check The Activity Page To See If This TokenId Is On Sale",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
    console.log(error);
  }
};

export const refundTicketLevelSix = async (
  homeOrAway: boolean,
  tokenId: string,
  signer: any
): Promise<void> => {
  const ReceiveRefundContract = new Contract(
    RECEIVE_REFUND_ADDRESS,
    RECEIVE_REFUND_ABI,
    signer
  );
  try {
    const tx = await ReceiveRefundContract.refundTicketLevelSix(
      homeOrAway,
      tokenId,
      {
        value: ethers.utils.parseEther("0.5"),
      }
    );
    await tx.wait();
    toast.success(`The Contract Has Successfully Sent You Ticket ${tokenId}!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error: any) {
    toast.error(
      "Transaction Failed, Make Sure You Have Enough Funds And Check The Activity Page To See If This TokenId Is On Sale",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
    console.log(error);
  }
};

export const refundTicketLevelSeven = async (
  homeOrAway: boolean,
  tokenId: string,
  signer: any
): Promise<void> => {
  const ReceiveRefundContract = new Contract(
    RECEIVE_REFUND_ADDRESS,
    RECEIVE_REFUND_ABI,
    signer
  );
  try {
    const tx = await ReceiveRefundContract.refundTicketLevelSeven(
      homeOrAway,
      tokenId,
      {
        value: ethers.utils.parseEther("0.25"),
      }
    );
    await tx.wait();
    toast.success(`The Contract Has Successfully Sent You Ticket ${tokenId}!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error: any) {
    toast.error(
      "Transaction Failed, Make Sure You Have Enough Funds And Check The Activity Page To See If This TokenId Is On Sale",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
    console.log(error);
  }
};

export const refundTicketLevelEight = async (
  homeOrAway: boolean,
  tokenId: string,
  signer: any
): Promise<void> => {
  const ReceiveRefundContract = new Contract(
    RECEIVE_REFUND_ADDRESS,
    RECEIVE_REFUND_ABI,
    signer
  );
  try {
    const tx = await ReceiveRefundContract.refundTicketLevelEight(
      homeOrAway,
      tokenId,
      {
        value: ethers.utils.parseEther("0.125"),
      }
    );
    await tx.wait();
    toast.success(`The Contract Has Successfully Sent You Ticket ${tokenId}!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error: any) {
    toast.error(
      "Transaction Failed, Make Sure You Have Enough Funds And Check The Activity Page To See If This TokenId Is On Sale",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
    console.log(error);
  }
};

export const refundTicketLevelNine = async (
  homeOrAway: boolean,
  tokenId: string,
  signer: any
): Promise<void> => {
  const ReceiveRefundContract = new Contract(
    RECEIVE_REFUND_ADDRESS,
    RECEIVE_REFUND_ABI,
    signer
  );
  try {
    const tx = await ReceiveRefundContract.refundTicketLevelNine(
      homeOrAway,
      tokenId,
      {
        value: ethers.utils.parseEther("0.1"),
      }
    );
    await tx.wait();
    toast.success(`The Contract Has Successfully Sent You Ticket ${tokenId}!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error: any) {
    toast.error(
      "Transaction Failed, Make Sure You Have Enough Funds And Check The Activity Page To See If This TokenId Is On Sale",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
    console.log(error);
  }
};

export const refundTicketLevelTen = async (
  homeOrAway: boolean,
  tokenId: string,
  signer: any
): Promise<void> => {
  const ReceiveRefundContract = new Contract(
    RECEIVE_REFUND_ADDRESS,
    RECEIVE_REFUND_ABI,
    signer
  );
  try {
    const tx = await ReceiveRefundContract.refundTicketLevelTen(
      homeOrAway,
      tokenId,
      {
        value: ethers.utils.parseEther("0.05"),
      }
    );
    await tx.wait();
    toast.success(`The Contract Has Successfully Sent You Ticket ${tokenId}!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error: any) {
    toast.error(
      "Transaction Failed, Make Sure You Have Enough Funds And Check The Activity Page To See If This TokenId Is On Sale",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
    console.log(error);
  }
};

export const toggleReceiveRefund = async (
  refundId: string,
  signer: any,
  homeOrAway: boolean
) => {
  if (parseInt(refundId) > 0 && parseInt(refundId) < 201) {
    refundTicketLevelOne(homeOrAway, refundId, signer);
  } else if (parseInt(refundId) >= 201 && parseInt(refundId) < 401) {
    refundTicketLevelTwo(homeOrAway, refundId, signer);
  } else if (parseInt(refundId) >= 401 && parseInt(refundId) < 601) {
    refundTicketLevelThree(homeOrAway, refundId, signer);
  } else if (parseInt(refundId) >= 601 && parseInt(refundId) < 801) {
    refundTicketLevelFour(homeOrAway, refundId, signer);
  } else if (parseInt(refundId) >= 801 && parseInt(refundId) < 1001) {
    refundTicketLevelFive(homeOrAway, refundId, signer);
  } else if (parseInt(refundId) >= 1001 && parseInt(refundId) < 1201) {
    refundTicketLevelSix(homeOrAway, refundId, signer);
  } else if (parseInt(refundId) >= 1201 && parseInt(refundId) < 1401) {
    refundTicketLevelSeven(homeOrAway, refundId, signer);
  } else if (parseInt(refundId) >= 1401 && parseInt(refundId) < 1601) {
    refundTicketLevelEight(homeOrAway, refundId, signer);
  } else if (parseInt(refundId) >= 1601 && parseInt(refundId) < 1801) {
    refundTicketLevelNine(homeOrAway, refundId, signer);
  } else if (parseInt(refundId) >= 1801 && parseInt(refundId) < 2001) {
    refundTicketLevelTen(homeOrAway, refundId, signer);
  }
};
