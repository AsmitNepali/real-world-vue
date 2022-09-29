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
    import { formFieldMixin } from '@/mixin/formFieldMixin';
    export default {
        mixins:[formFieldMixin],
        props:{
            options:{
                type: Array,
                rewuired: true
            }
        }
    }
</script>