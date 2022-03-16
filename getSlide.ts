import * as anchor from "@project-serum/anchor";
import slide from "./idl/slide.json";
import { Slide } from "./types/slide";
import { Idl, Program, Provider, Wallet } from "@project-serum/anchor";
import { PublicKey, Connection } from "@solana/web3.js";
export type slideHookArgs = {
  programId: PublicKey;
  wallet: Wallet;
  connection: Connection;
};

export const getSlide = ({
  programId,
  connection,
  wallet,
}: slideHookArgs): Program<Slide> => {
  return new anchor.Program(
    slide as Idl,
    programId,
    new Provider(connection, wallet, Provider.defaultOptions())
  ) as any as Program<Slide>;
};
