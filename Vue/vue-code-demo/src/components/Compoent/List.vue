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
            default() {
                return []
            }
        }
    },
    data() {
        return{

        }
    },
    methods: {
        deleteItem(id){
            // 触发父组件
            this.$emit('delete',id)
        },
        // 自定义组件
        addTitleHandler(title){
            console.log('on add title',title)
        }
    },
    mounted() {
        // 绑定自定义组件
        event.$on('onAddTitle',this.addTitleHandler)
    },
    beforeDestory() {
        // 在vue生命周期最后销毁自定义组件
        event.$off('onAddTitle',this.addTitleHandler)
    }
}
</script>

<style>

</style>