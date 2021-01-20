<template>
    <div class="" >
        <h1>비동기 처리의 문제점</h1>
        <img alt="Vue logo" src="../assets/async1.png" style="margin-bottom: 5rem;">
        <h1>Callback</h1>
        <img alt="Vue logo" src="../assets/async2.png" style="margin-bottom: 5rem;">
        <h1>Callback 지옥</h1>
        <img alt="Vue logo" src="../assets/async3.png" style="margin-bottom: 5rem;">
        <img alt="Vue logo" src="../assets/async4.png" style="margin-bottom: 5rem;">
    </div>
    
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
    components: {
  },
  methods: {
    asyncTest() {
      // #1
      console.log('Hello');
      // #2
      setTimeout(function() {
        console.log('Bye');
      }, 3000);
      // #3
      console.log('Hello Again');
    },                                           
    getData() {
      var tableData
      axios('/demo/page/selectPageList').then(res => {
        tableData = res.data
        console.log(res)
      })
      return tableData
    },
    checkData() {
      console.log(this.getData())
    },
    getSyncData() {
      var tableData
      axios('/demo/page/selectPageList').then(res => {
        tableData = res.data
      })
      return tableData
    },
  },
  mounted() {
    this.asyncTest()
    //this.checkData()

  }
}
</script>
