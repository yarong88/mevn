<template>
  <div>
    <p>1. xlsx에서 가져온 자료를 Vue.js에서 직접 분석하기</p>
    아들의 키 엑셀데이터 셋을 가져오세요.
    <input
      style="display: none"
      type="file"
      id="file"
      accept=".xls,.xlsx"
      @change="tfget"
    />
    <label for="file">+</label>
    <p>{{ this.filename }}</p>
  </div>
</template>

<script>
/* eslint-disable */
import * as XLSX from 'xlsx/xlsx.mjs'
export default {
  name: 'app',
  data() {
    return {
      filename: '',
      tfF: '',
      tfS: ''
    }
  },
  methods: {
    run(father, son, name) {
      const tfvis = this.$tfvis
      const fatherD = father.map((v, i) => ({
        x: i,
        y: v
      }))
      const sonD = son.map((v, i) => ({
        x: i,
        y: v
      }))

      tfvis.render.scatterplot(
        { name },
        { values: [fatherD, sonD] },
        {
          xLabel: 'x',
          yLabel: '키',
          height: 250,
          width: 500,
          zoomToFit: 1
        }
      )
    },
    tfget() {
      const father = []
      const son = []

      const input = document.getElementById('file')
      this.filename = input.files[0].name
      const reader = new FileReader()
      reader.readAsBinaryString(input.files[0])
      reader.onload = () => {
        const data = reader.result
        const workBook = XLSX.read(data, { type: 'binary' })
        const x = workBook.Sheets.train
        for (let i = 2; i <= Number(x['!ref'].replace('A1:B', '')); i++) {
          father.push(x['A' + i].v)
          son.push(x['B' + i].v)
        }
        this.tfF = father
        this.tfS = son

        this.run(father, son)
      }
    }
  }
}
</script>

<style scoped>
label {
  display: inline-block;
  padding: 20px 30px;
  border-radius: 10px;
  background-color: #96aae7;
  color: #fff;
  font-size: 2.5em;
}
label:active {
  transform: scale(0.9);
  background-color: #6d85ce;
}
</style>
