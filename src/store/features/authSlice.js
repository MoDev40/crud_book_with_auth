import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import Cookies from 'js-cookie'
import BASE_URL from '../baseUrl'
const setToken = (token)=>{
    Cookies.set("token",token ,{expires: 1})
}

const authSlice = createApi({
    reducerPath:"authApi",
    baseQuery:fetchBaseQuery({
        baseUrl:BASE_URL
    }),

    endpoints:(builder)=>({
        signUser:builder.mutation({
            query:(newUser)=>({
                url:"signup",
                method:"POST",
                body:{
                    name:newUser.name,
                    email:newUser.email,
                    password:newUser.password,
                }
            })
        }),

        logUser:builder.mutation({
            query:(userLog)=>({
                url:"login",
                method:"POST",
                body:{
                    email:userLog.email,
                    password:userLog.password,
                }
            }),
            onQueryStarted: async (arg,{queryFulfilled})=>{
                try{
                    const result = await queryFulfilled;
                    setToken(result.data.token)
                }catch(error){
                    console.log({error});
                }
            }
        })
    })
})

export default authSlice
export const {useLogUserMutation,useSignUserMutation} = authSlice