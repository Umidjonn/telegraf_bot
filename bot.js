const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');
const bot = new Telegraf('');

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
