import { ethers, Contract } from "ethers";
import { RESELL_ABI, RESELL_ADDRESS } from "../contractInfo/Resell";

export const receiveTicketLevelOne = async (
  homeOrAway: boolean,
  tokenId: string,
  from: string,
  signer: FetchSignerResult<ethers.Signer> | undefined
): Promise<void> => {
  const ResellContract = new Contract(RESELL_ADDRESS, RESELL_ABI, signer);
  try {
    await ResellContract.receiveTicketLevelOne(homeOrAway, tokenId, from, {
      value: ethers.utils.parseEther("5"),
    });
  } catch (error: any) {
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
    await ResellContract.receiveTicketLevelTwo(homeOrAway, tokenId, from, {
      value: ethers.utils.parseEther("4"),
    });
  } catch (error: any) {
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
    await ResellContract.receiveTicketLevelThree(homeOrAway, tokenId, from, {
      value: ethers.utils.parseEther("3"),
    });
  } catch (error: any) {
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
    await ResellContract.receiveTicketLevelFour(homeOrAway, tokenId, from, {
      value: ethers.utils.parseEther("2"),
    });
  } catch (error: any) {
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
    await ResellContract.receiveTicketLevelFive(homeOrAway, tokenId, from, {
      value: ethers.utils.parseEther("1"),
    });
  } catch (error: any) {
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
    await ResellContract.receiveTicketLevelSix(homeOrAway, tokenId, from, {
      value: ethers.utils.parseEther("0.5"),
    });
  } catch (error: any) {
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
    await ResellContract.receiveTicketLevelSeven(homeOrAway, tokenId, from, {
      value: ethers.utils.parseEther("0.25"),
    });
  } catch (error: any) {
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
    await ResellContract.receiveTicketLevelEight(homeOrAway, tokenId, from, {
      value: ethers.utils.parseEther("0.125"),
    });
  } catch (error: any) {
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
    await ResellContract.receiveTicketLevelNine(homeOrAway, tokenId, from, {
      value: ethers.utils.parseEther("0.1"),
    });
  } catch (error: any) {
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
    await ResellContract.receiveTicketLevelTen(homeOrAway, tokenId, from, {
      value: ethers.utils.parseEther("0.05"),
    });
  } catch (error: any) {
    console.log(error);
  }
};