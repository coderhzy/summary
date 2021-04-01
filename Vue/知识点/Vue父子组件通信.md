## Vue父子组件通信 & 兄弟组件通讯
> 一句话概括父子组件通信: 父组件在methods定义方法,将方法用Vue提供的方法绑定在子组件标签上，在子组件中如果父组件传送数组则选择接收数据，父组件传递的方法则用this.$emit('绑定事件方法(注意)',参数)
> 一句话概括兄弟组件通讯：我们在某个兄弟组件中定义自定义方法，如下面List组件中的**addTitleHandler**，接着将自定义事件绑定到某个方法上。最后再另外需要这个自定义方法的组件中使用**event.$emit('addTitleHandler',this.title)**，记得在Vue生命周期要结束的时候要销毁自定义事件。
### 实现一个todoList功能
/event.js
```JS
import Vue from 'vue'

export default new Vue()
```

1. /index.vue：父组件
```vue
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
```

/Input.vue：组件一
```vue
<template>
  <div>
      <input type="text" v-model="title">
      <button @click="addTitle">add</button>
  </div>
</template>

<script>
import event from './event';

export default {
    data() {
        return{
            title: ''
        }
    },
    methods: {
        addTitle() {
            // 触发父组件的方法
            this.$emit('add',this.title)

            // 调用自定义事件
            event.$emit('onAddTitle',this.title)

            this.title = ''
        },
    }
}
</script>
```

/List.vue子组件二
```vue
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
```