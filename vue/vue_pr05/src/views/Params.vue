<template>
  <div>
    <h1>2. Params 연습입니다.</h1>

    <h2>1) Params로 받은 데이터</h2>
    <h2>name : {{ $route.params.name }}</h2>
    <h2>age : {{ $route.params.age }}</h2>

    <h2>2) props로 받은 데이터</h2>
    <h2>name : {{ name }}</h2>
    <h2>age : {{ age }}</h2>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Params',
  props: {
    name: {
      type: String,
      default: ''
    },
    age: {
      type: String,
      default: ''
    }
  },
  created() {
    console.log(this.$route.params.name)
    console.log(this.$route.params.age)
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style></style>
