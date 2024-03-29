import { signInWithPopup } from "firebase/auth"
import { auth, googleProvider } from "../firebaseApp"

function Login() {
    const handleLogin = () => {
        signInWithPopup(auth, googleProvider).then(result => {
            const user = result.user;
            console.log(user);
            
        })
    }
  return (
    <div>
        <button onClick={handleLogin}>Login with google</button>
    </div>
  )
}

export default Login