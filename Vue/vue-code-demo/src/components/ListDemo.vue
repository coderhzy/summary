<template>
    <div>
        <p>遍历数组</p>
        <ul>
            <li v-for="(item,index) in listArr" :key="item.id">
                {{index}} - {{item.id}} - {{item.title}}
            </li>
        </ul>

        <p>遍历对象</p>
        <ul>
            <li v-for="(val,key,index) in listObj" :key="key">
                {{index}} - {{key}} - {{val.title}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            flag: false,
            listArr: [
                { id: 'a', title: '标题1'},
                { id: 'b', title: '标题2'},
                { id: 'c', title: '标题3'}
            ],
            listObj: {
                a: { title: '标题一'},
                b: { title: '标题二'},
                c: { title: '标题三' }
            }
        }
    }
}
</script>

<style>

</style>