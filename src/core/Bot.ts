import {Telegraf} from "telegraf";
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN || '');

export default bot;