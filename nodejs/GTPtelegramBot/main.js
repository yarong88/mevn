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

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: bot_chat_records,
    temperature: 0.7,
    max_tokens: 4000,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0
  })

  bot_chat_records += response.data.choices[0].text + '\n\n'
  bot.sendMessage(chatId, response.data.choices[0].text)
  console.log(bot_chat_records)
})

bot.on('error', (err) => console.log(err))
