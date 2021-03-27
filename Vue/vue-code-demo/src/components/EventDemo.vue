<template>
    <div>
        <p>{{num}}</p>
        <button @click="increment1">+1</button>
        <button @click="increment2(2)">+2</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            num: 0
        }
    },
    methods: {
        increment1() {
            this.num++
        },
        increment2(val){
            this.num = this.num + val;
        }
    }
}
</script>

<style>

</style>