import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { auth } from '../firebase.init';
import LottieAnimation from '../components/LottieAnimation';
import axios from 'axios';


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogin = (email, password) =>{
        setLoading(true); 
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        setLoading(true);
    
        return signOut(auth);
    }

    const updateUserProfile = (updatedData) =>{
        return updateProfile(auth.currentUser, updatedData);
    }

    const handleGoogleSignup = () =>{
         signInWithPopup(auth, googleProvider);
    }

    const authInfo = {
        users,
        setUsers,
        loading,
        createUser,
        userLogin,
        logOut,
        updateUserProfile,
        handleGoogleSignup
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUsers(currentUser);
            console.log('state captured', currentUser?.email);

            if(currentUser?.email){
                const user = { email: currentUser.email };

                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                .then(res => {
                    console.log('login token:', res.data);
                    setLoading(false);
                
                })
            }
            else{
                axios.post('http://localhost:5000/logout',{}, {
                    withCredentials: true
                })
                .then(res => {
                    console.log("logout", res.data);
                    setLoading(false);
                })
            }

            
        })
        return () =>{
            unsubscribe();
        }
    }, [])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;