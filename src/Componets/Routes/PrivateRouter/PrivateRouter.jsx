import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../AuthProvider/AuthProvider";
import { Audio } from  'react-loader-spinner'

const PrivateRouter = ({children}) => {

    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <Audio
            height = "80"
            width = "80"
            radius = "9"
            color = 'green'
            ariaLabel = 'three-dots-loading'     
            wrapperStyle
            wrapperClass
            />
        )
    }
    if (user) {
        return children;
    }
    else {
        return (
            <Navigate state={location.pathname} to='/signIn'></Navigate>
        )
    }
};

export default PrivateRouter;