<template>
    <a :href="url">
        <slot>
            默认内容， 即父组件没设置内容是，显示
        </slot>
    </a>
</template>

<script>
export default {
    props: ['url'],
    data() {
        return {}
    }
}
</script>

<style>

</style>