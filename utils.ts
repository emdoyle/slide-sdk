import { BN, Program } from "@project-serum/anchor";
import { Slide } from "./types/slide";
import {
  AccountInfo,
  Connection,
  Keypair,
  PublicKey,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";
import * as anchor from "@project-serum/anchor";
import { Wallet } from "@project-serum/anchor/src/provider";

export type Payer = Keypair | Wallet;

export function toBN(num: number) {
  return new BN(`${num}`, 10);
}

export function signers(program: Program<Slide>, keypairs: Payer[]): Keypair[] {
  // @ts-ignore
  return keypairs.filter(
    (keypair) => !keypair.publicKey.equals(program.provider.wallet.publicKey)
  );
}

export async function getBalanceSum(
  connection: Connection,
  addresses: PublicKey[]
): Promise<BN> {
  let sum = new BN("0", 10);
  let current;
  for (let i = 0; i < addresses.length; i++) {
    current = toBN(await getBalance(connection, addresses[i]));
    sum = sum.add(current);
  }
  return sum;
}

export async function getAccountInfo(
  connection: Connection,
  account: PublicKey
) {
  return await connection.getAccountInfo(account);
}

export async function getBalance(connection: Connection, account: PublicKey) {
  return await connection.getBalance(account);
}

export async function getRentExemptBalance(
  connection: Connection,
  accountInfo: AccountInfo<Buffer>
) {
  return await connection.getMinimumBalanceForRentExemption(
    accountInfo.data.byteLength
  );
}

export async function transfer(
  program: Program<Slide>,
  from: PublicKey,
  to: PublicKey,
  payer: Payer,
  lamports: number
) {
  let transaction = new anchor.web3.Transaction();
  transaction.add(
    anchor.web3.SystemProgram.transfer({
      fromPubkey: from,
      toPubkey: to,
      lamports,
    })
  );
  await program.provider.send(transaction, signers(program, [payer]));
}

export function setWritable(
  instructions: TransactionInstruction[],
  account: PublicKey
) {
  // TODO: dirty hack until payer is marked writable correctly by SDK
  instructions.forEach((instruction) =>
    instruction.keys.forEach((keyObj) => {
      if (keyObj.pubkey.equals(account)) {
        keyObj.isWritable = true;
      }
    })
  );
}

export function addAccountAsSigner(
  instruction: TransactionInstruction,
  account: PublicKey,
  writable: boolean = false
) {
  instruction.keys.push({
    pubkey: account,
    isWritable: writable,
    isSigner: true,
  });
}

export async function flushInstructions(
  program: Program<Slide>,
  instructions: TransactionInstruction[],
  keypairs: Payer[]
) {
  const txn = new Transaction();
  txn.add(...instructions);
  return await program.provider.send(txn, signers(program, keypairs));
}
