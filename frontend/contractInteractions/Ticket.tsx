import { ethers, Contract } from "ethers";
import { TICKET_ABI, TICKET_ADDRESS } from "../contractInfo/Ticket";
import { toast } from "react-toastify";
import { Provider } from "@wagmi/core";
import "react-toastify/dist/ReactToastify.css";

export const buySeatLevelOne = async (
  homeOrAway: boolean,
  signer: any
): Promise<void> => {
  const TicketContract = new Contract(TICKET_ADDRESS, TICKET_ABI, signer);
  try {
    const tx = await TicketContract.buySeatLevelOne(homeOrAway, {
      value: ethers.utils.parseEther("5"),
    });
    await tx.wait();
    toast.success("You Have Successfully Bought A Level One Ticket!", {
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
      "Transaction Failed, Make Sure You Have Enough Funds And Don't Already Own Two Tickets",
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

export const buySeatLevelTwo = async (
  homeOrAway: boolean,
  signer: any
): Promise<void> => {
  const TicketContract = new Contract(TICKET_ADDRESS, TICKET_ABI, signer);
  try {
    const tx = await TicketContract.buySeatLevelTwo(homeOrAway, {
      value: ethers.utils.parseEther("4"),
    });
    await tx.wait();
    toast.success("You Have Successfully Bought A Level Two Ticket !", {
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
      "Transaction Failed, Make Sure You Have Enough Funds And Don't Already Own Two Tickets",
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

export const buySeatLevelThree = async (
  homeOrAway: boolean,
  signer: any
): Promise<void> => {
  const TicketContract = new Contract(TICKET_ADDRESS, TICKET_ABI, signer);
  try {
    const tx = await TicketContract.buySeatLevelThree(homeOrAway, {
      value: ethers.utils.parseEther("3"),
    });
    await tx.wait();
    toast.success("You Have Successfully Bought A Level Three Ticket!", {
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
      "Transaction Failed, Make Sure You Have Enough Funds And Don't Already Own Two Tickets",
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

export const buySeatLevelFour = async (
  homeOrAway: boolean,
  signer: any
): Promise<void> => {
  const TicketContract = new Contract(TICKET_ADDRESS, TICKET_ABI, signer);
  try {
    const tx = await TicketContract.buySeatLevelFour(homeOrAway, {
      value: ethers.utils.parseEther("2"),
    });
    await tx.wait();
    toast.success("You Have Successfully Bought A Level Four Ticket!", {
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
      "Transaction Failed, Make Sure You Have Enough Funds And Don't Already Own Two Tickets",
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

export const buySeatLevelFive = async (
  homeOrAway: boolean,
  signer: any
): Promise<void> => {
  const TicketContract = new Contract(TICKET_ADDRESS, TICKET_ABI, signer);
  try {
    const tx = await TicketContract.buySeatLevelFive(homeOrAway, {
      value: ethers.utils.parseEther("1"),
    });
    await tx.wait();
    toast.success("You Have Successfully Bought A Level Five Ticket!", {
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
      "Transaction Failed, Make Sure You Have Enough Funds And Don't Already Own Two Tickets",
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

export const buySeatLevelSix = async (
  homeOrAway: boolean,
  signer: any
): Promise<void> => {
  const TicketContract = new Contract(TICKET_ADDRESS, TICKET_ABI, signer);
  try {
    const tx = await TicketContract.buySeatLevelSix(homeOrAway, {
      value: ethers.utils.parseEther("0.5"),
    });
    await tx.wait();
    toast.success("You Have Successfully Bought A Level Six Ticket!", {
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
      "Transaction Failed, Make Sure You Have Enough Funds And Don't Already Own Two Tickets",
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

export const buySeatLevelSeven = async (
  homeOrAway: boolean,
  signer: any
): Promise<void> => {
  const TicketContract = new Contract(TICKET_ADDRESS, TICKET_ABI, signer);
  try {
    const tx = await TicketContract.buySeatLevelSeven(homeOrAway, {
      value: ethers.utils.parseEther("0.25"),
    });
    await tx.wait();
    toast.success("You Have Successfully Bought A Level Seven Ticket!", {
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
      "Transaction Failed, Make Sure You Have Enough Funds And Don't Already Own Two Tickets",
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

export const buySeatLevelEight = async (
  homeOrAway: boolean,
  signer: any
): Promise<void> => {
  const TicketContract = new Contract(TICKET_ADDRESS, TICKET_ABI, signer);
  try {
    const tx = await TicketContract.buySeatLevelEight(homeOrAway, {
      value: ethers.utils.parseEther("0.125"),
    });
    await tx.wait();
    toast.success("You Have Successfully Bought A Level Eight Ticket!", {
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
      "Transaction Failed, Make Sure You Have Enough Funds And Don't Already Own Two Tickets",
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

export const buySeatLevelNine = async (
  homeOrAway: boolean,
  signer: any
): Promise<void> => {
  const TicketContract = new Contract(TICKET_ADDRESS, TICKET_ABI, signer);
  try {
    const tx = await TicketContract.buySeatLevelNine(homeOrAway, {
      value: ethers.utils.parseEther("0.1"),
    });
    await tx.wait();
    toast.success("You Have Successfully Bought A Level Nine Ticket!", {
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
      "Transaction Failed, Make Sure You Have Enough Funds And Don't Already Own Two Tickets",
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

export const buySeatLevelTen = async (
  homeOrAway: boolean,
  signer: any
): Promise<void> => {
  const TicketContract = new Contract(TICKET_ADDRESS, TICKET_ABI, signer);
  try {
    const tx = await TicketContract.buySeatLevelTen(homeOrAway, {
      value: ethers.utils.parseEther("0.05"),
    });
    await tx.wait();
    toast.success("You Have Successfully Bought A Level Ten Ticket!", {
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
      "Transaction Failed, Make Sure You Have Enough Funds And Don't Already Own Two Tickets",
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

export const approve = async (
  to: string,
  tokenId: string,
  signer: any
): Promise<void> => {
  const TicketContract = new Contract(TICKET_ADDRESS, TICKET_ABI, signer);
  try {
    const tx = await TicketContract.approve(to, tokenId);
    await tx.wait();
    toast.success("User Has Been Approved!", {
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
      "Transaction Failed, Make Sure The TokenId exists And The Address Is Correct",
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

export const homeSeatLevelCount = async (
  provider: Provider
): Promise<string | undefined> => {
  const TicketContract = new Contract(TICKET_ADDRESS, TICKET_ABI, provider);
  try {
    const count = await TicketContract.homeSeatLevelCount(1);
    return count.toString();
  } catch (error: any) {
    console.log(error);
  }
};

export const awaySeatLevelCount = async (
  provider: Provider
): Promise<string | undefined> => {
  const TicketContract = new Contract(TICKET_ADDRESS, TICKET_ABI, provider);
  try {
    const count = await TicketContract.awaySeatLevelCount(1);
    return count.toString();
  } catch (error: any) {
    console.log(error);
  }
};

