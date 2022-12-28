<template>
  <div>
    <div>구구단</div>
    <div>
      <input type="text" v-model="inData" />
      <button v-on:click="status = !status">ON/OFF</button>
      <button v-on:click="add">ALL</button>
    </div>
    <br />
    <br />
    <div>
      <table v-if="status">
        <tr>
          <th colspan="9">{{ inData + '단' }}</th>
        </tr>
        <tr>
          <td v-for="data in arrData" :key="data">
            {{ inData + 'X' + data + '=' + inData * data }}
          </td>
        </tr>
      </table>
      <br />
      <br />
      <br />
      <table v-for="data_0 in arrData2" :key="data_0">
        <tr>
          <th colspan="9">{{ data_0 + '단' }}</th>
        </tr>
        <tr>
          <td v-for="data in arrData" :key="data">
            {{ data_0 + 'X' + data + '=' + data_0 * data }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      status: false,
      inData: '1',
      arrData: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      arrData2: []
    }
  },
  methods: {
    add: function () {
      this.arrData2 = [2, 3, 4, 5, 6, 7, 8, 9]
    }
  }
}
</script>

<style>
table {
  display: inline;
}
table th {
  background-color: rgb(142, 229, 255);
  height: 30px;
}
table td {
  background-color: rgb(182, 238, 255);
  height: 40px;
  width: 70px;
  text-align: center;
}
</style>
