import React,{useContext} from 'react'
import '../styles/Home.css'
import { DataNhom } from '../ConText/ContextNhom'
import { NHOMJOIN } from '../Data/DataNhom'
import avatarT from '../images/avataT.png'
import logo_1 from '../images/logo_1.png'
import { Link } from 'react-router-dom'
const RightBody = () => {
    const {personClb} = useContext(DataNhom)
    return (
        <>
             {/* Right Body */}
      {/* Giữ cái này lại */}
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
        <div className="border border-1 mt-5">
          <div className="d-flex justify-content-center border border-0 border-bottom-1 pt-2 pb-2" style={{backgroundColor: '#7ed6df'}}>
            Các Nhóm đã tham gia
          </div>
          {personClb.map(nhom=>{
            return(
              <div key={nhom.id} className=" mt-4 justify-content-center row">
                <div className="m-0 p-0 col-md-2">
                  <img src={nhom.logo} className="rounded-circle p-0" id="img_clb" />
                </div>
                <div className="m-0 p-0 col-md-6" id="text_clb">
                  <Link to='/groupofme' className="text-decoration-none text-dark m-0">{nhom.name}</Link>
                </div>
              </div>
            )
          })}

          <div className="d-flex mt-2 justify-content-center mb-2">
            <Link to='/groupjoin' className="text-decoration-none" style={{color: 'red'}}>Xem thêm</Link>
          </div>
        </div>
      </nav>
        </>
    )
}

export default RightBody
