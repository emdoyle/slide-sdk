// TODO: client-side state to select devnet/mainnet throughout app

// devnet
// export const SQUADS_PROGRAM_ID = new PublicKey(
//   "SQDSm7ifFqwmgxY5aL59BtHcBGHEgbg5thh4Y9ytdn3"
// );

// devnet manual deploy
// export const SQUADS_PROGRAM_ID = new PublicKey(
//   "3BgFvAdsYQsX7MfudNcXcLFizyy2XSBL3uuZeUysR2p7"
// );

// mainnet
import { PublicKey } from "@solana/web3.js";

export const SQUADS_PROGRAM_ID = new PublicKey(
  "SQUADSxWKud1RVxuhJzNcqYqu7F3GLNiktGzjnNtriT"
);

export const SPL_GOV_PROGRAM_ID = new PublicKey(
  "GovER5Lthms3bLBqWub97yVrMmEogzX7xNjdXpPPCVZw"
);
