<template>
    <!-- 自定义v-model -->
    <div>
        <!-- <p>{{name}}</p>
        <CustomVModel v-model="name"/> -->
        <!-- <NextTick /> -->

        <!-- <SlotDemo>
            {{name}}
        </SlotDemo> -->
        <!-- <ScopedSlotDemo :name="name">
            {{name}}
        </ScopedSlotDemo> -->
        <NamedSlot>
            <template v-slot:header>
                <h1>将插入 header slot中</h1>
            </template>
            <p>将插入到main slot中，即未命名slot</p>
            <template v-slot:footer> 
                <p>将插入到footer slot中</p>
            </template>
        </NamedSlot>
    </div>

</template>

<script>
// import CustomVModel from './CustomVModel'
// import NextTick from './NextTick'
// import SlotDemo from './SlotDemo'
// import ScopedSlotDemo from "./ScopedSlotDemo"
import NamedSlot from './NamedSlot'

export default {
    components: {
        // CustomVModel
        // NextTick
        // SlotDemo
        // ScopedSlotDemo
        NamedSlot
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