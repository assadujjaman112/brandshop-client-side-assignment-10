import { createContext, useDebugValue, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password)=> {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider);
    }
    const logOut = () => {
        return signOut(auth);

    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log("user changed");
            setUser(currentUser);
        });
        return ()=> {
            unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        createUser,
        signIn,
        googleSignIn,
        logOut,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;