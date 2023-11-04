import React from 'react'
import { Link } from 'react-router-dom'
import { useDeleteBookMutation } from '../../store/features/booksSlice'
import { useGetUserQuery } from '../../store/features/userSlice'
const Book = ({book}) => {
  const {data = []} =useGetUserQuery()
  const [deleteBook] = useDeleteBookMutation()
  const handleDelete = ()=>{
      deleteBook({deletedId:book.id})
  }
  return (
    <div className='my-12 bg-white shadow-2xl rounded-sm space-y-6'>
      <img className='object-cover w-48 h-48' src={book.imgUrl} alt={book.name + "  image"}/>
      <div className='flex flex-row justify-around  font-semibold text-sm border-b border-b-[#ccc]'>
          <span>{book.name}</span>
          <span>${book.price}</span>
      </div>
        <div className='flex flex-row justify-between p-2 '>
           { data && data.id == book.userId&&
            <>
             <Link to={`/books/edit/${book.id}`} className='btn py-1 px-2'>Edit</Link>
             <button onClick={handleDelete}   className='btn py-1 px-2 hover:bg-red-500'>&times;</button>
            </>
           }
        </div>
    </div>
  )
}

export default Book