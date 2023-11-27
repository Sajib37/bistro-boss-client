import { ColorRing } from "react-loader-spinner";
import useAdmin from "../../../hooks/useAdmin";
import { useAuth } from "../../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";



const AdminRoute = ({children}) => {
    const { user, loading } = useAuth();
    const [isAdmin ,loadAdmin] = useAdmin();

    if (loading || loadAdmin) {
        return <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    }
    if (user && isAdmin) {
        return children;
    }

    return <Navigate to='/'></Navigate>



};

export default AdminRoute;