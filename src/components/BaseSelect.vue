<template>
    <div>
        <label v-if="label">{{ label }}</label>
        <select :value="modelValue" @input="updateValue" v-bind="$attrs">
            <option  v-for="option in options" :key="option" :selected="option === modelValue">{{ option }}</option>
        </select>
    </div>
</template>
<script>
    // Here modelValue and update:modelValue is default props and emit events for v-model
    export default {
        inheritAttrs:false,
        props:{
            options:{
                type: Array,
                rewuired: true
            },
            label:{
                type: String,
                default: ''
            },
            modelValue:[String, Number]
        },
        emits:['update:modelValue'],
        methods: {
            updateValue(event){
                console.log(event.target.value)
                this.$emit('update:modelValue', event.target.value)
            }
        }
    }
</script>