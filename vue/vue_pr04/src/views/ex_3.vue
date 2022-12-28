<template>
  <div>
    <h1>3.데이터 양방향 바인딩</h1>
    <h2>v-model을 사용하여 양방향을 구현</h2>
    <span>v-model :</span><input type="text" v-model="inData" />
    <h3>{{ inData }}</h3>
    <button @click="inData = outData">꺼내오기:{{ inData }}</button>
    <br />
    <hr />
    <h1>4.데이터 단방향 바인딩</h1>
    <h2>v-bind와 v-on을 사용하여 단방향(2가지=양방향)을 구현한다.</h2>
    <h3>{{ inValue }}</h3>
    <input type="text" v-bind:value="inValue" v-on:input="upValue" />
    <button style="margin: 0 5px" @click="setData">데이터 입력</button>
    <button @click="getData">데이터 출력</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      outData: '꺼내온 값이에요.',
      inData: '',
      inValue: '읽기만 함',
      temp: ''
    }
  },
  methods: {
    upValue: function (e) {
      this.inValue = e.target.value
    },
    setData: function () {
      if (this.inValue) {
        alert('v-binding 된 값:' + this.inValue + ' 를 입력함')
        this.temp = this.inValue
        this.inValue = ''
      }
    },
    getData: function () {
      alert('v-on으로 저장된 값:' + this.temp + ' 를 꺼내옴')
      this.inValue = this.temp
    }
  }
}
</script>

<style></style>
