import discord from "discord.js";
import "dotenv/config";

const client = new discord.Client();
client.login(process.env.DISCORD_BOT_TOKEN);

const DiscordIsReady = () => {
  console.log("DISCORD CONNECTED");
};

client.on("ready", DiscordIsReady);

client.on("message", async (msg) => {
  if (
    msg.channel.id == "775536407866376207" &&
    msg.content.toLowerCase() === "hello"
  ) {
    // await msg.react(":)")
    await msg.channel.send("Hillo");
  }
});
