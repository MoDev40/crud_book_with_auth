import { Link, useNavigate } from 'react-router-dom'
import { removeToken } from '../lib/token';
const Header = ({isAuth,setIsAuth}) => {
  const navigate = useNavigate() 
  const handleLogout = ()=>{
    removeToken();
    setIsAuth(false) 
    navigate("/login")
    window.location.reload()   
  }
  return (
    <div className='flex p-4 flex-row items-center justify-around text-xl capitalize'>
        <Link className=' font-black text-stone-900' to="/">World Books</Link>
        <div className=' space-x-4'>
        <Link className='hover:bg-slate-500 py-1  px-2 hover:text-white rounded' to="/">Books</Link>
        { isAuth && 
        <Link className='hover:bg-slate-500 py-1  px-2 hover:text-white rounded' to="/books/add">Add Book</Link>
        }
        <Link className='hover:bg-slate-500 py-1  px-2 hover:text-white rounded' to={isAuth ? "/profile" : "/signup"}>{isAuth ? "Profile" : "SignUp"}</Link>
        { !isAuth &&
          <Link className='hover:bg-slate-500 py-1  px-2 hover:text-white rounded' to="/login">Login</Link>
        }
        {
          isAuth&& 
          <button onClick={handleLogout} className='btn bg-red-500 py-1 px-2 text-white'>Logout</button>
        }
        </div>
    </div>
  )
}

export default Header