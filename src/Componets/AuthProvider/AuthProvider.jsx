import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import auth from "../../../Firebase/firebase.config";

const authContext = createContext(null);
export const useAuth = () => {
    return useContext(authContext)
}

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);

    // Google login

    const googleProvider = new GoogleAuthProvider()
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    // Create User with email and password
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // Login with email and password
    const emailLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

     // Log Out method
     const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    // Forgot password
    const resetPassword = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth,email)
    }

    // Updateprofile
    const profileUpdate = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }


    // onAuth State change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false);
            setUser(currentUser);
        })
        return () => unsubscribe();
    },[])

    const authInfo = {
        user,
        loading,
        googleLogin,
        createUser,
        emailLogin,
        logOut,
        resetPassword,
        profileUpdate
    }
    return (
        <authContext.Provider value={authInfo}>
            { children}
        </authContext.Provider>
    );
};

export default AuthProvider;