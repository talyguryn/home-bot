/**
 * Load environment variables
 */
require('dotenv').config();

const TelegramBot = require('node-telegram-bot-api');
const rpiTemp = require('pi-temperature');
const Sound = require('node-aplay');

const BOT_TOKEN = process.env.BOT_TOKEN;
const ADMIN_CHAT = process.env.ADMIN_CHAT;


const bot = new TelegramBot(BOT_TOKEN, {polling: true});

bot.on('polling_error', function(error){ console.log(error); });

bot.onText(/\/temperature/, (msg, match) => {
    const chatId = msg.chat.id;

    // rpiTemp.measure(function(err, temp) {
    //     if (err) {
    //         console.error(err);
    //         return;
    //     }
    //
    //     bot.sendMessage(chatId, temp);
    // });
});

bot.onText(/\/doorbell/, (msg, match) => {
    const chatId = msg.chat.id;
    const bell = new Sound('doorbell.wav');

    bell.play();
    bell.on('complete', function () {
        console.log('Done with playback!');
        bot.sendMessage(chatId, 'Ding-dong!');
    });

});

bot.onText(/\/coin/, (msg, match) => {
    const chatId = msg.chat.id;
    const bell = new Sound('coin.wav');

    bell.play();
    bell.on('complete', function () {
        console.log('Done with playback!');
        bot.sendMessage(chatId, 'Coin drop!');
    });

});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    if (chatId !== ADMIN_CHAT) {
        bot.forwardMessage(ADMIN_CHAT, msg.chat.id, msg.message_id);
    }
});