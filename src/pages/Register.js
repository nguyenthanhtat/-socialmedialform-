import React,{useContext, useState} from 'react'
import { AuthContext } from '../ConText/AuthenContext'
import '../styles/Sign.css'
import { Link,useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { firebaseDB } from '../utils/Firebase';
import logo from '../images/logo_2.gif' 
const Register = () => {
    const {setPassword,email,password,setEmail,handleSignUp,confirmPassword,setConfirmPassword}=useContext(AuthContext)

    const handleEmail = (event) => {
      setEmail(event.target.value);
    };
    const handlePassword = (event) => {
      setPassword(event.target.value);
    };
    const handleConfirmPassword = (event) => {
      setConfirmPassword(event.target.value);
    };
  
    return (
      <>
      <nav className="row m-0 p-0 justify-content-center mt-md-5 mt-4  h-100">
      <div className="col-md-4" id="container_logo">
        <img src={logo} alt="Logo_DaihocNhaTrang" id="logo1" className="img-thumbnail rounded-circle w-50" />
      </div>
      <div className="col-md-6 p-0 mt-md-5 mt-5 h-100">
        <div className="container col-md-8 mt-md-5 h-100">	
          <div className="m-0 p-0">
            <label htmlFor className="form-label w-100 m-0" id="text_sign">Đăng Kí</label>
            <div className="blockquote-footer">Hãy tạo cho mình một tài khoản nhé!</div>
          </div>
          <form action="#">
            <div className="form-group m-0">
              <input type="email" placeholder="Nhập email của bạn!" className="form-control bg-white mt-4 shadow"
                type='text'
                autoFocus 
                required
                value={email}
                onChange={handleEmail}
              />
              <input type="password" placeholder="Nhập mật khẩu của bạn!" className="form-control bg-white mt-3 shadow" 
                type='password'
                required
                value={password}
                onChange={handlePassword}
              />
              <input type="password" placeholder="Nhập lại mật khẩu của bạn!" className="form-control bg-white mt-3 shadow"
                value={confirmPassword}
                onChange={handleConfirmPassword}            

              />
            </div>
            <div className="w-100 text-center center-block mt-4">
              
            <a className="btn w-75 justify-content-center shadow" id="btn_sign" href="#" onClick={handleSignUp}>Đăng Kí</a>
            <div className="w-100 text-center center-block mt-2">
                <Link to='/login' className="btn w-75 justify-content-center shadow" id="btn_sign" href="registration.html">Đăng nhập</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </nav>
    </>
    )

}

export default Register;
