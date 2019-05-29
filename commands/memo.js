exports.run = async (client, message, args, level) => {
const Discord = require("discord.js")
const fs = require("fs")
const memos = require("../resources/memos.json");
  if(args[0] === "view" && !args[1]) {
    let i = 0
    let memolist = ""
    while(i < memos.length) {
      if(memos[i].author === message.author.id) {
        memolist = memolist + memos[i].id + " | " + memos[i].title + "\n"
      }
      i++
    }
    message.channel.send(memolist)
  }
  else if(args[0] === "view" && args[1]) {
    if(memos[args[1]].author == message.author.id) {
      message.channel.send(memos[args[1]].content)
    } else {
      message.channel.send("Invalid boyo")
    }
  }
  else if(args[0] === "add" && args[1]) {
    var newmemo = {
      "title": args[1],
      "content": args.join(" ").slice(args[1].length + 5),
      "author": message.author.id,
      "id": memos.length
    }
    let data = JSON.stringify(newmemo);  
    let oldmemos = JSON.stringify(memos)
    fs.writeFileSync('./resources/memos.json', oldmemos + ",\n" + data);
    console.log("Added the memo (I hope)")
    message.channel.send(":ok_hand:")
  }
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["memos", "reminder"],
  permLevel: "Peasant" 
};
exports.help = {
  name: "memo",
  category: "Utility Commands",
  description: "Add reminders/notes to view later",
  usage: "memo <view/add/delete> [memo_id]"
};