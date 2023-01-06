<template>
  <div>
    <select name="" id="" v-model="selData">
      <option :value="city.title" v-for="city in cities" :key="city">
        {{ city.title }}
      </option>
    </select>
    <div>선택하신 배송지역은 : {{ selData }}</div>
  </div>
  <div>
    <table>
      <tr>
        <th>No.</th>
        <th>카테고리</th>
        <th>품 명</th>
        <th>가 격</th>
        <th>배송비</th>
        <th>수량</th>
        <th>합계</th>
      </tr>
      <tbody>
        <tr v-for="(data, i) in dataArr" :key="i">
          <td>{{ i + 1 }}</td>
          <td>{{ data.category }}</td>
          <td>{{ data.product_name }}</td>
          <td>{{ data.price.toLocaleString('ko-KR') + '원' }}</td>
          <td>
            {{
              selData !== '제주'
                ? data.delivery_price.toLocaleString('ko-KR') + '원'
                : (data.delivery_price + 5000).toLocaleString('ko-KR') + '원'
            }}
          </td>
          <td><input type="number" v-model="수량[i]" /></td>
          <td>
            {{
              (total[i] = sum(
                data.price,
                수량[i],
                selData !== '제주'
                  ? data.delivery_price
                  : data.delivery_price + 5000
              )).toLocaleString('ko-KR') + '원'
            }}
            <!-- data.price*data.amount+(data.amount>0?data.delivery_price:0) -->
          </td>
        </tr>
        <tr>
          <th colspan="6">총합</th>
          <th>{{ totalSum(total).toLocaleString('ko-KR') + '원' }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
/* eslint-disable */
import data from '../assets/productData.js'
export default {
  name: 'app',
  data() {
    return {
      수량: [0, 0, 0, 0, 0],
      selData: '',
      cities: [
        { title: '부산', code: '051' },
        { title: '서울', code: '02' },
        { title: '제주', code: '064' },
        { title: '창원', code: '055' },
        { title: '대구', code: '053' }
      ],
      inUser: 0,
      dataArr: data,
      amount: '',
      total: [],
      totalprice: 0
    }
  },
  methods: {
    sum(price, amount, delivery) {
      if (amount !== 0) {
        return price * amount + delivery
      } else {
        return 0
      }
    },
    totalSum(arr) {
      this.totalprice = 0
      for (let i = 0; i < arr.length; i++) {
        this.totalprice += this.total[i]
      }
      return this.totalprice
    }
  }
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
