import { Api } from "grammy";

const api = new Api(process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN ?? ''); // <-- put your bot token between the ""
const adminId = process.env.NEXT_PUBLIC_TELEGRAM_ADMIN_ID ?? '';

export async function sendHashToAdmin(message: string) {
  // Send a message without the `bot` object.
    await api.sendMessage(adminId, message); // AdminId -> TxHash
}