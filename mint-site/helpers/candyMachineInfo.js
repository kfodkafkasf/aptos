export const candyMachineAddress = "0xdaeffc45b904445501d30c32cde0bc07eaf857b4b0a3f9439b04413e15093939";
export const collectionName = "Test"; // Case sensitive!
export const collectionCoverUrl = "https://cdn.discordapp.com/attachments/945388085582114856/1033696741444288522/unknown.png";
export const mode = "mainnet"; // "dev" or "test" or "mainnet"

export let NODE_URL;
let FAUCET_URL;
if (mode == "dev") {
    NODE_URL = "https://fullnode.devnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.devnet.aptoslabs.com";
} else if (mode === "test") {
    NODE_URL = "https://fullnode.testnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.testnet.aptoslabs.com";
} else {
    NODE_URL = "https://fullnode.mainnet.aptoslabs.com/v1";
    FAUCET_URL = null;
}