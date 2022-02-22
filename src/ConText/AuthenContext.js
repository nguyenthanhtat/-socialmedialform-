import React,{ createContext, useState } from "react";
import { firebaseDB } from "../utils/Firebase";
import { Link ,useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
    const [user,setUser] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const Navigator=useNavigate()
    const [theme,setTheme]=useState({
      isLightTheme:true,
      light:{
          background:'rgb(240,240,240)',
          color:'black'
      },
      dark:{
          background:'rgb(39,39,39)',
          color:'white'
      },
  })
    const toggleTheme =()=>{
      setTheme({
          ...theme,
          isLightTheme:!theme.isLightTheme
      })
    } 
    const handleSignIn = () => {
      firebaseDB
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          
            console.log(res)
            Navigator("/home")
        })
        .catch((error) => {
        toast.error(error.message)
        });
    };
    
    const handleSignUp = () => {
      if(password !==  confirmPassword){
        return toast.error('nhap lai mat khau sai')
      }
       
     
      firebaseDB
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          if (res) {
           
            toast.success("Bạn đã đăng ký thành công");
            Navigator("/login")
          }
        })
        .catch((error) => {
         toast.error(error.message)
        });
    };
    const handleLogout = () => {
      firebaseDB.auth().signOut().then((user) => {
          toast.success("Đăng xuất thành công")
          Navigator("/login")
      }).catch((error) => {
          toast.error(error.message)
      })
  }

  const AuthContextData = {
   user,setUser,setPassword,email,password,setEmail,handleSignUp,handleSignIn,handleLogout,theme,
   toggleTheme,confirmPassword,setConfirmPassword
  };
  return (
    <AuthContext.Provider value={AuthContextData}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;