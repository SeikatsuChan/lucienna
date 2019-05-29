<h1>How 2 add spell for dummies</h1>
------------------------------------
Okay so, for starters you'll need the following information on the spell you want to add:

- It's name (duh)
- Classes that can learn it
- It's level
- It's type (evocation etc)
- It's range
- Components needed (V, S, M)
- Casting time
- Duration
- It's description
- What it does at higher levels*

**this is actually the only optional component.*

Now that you have all of this information organized and seperated, the actual "effort" begins. Translating it to JSON is pretty easy, there's just a few details that need to be exact, else it breaks; To avoid breaking your waifu, here's a quick step-by-step:

  1.) Add a comma to the last item in resources/spells.json. Hop in the file and I'm sure you'll see what I mean; All of the entries except the last have a comma after them.
  
  2.) Format the information into JSON syntax. Below is a version with comments, there's also a functioning example in the top of resources/spells.json without the comments that break it.
  
```json
{
    "name": "Spell Name", // The spell's name
    "class": "Wizard, Sorcerer", // The classes that can learn it, seperated by commas
    "level": "1st level conjuration", // The type/level
    "range": "20 feet", // The distance the spell covers
    "components": "V, S, M (Items)", // The necessary componenets
    "time": "1 action", // The casting time
    "duration": "Instantaneous", // The duration of the spell
    "description": "uwu", // Full description of the spell, if there is a line break in the message, replace it with "\n\n", you CANNOT use the enter key to make new lines in code
    "ahl": "At Higher Levels" // Remember, this line can be omited, if it isn't there get rid of the comma after description
  }
```

  3.) Paste! Let Seikatsu know when you add stuff so he can reboot the bot for ya
  
  4.) Gloat to Seikatsu for you accomplishments, it will make him proud :3

<hr>
<h1>Simple Response Commands</h1>
------------------------------------------------------------
Okay so I don't have any good jokes to start this guide off with so lets jump into it.

  <h3>1.) Create a new command file</h3>

Head to the top left and click New File, the name should be `commands/NAME.js` (replacing NAME with whatever it's called)

Next there's some basic code that every command has in common, in order to make it uh, function...
```js
exports.run = async (client, message, args, level) => { 
  // COMMAND OUTPUT HERE
};

exports.conf = {
  enabled: true, // means "this command can actually be used"
  guildOnly: false, // if false, this can be used in DMs
  aliases: ["alias(s)"], // other ways to call the command (i.e help can be called with !h) If there are none, just leave the original command name.
  permLevel: "Peasant" // who can use it, Peasant means "everyone" and that's usually the case
};
exports.help = {
  name: "command", // the command name in help
  category: "Basic Commands", // category in help
  description: "Check if I'm alive!", // description for help
  usage: "command" // how the command is called, type !help ping for an example
};
```
Feel free to copy/paste that into the file, or steal another command, whatever makes it easier.

  <h3>2.) Make actual command code</h3>
  
Okay so now that's all done, awesome! Now comes the fun part, actually doing shit; 
So the most basic part of a command is the `message.channel.send()` method. This sends whatever is inside of the parenthesis to the channel the command was called in. For example:
```js
exports.run = async (client, message, args, level) => { 
  message.channel.send("Inno is hip and cool")
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hello"],
  permLevel: "Peasant"
};
exports.help = {
  name: "hi",
  category: "Fun/Random Commands",
  description: "Say hi",
  usage: "hi"
};
```
This will send `Inno is hip and cool` in the channel where the command `!hi` is used.

  <h3>3.) Ping Seikatsu to reboot the bot, it literally takes a nanosecond</h3>
  
That's about it for the bare bones basics, below are some specific cool things and examples for each so you can have more freedom. If there's something you can't figure out, either ask Seikatsu to do it entirely and stop trying to do his job >:c or just let me know to teach you or add it here.
<hr>

<h2>Args</h2>

Every word after the command name is an "arg", i.e `!help spell`, "spell" is the arg.