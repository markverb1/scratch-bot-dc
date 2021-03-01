const dbd = require("dbd.js") // node.js package

const bot = new dbd.Bot({ // creates bot
token: "your token here!", 
prefix: "-" // ur prefix
})
bot.status({ // applys status
  text: "Made by Markverb1",
  type: "PLAYING",
  status: "idle",
  time: 5
})
bot.readyCommand({ // what the bot does when it becomes online
    channel: "811155677338009620", // the channel id that the bot will send the message
    code: `ScratchBot is now online!` // the code
})
bot.onMessage() // message events

bot.command({
name: "ping", // just a ping pong command
code: `Pong! 🏓 \`$pingms\`` 
})
bot.command({
    name: "text2img", // converts text into an image
    code: `https://rockwelu.sirv.com/scbotasset1.jpg?text.0.text=$replaceText[$message; ;%20]&text.0.position.gravity=center&text.0.color=ff7500&text.0.opacity=85&text.0.font.family=Merriweather%20Sans&text.0.outline.color=c87b1e&text.0.outline.width=4&text.0.outline.blur=5`
})
bot.command({ // it the elp command
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
