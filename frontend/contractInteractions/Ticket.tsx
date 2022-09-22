import { ethers, Contract, BigNumber } from "ethers";
import { TICKET_ABI, TICKET_ADDRESS } from "../contractInfo/Ticket";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const buySeatLevelOne = async (
  homeOrAway: boolean,
  signer: FetchSignerResult<ethers.Signer> | undefined
): Promise<void> => {
  const TicketContract = new Contract(TICKET_ADDRESS, TICKET_ABI, signer);
  try {
    const tx = await TicketContract.buySeatLevelOne(homeOrAway, {
      value: ethers.utils.parseEther("5"),
    });
    await tx.wait()
    toast.success("You Have Successfully Bought A Level One Ticket", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error: any) {
   toast.error("Make Sure You Have Enough Funds", {
     position: "top-right",
     autoClose: 5000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
   });
  }
};

export const buySeatLevelTwo = async (
  homeOrAway: boolean,
  signer: FetchSignerResult<ethers.Signer> | undefined
): Promise<void> => {
  const TicketContract = new Contract(TICKET_ADDRESS, TICKET_ABI, signer);
  try {
    await TicketContract.buySeatLevelTwo(homeOrAway, {
      value: ethers.utils.parseEther("4"),
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const buySeatLevelThree = async (
  homeOrAway: boolean,
  signer: FetchSignerResult<ethers.Signer> | undefined
): Promise<void> => {
  const TicketContract = new Contract(TICKET_ADDRESS, TICKET_ABI, signer);
  try {
    await TicketContract.buySeatLevelThree(homeOrAway, {
      value: ethers.utils.parseEther("3"),
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const buySeatLevelFour = async (
  homeOrAway: boolean,
  signer: FetchSignerResult<ethers.Signer> | undefined
): Promise<void> => {
  const TicketContract = new Contract(TICKET_ADDRESS, TICKET_ABI, signer);
  try {
    await TicketContract.buySeatLevelFour(homeOrAway, {
      value: ethers.utils.parseEther("2"),
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const buySeatLevelFive = async (
  homeOrAway: boolean,
  signer: FetchSignerResult<ethers.Signer> | undefined
): Promise<void> => {
  const TicketContract = new Contract(TICKET_ADDRESS, TICKET_ABI, signer);
  try {
    await TicketContract.buySeatLevelFive(homeOrAway, {
      value: ethers.utils.parseEther("1"),
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const buySeatLevelSix = async (
  homeOrAway: boolean,
  signer: FetchSignerResult<ethers.Signer> | undefined
): Promise<void> => {
  const TicketContract = new Contract(TICKET_ADDRESS, TICKET_ABI, signer);
  try {
    await TicketContract.buySeatLevelSix(homeOrAway, {
      value: ethers.utils.parseEther("0.5"),
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const buySeatLevelSeven = async (
  homeOrAway: boolean,
  signer: FetchSignerResult<ethers.Signer> | undefined
): Promise<void> => {
  const TicketContract = new Contract(TICKET_ADDRESS, TICKET_ABI, signer);
  try {
    await TicketContract.buySeatLevelSeven(homeOrAway, {
      value: ethers.utils.parseEther("0.25"),
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const buySeatLevelEight = async (
  homeOrAway: boolean,
  signer: FetchSignerResult<ethers.Signer> | undefined
): Promise<void> => {
  const TicketContract = new Contract(TICKET_ADDRESS, TICKET_ABI, signer);
  try {
    await TicketContract.buySeatLevelEight(homeOrAway, {
      value: ethers.utils.parseEther("0.125"),
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const buySeatLevelNine = async (
  homeOrAway: boolean,
  signer: FetchSignerResult<ethers.Signer> | undefined
): Promise<void> => {
  const TicketContract = new Contract(TICKET_ADDRESS, TICKET_ABI, signer);
  try {
    await TicketContract.buySeatLevelNine(homeOrAway, {
      value: ethers.utils.parseEther("0.1"),
    });
  } catch (error: any) {
    console.log(error);
  }
};


export const buySeatLevelTen = async (
  homeOrAway: boolean,
  signer: FetchSignerResult<ethers.Signer> | undefined
): Promise<void> => {
 const TicketContract = new Contract(TICKET_ADDRESS, TICKET_ABI, signer);
  try {
    await TicketContract.buySeatLevelTen(homeOrAway, {
      value: ethers.utils.parseEther("0.05"),
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const approve = async (
  to: string,
  tokenId: string,
  signer: FetchSignerResult<ethers.Signer> | undefined
): Promise<void> => {
  const TicketContract = new Contract(TICKET_ADDRESS, TICKET_ABI, signer);
  try {
    await TicketContract.approve(to, tokenId);
  } catch (error: any) {
    console.log(error);
  }
};

export const homeSeatLevelCount = async (provider: Provider): Promise<string | undefined> => {
  const TicketContract = new Contract(TICKET_ADDRESS, TICKET_ABI, provider);
  try {
   const count = await TicketContract.homeSeatLevelCount(1);
   return count.toString()
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