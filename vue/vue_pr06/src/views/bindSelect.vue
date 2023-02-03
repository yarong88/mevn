<template>
    <div class="radio_check">
      <input
        type="radio"
        name="list"
        value="1"
        @click="korea = $event.target.checked"
      />한국어 <input type="radio" name="list" value="2" />영어
    </div>
    <div class="about">
      <div class="container">
        <textarea
          type="text"
          cols="30"
          rows="10"
          v-model="language"
          @keyup.enter="translator()"
        >
        </textarea>
        <input class="submit" type="submit" @click="translator()" />
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
      this.$socket.on('trans', (data) => {
        this.translate = data
      })
    },
    methods: {
      translator: function () {
        this.$socket.emit('trans', this.language)
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
  .radio_check {
    margin-bottom: 10px;
  }
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
    top: -25px;
    margin-left: 10px;
    background-color: white;
  }
  .submit {
    width: 100px;
    height: 30px;
    margin: 10px;
    border: none;
    border-radius: 10px;
    color: antiquewhite;
    background-color: rgb(153, 209, 148);
  }
  .submit:hover {
    background-color: rgb(42, 182, 0);
  }
  </style>