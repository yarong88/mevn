<template>
  <h1>Main 페이지</h1>
  <sbMain :sbData1="data1" :sbData2="data2"></sbMain>
</template>

<script>
import sbMain from './Main_sub.vue'
export default {
  name: 'app',
  data() {
    return {
      data1: 'Main에서 서브로 가져온 sbData1의 내용입니다. ',
      data2: '마찬가지로 sbData2의 내용입니다.'
    }
  },
  methods: {},
  components: { sbMain }
}
</script>

<style></style>
