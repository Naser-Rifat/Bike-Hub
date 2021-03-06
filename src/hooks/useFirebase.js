import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/LoginPages/Firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


initializeAuthentication()
const useFirebase = () => {

    const [admin, setAdmin] = useState(false);
    const [user, setUser] = useState({});
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [success, setSuccess] = useState(false);


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const GoogleSignIn = (location, history) => {
        setIsLoading(true)

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const destination = location?.state?.from || '/';
                const user = result.user;
                setUser(user);
                console.log(user);
                saveUser(user?.email, user?.displayName, 'PUT')
                setError('')
                history.replace(destination);

            }).catch((error) => {

                setError(error.message);

            })
            .finally(() => setIsLoading(false));
    }

    // create an  user with email and password
    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                //const user = result.user
                const newUser = { email, displayName: name }
                setUser(newUser);
                //  setIsLogin(true);
                saveUser(email, name, "POST")
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
                //    setIsLogin(true)
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
    }, [auth])




    const logOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const saveUser = (email, name, method) => {

        const user = { email, name }

        fetch("https://peaceful-ravine-05762.herokuapp.com/users", {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()

    }

    useEffect(() => {

        fetch(`https://peaceful-ravine-05762.herokuapp.com/users/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log("data admin", data.admin)
                setAdmin(data.admin)
            })
            .catch((error) => {
                setError(error.message);
            })
    }, [user?.email])




    return {
        user,
        error,
        registerUser,
        loginUser,
        setError,
        success,
        logOut,
        isLoading,
        admin,
        setSuccess,
        GoogleSignIn,
        setIsLoading
    }

}



export default useFirebase;