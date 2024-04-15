import { Client } from "discord.js"

const client = new Client({
  intents: []
})

client.on("ready", () => {
  console.log("O cliente está pronto")
})

client.login(process.env.TOKEN)
