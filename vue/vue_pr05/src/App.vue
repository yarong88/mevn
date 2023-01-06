<template>
  <nav>
    <router-link to="/">Main </router-link> |

    <router-link
      :to="{ name: 'Query', query: { name: 'Query 선언적 방식', age: 10 } }"
    >
      Query 선언적 방식 |
    </router-link>

    <router-link
      :to="{ name: 'Params', params: { name: 'Params 선언적 방식', age: 11 } }"
    >
      Params 선언적 방식
    </router-link>
  </nav>
  <router-view />
  <hr />
  <div>
    <router-link
      :to="{ name: 'Query', query: { name: 'Query 선언적 방식', age: 10 } }"
    >
      Query 선언적 방식
    </router-link>
    <button @click="clickQuery()">Query 프로그래밍 방식</button>
  </div>
  <hr />
  <div>
    <router-link
      :to="{ name: 'Params', params: { name: 'Params 선언적 방식', age: 11 } }"
    >
      Params 선언적 방식
    </router-link>
    <button @click="clickParams()">Params 프로그래밍 방식</button>
  </div>
  <hr />
</template>

<script>
/* eslint-disable */
export default {
  name: 'App',
  methods: {
    clickQuery() {
      this.$router.push({
        name: 'Query',
        query: { name: 'Query 프로그램 방식', age: 20 }
      })
    },
    clickParams() {
      this.$router.push({
        name: 'Params',
        params: { name: 'Params 프로그램 방식', age: 22 }
      })
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
