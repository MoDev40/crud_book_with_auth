import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import { object,string } from 'yup'
import { useLogUserMutation } from '../../store/features/authSlice'
import { useNavigate } from 'react-router-dom'
const LogIn = () => {
    const [logUser] = useLogUserMutation()
    const navigate = useNavigate()
    const LogInScheme = object({
        email:string().required("required").email("Emai Here"),
        password:string().required("required"),
      })
      const handdleSubmit = (values)=>{
        logUser({
          email:values.email,
          password:values.password
        }).unwrap().then(()=>{
          navigate("/")
          window.location.reload()
        })
      }
  return (
    <div className='flex flex-col items-center p-12  space-y-5'>
    <h1 className='font-black text-stone-700 text-xl'>Login</h1>
    <Formik
    initialValues={{
      email:"",
      password:"",
    }}
    validationSchema={LogInScheme}
    onSubmit={handdleSubmit}
    >
      <Form className='flex flex-col w-66 space-y-2 p-6 bg-white shadow-sm rounded'>
        <Field className="formControll" type="text" name="email" placeholder="User email"/>
        <ErrorMessage name='email'/>
        <Field className="formControll" type="password" name="password" placeholder="User password"/>
        <ErrorMessage name='password'/>
        <button type='submit' className='btn p-2'>LogIn</button>
      </Form>
    </Formik>
</div>
  )
}

export default LogIn