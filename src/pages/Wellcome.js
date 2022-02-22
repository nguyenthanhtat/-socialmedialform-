import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo_2.gif'
const Wellcome = () => {
    return (
        <>
        <nav className="container-fluid justify-content-center mt-5 d-none d-sm-block d-none">
          <div className="text-center w-100"><h1 style={{color: '#4834d4'}} className="text_intro">Chào Mừng Bạn Đến Với</h1></div>
          <div className="text-center w-100"><h1 style={{color: '#4834d4'}} className="text_intro">Diễn Đàn Xã Hội Cho Sinh Viên Đại Học Nha Trang</h1></div>
          <div className="w-100 text-center mt-5">
            <img src={logo} alt="Logo_DaihocNhaTrang" className="img-thumbnail rounded-circle logo justify-content-center" style={{width: '20%'}} />
          </div>
          <div className="w-100 justify-content-center text-center mt-4">
            <div className=" text-center mt-2" style={{display: 'inline-block', width: '20%'}}>
              <Link to='./login' className="btn w-100 justify-content-center shadow btn_sign" href="sign.html">Đăng Nhập</Link>
            </div>	
          <div className="text-center mt-2" style={{display: 'inline-block', width: '20%'}}>
              <Link to='./register' className="btn w-100 justify-content-center shadow btn_sign" href="registration.html">Đăng Kí</Link>
          </div>
          </div>
        </nav>
        {/* đối với điên thoai */}
        <nav className="d-sm-none show justify-content-center mt-5">
          <div className="text-center w-100"><h3 style={{color: '#4834d4'}} className="text_intro">Câu Lạc Bộ</h3></div>
          <div className="text-center w-100 mt-3"><h3 style={{color: '#4834d4'}} className="text_intro">Đại Học Nha Trang</h3></div>
          <div className="w-100 text-center mt-5">
            <img src={logo} alt="Logo_DaihocNhaTrang" className="img-thumbnail rounded-circle justify-content-center" style={{width: '50%'}} />
          </div>
          <div className="w-100 justify-content-center text-center mt-5">
            <div className=" text-center mt-2" style={{display: 'inline-block', width: '40%'}}>
              <Link to='./login' className="btn w-100 justify-content-center shadow btn_sign" >Đăng Nhập</Link>
            </div>	
            <div className="text-center mt-2" style={{display: 'inline-block', width: '40%'}}>
              <Link to='./register' className="btn w-100 justify-content-center shadow btn_sign" >Đăng Kí</Link>
            </div>
          </div>
        </nav>
        </>
    )
}

export default Wellcome
