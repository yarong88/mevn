<template>
  <div>html :{{ htmlStirng }}</div>
  <div v-html="htmlStirng"></div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      htmlStirng: '<p style="color:red;">빨간색 글자</p>'
    }
  },
  methods: {}
}
</script>

<style></style>
