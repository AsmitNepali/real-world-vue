<template>
    <div>
        <label v-if="label">{{ label }}</label>
        <input :modelValue="value" @input="updateInput" v-bind="$attrs">
    </div>
</template>
<script>
    export default {
        inheritAttrs:false,
        props:{
            label:{
                type: String,
                default: ''
            },
            value:[String, Number]
        },
        emits:['update:value'],
        methods: {
            updateInput(event){
                console.log(event.target.value)
                this.$emit('update:value', event.target.value)
            }
        }
    }
</script>