<template>
  <h1>몽고DB 실습하기</h1>
  <div>
    <h3>몽고DB로 Create하기</h3>
    제목 : <input type="text" v-model="title" /><br />
    날짜 : <input type="date" v-model="date1" /><br />
    내용 : <input type="text" v-model="content1" style="width: 400px" />
    <button @click="dbc">전송</button>
    <h4>{{ data1 }}</h4>
  </div>
  <hr />
  <div>
    <h3>몽고DB로 Read하기</h3>
    날짜 : <input type="date" v-model="date2" />
    <button @click="dbr">읽기</button>
    <h4>{{ data2 }}</h4>
  </div>
  <hr />
  <div>
    <h3>몽고DB로 Update하기</h3>
    제목 : <input type="text" v-model="title3" /><br />
    날짜 : <input type="date" v-model="date3" /><br />
    내용 : <input type="text" v-model="content3" style="width: 400px" />
    <button @click="dbu">1개 수정하기</button>
    <h4>{{ data3 }}</h4>
  </div>
  <hr />
  <div>
    <h3>몽고DB로 Delete하기</h3>
    날짜 : <input type="date" v-model="date4" />
    <button @click="dbd">1개 삭제하기</button>
    <h4>{{ data4 }}</h4>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
  data() {
    return {
      data1: '',
      data2: '',
      data3: '',
      data4: '',
      title1: '',
      title3: '',
      title4: '',
      date1: new Date().toISOString().substring(0, 10),
      date2: new Date().toISOString().substring(0, 10),
      date3: new Date().toISOString().substring(0, 10),
      date4: new Date().toISOString().substring(0, 10),
      content1: '',
      content3: '',
      content4: ''
    }
  },
  methods: {
    dbc: function () {
      this.data1 = 'DB로 저장 중..'
      axios
        .post('/dbc', {
          title: this.title1,
          date: this.date1,
          content: this.content1
        })
        .then((res) => {
          this.data1 = res.data
        })
    },
    dbr: function () {
      this.data2 = 'DB에서 불러오는 중..'
      axios.get('/dbr/' + this.date2).then((res) => (this.data2 = res.data))
    },
    dbu: function () {
      this.data3 = 'DB에 수정중..'
      axios
        .post('/dbu', {
          title: this.title3,
          date: this.date3,
          content: this.content3
        })
        .then((res) => {
          this.data3 = res.data
        })
    },
    dbd: function () {
      this.data4 = 'DB 데이터 삭제중..'
      axios.get('/dbd/' + this.date4).then((res) => (this.data4 = res.data))
    }
  }
}
</script>

<style></style>
