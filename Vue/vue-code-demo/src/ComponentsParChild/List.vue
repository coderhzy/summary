<template>
  <div>
      <ul>
          <li v-for="item in list" :key="item.id">
              {{item.title}}
              <button @click="deleteItem(item.id)">删除</button>
          </li>
      </ul>
  </div>
</template>

<script>
import event from './event'

export default {
    props: {
        list: {
            type: Array,
            default()  {
                return []
            }
        }
    },
    data() {
        return {

        }
    },
    methods: {
        deleteItem(id) {
            this.$emit('delete',id)
        },
        // 兄弟组件绑定事件List,我们在Input触发
        addTitleHandler(title) {
            console.log('on add title',title)
        }
    },
    mounted() {
        event.$on('onAddTitle', this.addTitleHandler)
    },
    beforeDestroy() {
        // 及时销毁，否则可能造成内存泄漏 => 自定义事件要在beforeDestroy销毁
        event.$off('onAddTitle', this.addTitleHandler)
    }
}
</script>

<style>

</style>