<template>
  <div>
    <h1>1. Query 연습입니다.</h1>
    <h2>name: {{ $route.query.name }}</h2>
    <h2>age:{{ $route.query.age }}</h2>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Query',
  create() {
    console.log(this.$route.query.name)
    console.log(this.$route.query.age)
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style></style>
