<template>
  <div>tensorflow의 tensor</div>
  <p>
    <button v-for="i in 3" :key="i" @click="ch = 'tf' + i">tf {{ i }}번</button>
  </p>
  <component :is="ch"></component>
</template>

<script>
/* eslint-disable */
import tf1 from '@/components/tf1.vue'
import tf2 from '@/components/tf2.vue'
import tf3 from '@/components/tf3.vue'
export default {
  name: 'app',
  data() {
    return {
      ch: ''
    }
  },
  methods: {},
  components: {
    tf1,
    tf2,
    tf3
  }
}
</script>

<style></style>
