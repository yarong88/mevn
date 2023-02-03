require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api')
const { mongoose, chatBot } = require('./DB_chatBot.js')

const token = process.env.botid

const bot = new TelegramBot(token, { polling: true })

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id
  const resp = match[1]

  bot.sendMessage(chatId, resp)
})

bot.on('message', (msg) => {
  const chatId = msg.chat.id

  let words, command, keyword, text, url, imageId
  words = msg.text.split(' ')
  command = words[0]

  if (command == '저장해') {
    keyword = words[1]
    imageId = ''
    if (words[2].includes('https://')) {
      url = words[2]
      text = ''
    } else {
      text = words[2]
      url = ''
    }
    let words_loaded
    const findM = async (word) => {
      const t = await chatBot
        .find({
          key: { $eq: word }
        })
        .lean()
      words_loaded = t[0]
    }
    findM(keyword).then((keyword) => {
      if ((keyword = words_loaded.key)) {
        if (words_loaded.text) {
          const main = async () => {
            const t = await chatBot
              .updateMany(
                {
                  key: {
                    $eq: keyword
                  }
                },
                {
                  $set: {
                    text: text
                  }
                },
                {
                  upsert: true,
                  multi: true,
                  new: true
                }
              )
              .lean()
          }
          main()
        }
        if (words_loaded.url) {
          const main = async () => {
            const t = await chatBot
              .updateMany(
                {
                  key: {
                    $eq: keyword
                  }
                },
                {
                  $set: {
                    url: url
                  }
                },
                {
                  upsert: true,
                  multi: true,
                  new: true
                }
              )
              .lean()
          }
          main()
        }
        if (words_loaded.imageId) {
          const main = async () => {
            const t = await chatBot
              .updateMany(
                {
                  key: {
                    $eq: keyword
                  }
                },
                {
                  $set: {
                    imageId: imageId
                  }
                },
                {
                  upsert: true,
                  multi: true,
                  new: true
                }
              )
              .lean()
          }
          main()
        }
      } else {
        const saveM = async () => {
          const _data = {
            key: keyword,
            text: text,
            url: url,
            imageId: imageId
          }
          const new_chatBot = new chatBot(_data)
          const t = await new_chatBot.save()
          console.log(t)
        }
        saveM()
      }
    })
  }

  const findM = async (command) => {
    const t = await chatBot
      .find({
        key: { $eq: command }
      })
      .lean()

    if (t.length > 0) {
      if (t[0].text) {
        bot.sendMessage(chatId, t[0].text)
      }
      if (t[0].albumId) {
        bot.sendPhoto(chatId, t[0].albumId)
      }
      if (t[0].url) {
        bot.sendMessage(chatId, t[0].url)
      }
    }
  }
  findM(msg.text)
})
