<template>
  <div>
    <h1>2.데이터 가져오기</h1>
    <!-- <h4>가져온 데이터</h4>
    <p>{{ dataArr }}</p> -->
    <table>
      <tr>
        <th>카테고리</th>
        <th>품 명</th>
        <th>가 격</th>
        <th>배송비</th>
      </tr>
      <!-- <tr v-for="data in dataArr" :key="data">
        <td>{{ data.category }}</td>
        <td>{{ data.product_name }}</td>
        <td>{{ data.price.toLocaleString('ko-KR') + '원' }}</td>
        <td>{{ data.delivery_price.toLocaleString('ko-KR') + '원' }}</td>
      </tr> -->
      <tbody v-for="data in dataArr" :key="data">
        <tr v-if="data.price >= inUser">
          <td>{{ data.category }}</td>
          <td>{{ data.product_name }}</td>
          <td>{{ data.price.toLocaleString('ko-KR') + '원' }}</td>
          <td>{{ data.delivery_price.toLocaleString('ko-KR') + '원' }}</td>
        </tr>
      </tbody>
    </table>
    <hr />
    <span>얼마 이상의 물품을 출력할까요?</span>
    <input type="text" v-model="inUser" />
  </div>
</template>

<script>
import data from '../assets/productData.js'
export default {
  name: 'app',
  data() {
    return {
      inUser: 0,
      dataArr: data
    }
  },
  methods: {}
}
</script>

<style>
table {
  display: inline;
}
table th {
  background-color: rgb(167, 234, 255);
  height: 30px;
}
table td {
  background-color: rgb(224, 248, 255);
  height: 40px;
  text-align: center;
}
</style>
