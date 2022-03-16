<template>
    <Form @submit="onSubmit" :validation-schema="formSchema">
        <div class="form-group">
            <label for="someName">Some Name</label>
            <Field name="someName" 
            class="form-control" />
            <ErrorMessage name="someName" as="div" v-slot="{message}">
                <div class="alert alert-danger">
                    {{message}}
                </div>
            </ErrorMessage>
        </div>

        <div class="form-group">
            <label for="email">Email</label>
            <Field name="email" 
            v-slot="{field, errors, errorMessage}">
                <input type="text" 
                id="email" 
                class="form-control"
                v-bind="field"
                :class="{'is-invalid' : errors.length !== 0}">
                <div 
                    class="alert alert-danger"
                    v-if="errors.length !== 0">
                    {{errorMessage}}
                </div>
            </Field>
            
        </div>


        <div class="form-group">
            <label for="message">Message</label>
            <Field name="message" 
            v-slot="{field, errors, errorMessage}">
                <textarea 
                id="message" 
                rows="3"
                class="form-control"
                v-bind="field"
                :class="{'is-invalid' : errors.length !== 0}" />
                <div 
                    class="alert alert-danger"
                    v-if="errors.length !== 0">
                    {{errorMessage}}
                </div>
            </Field>
            
        </div>
        <hr />
        <button class="btn btn-primary">Submit</button>
    </Form>
</template>

<script>
    import { Field, Form, ErrorMessage } from 'vee-validate'

export default {
    components:{
        Field,
        Form,
        ErrorMessage,
    },
    data() {
        return {
            formSchema:{
                someName(value){
                                if(!value){
                    return 'The Field is Required'
                    }
                    else{
                        value.trim
                        return true
                    }
                },
                email(value){
                if(!value){
                    return 'The Email is Required'
                }
                else{
                    value.trim
                    return true
                    }
                },
                message(value){
                    if(!value){
                        return 'The Message is Required'
                    }
                    else{
                        value.trim
                        return true
                    }
                },

            }
        }
    },

    methods:{
        isRequired(value){
            if(!value){
                return 'The Field is Required'
            }
            else{
                value.trim
                return true
            }
        },
        validateEmail(value){
            if(!value){
                return 'The Email is Required'
            }
            else{
                value.trim
                return true
            }
        },
        validateMessage(value){
            if(!value){
                return 'The Message is Required'
            }
            else{
                value.trim
                return true
            }
        },
        onSubmit(values, {resetForm}){
            console.log(values)
            resetForm()
        }
    }
}
</script>