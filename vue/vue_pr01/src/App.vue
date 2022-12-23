<template>
  <div>
    <h1>안녕하세요. {{ vname }}입니다. {{ age }}살입니다.</h1>
    <button v-on:click="func('안녕!')">클릭 버튼</button>
    <!-- 클릭시 함수발동 -->
    <button @dblclick="func('안녕!')">더블 클릭 버튼</button>
    <!-- 더블클릭시 @ = v-on -->
    <hr>
    <h1 v-if="status">제가 보이나요?</h1>
    <h1 v-show="status">제가 보이나요?</h1>
    <!-- v-if 와 v-show -->
    <button v-on:click="status=true">보이게 할게요.</button>
    <button v-on:click="status=false">사라지게 할게요.</button>
    <button v-on:click="status=!status">사라지게 할게요.</button>
    <hr>
    <input type="text" v-model="inData" v-on:keyup.enter="func(inData+'메롱!')">    
    <!-- 양방향, keyup은 타자 칠때마다, key.enter는 엔터칠 때마다 -->
    <h2>{{ inData }}</h2>
    <!-- <div class="e" v-for="(e, idx) in list" :key="idx">
      <div class="i">
        <img src="e.img" alt="">
      </div>
      <svg viewBox="0 0 93.3 100" class="">
        <path d="M52.1 5.4l-5.4 5.4-5.4-5.4L46.6 0l5.5 5.4z"></path>
      </svg>
      <div class="t">{{ e.msg }}</div>
    </div> -->
    <!-- 267p list 채우면 잘 뜰 계획 -->
    <div>
      <h3>v-for 사용하기</h3>
      <button v-on:click="add">추가하기</button>
      <button v-on:click="sub">삭제하기</button>
      <ul>
        <li v-for="data in arrData" :key="data">{{ data }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:"app",
  data(){
    return{
      vname: "홍길동",
      age: 20,
      status : false,
      inData : "",
      // list: [{
      //   "img": "https//wnghdcjfe.github.io/1.png",
      //   "msg": "박종선, 똑똑하군."
      // }]
      // 267p
      arrData: [1,2,3,4,5],
      num:0,
    }
  },
  methods:{
    func : function(text){
      alert(text)
    },
    add : function(){
      this.arrData.push(this.arrData.length+1)
    },
    sub : function(){
      this.num = this.arrData.pop()
    }
  }
}
</script>

<style>
ul{
    display: flex;
  }
  li{
    position: relative;
    margin: 0 30px 0 10px;
  }
</style>
