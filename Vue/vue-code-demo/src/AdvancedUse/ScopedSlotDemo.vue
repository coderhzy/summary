<template>
  <a :name='name'>
      <slot>
          {{name}}
      </slot>
  </a>
</template>

<script>
export default {
    props: ['url'],
    data() {
        return {
            name: 'hzy'
        }
        }
    }
</script>

<style>

</style>