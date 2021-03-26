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