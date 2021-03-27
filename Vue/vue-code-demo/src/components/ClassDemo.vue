<template>
    <div>
        <p :class="{black: isBlack, yellow: isYellow}">使用 class</p>
        <p :class="[black,yellow]">使用 class （数组）</p>
        <p :class="stlyeData">使用 style</p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isBlack: true,
            isYellow: false,

            black: 'black',
            yellow: 'yellow',

            stlyeData: {
                fontSize: '40px', // 转化成驼峰式
                color: 'red',
                backgroundColor: '#ccc' // 转换为驼峰式
            }
        }
    }
}
</script>

<style>

</style>