import { Api } from "grammy";

const api = new Api(process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN ?? ''); // <-- put your bot token between the ""
const adminId = process.env.NEXT_PUBLIC_TELEGRAM_ADMIN_ID ?? '';

export async function sendHashToAdmin(txHash: string) {
  // Send a message without the `bot` object.
    const sent = await api.sendMessage(adminId, "https://sepolia.basescan.org/tx/" + txHash); // AdminId -> TxHash
}