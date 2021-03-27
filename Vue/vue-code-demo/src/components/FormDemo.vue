<template>
    <div>
        <p>输入框: {{name}}</p>
        <input type="text" v-model.trim='name'>
        <input type="text" v-model.lazy='name'>
        <input type="text" v-model.number='age'>

        <p>多行文本框: {{desc}}</p>
        <textarea v-model='desc' name="" id="" cols="30" rows="10"></textarea>

        <p>复选框{{checked}}</p>
        <input type="checkbox" v-model="checked">

        <p>多个复选框{{checkedNames}}</p>
        <input type="checkbox" id='hzy' value="hzy" v-model="checkedNames">
        <label for="hzy">hzy</label>
        <input type="checkbox" id='cwh' value="cwh" v-model="checkedNames">
        <label for="cwh">cwh</label>
        <input type="checkbox" id='mike' value="mike" v-model="checkedNames">
        <label for="mike">mike</label>

        <p>单选: {{gender}}</p>
        <input type="radio" value="male" id="male" v-model="gender" />
        <label for="male">男</label>
        <input type="radio" value="female" id="female" v-model="gender" />
        <label for="female">女</label>

        <p>下拉列表选择{{selected}}</p>
        <select v-model="selected" name="" id="">
            <option disabled value="">请选择</option>
            <option >A</option>
            <option >B</option>
            <option >C</option>
        </select>

        <p>下拉列表选择（多选）{{selectedList}}</p>
        <select v-model="selectedList" multiple>
            <option disabled>请选择</option>
            <option >A</option>
            <option >B</option>
            <option >C</option>
        </select>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "何梓阳",
            age: 20,
            desc: '自我介绍',

            checked: true,
            checkedNames: [],

            gender: 'male',

            selected: '',
            selectedList: []
        }
    }
}
</script>

<style>

</style>