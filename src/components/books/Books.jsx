import { useAllBooksQuery } from '../../store/features/booksSlice'
import Book from './Book'

const Books = () => {
  const {data:books = [] } = useAllBooksQuery()
  return (
    <div className='w-full items-center place-items-center grid md:grid-cols-2 lg:grid-cols-3'>
        {
            books.map( book => (
                <Book key={book.id} book={book} />
            ))
        }
    </div>
  )
}

export default Books