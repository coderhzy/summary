<template>
    <div class="container">
        <header>
            <slot name="header"></slot>
        </header>

        <main>
            <slot></slot>
        </main>

        <footer>
           <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script>
export default {
    props: {
        type: String,
        defult() {
            return ''
        }
    },
    data() {
        return {
            name: 'hzy'
        }
    }
}
</script>

<style>

</style>