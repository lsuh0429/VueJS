<template>
    <div>
        <h1>Welcome to Home!</h1>
        <h3>{{ asyncfunction() }}</h3>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: "개발자의 품격",
            title2: "Seoul"
        }
    },
    methods: {
        asyncfunction() {
            console.log('Hello')
            
            setTimeout(function() {
                console.log('Bye')
            }, 1000)
            
            console.log('Hello Again')
        }
    }
}
</script>