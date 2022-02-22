import React,{useEffect,useState} from 'react'
import '../styles/GroupOfMe.css'
import Navbar from '../pages/Navbar'
import MenuUser from '../components/MenuUser'
import avatarT from '../images/avataT.png'
import anhbia from '../images/k60.jpg'
import CenterBody from '../components/CenterBody'
import event from '../images/event.jpg'
import file from '../images/file.jpg'
import member from '../images/member.png'
import { EVENT,MEMBER } from '../Data/DataNhom'
import { Link } from 'react-router-dom'
const GroupOfMe = () => {
  const [avatar,setAvatar]=useState()
    useEffect(() => {
        //clean up the
        return () => {
           avatar && URL.revokeObjectURL(avatar.preview)
        }

    },[avatar])
    const handlePreviewAvatar =(e)=>{
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file)
        setAvatar(file)
    }
    return (
        <>
        <nav className="row m-0 container-fluid w-100 p-3 mb-md-5 mb-3 rounded" id="header">
        <Navbar/>
        {/* End Menu Chinh */}
        {/* menu user */}
        <MenuUser/>
        </nav>
        <nav className="row container-fluid p-0 m-0 w-100 d-flex justify-content-center bg-light">	
          <div className="w-100 col-md-12 d-flex justify-content-center">
            <img src={anhbia} className="m-0 p-0" alt="Ảnh bìa" style={{borderRadius: '20px',width:'80%',height:'500px'}} />
            <i className="fas fa-camera btn btn-light" id="icon_camera"><span type='file' className="ml-2 d-none d-sm-inline">Thay đổi ảnh</span></i>
          </div>
          <div className="w-100 offset-2 mt-2 mb-2">
            <h3 className="ml-md-5 ml-4">Nhóm Tin Học Đại Học Nha Trang</h3>
            <h5 className="ml-md-5 ml-4 blockquote-footer">Tin học văn phòng</h5>
            <i className="fas fa-globe ml-md-5 pl-md-4" style={{fontSize: '100%', color: 'black'}}><h5 className="d-inline ml-2">Nhóm công khai</h5></i>
            <i className="fas fa-users d-md-inline ml-md-5" style={{fontSize: '100%', color: 'black'}}><a href="memberCLB.html" className="text-decoration-none text-dark"><h5 className="d-inline ml-2">Số lượng thành viên: <p className="d-inline">100</p></h5></a><a /></i><a>
            </a></div><a>
          </a></nav><a>
          <hr className="mt-0" />
          {/* end header */}
          {/* Body */}
        </a><nav className="row container-fluid mt-0 w-100 m-0 p-0"><a>
            {/* left body */}
          </a><nav className="boder border-bottom-1 d-none d-sm-block col-md-2 col-0 offset-md-1 p-0" id="left_body"><a>
              <div className=" border border-1 container-fluid text-left pt-2 pb-2" style={{backgroundColor: '#7ed6df'}}>
                Trang liên kết
              </div>
            </a><div className="border border-1 justify-content-center"><a>
              </a><div className="w-100 m-3"><a>
                </a><a href='facebook.com' style={{textDecoration: 'none'}}>Facebook</a>
              </div>
              <div className="w-100 m-3">
                <a href='zalo.com' style={{textDecoration: 'none'}}>Zalo</a>
              </div>
              <div className="w-100 m-3">
                <a href='gmail.com' style={{textDecoration: 'none'}}>Gmail</a>
              </div>
              <div className="w-100 m-3">
                <a href='github.com' style={{textDecoration: 'none'}}>GitHub</a>
              </div>
            </div>
            <div className="border border-1 container-fluid text-left pt-2 mt-4 pb-2" style={{backgroundColor: '#7ed6df'}}>
              Thành viên
            </div>
            <div className="border border-1 justify-content-center">
              {MEMBER.map(member=>{
                return(
                  <div className="w-100 p-2" key={member.id}>
                  <img src={member.logo} alt="avatar" className="d-inline" style={{width: '19%'}} />
                  <div className="d-inline"><a href="UseInfo.html" style={{textDecoration: 'none', color: 'inherit'}}>{member.name}</a></div>
                  </div>
                )
              })}
            </div>
            <div className=" pt-2 pl-5 mb-3 border border-1 justify-content-center">
              <a href="" className="text-danger text-decoration-none text-center pl-3">Xem thêm</a>
            </div>
          </nav>
          {/* end left body */}
          <nav className="col-12 w-100 col-md-5 ml-md-5 m-0 p-0" style={{boxSizing: 'border-box'}}>
          <CenterBody/>
          </nav>
          {/* right body */}
          <nav className="col-0 col-md-2 ml-md-5 p-0 w-100 d-sm-block d-none">
            {/* Viết code vào đây */}
            <div className=" border border-1 container-fluid text-left pt-2 pb-2" style={{backgroundColor: '#7ed6df'}}>
              Danh mục
            </div>
            <div className="border border-1 justify-content-center">

              <div className="w-100 m-3">
                <Link to='/groupofme' style={{textDecoration: 'none', color: 'inherit'}}>
                  <img className="" src={event} style={{height: '36px', width: '36px'}} alt="" /> &nbsp; Sự kiên
                </Link>
              </div>
              <div className="w-100 m-3">
                <a href="" style={{textDecoration: 'none', color: 'inherit'}}>
                  <img className="" src={member} style={{height: '36px', width: '36px'}} alt="" /> &nbsp; Thành viên
                </a>
              </div>
              <div className="w-100 m-3">
                <a href="" style={{textDecoration: 'none', color: 'inherit'}}>
                  <img className="p-0" src={file} style={{height: '36px', width: '36px'}} /> &nbsp; Files
                </a>
              </div>
            </div>
            <div className="border border-1 container-fluid text-left pt-2 mt-4 pb-2" style={{backgroundColor: '#7ed6df'}}>
              Dánh sách các sự kiện
            </div>
            <div className="border border-1 justify-content-center">
              {EVENT.map((event)=>{
                return (
                    <div className="w-100 p-2" key={event.id}>
                      <img className="" src={event.logo} alt="" style={{height: '36px', width: '36px'}} />
                      <Link to='/groupofme' className="d-inline text-decoration-none" style={{color: 'inherit'}}>{event.name}</Link>
                    </div>

                )
              })}

            </div>
            <div className=" pt-2 pl-5 mb-3 border border-1 justify-content-center">
              <a href="" className="text-danger text-decoration-none text-center pl-3">Xem thêm</a>
            </div>
          </nav>
          {/* end right body */}
        </nav>			
        {/* end body */}
      </>
    )
}

export default GroupOfMe
