const Discord = require('discord.js');
const bot = new Discord.Client()
const config = require("./config.json");

/* BOT READY */
bot.on("ready", async () => {
  console.log(`Your bot is dealing slots and running!`);

  bot.user.setActivity("Slots by Gazarino#9899", {type: "PLAYING"});
});

/* ONE COMMAND BY DEFAULT */
bot.on("message", async message => {

const msg = message;
/* AVOID BAD PEEPS */
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

if(message.content === '+slot') {

/* SPIN ANIMATION (use own or check mine)*/
const slotemoji = ":money_mouth:";
const customemoji = "<a:"+ config.emojiname +":"+ config.emojiid + ">";
if(config.haveEmoji === '1') slotemoji = customemoji;

/* ITEMS (SLOTS) */

let items = ['💵','💍','💯']; 

/* RANDOM */
let $ = items[Math.floor(items.length * Math.random())];
let $$ = items[Math.floor(items.length * Math.random())];
let $$$ = items[Math.floor(items.length * Math.random())];

/* EMBEDS */

const play = new Discord.MessageEmbed()
    .setTitle("Slot Machine")
    .setDescription("• "+slotemoji+"  "+slotemoji+"  "+slotemoji+" •")
    .setColor('RANDOM')
    .setFooter("are you lucky bitch?")

const $1 = new Discord.MessageEmbed()
    .setTitle("Slot Machine")
    .setDescription("• "+$+"  "+slotemoji+"  "+slotemoji+" •")
    .setColor('RANDOM')
    .setFooter("are you lucky bitch?")
 
const $2 = new Discord.MessageEmbed()
    .setTitle("Slot Machine")
    .setDescription("• "+$+"  "+$$+"  "+slotemoji+" •")
    .setColor('RANDOM')
    .setFooter("are you lucky bitch?")
 
 
const $3 = new Discord.MessageEmbed()
    .setTitle("Slot Machine")
    .setDescription("• "+$+"  "+$$+"  "+$$$+" •")
    .setColor('RANDOM')
    .setFooter("are you lucky bitch?")

 /* SPIN THE SLOTS */
 
 spinner = await message.channel.send(play)
   setTimeout(() => {
   spinner.edit($1);
  }, 600);
  setTimeout(() => {
   spinner.edit($2);
  }, 1200);
  setTimeout(() => {
   spinner.edit($3);
  }, 1800);
  
/* DEDUCT RESULTS */
// You can add/remove user balance in respective result (if using some currency system)

if($$ !== $ && $$ !== $$$) {
 setTimeout(() => {
   msg.channel.send("You LOST!`")
 }, 2000);
    })
} else if($ === $$ && $ === $$$) {
 setTimeout(() => {
   msg.channel.send("You WON!`")
 }, 2000);
   })
} else {
  msg.channel.send("2 slots are equal...")
}
}
})

bot.login(config.token)
