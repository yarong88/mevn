const TelegramBot = require('node-telegram-bot-api')
const { Configuration, OpenAIApi } = require('openai')
require('dotenv').config()

const token = process.env.botid
const bot = new TelegramBot(token, { polling: true })

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration)

let bot_chat_records = ''

bot.on('message', async (msg) => {
  const chatId = msg.chat.id
  bot_chat_records += msg.text
  let sendMessage = ''
  if (bot_chat_records.length > 30) {
    sendMessage = bot_chat_records.slice(-30)
  } else {
    sendMessage = bot_chat_records
  }
  console.log(sendMessage)

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: sendMessage,
    temperature: 0.7,
    max_tokens: 4000,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    n: 1
  })

  const GPT_chat = response.data.choices[0].text
  bot.sendMessage(chatId, GPT_chat)
  bot_chat_records += GPT_chat + '\n'
  console.log(bot_chat_records)
})

bot.on('error', (err) => console.log(err))
