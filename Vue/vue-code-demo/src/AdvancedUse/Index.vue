<template>
    <!-- 自定义v-model -->
    <div>
        <!-- <p>{{name}}</p>
        <CustomVModel v-model="name"/> -->
        <!-- <NextTick /> -->

        <!-- <SlotDemo>
            {{name}}
        </SlotDemo> -->
        <ScopedSlotDemo :name="name">
            <!-- {{name}} -->
        </ScopedSlotDemo>

    </div>

</template>

<script>
// import CustomVModel from './CustomVModel'
// import NextTick from './NextTick'
// import SlotDemo from './SlotDemo'
import ScopedSlotDemo from "./ScopedSlotDemo"

export default {
    components: {
        // CustomVModel
        // NextTick
        // SlotDemo
        ScopedSlotDemo
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