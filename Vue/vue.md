# Vue面试题
## 1.v-show和v-if的区别
## 2.为何v-for中要用key
## 3.描述Vue组件生命周期(有父子组件)
## 4. Vue组件如何通讯
## 5. 描述组件渲染和更新的过程
## 6. 双向数据绑定v-mode的实现原理
## 7. 基于Vue设计一个购物车（组件结构，vuex state数据结构)

# Vue知识点
## Vue使用
- 插值、表达式
  - 插值 {{message}}
  - 表达式 {{ flag ? 'yes' : 'no' }}
- 指令、动态属性
  - 动态属性: :id = 'dynamicId' , dunamicId是一个计算出的变量
- v-html： 会有XSS，会覆盖子组件
  - 使用v-html有XSS风险
- computed和watch
  - computed有缓存,data不变则不会重新计算computed
  - watch如何深度监听?
  - watch监听引用类型，拿不到oldVal
- class
  - 动态属性
- 条件渲染
  - v-if和v-else的用法，可使用变量，也可以使用 === 表达式
    - **v-if**如果是不显示，则直接不构成DOM结构，性能不好
    - **v-else**如果是不显示，则为display: none
  - v-if 和 v-show的区别？
  - v-if 和 v-show的场景？
- 循环列表渲染
  - 如何遍历对向？ 也可以使用v-for
  - key的重要性。key不可乱写（如random或者index）
  - v-for和v-if不能一起使用！
- 事件
  - event参数，自定义参数
    - event是原生的
    - 事件被挂载到当前元素上
  - 事件修饰符，按键修饰符
  - 观察事件被绑定到哪里了？
- 事件修饰符
```Vue
        <!-- 事件修饰符 -->
        <!-- 阻止单击事件继续传播 -->
        <a v-on:click.stop="doThis"></a>
        <!-- 提交事件不再重载页面 -->
        <form v-on:sumbit.prevent = "onSubmit"></form>
        <!-- 修饰符可以串联 -->
        <a v-on:click.stop.prevent = "doThat"></a>
        <!-- 只有修饰符 -->
        <form v-on:sumbit.prevent></form>
        <!-- 添加事件监听器时使用事件捕获模式 -->
        <!-- 即内部元素触发的事件先在此处理，然后才交给内部元素进行处理 -->
        <div v-on:click.capture="doThis">.....</div>
        <!-- 只当在event.target是当前元素自身时触发处理函数 -->
        <!-- 即事件不是从内部元素触发的 -->
        <div v-on:click.self="doTaht"></div>

        <!-- 按键修饰符 -->
        <!-- 即使 Alt或 Shift 被一同按下也会触发 -->
        <button @click.ctrl="onClick">A</button>
        <!-- 有且只有Ctrl被按下的时候才触发 -->
        <button @click.ctrl.exact="onCtrlClick"></button>
        <!-- 没有任何系统修饰符被按下的时候才触发 -->
        <!-- eslint-disable-next-line -->
        <button @click.exact="onClick">A</button>
```
- 表单
  - v-model
  - 常见表单项 textarea,checkbox,radio,select
  - 修饰符 lazy,number,trim
- Vue组件使用
  - props和$emit
  - 组件间通讯-自定义事件
  - 组件生命周期