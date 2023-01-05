<template>
  <div class="modal">
    <div class="modal-body">
      <div>👏🏻변경되었습니다.😁</div>
    </div>
  </div>

  <div id="container">
    <div id="chatid1">
      <span
        >대화명
        <input
          id="chatidi"
          @input="myname = $event.target.value"
          placeholder="대화명을 입력하세요."
        />
        <input type="button" value="확인" @click="makeName()" />
      </span>
      <span v-if="myname !== '익명'">대화명:{{ myname }}</span>
    </div>

    <div id="messages">
      <div class="chat-line" v-for="(chat, i) in chatData" :key="i">
        <span v-if="chat.towhisper">{{ chat.towhisper }}에게</span>
        <span v-if="chat.whisper">귓속말</span
        ><span class="chat-id">{{ chat.id }}</span
        >:{{ chat.message }}
      </div>
    </div>
    <div id="chatid2">
      귓속말:
      <input type="checkbox" @click="ck = $event.target.checked" />
      <input :disabled="!ck" v-model="toname" placeholder="상대이름" />에게
    </div>

    <div id="send">
      <input
        id="input"
        v-model="message"
        autocomplete="off"
        @keyup.enter="sendMessage()"
      />
      <button @click="sendMessage()">전송</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'chat',
  setup() {},
  created() {
    this.$socket.on('chat', (data) => {
      this.chatData.push(data)
    })
  },
  data() {
    return {
      chatData: [],
      myname: '익명',
      toname: '',
      ck: false,
      message: '',
      modalon: false,
      whisper: false
    }
  },
  methods: {
    makeName() {
      console.log('나중에 씀')
    },
    sendMessage() {
      this.$socket.emit('chat', {
        message: this.message,
        id: this.myname,
        toid: this.toname,
        whisper: false,
        towhisper: ''
      })
      this.message = ''
    }
  }
}
</script>

<style>
html {
  height: 100%;
}
body {
  height: 100%;
  min-height: 500px;
  margin: 0;
  padding-bottom: 3em;
}
#container {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
#messages {
  height: 450px;
  background-color: #f1eaea;
  text-align: left;
  overflow-y: auto;
}
#send {
  margin: 5px;
  padding: 5px;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: baseline;
}
#chatid1 {
  display: flex;
  justify-content: space-between;
}
#chatid2 {
  text-align: right;
  margin-right: 5px;
}
#input {
  height: 100%;
  width: 60%;
  border: none;
  padding: 0 16px;
  flex-grow: 1;
  border-radius: 32px;
  background-color: rgb(179, 179, 179);
}
button {
  width: 25%;
  height: 100%;
  background-color: black;
  border: none;
  padding: 0.1em;
  margin: 4px;
  border-radius: 5px;
  outline: none;
  color: #fff;
}
.chat-line {
  background-color: aliceblue;
}
.chat-id {
  border-radius: 20px;
  background-color: aquamarine;
}
</style>
