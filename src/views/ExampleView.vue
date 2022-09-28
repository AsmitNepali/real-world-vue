<template>
    <form @submit.prevent = "submit">
        <input type="email" placeholder="What's your email" 
        v-model="email" 
        :class="{error: v$.email.$error}"
        @blur="v$.email.$touch()">
        <button :disabled="v$.$invalid" type="submit">Submit</button>
        <div v-if="v$.email.$error">
            <p v-if="v$.email.email.$invalid" class="errorMessage">Please Enter Valid eamil.</p>
            <p v-if="v$.email.required.$invalid">Email is required.</p>
        </div>
    </form>
</template>
<script>
    import { useVuelidate } from '@vuelidate/core'
    import { required, email } from '@vuelidate/validators'
    export default{
        setup: () => ({ v$: useVuelidate() }),
        data() {
            return {
                email: null,
               
            }
        }, 
        validations() {
            return {
                email:{
                    required,
                    email
                }
            }
        },
        methods:{
            submit(){
                this.v$.$touch()
                if(!this.v$.$invalid) {
                    console.log("Form Submitted");
                }
            }
        }
    }
</script>