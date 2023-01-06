<template>
  <p>계산기 예제1</p>
  <input type="text" v-model="num1" /> + <input type="text" v-model="num2" /> =
  <span>{{ num1 + num2 }}</span>
  <br />
  <p>계산기 예제2</p>
  <input type="text" v-model.number="num3" /> +
  <input type="text" v-model.number="num4" /> =
  <span>{{ num3 + num4 }}</span>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      userId: '',
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0
    }
  },
  methods: {}
}
</script>

<style></style>
