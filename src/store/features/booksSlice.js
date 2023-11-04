import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import BASE_URL from '../baseUrl'
import Cookies from 'js-cookie';
const getToken = ()=>{
    return Cookies.get("token");
}
const booksSlice = createApi({
    reducerPath:"booksApi",
    baseQuery:fetchBaseQuery({
        baseUrl:BASE_URL,
        prepareHeaders:(headers)=>{
            const token = getToken()
            if(token){
                headers.set("authorization",`Bearer ${token}`)
            }
            return headers
        }
    }),
    tagTypes:["books"],
    endpoints:(builder)=>({
        allBooks:builder.query({
            query:()=>{
                return{
                    url:"books",
                    method:"GET"
                }
            },
            providesTags:["books"]
        }),

        addBook:builder.mutation({
            query:({newBook})=>({
                url:"books/add",
                method:"POST",
                body:{
                    name:newBook.name,
                    imgUrl:newBook.imgUrl,
                    price:newBook.price,
                }
            }),
            invalidatesTags:["books"]
        }),

        editBook:builder.mutation({
            query:({id,updatedBook})=>({
                url:`books/edit/${id}`,
                method:"PUT",
                body:{
                    name:updatedBook.name,
                    imgUrl:updatedBook.imgUrl,
                    price:updatedBook.price,
                }
            }),
            invalidatesTags:["books"]
        }),

        deleteBook:builder.mutation({
            query:({deletedId})=>({
                url:`books/delete/${deletedId}`,
                method:"DELETE"
            }),
            invalidatesTags:["books"]
        })
    })
})

export const {useAllBooksQuery,useAddBookMutation,useEditBookMutation,useDeleteBookMutation} = booksSlice
export default booksSlice