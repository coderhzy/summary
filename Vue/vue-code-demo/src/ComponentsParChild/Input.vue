<template>
  <div>
      <input type="text" v-model="title">
      <button @click="addTitle">add</button>
  </div>
</template>

<script>
import event from './event'

export default {
    data() {
        return {
            title: ''
        }
    },
    methods: {
        addTitle() {
            // 调用父组件方法
            this.$emit('add',this.title)

            // 调用自定义事件
            // 触发由List兄弟组件传过来的自定义事件
            event.$emit('onAddTitle',this.title)

            this.title = ''
        }
    }
}
</script>

<style>

</style>