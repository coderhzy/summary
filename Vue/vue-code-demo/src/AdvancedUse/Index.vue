<template>
    <!-- 自定义v-model -->
    <div>
        <!-- <p>{{name}}</p>
        <CustomVModel v-model="name"/> -->
        <!-- <NextTick /> -->
        <SlotDemo>
            {{name}}
        </SlotDemo>
    </div>

</template>

<script>
// import CustomVModel from './CustomVModel'
// import NextTick from './NextTick'
import SlotDemo from './SlotDemo'

export default {
    components: {
        // CustomVModel
        // NextTick
        SlotDemo
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