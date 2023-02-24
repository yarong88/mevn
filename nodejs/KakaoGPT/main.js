const TelegramBot = require('node-telegram-bot-api')
const request = require('request')
require('dotenv').config()

const token = process.env.botid
const bot = new TelegramBot(token, { polling: true })

const REST_API_KEY = process.env.Kakao_API_KEY

bot.on('message', async (msg) => {
  const chatId = msg.chat.id
  let sendMessage = msg.text
  let return_message = ''
  let options = {
    url: 'https://api.kakaobrain.com/v1/inference/kogpt/generation',
    json: {
      prompt: sendMessage,
      max_tokens: 100,
      temperature: 0.1,
      top_p: 0.1,
      n: 1
    },
    headers: {
      Authorization: 'KakaoAK ' + REST_API_KEY,
      'Content-Type': 'application/json'
    }
  }
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      return_message = body.generations[0].text
      bot.sendMessage(chatId, return_message)
      console.log(return_message)
    } else {
      console.log('error = ' + response.statusCode)
    }
  })
})

bot.on('error', (err) => console.log(err))
