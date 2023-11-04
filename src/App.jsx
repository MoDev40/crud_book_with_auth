import { Route, Routes } from 'react-router-dom'
import Books from './components/books/Books'
import AddBook from './components/crud/AddBook'
import EditBook from './components/crud/EditBook'
import Header from './components/Header'
import SignUp from './components/user/SignUp'
import LogIn from './components/user/LogIn'
import { getToken } from './lib/token'
import { useEffect, useState } from 'react'
import PrivateRouter from './components/PrivateRouter'
const App = () => {

  const [isAuth,setIsAuth] = useState(false)
  useEffect(()=>{
    if(getToken()){
      setIsAuth(true)
    }
  },[getToken(),isAuth])

  return (
    <>
    <Header isAuth={isAuth} setIsAuth={setIsAuth}/>
    <Routes>

      {/* <Route path='/books/edit/:id' element={<PrivateRouter/>}>
        <Route path='/books/edit/:id' element={<EditBook/>}/>
      </Route>

      <Route path='/books/add' element={<PrivateRouter/>}>
      <Route path='/books/add' element={<AddBook/>}/>
      </Route> */}

      <Route path='/signup' element={<SignUp/>}/>
      {/* <Route path='/login' element={<LogIn/>}/>
      <Route path='/' element={<Books/>}/> */}
    </Routes>
    </>
  )
}

export default App