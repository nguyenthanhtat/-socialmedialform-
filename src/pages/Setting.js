import React from 'react'
import '../styles/Setting.css'
import Navbar from '../pages/Navbar'
import MenuUser from '../components/MenuUser'
import { Link } from 'react-router-dom'
const Setting = () => {
    return (
        <>
        <nav className="row m-0 container-fluid w-100 p-3 mb-md-5 mb-3 rounded" id="header">
        <Navbar/>
        <MenuUser/>
        </nav>
        {/*Left Panes*/}
        <nav className="w-100 row m-0 p-0">
          <ul className="ml-md-5 col-md-3 col-12 bg-light border col-md-3 nav nav-tabs flex-column" id="panesl">
            <a className="navbar-brand text-center font-weight-bold ml-5">Cài đặt</a>
            <li className="nav-item border-bottom">
              <a className="nav-link text-decoration-none ml-3" data-toggle="tab" href="#home"><i className="fas fa-user-circle" />&nbsp;Thay đổi ảnh</a>
            </li>
            <li className="nav-item border-bottom">
              <a className="nav-link text-decoration-none ml-3" data-toggle="tab" href="#menu1"><i className="fas fa-globe" />&nbsp;Thông tin cá nhân</a>
            </li>
            <li className="nav-item border-bottom">
              <a className="nav-link text-decoration-none ml-3" data-toggle="tab" href="#menu2"><i className="fas fa-lock" />&nbsp;Thay đổi mật khẩu</a>
            </li>
            <li className="nav-item border-bottom">
              <a className="nav-link text-decoration-none ml-3" data-toggle="tab" href="#menu3"><i className="fas fa-user-circle" />&nbsp;Thay đổi trang liên kết</a>
            </li>
            <li className="nav-item border-bottom">
              <Link className="nav-link text-decoration-none ml-3" to='/login'><i className="fas fa-outdent" />&nbsp;Đăng xuất</Link>
            </li>
          </ul>
          {/* right panes */}
          <div className="col-md-7 col-12  tab-content ml-md-5 mt-md-0 mt-5 m-0 p-0" id="panesr">
            <div className="tab-pane bg-light container border active m-0 p-0" id="home">
              <form className="form m-3" id="form0">
                <div className="v border-bottom">
                  <label className="label font-weight-bold ml-3">Thay đổi ảnh</label>
                </div>
                <div className="form-group mt-2 row m-0 p-0">
                  <div className="fileUpload col-5 col-md-4 ml-2 p-0 mr-2">
                    <span>Chọn ảnh đại diện</span>
                    <input id="uploadBtn_user" type="file" className="upload" />
                  </div>
                  <input id="uploadFile_user" className="col-6 col-md-7 h-50 mt-2" placeholder="Đang tải......" disabled="disabled" />
                </div>
                <div className="form-group mt-2 row m-0 p-0">
                  <div className="fileUpload col-5 col-md-4 ml-2 p-0 mr-2">
                    <span>Chọn ảnh bìa</span>
                    <input id="uploadBtn2_user" type="file" className="upload" />
                  </div>
                  <input id="uploadFile2_user" className="col-6 col-md-7 h-50 mt-2" placeholder="Đang tải......" disabled="disabled" />
                </div>
                <button type="submit" className="btn btn-primary mt-3 mb-3">Cập nhật thông tin </button>
              </form></div>
            <div className="tab-pane container fade bg-light border" id="menu1">
              <div className="v border-bottom">
                <label className="label font-weight-bold m-3">Thông tin cá nhân</label>
              </div>
              <div className="form-group1">
                <label htmlFor="uname" className="a font-weight-bold">Họ của bạn</label>
                <input type="text" className="form-control" id="uname" placeholder="Nguyễn" name="uname" required />
                <div className="valid-feedback">Hợp lệ.</div>
                <div className="invalid-feedback">Vui lòng điền vào trường này.</div>
              </div>
              <div className="form-group1">
                <label htmlFor="email" className="a font-weight-bold">Tên của bạn</label>
                <input type="text" className="form-control" id="email" placeholder="Tất" name="email" required />
                <div className="valid-feedback">Hợp lệ.</div>
                <div className="invalid-feedback">Vui lòng điền vào trường này</div>
              </div>	
              <label htmlFor="email" className="a font-weight-bold">Ngày sinh của bạn</label>
              <input type="date" className="form-control" id="date" name="date" required />
              <div className="valid-feedback">Hợp lệ.</div>
              <div className="invalid-feedback">Vui lòng điền vào trường này</div>
              <div className="form-group1">
                <label htmlFor="dt" className="a font-weight-bold">Số điện thoại</label>
                <input type="number" maxLength={10} minLength={9} className="form-control" id="dt" placeholder='0931612273' name="dt" required />
                <div className="valid-feedback">Hợp lệ.</div>
                <div className="invalid-feedback">Vui lòng điền vào trường này</div>
              </div>
              <div className="form-group1">
                <label htmlFor="add" className="a font-weight-bold">Địa chỉ</label>
                <input type="text" className="form-control" id="add" placeholder="Sơn Lộc - Ninh Hòa - Khánh hòa" name="add" required />
                <div className="valid-feedback">Hợp lệ.</div>
                <div className="invalid-feedback">Vui lòng điền vào trường này</div>
              </div>
              <button type="submit" className="btn btn-primary mt-3 mb-3">Cập nhật thông tin </button>
            </div>
            <div className="tab-pane container fade bg-light border" id="menu3">
              <form className="form" id="form1">
                <div className="v border-bottom">
                  <label className="label font-weight-bold ml-2 mt-2">Trang liên kết</label>
                </div>
                <div className="form-group m-4">
                  <label className="a font-weight-bold">Facebook:</label>
                  <input type="text" className="form-control" placeholder="Nhập địa chỉ facebook vào đây nhé!" id />
                </div>
                <div className="form-group m-4">
                  <label className="a font-weight-bold">Zalo:</label>
                  <input type="text" className="form-control" placeholder="Nhập địa chỉ Zalo vào đây nhé!" id />
                </div>
                <div className="form-group m-4">
                  <label className="a font-weight-bold">Gmail:</label>
                  <input type="text" className="form-control" placeholder="Nhập địa chỉ gmail vào đây nhé!" id />
                </div>
                <div className="form-group m-4">
                  <label className="a font-weight-bold">Github:</label>
                  <input type="text" className="form-control" placeholder="Nhập địa chỉ github vào đây nhé!" id />
                </div>
                <button type="submit" className="btn btn-primary mt-3 mb-3">Cập nhật thông tin </button>
              </form>
            </div>
            <div className="tab-pane container fade bg-light border" id="menu2">
              <form className="form" id="form1">
                <div className="v border-bottom">
                  <label className="label font-weight-bold ml-2 mt-2">Thiết lập tài khoản</label>
                </div>
                <div className="form-group m-4">
                  <label htmlFor="old password" className="a font-weight-bold">Mật khẩu hiện tại:</label>
                  <input type="password" className="form-control" placeholder="Mật khẩu hiện tại" id="Opassword" />
                </div>
                <div className="form-group m-4">
                  <label htmlFor="New password" className="a font-weight-bold">Mật khẩu mới:</label>
                  <input type="password" className="form-control" placeholder=" Mật khẩu mới" id="Npassword" />
                </div>
                <div className="form-group m-4">
                  <label htmlFor="Repeat password" className="a font-weight-bold">Nhập lại mật khẩu:</label>
                  <input type="password" className="form-control" placeholder="Nhập lại mật khẩu mới" id="Rpassword" />
                </div>
                <div className="form-group m-4">
                  <a href="#" className="btn btn-info font-weight-bold" role="button">Quên mật khẩu ?</a>
                </div>
                <button type="submit" className="btn btn-info font-weight-bold ml-4 mb-3">Lưu cài đặt</button>
                <button type="submit" className="btn btn-info font-weight-bold mb-3">Khôi phục cài đặt</button>
              </form>
            </div>
          </div>
        </nav>
        </>
    )
}

export default Setting
