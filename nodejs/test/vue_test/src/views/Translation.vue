<template>
  <div class="about">
    <div class="container">
      <textarea
        type="text"
        cols="30"
        rows="10"
        v-model="language"
        @keyup.enter="translator()"
        placeholder="입력후 엔터를 눌러주세요."
      >
      </textarea>
    </div>
    <textarea
      class="translate_box"
      disabled
      v-model="translate"
      name=""
      id=""
      cols="30"
      rows="10"
    ></textarea>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'app',
  data() {
    return {
      language: '',
      translate: '',
      korea: true
    }
  },
  created() {
    this.$socket.on('translate', (data) => {
      this.translate = data
    })
  },
  methods: {
    translator: function () {
      this.$socket.emit('translate', this.language)
      this.language = ''
    },
    only_ko: function () {
      if (this.korea) {
        alert('한글만 입력하세요.')
        const pattern = [가 - 힣0 - 9]
        this.language = this.language.replace(pattern, '')
      }
    }
  }
}
</script>

<style>
.about {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  /* width: 100%; */
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
}
.translate_box {
  position: relative;
  margin-left: 10px;
  background-color: white;
}
</style>
