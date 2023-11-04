import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import {object,string,number} from 'yup'
import { useAllBooksQuery } from '../../store/features/booksSlice';
import { useEditBookMutation } from '../../store/features/booksSlice';
const EditBook = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const bookSheme = object({
    name:string().required("required"),
    imgUrl:string().required("required"),
    price:number().required("required")
  })

  const {data:books = [] } = useAllBooksQuery()
  const [editBook] = useEditBookMutation()
  const existingBook = books.find( exBook => exBook.id == Number(id));

  const handdleSubmit = (values)=>{
    editBook({id:id,updatedBook:values}).unwrap().then(()=>{
      navigate("/")
    })
  }
  return (
    <div className='flex flex-col items-center p-12  space-y-5'>
        <h1 className='font-black text-stone-700 text-xl'>Edit Book</h1>
        <Formik
        initialValues={{
          name:existingBook.name,
          imgUrl:existingBook.imgUrl,
          price:existingBook.price
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
            <button type='submit' className='btn p-2'>EDIT</button>
          </Form>
        </Formik>
    </div>
  )}

export default EditBook