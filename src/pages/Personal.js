import React,{useContext} from 'react'
import { DataNhom } from '../ConText/ContextNhom'
import {Data} from '../ConText/ContextTodo'
import anhbia from '../images/impostor.png'
import avatar from '../images/avatar.jpg'
import '../styles/Personal.css'
import avatarT from '../images/avataT.png'
import logo_1 from '../images/logo_1.png'
import CenterBody from '../components/CenterBody'
import BaiDang from '../components/Comment/BaiDang'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import MenuUser from '../components/MenuUser'
const Personal = () => {
  const {personClb} = useContext(DataNhom)
  const {state} = useContext(Data)
    return (
        <>

        <nav className="row m-0 container-fluid w-100 p-3 mb-md-5 mb-3 rounded" id="header">
        <Navbar/>
        <MenuUser/>
        </nav>
        <nav className="row container-fluid p-0 m-0 w-100 d-flex justify-content-center bg-light">	

            <div className="w-100 col-md-12 d-flex justify-content-center fileUpload">
                <img src={anhbia} className="mb-md-0 mb-5 " alt="Ảnh bìa" id="anhbia" style={{borderRadius: '20px',width: '80%',height: '500px'}} />
                <i className="fas fa-camera btn btn-light" id="icon_camera"><span type='file' className="ml-2 d-none d-sm-inline">Thay đổi ảnh</span></i>

            </div>
            
            <div className="avatar col-md-12 w-100 d-none d-sm-block" id="khunganh">
                <img  src={avatar} className="mb-md-6 mb-5 " alt="avatar" id="avatar_user" />

            </div>
            <div className="w-100 mt-md-5 ml-2 mb-2 mt-4">
                <h3 className="d-flex justify-content-center">Nguyễn Thành Tất</h3>
            </div>
        </nav>
        <hr className="mt-0" />
        {/* end header */}
        {/* Body */}
        <nav className="row container-fluid mt-0 w-100 m-0 p-0 ">
          {/* left body */}
          <nav className="boder border-bottom-1 d-none d-sm-block col-md-2 col-0 offset-md-1 p-0" id="left_body">
            <div className="border border-1 container-fluid text-left pt-2  pb-2" style={{backgroundColor: '#7ed6df'}}>
              Thông tin cá nhân
            </div>
            <div className="border border-1 justify-content-center">
            <div className="w-100 p-2 form-group">
                <label className="form-control-label"><b>Công việc:</b></label>
                <input type="text" className="form-control" readOnly name defaultValue="Students at Nha Trang university" />
              </div>
              <div className="w-100 p-2 form-group">
                <label className="form-control-label"><b>Họ tên:</b></label>
                <input type="text" className="form-control" readOnly name defaultValue="Nguyễn Thành Tất" />
              </div>
              <div className="w-100 p-2 form-group">
                <label className="form-control-label"><b>Ngày sinh:</b></label>
                <input type="text" className="form-control" readOnly name defaultValue="08-12-2000" />
              </div>

              
              <div className="w-100 p-2 form-group">
                <label className="form-control-label"><b>Địa chỉ:</b></label>
                <input type="text" className="form-control" readOnly name defaultValue="Sơn Lộc - Ninh Hòa - Khánh hòa" />
              </div>
              <div className="w-100 p-2 form-group">
                <label className="form-control-label"><b>Số điện thoại:</b></label>
                <input type="number" className="form-control" readOnly name defaultValue='0931612273' />
              </div>
              <div className="w-100 p-2 form-group">
                <label className="form-control-label"><b>Đã tham gia:</b></label>
                <input type="text" className="form-control" readOnly name defaultValue="06-12-2021" />
              </div>
            </div>
            <div className="border border-1 mt-4 mb-5">
              <div className="d-flex justify-content-center border border-0 border-bottom-1 pt-2 pb-2" style={{backgroundColor: '#7ed6df'}}>
                Các nhóm đã tham gia
              </div>
              {personClb.map(nhom=>{
                return(
                <div className=" mt-4 justify-content-center row" key={nhom.id}>
                  <div className="m-0 p-0 col-md-2">
                    <img src={nhom.logo} className="rounded-circle p-0" id="img_clb" />
                  </div>
                  <div className="m-0 p-0 col-md-6" id="text_clb">
                    <Link to='/groupofme' className="text-decoration-none text-dark m-0">{nhom.name}</Link>
                  </div>
                </div>

                )
              })}

            </div>
          </nav>
          {/* end left body */}
          {/* center body */}
          
          <nav className="col-12 w-100 col-md-5 ml-md-5 m-0 p-0" style={{boxSizing: 'border-box'}}>
            <div className="border border-1 container-fluid text-center p-2 d-md-none show" style={{backgroundColor: '#7ed6df'}}>
              <b className>Thông tin cá nhân</b>
            </div>
            <div className="border border-1 justify-content-center d-md-none show">
              <div className="w-100 p-2 form-group">
                <label className="form-control-label"><b>Họ tên:</b></label>
                <input type="text" className="form-control" readOnly name defaultValue="Nguyễn Thành Tất" />
              </div>
              <div className="w-100 p-2 form-group">
                <label className="form-control-label"><b>Ngày sinh:</b></label>
                <input type="text" className="form-control" readOnly name defaultValue="08-12-2000" />
              </div>
              <div className="w-100 p-2 form-group">
                <label className="form-control-label"><b>Địa chỉ:</b></label>
                <input type="text" className="form-control" readOnly name defaultValue="Ninh An - Ninh Hòa - Khánh hòa" />
              </div>
              <div className="w-100 p-2 form-group">
                <label className="form-control-label"><b>Số điện thoại:</b></label>
                <input type="number" className="form-control" readOnly name defaultValue="0931612273"/>
              </div>
            </div>
            <div className="border border-1 w-100 mt-md-0 mt-4">
              <div className="tab-pane container border p-2" id="menu_member">
                <form className="was-validated mb-2" id="form2">
                  <div className="border-bottom text-center" style={{backgroundColor: '#7ed6df'}}>
                    <label className="label font-weight-bold m-2">Các bài đăng</label>
                  </div>
                </form>
                {state.map(item=>{
                  return (
                    <>
                    <BaiDang  name={item.select.name} hashtag={item.hashtag} content={item.content} title={item.title} />
                    </>
                  )
                })}
              </div>
            </div>
          
          </nav>

          {/* End center body */}
          {/* ight body */}
          <nav className="col-0 col-md-2 ml-md-5 p-0 w-100 d-sm-block d-none">
            <div className="border border-1">
              <div className="img-thumbnail m-1">
                <img src={logo_1} className="w-100" />
              </div>
            </div>
            <div className="border border-1 mt-0">
              <div className="d-flex justify-content-center border border-0 border-bottom-1 pt-2 pb-2" style={{backgroundColor: '#7ed6df'}}>
                Tìm kiếm
              </div>
              <div className="input-group p-2">
                <input type="search" placeholder="Nhập từ bạn cần tìm?" aria-describedby="button-addon1" className="form-control border-0 bg-light" />
                <div className="input-group-append">
                  <button id="button-addon1" type="submit" className="btn btn-link btn-light text-dark"><i className="fas fa-search" /></button>
                </div>
              </div>
            </div>

          </nav>				
        </nav>
        {/* end right body */}
      
        </>
    )
}

export default Personal
