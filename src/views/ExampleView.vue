<template>
    <div>
        <input type="email" placeholder="What's your email" v-model="email" @blur="v$.email.$touch()">
        <button type="submit">Submit</button>
        <div v-if="v$.email.$error">
            <p v-if="v$.email.email.$invalid">Please Enter Valid eamil.</p>
            <p v-if="v$.email.required.$invalid">Email is required.</p>
        </div>
    </div>
</template>
<script>
    import { useVuelidate } from '@vuelidate/core'
    import { required, email } from '@vuelidate/validators'
    export default{
        setup: () => ({ v$: useVuelidate() }),
        data() {
            return {
                email: null,
                name: null
            }
        }, 
        validations() {
            return {
                email:{
                    required,
                    email
                },
                name: {
                    required
                }

            }
        }
    }
</script>