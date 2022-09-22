import { ethers, Contract } from "ethers";
import { REFUND_ABI, REFUND_ADDRESS } from "../contractInfo/Refund";

export const refundBackToContractLevelOne = async (
  homeOrAway: boolean,
  tokenId: string,
  signer: FetchSignerResult<ethers.Signer> | undefined
): Promise<void> => {
  const RefundContract = new Contract(REFUND_ADDRESS, REFUND_ABI, signer);
  try {
    await RefundContract.refundBackToContractLevelOne(
      homeOrAway,
      tokenId
    );
  } catch (error: any) {
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
    await RefundContract.refundBackToContractLevelTwo(homeOrAway, tokenId);
  } catch (error: any) {
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
    await RefundContract.refundBackToContractLevelThree(homeOrAway, tokenId);
  } catch (error: any) {
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
    await RefundContract.refundBackToContractLevelFour(homeOrAway, tokenId);
  } catch (error: any) {
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
    await RefundContract.refundBackToContractLevelFive(homeOrAway, tokenId);
  } catch (error: any) {
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
    await RefundContract.refundBackToContractLevelSix(homeOrAway, tokenId);
  } catch (error: any) {
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
    await RefundContract.refundBackToContractLevelSeven(homeOrAway, tokenId);
  } catch (error: any) {
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
    await RefundContract.refundBackToContractLevelEight(homeOrAway, tokenId);
  } catch (error: any) {
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
    await RefundContract.refundBackToContractLevelNine(homeOrAway, tokenId);
  } catch (error: any) {
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
    await RefundContract.refundBackToContractLevelTen(homeOrAway, tokenId);
  } catch (error: any) {
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




