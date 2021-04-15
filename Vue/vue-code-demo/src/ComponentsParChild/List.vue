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
export default {
    props: {
        list: {
            type: Array,
            default()  {
                return []
            }
        }
    },
    data() {
        return {

        }
    },
    methods: {
        deleteItem(id) {
            this.$emit('delete',id)
        }
    }
}
</script>

<style>

</style>