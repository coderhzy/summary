<template>
    <div>
        <Input @add="addHandler" />
        <List :list='list'  @delete="deleteHandler" />
    </div>
</template>

<script>
import Input from './Input'
import List from './List'

export default {
    components: {
        Input,
        List
    },
    data() {
        return {
            list: [
                {
                    id: 'id-1',
                    title: '标题一'
                },
                {
                    id: 'id-2',
                    title: '标题二'
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
            this.list = this.list.filter(item => item.id !== id)
        }
    }
}
</script>

<style>

</style>