import {signOut} from 'firebase/auth';
import {auth} from '../config/firebase';
   
const signoutFunc = async () =>{
    try {
        await signOut(auth);
    } catch (error) {
        console.log(error)
    }
}

export default signoutFunc