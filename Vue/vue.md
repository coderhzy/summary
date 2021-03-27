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