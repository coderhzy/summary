<template>
    <!-- 自定义v-model -->
    <div>
        <p>{{name}}</p>
        <CustomVModel v-model="name"/>
    </div>

</template>

<script>
import CustomVModel from './CustomVModel'

export default {
    components: {
        CustomVModel
    },
    data() {
        return {
            name: 'codehzy'
        }
    }
}
</script>

<style>

</style>