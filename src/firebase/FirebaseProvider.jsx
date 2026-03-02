import { createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from '../context/AuthContext';
import { auth } from '../../firebase.init';

const FirebaseProvider = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const authInfo = {
        createUser,
    };
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default FirebaseProvider;