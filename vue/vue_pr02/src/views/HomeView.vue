<template>
  <div>
    <textarea disabled v-model="textarea" id="message"></textarea>
    <input
      v-model="message"
      autocomplete="off"
      id="input"
      @keyup.enter="sendMessage()"
    />
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  created() {
    this.$socket.on('chat massage', (data) => {
      window.scrollTo(0, document.body.scrollHeight)
      this.textarea = data + '\n'
    })
  },
  data() {
    return {
      textarea: '',
      message: ''
    }
  },
  method: {
    sendMessage() {
      this.$socket.emit('chat massage', { message: this.message })
      this.message = ''
    }
  },
  components: {}
}
</script>
