import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import BASE_URL from '../baseUrl'
import Cookies from 'js-cookie'

const getToken = ()=>{
    return Cookies.get("token");
}
const userSlice = createApi({
    reducerPath:"userApi",
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
    endpoints:(builder)=>({
        getUser:builder.query({
            query:()=>{
                return{
                    url:"users/user",
                    method:"GET"
                }
            },
        })
    })
})

export default userSlice

export const {useGetUserQuery} = userSlice