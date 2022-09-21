import { ethers, Contract } from "ethers";
import { RECEIVE_REFUND_ABI, RECEIVE_REFUND_ADDRESS } from "../contractInfo/ReceiveRefund";

export const refundTicketLevelOne = async (
  homeOrAway: boolean,
  tokenId: string,
  signer: FetchSignerResult<ethers.Signer> | undefined
): Promise<void> => {
  const ReceiveRefundContract = new Contract(
    RECEIVE_REFUND_ADDRESS,
    RECEIVE_REFUND_ABI,
    signer
  );
  try {
    await ReceiveRefundContract.refundTicketLevelOne(homeOrAway, tokenId, {value: ethers.utils.parseEther("5")});
  } catch (error: any) {
    console.log(error);
  }
};

export const refundTicketLevelTwo = async (
  homeOrAway: boolean,
  tokenId: string,
  signer: FetchSignerResult<ethers.Signer> | undefined
): Promise<void> => {
  const ReceiveRefundContract = new Contract(
    RECEIVE_REFUND_ADDRESS,
    RECEIVE_REFUND_ABI,
    signer
  );
  try {
    await ReceiveRefundContract.refundTicketLevelTwo(homeOrAway, tokenId, {
      value: ethers.utils.parseEther("4"),
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const refundTicketLevelThree = async (
  homeOrAway: boolean,
  tokenId: string,
  signer: FetchSignerResult<ethers.Signer> | undefined
): Promise<void> => {
  const ReceiveRefundContract = new Contract(
    RECEIVE_REFUND_ADDRESS,
    RECEIVE_REFUND_ABI,
    signer
  );
  try {
    await ReceiveRefundContract.refundTicketLevelThree(homeOrAway, tokenId, {
      value: ethers.utils.parseEther("3"),
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const refundTicketLevelFour = async (
  homeOrAway: boolean,
  tokenId: string,
  signer: FetchSignerResult<ethers.Signer> | undefined
): Promise<void> => {
  const ReceiveRefundContract = new Contract(
    RECEIVE_REFUND_ADDRESS,
    RECEIVE_REFUND_ABI,
    signer
  );
  try {
    await ReceiveRefundContract.refundTicketLevelFour(homeOrAway, tokenId, {
      value: ethers.utils.parseEther("2"),
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const refundTicketLevelFive = async (
  homeOrAway: boolean,
  tokenId: string,
  signer: FetchSignerResult<ethers.Signer> | undefined
): Promise<void> => {
  const ReceiveRefundContract = new Contract(
    RECEIVE_REFUND_ADDRESS,
    RECEIVE_REFUND_ABI,
    signer
  );
  try {
    await ReceiveRefundContract.refundTicketLevelFive(homeOrAway, tokenId, {
      value: ethers.utils.parseEther("1"),
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const refundTicketLevelSix = async (
  homeOrAway: boolean,
  tokenId: string,
  signer: FetchSignerResult<ethers.Signer> | undefined
): Promise<void> => {
  const ReceiveRefundContract = new Contract(
    RECEIVE_REFUND_ADDRESS,
    RECEIVE_REFUND_ABI,
    signer
  );
  try {
    await ReceiveRefundContract.refundTicketLevelSix(homeOrAway, tokenId, {
      value: ethers.utils.parseEther("0.5"),
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const refundTicketLevelSeven = async (
  homeOrAway: boolean,
  tokenId: string,
  signer: FetchSignerResult<ethers.Signer> | undefined
): Promise<void> => {
  const ReceiveRefundContract = new Contract(
    RECEIVE_REFUND_ADDRESS,
    RECEIVE_REFUND_ABI,
    signer
  );
  try {
    await ReceiveRefundContract.refundTicketLevelSeven(homeOrAway, tokenId, {
      value: ethers.utils.parseEther("0.25"),
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const refundTicketLevelEight = async (
  homeOrAway: boolean,
  tokenId: string,
  signer: FetchSignerResult<ethers.Signer> | undefined
): Promise<void> => {
  const ReceiveRefundContract = new Contract(
    RECEIVE_REFUND_ADDRESS,
    RECEIVE_REFUND_ABI,
    signer
  );
  try {
    await ReceiveRefundContract.refundTicketLevelEight(homeOrAway, tokenId, {
      value: ethers.utils.parseEther("0.125"),
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const refundTicketLevelNine = async (
  homeOrAway: boolean,
  tokenId: string,
  signer: FetchSignerResult<ethers.Signer> | undefined
): Promise<void> => {
  const ReceiveRefundContract = new Contract(
    RECEIVE_REFUND_ADDRESS,
    RECEIVE_REFUND_ABI,
    signer
  );
  try {
    await ReceiveRefundContract.refundTicketLevelNine(homeOrAway, tokenId, {
      value: ethers.utils.parseEther("0.1"),
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const refundTicketLevelTen = async (
  homeOrAway: boolean,
  tokenId: string,
  signer: FetchSignerResult<ethers.Signer> | undefined
): Promise<void> => {
  const ReceiveRefundContract = new Contract(
    RECEIVE_REFUND_ADDRESS,
    RECEIVE_REFUND_ABI,
    signer
  );
  try {
    await ReceiveRefundContract.refundTicketLevelTen(homeOrAway, tokenId, {
      value: ethers.utils.parseEther("0.05"),
    });
  } catch (error: any) {
    console.log(error);
  }
};



