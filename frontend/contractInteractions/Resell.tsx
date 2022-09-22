import { ethers, Contract } from "ethers";
import { RESELL_ABI, RESELL_ADDRESS } from "../contractInfo/Resell";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const receiveTicketLevelOne = async (
  homeOrAway: boolean,
  tokenId: string,
  from: string,
  signer: FetchSignerResult<ethers.Signer> | undefined
): Promise<void> => {
  const ResellContract = new Contract(RESELL_ADDRESS, RESELL_ABI, signer);
  try {
    const tx = await ResellContract.receiveTicketLevelOne(
      homeOrAway,
      tokenId,
      from,
      {
        value: ethers.utils.parseEther("5"),
      }
    );
    await tx.wait();
    toast.success(`You Have Successfully Received Ticket ${tokenId}!`, {
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
      "Transaction Failed, Make Sure The TokenId Exists, You Have Enough Funds, The Owner Address Is Right, And You Asked The Owner To Approve The TokenId To You",
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

export const receiveTicketLevelTwo = async (
  homeOrAway: boolean,
  tokenId: string,
  from: string,
  signer: FetchSignerResult<ethers.Signer> | undefined
): Promise<void> => {
  const ResellContract = new Contract(RESELL_ADDRESS, RESELL_ABI, signer);
  try {
    const tx = await ResellContract.receiveTicketLevelTwo(
      homeOrAway,
      tokenId,
      from,
      {
        value: ethers.utils.parseEther("4"),
      }
    );
    await tx.wait();
    toast.success(`You Have Successfully Received Ticket ${tokenId}!`, {
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
      "Transaction Failed, Make Sure The TokenId Exists, You Have Enough Funds The Owner Address Is Right, And You Asked The Owner To Approve The TokenId To You",
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

export const receiveTicketLevelThree = async (
  homeOrAway: boolean,
  tokenId: string,
  from: string,
  signer: FetchSignerResult<ethers.Signer> | undefined
): Promise<void> => {
  const ResellContract = new Contract(RESELL_ADDRESS, RESELL_ABI, signer);
  try {
    const tx = await ResellContract.receiveTicketLevelThree(
      homeOrAway,
      tokenId,
      from,
      {
        value: ethers.utils.parseEther("3"),
      }
    );
    await tx.wait();
    toast.success(`You Have Successfully Received Ticket ${tokenId}!`, {
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
      "Transaction Failed, Make Sure The TokenId Exists, You Have Enough Funds The Owner Address Is Right, And You Asked The Owner To Approve The TokenId To You",
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

export const receiveTicketLevelFour = async (
  homeOrAway: boolean,
  tokenId: string,
  from: string,
  signer: FetchSignerResult<ethers.Signer> | undefined
): Promise<void> => {
  const ResellContract = new Contract(RESELL_ADDRESS, RESELL_ABI, signer);
  try {
    const tx = await ResellContract.receiveTicketLevelFour(
      homeOrAway,
      tokenId,
      from,
      {
        value: ethers.utils.parseEther("2"),
      }
    );
    await tx.wait();
    toast.success(`You Have Successfully Received Ticket ${tokenId}!`, {
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
      "Transaction Failed, Make Sure The TokenId Exists, You Have Enough Funds The Owner Address Is Right, And You Asked The Owner To Approve The TokenId To You",
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

export const receiveTicketLevelFive = async (
  homeOrAway: boolean,
  tokenId: string,
  from: string,
  signer: FetchSignerResult<ethers.Signer> | undefined
): Promise<void> => {
  const ResellContract = new Contract(RESELL_ADDRESS, RESELL_ABI, signer);
  try {
    const tx = await ResellContract.receiveTicketLevelFive(
      homeOrAway,
      tokenId,
      from,
      {
        value: ethers.utils.parseEther("1"),
      }
    );
    await tx.wait();
    toast.success(`You Have Successfully Received Ticket ${tokenId}!`, {
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
      "Transaction Failed, Make Sure The TokenId Exists, You Have Enough Funds The Owner Address Is Right, And You Asked The Owner To Approve The TokenId To You",
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

export const receiveTicketLevelSix = async (
  homeOrAway: boolean,
  tokenId: string,
  from: string,
  signer: FetchSignerResult<ethers.Signer> | undefined
): Promise<void> => {
  const ResellContract = new Contract(RESELL_ADDRESS, RESELL_ABI, signer);
  try {
    const tx = await ResellContract.receiveTicketLevelSix(
      homeOrAway,
      tokenId,
      from,
      {
        value: ethers.utils.parseEther("0.5"),
      }
    );
    await tx.wait();
    toast.success(`You Have Successfully Received Ticket ${tokenId}!`, {
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
      "Transaction Failed, Make Sure The TokenId Exists, You Have Enough Funds The Owner Address Is Right, And You Asked The Owner To Approve The TokenId To You",
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

export const receiveTicketLevelSeven = async (
  homeOrAway: boolean,
  tokenId: string,
  from: string,
  signer: FetchSignerResult<ethers.Signer> | undefined
): Promise<void> => {
  const ResellContract = new Contract(RESELL_ADDRESS, RESELL_ABI, signer);
  try {
    const tx = await ResellContract.receiveTicketLevelSeven(
      homeOrAway,
      tokenId,
      from,
      {
        value: ethers.utils.parseEther("0.25"),
      }
    );
    await tx.wait();
    toast.success(`You Have Successfully Received Ticket ${tokenId}!`, {
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
      "Transaction Failed, Make Sure The TokenId Exists, You Have Enough Funds The Owner Address Is Right, And You Asked The Owner To Approve The TokenId To You",
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

export const receiveTicketLevelEight = async (
  homeOrAway: boolean,
  tokenId: string,
  from: string,
  signer: FetchSignerResult<ethers.Signer> | undefined
): Promise<void> => {
  const ResellContract = new Contract(RESELL_ADDRESS, RESELL_ABI, signer);
  try {
    const tx = await ResellContract.receiveTicketLevelEight(
      homeOrAway,
      tokenId,
      from,
      {
        value: ethers.utils.parseEther("0.125"),
      }
    );
    await tx.wait();
    toast.success(`You Have Successfully Received Ticket ${tokenId}!`, {
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
      "Transaction Failed, Make Sure The TokenId Exists, You Have Enough Funds The Owner Address Is Right, And You Asked The Owner To Approve The TokenId To You",
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

export const receiveTicketLevelNine = async (
  homeOrAway: boolean,
  tokenId: string,
  from: string,
  signer: FetchSignerResult<ethers.Signer> | undefined
): Promise<void> => {
  const ResellContract = new Contract(RESELL_ADDRESS, RESELL_ABI, signer);
  try {
    const tx = await ResellContract.receiveTicketLevelNine(
      homeOrAway,
      tokenId,
      from,
      {
        value: ethers.utils.parseEther("0.1"),
      }
    );
    await tx.wait();
    toast.success(`You Have Successfully Received Ticket ${tokenId}!`, {
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
      "Transaction Failed, Make Sure The TokenId Exists, You Have Enough Funds The Owner Address Is Right, And You Asked The Owner To Approve The TokenId To You",
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

export const receiveTicketLevelTen = async (
  homeOrAway: boolean,
  tokenId: string,
  from: string,
  signer: FetchSignerResult<ethers.Signer> | undefined
): Promise<void> => {
  const ResellContract = new Contract(RESELL_ADDRESS, RESELL_ABI, signer);
  try {
    const tx = await ResellContract.receiveTicketLevelTen(
      homeOrAway,
      tokenId,
      from,
      {
        value: ethers.utils.parseEther("0.05"),
      }
    );
    await tx.wait();
    toast.success(`You Have Successfully Received Ticket ${tokenId}!`, {
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
      "Transaction Failed, Make Sure The TokenId Exists, You Have Enough Funds The Owner Address Is Right, And You Asked The Owner To Approve The TokenId To You",
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

export const toggleResell = async (
  homeOrAway: boolean,
  tokenId: string,
  from: string,
  signer: FetchSignerResult<ethers.Signer> | undefined
) => {
  if (parseInt(tokenId) > 0 && parseInt(tokenId) < 201) {
    receiveTicketLevelOne(homeOrAway, tokenId, from, signer);
  } else if (parseInt(tokenId) >= 201 && parseInt(tokenId) < 401) {
    receiveTicketLevelTwo(homeOrAway, tokenId, from, signer);
  } else if (parseInt(tokenId) >= 401 && parseInt(tokenId) < 601) {
    receiveTicketLevelThree(homeOrAway, tokenId, from, signer);
  } else if (parseInt(tokenId) >= 601 && parseInt(tokenId) < 801) {
    receiveTicketLevelFour(homeOrAway, tokenId, from, signer);
  } else if (parseInt(tokenId) >= 801 && parseInt(tokenId) < 1001) {
    receiveTicketLevelFive(homeOrAway, tokenId, from, signer);
  } else if (parseInt(tokenId) >= 1001 && parseInt(tokenId) < 1201) {
    receiveTicketLevelSix(homeOrAway, tokenId, from, signer);
  } else if (parseInt(tokenId) >= 1201 && parseInt(tokenId) < 1401) {
    receiveTicketLevelSeven(homeOrAway, tokenId, from, signer);
  } else if (parseInt(tokenId) >= 1401 && parseInt(tokenId) < 1601) {
    receiveTicketLevelEight(homeOrAway, tokenId, from, signer);
  } else if (parseInt(tokenId) >= 1601 && parseInt(tokenId) < 1801) {
    receiveTicketLevelNine(homeOrAway, tokenId, from, signer);
  } else if (parseInt(tokenId) >= 1801 && parseInt(tokenId) < 2001) {
    receiveTicketLevelTen(homeOrAway, tokenId, from, signer);
  }
};
