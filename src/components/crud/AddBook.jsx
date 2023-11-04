import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import { object,string,number} from 'yup'
import {useNavigate} from 'react-router-dom'
import { useAddBookMutation } from '../../store/features/booksSlice'

const AddBook = () => {
  const [addBook] = useAddBookMutation()
  const navigate = useNavigate()
  const bookSheme = object({
    name:string().required("required"),
    imgUrl:string().required("required"),
    price:number().required("required")
  })

  const handdleSubmit = (values)=>{
    addBook({
      newBook:values
    }).unwrap().then(()=>{
      navigate("/")
    })
  }
  return (
    <div className='flex flex-col items-center p-12  space-y-5'>
    <h1 className='font-black text-stone-700 text-xl'>Add Book</h1>
    <Formik
    initialValues={{
      name:"",
      imgUrl:"",
      price:0
    }}
    validationSchema={bookSheme}
    onSubmit={handdleSubmit}
    >
      <Form className='flex flex-col w-66 space-y-2 p-6 bg-white shadow-sm rounded'>
        <Field className="formControll" type="text" name="name" placeholder="Book name"/>
        <ErrorMessage name='name'/>
        <Field className="formControll" type="text" name="imgUrl" placeholder="Book image"/>
        <ErrorMessage name='imgUrl'/>
        <Field className="formControll" type="number" name="price" placeholder="Book price"/>
        <ErrorMessage name='price'/>
        <button type='submit' className='btn p-2'>ADD</button>
      </Form>
    </Formik>
</div>
  )
}

export default AddBook