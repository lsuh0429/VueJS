<template>
    <div class="">
        <h1>async / await</h1>
        <h2>async await 사용방법</h2>
            <img alt="Vue logo" src="../assets/asyncAwait1.png" style="margin-bottom: 5rem;" height="500px">
            <h2>async function</h2>
            <img alt="Vue logo" src="../assets/asyncAwait2.png" style="margin-bottom: 5rem;" height="500px">
            <h2>catch Error</h2>
            <img alt="Vue logo" src="../assets/asyncAwait3.png" style="margin-bottom: 5rem;" height="500px">
    </div>
</template>

<script>

    export default {    
        methods: {
                promise1() {
                    new Promise(resolve => {
                        resolve(1)
                    }).then(res => {
                        console.log(res++)
                        return res
                    })
                },
                async asyncAwait1() {
                    const f = () => new Promise(resolve => {
                        resolve(1)
                    }).then(res => {
                        console.log(res++)
                        console.log(res++)
                        console.log(res)
                    })
                    await f()
                    console.log('completed')
                },
                async asyncAwait2() {
                    const result = await new Promise(res => {
                        setTimeout(res, 1000, 'hello')
                    })
                    console.log(result)
                    return result
                },
                async asyncAwait3() {
                    console.log(this.asyncAwait2())
                    console.log('finish')
                },
                async asyncAwait4(){
                    const f = async () => {
                        return 'Done'
                    }
                    const result = f()
                    result.then(console.log)
                    console.log(result)
                }
        },
        mounted() {
            // this.asyncAwait1()
            this.asyncAwait3() 
            //this.asyncAwait4()
        }
    }
</script>

<style>
.dp-grid {
    display : gird;
}
</style>