import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/LoginPages/Firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";


initializeAuthentication()
const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [success, setSuccess] = useState(false);

    const auth = getAuth();

    // create an  user with email and password
    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user
                const newUser = { email, displayName: name }
                setUser(newUser);
                setIsLogin(true);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                    setError(error.message)

                });
                setSuccess(true)
                history.replace("/");


            })

            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
            ;

    }

    // login with Email And Password
    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                setSuccess(true);
                setIsLogin(true)
                const destination = location?.state?.from || "/";
                history.replace(destination);

            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    }

    //observe user Presence
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)

            }
            else {
                setUser({})

            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [])




    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                // An error happened.
            })
            .finally(() => setIsLoading(false))

            ;
    }





    return {
        user,
        error,
        registerUser,
        loginUser,
        setError,
        success,
        logOut,
        isLoading,
        isLogin,
        setSuccess
    }

}



export default useFirebase;