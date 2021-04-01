<template>
  <div>
      <!-- 传递方法给子组件 -->
      <Input @add="addHandler" />
      <List :list="list" @delete="deleteHandler"/>
  </div>
</template>

<script>
import Input from './Input';
import List from './List';
export default {
    components:{
        Input,
        List
    },
    data() {
        return {
            list: [
                {
                    id: 'id-01',
                    title: '标题一'
                },
                {
                    id: 'id-02',
                    title: '标二'
                }
            ]
        }
    },
    methods: {
        addHandler(title) {
            this.list.push({
                id: `id-${Date.now()}`,
                title
            })
        },
        deleteHandler(id) {
            this.list = this.list.filter(item => item.id !== id);
        }
    }
}
</script>

<style>

</style>