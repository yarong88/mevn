<template>
  <div>
    <ul>
      <li v-for="chat in chat_history" :key="chat">{{ chat }}</li>
      <li v-for="(chat, idx) in chat_now" :key="idx">{{ chat }}</li>
    </ul>
    <input
      v-model="message"
      type="text"
      autocomplete="off"
      id="input"
      v-on:keyup.enter="send"
    />
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  created() {
    this.$socket.on('chat history', (msg) => {
      this.chat_history = msg.split('-')
      window.scrollTo(0, document.body.scrollHeight)
    })
    this.$socket.on('chat message', (data) => {
      this.chat_now.push(data)
      window.scrollTo(0, document.body.scrollHeight)
    })
  },
  data() {
    return {
      textarea: '',
      message: '',
      chat_history: [],
      chat_now: []
    }
  },
  methods: {
    send: function () {
      this.$socket.emit('chat message', this.message)
      this.message = ''
    }
  },
  components: {}
}
</script>
