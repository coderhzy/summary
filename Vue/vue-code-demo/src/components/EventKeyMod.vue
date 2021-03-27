<template>
  
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
</template>

<script>
export default {

}
</script>

<style>

</style>