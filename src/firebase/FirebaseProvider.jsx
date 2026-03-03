import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { AuthContext } from '../context/AuthContext';
import { auth } from '../../firebase.init';
import { useEffect, useState } from 'react';
import Loader from '../components/Loader/Loader';

const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const logOut = () => {
        return signOut(auth);
    }
    const profileUpdate = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName,
            photoURL,
        })
    }
    const authInfo = {
        createUser,
        logIn,
        googleLogIn,
        logOut,
        profileUpdate,
        user,
        setUser,
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        })
        return () => unsubscribe();
    }, [])

    if (loading) {
        return <Loader></Loader>
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default FirebaseProvider;