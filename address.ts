import { PublicKey } from "@solana/web3.js";
import * as anchor from "@project-serum/anchor";
import { SPL_GOV_PROGRAM_ID } from "./constants";

export function getUserDataAddressAndBump(
  user: PublicKey,
  programId: PublicKey
): [PublicKey, number] {
  return anchor.utils.publicKey.findProgramAddressSync(
    [Buffer.from("user-data"), user.toBuffer()],
    programId
  );
}

export function getExpenseManagerAddressAndBump(
  name: string,
  programId: PublicKey
): [PublicKey, number] {
  return anchor.utils.publicKey.findProgramAddressSync(
    [Buffer.from("expense-manager"), Buffer.from(name)],
    programId
  );
}

export function getExpensePackageAddressAndBump(
  expenseManagerPDA: PublicKey,
  owner: PublicKey,
  nonce: number,
  programId: PublicKey
): [PublicKey, number] {
  let nonceBuf = Buffer.allocUnsafe(4);
  nonceBuf.writeInt32LE(nonce);
  return anchor.utils.publicKey.findProgramAddressSync(
    [
      Buffer.from("expense-package"),
      expenseManagerPDA.toBuffer(),
      owner.toBuffer(),
      nonceBuf,
    ],
    programId
  );
}

export function getAccessRecordAddressAndBump(
  programId: PublicKey,
  expenseManager: PublicKey,
  user: PublicKey
) {
  return anchor.utils.publicKey.findProgramAddressSync(
    [Buffer.from("access-record"), expenseManager.toBuffer(), user.toBuffer()],
    programId
  );
}

export function getProposalExecutionAddressAndBump(
  programId: PublicKey,
  expenseManager: PublicKey,
  proposal: PublicKey
) {
  return anchor.utils.publicKey.findProgramAddressSync(
    [
      Buffer.from("proposal-execution"),
      expenseManager.toBuffer(),
      proposal.toBuffer(),
    ],
    programId
  );
}

export function getTokenOwnerRecordAddressAndBump(
  realm: PublicKey,
  mint: PublicKey,
  member: PublicKey
) {
  return anchor.utils.publicKey.findProgramAddressSync(
    [
      Buffer.from("governance"),
      realm.toBuffer(),
      mint.toBuffer(),
      member.toBuffer(),
    ],
    SPL_GOV_PROGRAM_ID
  );
}

export function getGovernanceAddressAndBump(
  realm: PublicKey,
  governedAccount: PublicKey
) {
  return anchor.utils.publicKey.findProgramAddressSync(
    [
      Buffer.from("account-governance"),
      realm.toBuffer(),
      governedAccount.toBuffer(),
    ],
    SPL_GOV_PROGRAM_ID
  );
}

export function getNativeTreasuryAddressAndBump(governance: PublicKey) {
  return anchor.utils.publicKey.findProgramAddressSync(
    [Buffer.from("native-treasury"), governance.toBuffer()],
    SPL_GOV_PROGRAM_ID
  );
}
