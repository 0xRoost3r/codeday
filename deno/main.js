import { Bot } from "https://deno.land/x/grammy@v1.32.0/mod.ts";

const bot = new Bot("7990684791:AAH-e2fPffXA0YHEsGC6a5Zt9yDiTUS5OSc");

// You can now register listeners on your bot object `bot`.
// grammY will call the listeners when users send messages to your bot.

console.log(`Log test`);

// Handle the /start command.
bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
// Handle other messages.
bot.command("ping", async (ctx) => {
    // `reply` is an alias for `sendMessage` in the same chat (see next section).
    console.log(ctx.msg);
    await ctx.api.sendMessage(ctx.msg.chat.id, ctx.chat)
});

// Now that you specified how to handle messages, you can start your bot.
// This will connect to the Telegram servers and wait for messages.

// Start the bot.
bot.start();