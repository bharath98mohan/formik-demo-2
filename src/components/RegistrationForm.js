import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'
import './RegistrationForm.css'

function RegistrationForm() {
    const options = [
        {key: 'Email', value: 'emailmoc'},
        {key: 'Telephone', value: 'telephonemoc'}
    ]
    const initialValues = {
        email: 'b@gmail.com',
        password: '',
        confirmPassword: '',
        modeOfContact: '',
        phone: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Required'),
        password: Yup.string().required('Required').min(8,'Password must be atlease 8 characters long'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Passwords do not match').required('Required'),
        modeOfContact: Yup.string().required('Required'),
        phone: Yup.string().min(10,'Phone Number must be 10 digits').max(10,'Phone Number must be 10 digits').when('modeOfContact', {
            is: 'telephonemoc',
            then: Yup.string().required('Required').min(10,'Phone Number must be 10 digits').max(10,'Phone Number must be 10 digits')
        })
    })

    const onSubmit = (values, {resetForm}) => {
        console.log('Form values', values)
        resetForm({values:''});
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                formik => {
                    return <Form>
                        <FormikControl 
                        control='input'
                        type='email'
                        label='Email'
                        name='email'
                        readOnly = {true}
                        />
                        
                        <FormikControl 
                        control='input'
                        type='password'
                        label='password'
                        name='password'
                        />

                        <FormikControl 
                         control='input'
                         type='password'
                         label='Confirm Password'
                         name='confirmPassword'
                        />

                        <FormikControl 
                        control='radio'
                        label='Mode Of Contact'
                        name='modeOfContact'
                        options= {options}
                        />

                        <FormikControl 
                        control='input'
                        type='text'
                        label='Phone Number'
                        name='phone'
                        />

                        <button className='btn-submit' type='submit' disabled={!formik.isValid}>Submit</button>
                        <button className='btn-clear' type='reset'>Clear</button>
                    </Form>
                }
            }
        </Formik>
    )
}

export default RegistrationForm
