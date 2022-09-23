import { ethers, Contract } from "ethers";
import { REFUND_ABI, REFUND_ADDRESS } from "../contractInfo/Refund";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const refundBackToContractLevelOne = async (
  homeOrAway: boolean,
  tokenId: string,
  signer: FetchSignerResult<ethers.Signer> | undefined
): Promise<void> => {
  const RefundContract = new Contract(REFUND_ADDRESS, REFUND_ABI, signer);
  try {
    const tx = await RefundContract.refundBackToContractLevelOne(
      homeOrAway,
      tokenId
    );
    await tx.wait();
    toast.success(`You Have Successfully Refunded Ticket ${tokenId}!`, {
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
      "Transaction Failed, Make Sure You Own This TokenId And It Exists",
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

export const refundBackToContractLevelTwo = async (
  homeOrAway: boolean,
  tokenId: string,
  signer: FetchSignerResult<ethers.Signer> | undefined
): Promise<void> => {
  const RefundContract = new Contract(REFUND_ADDRESS, REFUND_ABI, signer);
  try {
    const tx = await RefundContract.refundBackToContractLevelTwo(
      homeOrAway,
      tokenId
    );
    await tx.wait();
    toast.success(`You Have Successfully Refunded Ticket ${tokenId}!`, {
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
      "Transaction Failed, Make Sure You Own This TokenId And It Exists ",
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

export const refundBackToContractLevelThree = async (
  homeOrAway: boolean,
  tokenId: string,
  signer: FetchSignerResult<ethers.Signer> | undefined
): Promise<void> => {
  const RefundContract = new Contract(REFUND_ADDRESS, REFUND_ABI, signer);
  try {
    const tx = await RefundContract.refundBackToContractLevelThree(
      homeOrAway,
      tokenId
    );
    await tx.wait();
    toast.success(`You Have Successfully Refunded Ticket ${tokenId}!`, {
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
      "Transaction Failed, Make Sure You Own This TokenId And It Exists ",
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

export const refundBackToContractLevelFour = async (
  homeOrAway: boolean,
  tokenId: string,
  signer: FetchSignerResult<ethers.Signer> | undefined
): Promise<void> => {
  const RefundContract = new Contract(REFUND_ADDRESS, REFUND_ABI, signer);
  try {
    const tx = await RefundContract.refundBackToContractLevelFour(
      homeOrAway,
      tokenId
    );
    await tx.wait();
    toast.success(`You Have Successfully Refunded Ticket ${tokenId}!`, {
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
      "Transaction Failed, Make Sure You Own This TokenId And It Exists ",
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

export const refundBackToContractLevelFive = async (
  homeOrAway: boolean,
  tokenId: string,
  signer: FetchSignerResult<ethers.Signer> | undefined
): Promise<void> => {
  const RefundContract = new Contract(REFUND_ADDRESS, REFUND_ABI, signer);
  try {
    const tx = await RefundContract.refundBackToContractLevelFive(
      homeOrAway,
      tokenId
    );
    await tx.wait();
    toast.success(`You Have Successfully Refunded Ticket ${tokenId}!`, {
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
      "Transaction Failed, Make Sure You Own This TokenId And It Exists ",
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

export const refundBackToContractLevelSix = async (
  homeOrAway: boolean,
  tokenId: string,
  signer: FetchSignerResult<ethers.Signer> | undefined
): Promise<void> => {
  const RefundContract = new Contract(REFUND_ADDRESS, REFUND_ABI, signer);
  try {
    const tx = await RefundContract.refundBackToContractLevelSix(
      homeOrAway,
      tokenId
    );
    await tx.wait();
    toast.success(`You Have Successfully Refunded Ticket ${tokenId}!`, {
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
      "Transaction Failed, Make Sure You Own This TokenId And It Exists ",
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

export const refundBackToContractLevelSeven = async (
  homeOrAway: boolean,
  tokenId: string,
  signer: FetchSignerResult<ethers.Signer> | undefined
): Promise<void> => {
  const RefundContract = new Contract(REFUND_ADDRESS, REFUND_ABI, signer);
  try {
    const tx = await RefundContract.refundBackToContractLevelSeven(
      homeOrAway,
      tokenId
    );
    await tx.wait();
    toast.success(`You Have Successfully Refunded Ticket ${tokenId}!`, {
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
      "Transaction Failed, Make Sure You Own This TokenId And It Exists ",
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

export const refundBackToContractLevelEight = async (
  homeOrAway: boolean,
  tokenId: string,
  signer: FetchSignerResult<ethers.Signer> | undefined
): Promise<void> => {
  const RefundContract = new Contract(REFUND_ADDRESS, REFUND_ABI, signer);
  try {
    const tx = await RefundContract.refundBackToContractLevelEight(
      homeOrAway,
      tokenId
    );
    await tx.wait();
    toast.success(`You Have Successfully Refunded Ticket ${tokenId}!`, {
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
      "Transaction Failed, Make Sure You Own This TokenId And It Exists ",
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

export const refundBackToContractLevelNine = async (
  homeOrAway: boolean,
  tokenId: string,
  signer: FetchSignerResult<ethers.Signer> | undefined
): Promise<void> => {
  const RefundContract = new Contract(REFUND_ADDRESS, REFUND_ABI, signer);
  try {
    const tx = await RefundContract.refundBackToContractLevelNine(
      homeOrAway,
      tokenId
    );
    await tx.wait();
    toast.success(`You Have Successfully Refunded Ticket ${tokenId}!`, {
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
      "Transaction Failed, Make Sure You Own This TokenId And It Exists ",
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

export const refundBackToContractLevelTen = async (
  homeOrAway: boolean,
  tokenId: string,
  signer: FetchSignerResult<ethers.Signer> | undefined
): Promise<void> => {
  const RefundContract = new Contract(REFUND_ADDRESS, REFUND_ABI, signer);
  try {
    const tx = await RefundContract.refundBackToContractLevelTen(
      homeOrAway,
      tokenId
    );
    await tx.wait();
    toast.success(`You Have Successfully Refunded Ticket ${tokenId}!`, {
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
      "Transaction Failed, Make Sure You Own This TokenId And It Exists ",
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

export const toggleRefund = async (
  refundId: string,
  signer: FetchSignerResult<ethers.Signer> | undefined,
  homeOrAway: boolean
) => {
  if (parseInt(refundId) > 0 && parseInt(refundId) < 201) {
    refundBackToContractLevelOne(homeOrAway, refundId, signer);
  } else if (parseInt(refundId) >= 201 && parseInt(refundId) < 401) {
    refundBackToContractLevelTwo(homeOrAway, refundId, signer);
  } else if (parseInt(refundId) >= 401 && parseInt(refundId) < 601) {
    refundBackToContractLevelThree(homeOrAway, refundId, signer);
  } else if (parseInt(refundId) >= 601 && parseInt(refundId) < 801) {
    refundBackToContractLevelFour(homeOrAway, refundId, signer);
  } else if (parseInt(refundId) >= 801 && parseInt(refundId) < 1001) {
    refundBackToContractLevelFive(homeOrAway, refundId, signer);
  } else if (parseInt(refundId) >= 1001 && parseInt(refundId) < 1201) {
    refundBackToContractLevelSix(homeOrAway, refundId, signer);
  } else if (parseInt(refundId) >= 1201 && parseInt(refundId) < 1401) {
    refundBackToContractLevelSeven(homeOrAway, refundId, signer);
  } else if (parseInt(refundId) >= 1401 && parseInt(refundId) < 1601) {
    refundBackToContractLevelEight(homeOrAway, refundId, signer);
  } else if (parseInt(refundId) >= 1601 && parseInt(refundId) < 1801) {
    refundBackToContractLevelNine(homeOrAway, refundId, signer);
  } else if (parseInt(refundId) >= 1801 && parseInt(refundId) < 2001) {
    refundBackToContractLevelTen(homeOrAway, refundId, signer);
  }
};
