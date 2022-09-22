import { ethers, Contract } from "ethers";
import { TICKET_ABI, TICKET_ADDRESS } from "../contractInfo/Ticket";


export const buySeatLevelOne = async (
  homeOrAway: boolean,
  signer: FetchSignerResult<ethers.Signer> | undefined
): Promise<void> => {
  const TicketContract = new Contract(TICKET_ADDRESS, TICKET_ABI, signer);
  try {
    await TicketContract.buySeatLevelOne(homeOrAway, {
      value: ethers.utils.parseEther("5"),
    });
  } catch (error: any) {
    console.log(error);
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