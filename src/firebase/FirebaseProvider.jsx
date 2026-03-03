import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from 'firebase/auth';
import { AuthContext } from '../context/AuthContext';
import { auth } from '../../firebase.init';
import { useEffect, useState } from 'react';
import Loader from '../components/Header/Loader';

const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
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