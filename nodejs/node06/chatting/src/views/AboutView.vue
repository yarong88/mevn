<template>
  <div>
    <h1>{{ ydw }}</h1>
    <h2>{{ name }}</h2>
  </div>
</template>

<script setup>
const name = '이것은 setup으로 작성한 것임'
</script>

<script>
/* eslint-disable */
export default {
  name: 'about',
  setup() {},
  create() {
    this.$socket.on('chat', (data) => {
      console.log(data)
      this.chatData.push(data)
    })
  },
  data() {
    return {
      chatData: []
    }
  },
  methods: {}
}
</script>

<style></style>
