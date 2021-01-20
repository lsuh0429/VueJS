<template>
  <div class="">
    <h1>Promise 예제</h1>
    {{ promise() }}
    <img alt="Vue logo" src="../assets/promise1.png" style="margin-bottom: 5rem;" height="500px">
  </div>
</template>

<script>

  export default {
    methods: {
      promise() {
        console.log('1')

        new Promise(function(resolve){
          setTimeout(function() {
            console.log('test')
              resolve()
            setTimeout(() => {
              console.log(2)
            },1000)
          }, 3000)
        }).then(function() {
          console.log('3')
        }) 
      },
    },
  }
</script>
