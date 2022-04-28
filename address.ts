import { PublicKey } from "@solana/web3.js";
import * as anchor from "@project-serum/anchor";

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
  expenseManager: PublicKey,
  user: PublicKey,
  programId: PublicKey
) {
  return anchor.utils.publicKey.findProgramAddressSync(
    [Buffer.from("access-record"), expenseManager.toBuffer(), user.toBuffer()],
    programId
  );
}

export function getProposalExecutionAddressAndBump(
  expenseManager: PublicKey,
  proposal: PublicKey,
  programId: PublicKey
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
  member: PublicKey,
  programId: PublicKey
) {
  return anchor.utils.publicKey.findProgramAddressSync(
    [
      Buffer.from("governance"),
      realm.toBuffer(),
      mint.toBuffer(),
      member.toBuffer(),
    ],
    programId
  );
}

export function getGovernanceAddressAndBump(
  realm: PublicKey,
  governedAccount: PublicKey,
  programId: PublicKey
) {
  return anchor.utils.publicKey.findProgramAddressSync(
    [
      Buffer.from("account-governance"),
      realm.toBuffer(),
      governedAccount.toBuffer(),
    ],
    programId
  );
}

export function getNativeTreasuryAddressAndBump(
  governance: PublicKey,
  programId: PublicKey
) {
  return anchor.utils.publicKey.findProgramAddressSync(
    [Buffer.from("native-treasury"), governance.toBuffer()],
    programId
  );
}
