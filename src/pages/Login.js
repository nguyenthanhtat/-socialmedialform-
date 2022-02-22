import React,{useContext, useState} from 'react'
import { AuthContext } from '../ConText/AuthenContext'
import '../styles/Login.css'
import { Link ,useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { auth, firebaseDB } from '../utils/Firebase';
import logo from '../images/logo_2.gif'
import '../styles/Sign.css'
const Login = () => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const { user,setUser,setPassword,email,password,setEmail,handleSignUp,handleSignIn}=useContext(AuthContext)
    const [confirmPassword, setConfirmPassword] = useState("");
    
  
    const handleEmail = (event) => {
      setEmail(event.target.value);
    };
    const handlePassword = (event) => {
      setPassword(event.target.value);
    };
    const handleConfirmPassowerd = (event) => {
      setConfirmPassword(event.target.value);
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
 
      const config = {
        url: "http://localhost:3000/login",
        handleCodeInApp: true,
      };
  
      await auth
        .sendPasswordResetEmail(email, config)
        .then(() => {
         
          toast.success("Vào Email để nhận link và đổi mật khẩu nhé 😆 ");
          window.localStorage.setItem("EmailForRegister", email);
          setEmail("");
        })
        .catch((error) => {
         
  
          toast.error(error.message, {
            className: "black-background",
            bodyClassName: "grow-font-size",
            progressClassName: "fancy-progress-bar",
            closeOnClick: true,
            toastId: "my_toast",
            autoClose: true,
            closeButton: true,
            background: "red",
          }); // Default
          console.log("😥");
        });
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
              <label htmlFor className="form-label w-100 m-0" id="text_sign">Đăng Nhập</label>
              <div className="blockquote-footer">Bạn cần đăng nhập trước khi dùng!</div>
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
              </div>
              <div className="row p-0">
                <div className="form-group col-md-8 col-7 mt-2 float-left">
                  <input type="checkbox" />
                  <label>Lưu Tài Khoản</label>
                </div>
                {/* Quên mật Khẩu */}
                <div className="col-md-4 col-5 ml-0 mt-2 pr-1 float-right">
                  <div className="modal fade" id="myModal">
                    <div className="modal-dialog">
                      <div className="modal-content" style={{backgroundColor: '#dff9fb'}}>
                        <div className="m-md-3 m-3">
                          <label htmlFor="exampleFormControlInput1" className="form-label"><u><b>Email của bạn:</b></u></label>
                          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Vui lòng nhập địa chỉ Email của bạn vào đây!"   name="email"
              value={email}/>
                          <div className="mt-2" id="group_btn_sendEmail">
                            <input type="submit" value="Gửi" className="btn float-left" style={{borderColor: '#95afc0'}} id="btn_sendEmail" onClick={handleSubmit} />
                            <input type="submit" value="Đóng" data-dismiss="modal" className="btn float-right" style={{borderColor: '#95afc0'}} id="btn_sendEmail" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a type="button" data-toggle="modal" data-target="#myModal">Quên Mật Khẩu</a>
                </div>
              </div>
              <div className="w-100 text-center center-block">
                <a className="btn w-75 justify-content-center shadow" id="btn_sign"  onClick={handleSignIn}>Đăng Nhập</a>
              </div>
              <div className="w-100 mt-2"><hr className="center-block" /></div>
              <div className="w-100 text-center center-block mt-2">
                <Link to='/register' className="btn w-75 justify-content-center shadow" id="btn_sign" >Đăng Kí</Link>
              </div>
            </form>
          </div>
        </div>
      </nav>
        </>
    
    )
}

export default Login;
