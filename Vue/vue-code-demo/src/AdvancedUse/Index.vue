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
    <!-- <component :is="NextTickName" /> -->

    <!-- 异步组件 -->
    <!-- <Input v-if="showInputDemo" />
        <button @click="handler">toggle</button> -->

    <!-- keep-alive -->
    <button @click="changeState('A')">A</button>
    <button @click="changeState('B')">B</button>
    <button @click="changeState('C')">C</button>

    <keep-alive>
      <!-- 优先使用v-show -->
      <KeepAliveStateA v-if="state === 'A'" />
      <KeepAliveStateB v-if="state === 'B'" />
      <KeepAliveStateC v-if="state === 'C'" />
    </keep-alive>
  </div>
</template>

<script>
// import CustomVModel from './CustomVModel'
// import NextTick from './NextTick'
// import SlotDemo from './SlotDemo'
// import ScopedSlotDemo from "./ScopedSlotDemo"
// import NamedSlot from './NamedSlot'
import KeepAliveStateA from "./KeepAliveStateA";
import KeepAliveStateB from "./KeepAliveStateB";
import KeepAliveStateC from "./KeepAliveStateC";

export default {
  components: {
    // CustomVModel
    // NextTick
    // SlotDemo
    // ScopedSlotDemo
    // NamedSlot
    // Input:() => import('../ComponentsParChild/Input')
    KeepAliveStateA,
    KeepAliveStateB,
    KeepAliveStateC,
  },
  data() {
    return {
      name: "codehzy",
      website: {
        1: {
          type: "text",
        },
        2: {
          type: "text",
        },
        3: {
          type: "image",
        },
      },
      // NextTickName: "NextTick"
      showInputDemo: false,
      state: "A",
    };
  },
  methods: {
    handler() {
      // this.showInputDemo = true
      // !this.showInputDemo -> 不行
      if (this.showInputDemo === false) {
        this.showInputDemo = true;
      } else {
        this.showInputDemo = false;
      }
    },
    changeState(state) {
      this.state = state;
    },
  },
};
</script>

<style></style>
