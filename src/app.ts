require("dotenv").config();
const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);
console.log(process.env.BOT_TOKEN)