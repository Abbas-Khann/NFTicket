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




