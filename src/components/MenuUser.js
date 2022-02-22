import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'
import logo from '../images/avataT.png'
import { useState } from 'react'
const Trangthai =[
  {
    id:1,
    name:'online'
  },
  {
    id:2,
    name:'offline'
  }
]
const MenuUser = () => {
  const [checked,setChecked] = useState(1)
    return (
        <>
        <div className="btn-group col-md-1 d-block d-md-flex align-items-center w-100">
        <img src={logo} className="img-circle w-50 mt-md-1 d-none d-sm-block" id="img_avata" />
        <a type="button" className="btn d-none d-sm-block dropdown-toggle mt-md-1" id="user_name" data-toggle="dropdown">
          Nguyễn Thành Tất
        </a>
        <div className="dropdown-menu p-3">
          <div>
            <p className="d-flex justify-content-center">Trạng thái</p>
            <hr className="bg-dark d-block" />
            {Trangthai.map(state=>{
              return(
            <div className="form-check" key={state.id}>
              <input type="radio" checked={checked===state.id} onChange={()=>setChecked(state.id)}/>
              <label className="form-check-label" htmlFor="online"> &nbsp; {state.name}</label>
            </div>
              )
            })}
            <hr className="bg-dark d-block" />
            <div className="input-group rounded">
              <input type="search" className="form-control rounded" placeholder="Search" />
              <a href="#" className="input-group-text bg-white border-0" id="search-addon">
                <i className="fas fa-search" />
              </a>
            </div>
            <hr />
            <div className="text-center">
              <Link to='/setting' className="d-block">Cài đặt</Link>
              <hr />
            </div>
            <div className="text-center">
              <Link to ='/login'  className="text-center w-100">Đăng xuất</Link>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default MenuUser
