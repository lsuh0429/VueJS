<template>
    <div className="flex">
        
        <img alt="Vue logo" src="../assets/axios1.png" style="margin-bottom: 5rem;" height="4000px">
    </div>
</template>

<script>
import axios from '@/util/axios'

export default {
    methods: {
        
    },
    created() {
        axios.get('/users').then(res => {
            console.log(res)
        })
    }
}
</script>

<style>

</style>