import { Navigate, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth'

const Private = ({children}) => {
    const {user,loading}=useAuth()
    const location=useLocation()

    if(loading){
        return <p>loading</p>
    }

    if(user){
        return children
    }
    
    return <Navigate state={{ form: location?.pathname }} replace  />
};

export default Private;