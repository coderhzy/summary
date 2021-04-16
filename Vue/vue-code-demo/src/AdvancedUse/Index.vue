<template>
    <!-- 自定义v-model -->
    <div>
        <!-- <p>{{name}}</p>
        <CustomVModel v-model="name"/> -->
        <!-- <NextTick /> -->

        <!-- 插槽 -->
        <!-- <SlotDemo>
            {{name}}
        </SlotDemo> -->

        <!-- 作用域插槽 -->
        <!-- <ScopedSlotDemo :name="name">
            {{name}}
        </ScopedSlotDemo> -->

        <!-- 具名插槽 -->
        <!-- <NamedSlot>
            <template v-slot:header>
                <h1>将插入 header slot中</h1>
            </template>
            <p>将插入到main slot中，即未命名slot</p>
            <template v-slot:footer> 
                <p>将插入到footer slot中</p>
            </template>
        </NamedSlot> -->

        <!-- 动态组件 -->
        <!-- <div v-for="(val,key) in website" :key="key">
            <component :is="val.type" />
        </div> -->
        <component :is="NextTickName" />
    </div>

</template>

<script>
// import CustomVModel from './CustomVModel'
import NextTick from './NextTick'
// import SlotDemo from './SlotDemo'
// import ScopedSlotDemo from "./ScopedSlotDemo"
// import NamedSlot from './NamedSlot'

export default {
    components: {
        // CustomVModel
        NextTick
        // SlotDemo
        // ScopedSlotDemo
        // NamedSlot
    },
    data() {
        return {
            name: 'codehzy',
            website: {
                1: {
                    type: "text"
                },
                2: {
                    type: "text",
                },
                3: {
                    type: "image"
                }
            },
            NextTickName: "NextTick"
        }
    }
}
</script>

<style>

</style>