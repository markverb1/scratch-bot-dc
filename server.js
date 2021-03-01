const dbd = require("dbd.js")

const bot = new dbd.Bot({
token: "your token here!", 
prefix: "-" 
})
bot.status({
  text: "Made by Markverb1",
  type: "PLAYING",
  status: "idle",
  time: 5
})
bot.readyCommand({ //command
    channel: "811155677338009620", //The channel where the bot will log
    code: `ScratchBot is now online!`
})
bot.onMessage()

bot.command({
name: "ping", 
code: `Pong! 🏓 \`$pingms\`` 
})
bot.command({
    name: "text2img",
    code: `https://rockwelu.sirv.com/scbotasset1.jpg?text.0.text=$replaceText[$message; ;%20]&text.0.position.gravity=center&text.0.color=ff7500&text.0.opacity=85&text.0.font.family=Merriweather%20Sans&text.0.outline.color=c87b1e&text.0.outline.width=4&text.0.outline.blur=5`
})
bot.command({
    name: "help",
    code: `$title[ScratchBot Beta Help]
$description[Prefix: -
Commands:
-ping - Shows the ping of the bot.
-text2img - Coverts text to an image]
$footer[Sorry there isn't much in this rewrite right now. There will be more soon!
markverb1©]
$color[ff4500]`
})
