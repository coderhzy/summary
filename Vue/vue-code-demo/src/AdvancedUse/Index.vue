<template>
    <!-- 自定义v-model -->
    <div>
        <!-- <p>{{name}}</p>
        <CustomVModel v-model="name"/> -->
        <NextTick />
    </div>

</template>

<script>
// import CustomVModel from './CustomVModel'
import NextTick from './NextTick'

export default {
    components: {
        // CustomVModel
        NextTick
    },
    data() {
        return {
            name: 'codehzy'
        }
    }
}
</script>

<style>

</style>