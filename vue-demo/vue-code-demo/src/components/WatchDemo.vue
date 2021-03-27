<template>
    <div>
        <input v-model="name">
        <input v-model="info.city">
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "codehzy",
            info: {
                city: "nanjing"
            }
        }
    },
    watch: {
        name(oldVal,val){
            console.log('watch name', oldVal,val) // 值类型，可正常拿到 oldVal 和 val
        },
        info: {
            handler(oldVal,val){
                console.log('watch info', oldVal, val) // 引用类型，拿不到 oldVal 。因为指针相同，此时已经指向了新的 val
            },
            deep: true // 深度监听
        }
    }
}
</script>

<style>

</style>