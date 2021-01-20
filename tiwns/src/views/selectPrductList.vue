<template>
  <v-app>
      <div>
          <v-data-table
          :headers="headers"
          :items="prducts"
          :items-per-page="10"
          class="elevation-1">
          </v-data-table>
      </div>
    </v-app>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',

  components: {
  },

  data() {
    return {
      headers: [
        { 
        text: '제품번호',
        align: 'center',
        sortable: true,
        value: 'prductNo'
        },
        { text: '제품명',  value: 'prductNm' ,sortable: false,},
        { text: '구분', value: 'prductSeNm' },
        { text: 'rox 여부', value: 'roxInclsAt' },
        { text: 'mix 여부', value: 'msmixInclasAt' },
        { text: '가격', value: 'prductPc' }
      ],
      prducts: []
    }
  },
  created() {
    axios.post('/sfc/prduct/selectPrductList.json').then(res => {
        var data = res.data.data;
        console.log(data)
        this.prducts = data
    })
  }
};
</script>

<style>

</style>