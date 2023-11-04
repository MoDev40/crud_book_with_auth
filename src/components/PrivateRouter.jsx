import { Navigate,Outlet } from 'react-router-dom'
import { getToken } from '../lib/token'
const PrivateRouter = () => {
    const token = getToken()
    if(!token){
        return <Navigate to="/login"/>
    }

    return(
        <Outlet/>
    )
}

export default PrivateRouter