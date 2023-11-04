import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import { object,string} from 'yup'
import { useSignUserMutation } from '../../store/features/authSlice'
import { useNavigate } from 'react-router-dom'
const SignUp = () => {
    const [signUser] = useSignUserMutation()
    const navigate = useNavigate()
    const singUpScheme = object({
        name:string().required("required"),
        email:string().required("required").email("Emai Here"),
        password:string().required("required"),
      })
      const handdleSubmit = (values)=>{

        signUser({
          name:values.name,
          email:values.email,
          password:values.password
        }).unwrap().then(()=>{
        })
      }
  return (
    <div className='flex flex-col items-center p-12  space-y-5'>
    <h1 className='font-black text-stone-700 text-xl'>SingUp</h1>
    <Formik
    initialValues={{
      name:"",
      email:"",
      password:"",
    }}
    validationSchema={singUpScheme}
    onSubmit={handdleSubmit}
    >
      <Form className='flex flex-col w-66 space-y-2 p-6 bg-white shadow-sm rounded'>
        <Field className="formControll" type="text" name="name" placeholder="User name"/>
        <ErrorMessage name='name'/>
        <Field className="formControll" type="text" name="email" placeholder="User email"/>
        <ErrorMessage name='email'/>
        <Field className="formControll" type="password" name="password" placeholder="User password"/>
        <ErrorMessage name='password'/>
        <button type='submit' className='btn p-2'>SingUp</button>
      </Form>
    </Formik>
</div>
  )
}

export default SignUp