<template>
    <div class="">
        <h1>Promise ex.</h1>
        <h2>Promise chaining</h2>
            <img alt="Vue logo" src="../assets/promiseEx1.png" style="margin-bottom: 5rem;" height="700px">
            <h2>Error Catch</h2>
            <img alt="Vue logo" src="../assets/promiseEx2.png" style="margin-bottom: 5rem;" height="400px">
            <h2>Promise.all</h2>
            <img alt="Vue logo" src="../assets/promiseEx3.png" style="margin-bottom: 5rem;" height="500px">
            <h2>new Promise VS () => new Promise</h2>
            <img alt="Vue logo" src="../assets/promiseEx4.png" style="margin-bottom: 5rem;" height="900px">
    </div>
</template>

<script>
    import axios from 'axios'

    export default {    
        methods: {
                promise1() {
                    new Promise(function(resolve) {
                        resolve(1)
                    }).then(res => {
                        console.log(res++)
                        return res
                    }).then(res => {
                        console.log(res++)
                        return res
                    }).then(res => {
                        console.log(res++)
                        return res
                    }).then(res => {
                        console.log(res++)
                        return res
                    }).then(() => {
                        throw Error("error!!")
                    }).catch(error => {
                        console.log(error)
                    })
                },
                promise2() {
                    axios('/test').then(res => {
                        console.log(res)
                    }).catch(res => {
                        console.log('catch!')
                        console.log(res)
                    })
                },
                promiseAll() {
                    const p1 =  new Promise(resolve => {
                        console.log('첫 번째 Promise')
                        resolve('1')
                    })

                    const p2 = new Promise(resolve => {
                        console.log('두 번째 Promise')
                        resolve('2')
                    })

                    Promise.all([p1, p2]).then(values => console.log('모두 완료', values))
                }
        },
        mounted() {
            this.promise1()
            this.promise2()
            this.promiseAll()
        }
    }
</script>

<style>
</style>