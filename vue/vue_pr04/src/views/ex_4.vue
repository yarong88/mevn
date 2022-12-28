<template>
  <div>
    <div>
      <button
        @click="page = p"
        v-for="p in pages"
        :key="p"
        :class="{ active: page == p }"
      >
        {{ p }}
      </button>
    </div>
    <div v-for="(g, i) in pages" :key="i">
      <div v-if="g == page">
        {{ g }}
        <br />
        <img :src="'../../main0' + (i + 1) + '.jpg'" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      page: 'page1',
      pages: ['page1', 'page2', 'page3', 'page4']
    }
  },
  methods: {}
}
</script>

<style scoped>
button {
  scale: 200%;
  background-color: white;
  border: 1px solid gray;
  margin: 30px;
  cursor: pointer;
}
button:hover {
  background-color: aquamarine;
}
button.active {
  color: aliceblue;
  background-color: rgb(85, 102, 255);
}
img {
  width: 70%;
}
</style>
