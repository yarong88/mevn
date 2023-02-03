<template>
  <div></div>
</template>

<script>
export default {
  /* eslint-disable */
  name: 'Mealtable',
  data: function () {
    return {
      // mealTable: []
    }
  },
  // created: function () {
  //   this.getList()
  // },
  methods: {
    // getList: function () {
    //   this.$axios
    //     .get(
    //       'https://www.pusan.ac.kr/kor/CMS/MenuMgr/menuListOnBuilding.do?mCode=MN202'
    //     )
    //     .then((res) => {
    //       let $ = cheerio.load(res.data)
    //       $('.day').each(function () {
    //         day.push($(this).text())
    //       })
    //       $('.date').each(function () {
    //         date.push($(this).text())
    //       })
    //       let today = new Date()
    //       let days = today.getDay()
    //       for (i = 0; i <= 6; i++) {
    //         if (days - 1 == i) {
    //           $('tbody')
    //             .children('tr:eq(1)')
    //             .children(`td:eq(${i})`)
    //             .each(function () {
    //               this.mealTable.push($(this).text())
    //             })
    //         }
    //       }
    //     })
    // }
  }
}
</script>

<style></style>
