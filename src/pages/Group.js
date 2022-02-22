import React from 'react'
import '../styles/Group.css'
import logo_1 from '../images/logo_1.png'
import k60 from '../images/k60.jpg'
import k61 from '../images/k61.jpg'
import trangtruong from '../images/trangtruong.jpg'
import {NHOM} from '../Data/DataNhom' 
import { Link } from 'react-router-dom'
const Group = () => {
    return (
        <>
        {/* Tim kiem va logo */}
        <nav className="mt-2">
          <div className="container col-md-11 ">
            <div className="card0">
              <div className="card-body font-weight-bold">Nhóm Trang Hiện Có</div>
            </div>
            <br />
          </div>
          <div className="container" >
          {
            NHOM.map((clb)=>{
              return(
                
                <div className="row" key={clb.id}>
                    <div className="card col-md col-11 " style={{margin:'20px',padding:'0px'}}>
                      <img className="avatar" src={clb.logo} alt="Card image" style={{width: '40%'}} />
                      <div className="card-body">
                        <h4 className="card-title">{clb.name}</h4>
                        <p className="card-text">ĐH Nha Trang</p>
                          <div className="d-flex justify-content-center">
                            <a href="#" className="btn btn-primary" onClick="join_card_CLB()" id="btn_join">Tham gia</a>
                            <Link to='/groupofme' className="btn btn-primary">Xem Nhóm</Link>
                          </div>
                      </div>
                    </div>
                </div>
              )
            })
          }  
          </div>

        </nav>
      
        </>
    )
}

export default Group
