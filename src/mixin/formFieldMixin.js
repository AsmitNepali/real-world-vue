export const formFieldMixin = {
    inheritAttrs: false,
    props: {
        label: {
            type: String,
            defalut: ''
        },
        modelValue:[String, Number]
    },
    emits:['update:modelValue'],
    methods:{
        updateValue(event){
            console.log(event.target.value)
            this.$emit('update:modelValue', event.target.value)
        }
    }
}