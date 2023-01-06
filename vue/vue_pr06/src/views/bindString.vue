<template>
  <h1>Hello {{ userName }}</h1>
  <div>{{ arr }}</div>
  <div>{{ obj }}</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      userName: '홍길동',
      arr: [1, 2, 3, 4, 5],
      obj: { name: '부싯돌', age: 22 }
    }
  },
  methods: {}
}
</script>

<style></style>
