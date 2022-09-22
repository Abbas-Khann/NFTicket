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