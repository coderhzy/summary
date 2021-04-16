<template>
  <div id="app">
      <ul ref='ul1'>
          <li v-for="(item,index) in list" :key="index">
              {{item}}
          </li>
      </ul>
      <button @click="addItems">添加一项</button>
  </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return{
            list: ['a','b','c']
        }
    },
    methods: {
        addItems() {
            this.list.push(`${Date.now()}`)
            this.list.push(`${Date.now()}`)
            this.list.push(`${Date.now()}`)

            // 1. 异步渲染，$nextTick 待 DOM 渲染完再回调
            // 3. 页面渲染时会将data的修改做整合，多次data修改只会渲染一次
            this.$nextTick(() => {
                // 获取DOM元素
                const ulElem = this.$refs.ul1;
                // 打印ulElem -> DOM元素个数
                console.log(ulElem.childNodes.length);
            })
        }
    }
}
</script>

<style>

</style>