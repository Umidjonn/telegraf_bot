const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');
const bot = new Telegraf('6129082652:AAEw8E_LvL1rIt1RwHS4bdajqyC-zAGlrVg');

//Start

bot.start((ctx) =>{
  // ctx.reply('You have entered start commands')
  console.log(ctx);
});
//Help
bot.help((ctx) =>{
  ctx.reply('You have entered help commands')
});


//Settings
bot.settings((ctx) =>{
  ctx.reply('You have entered settings commands')
})

bot.launch();