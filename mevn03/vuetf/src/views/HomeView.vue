<template>
  <div>
    <h2>특강 part3. tfjs 활용</h2>
    <a href="https://www.tensorflow.org/js?hl=ko">텐서플로우</a>
    <hr />
    <h3>외부링크들</h3>
    <ol>
      <li v-for="i of 9" :key="i">
        <a :href="'http://localhost:8080/danfo0' + i + '.html'"
          >danfo0{{ i }}</a
        >
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {}
  },
  methods: {}
}
</script>

<style></style>
