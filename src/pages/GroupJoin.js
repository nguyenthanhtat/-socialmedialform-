import React,{useContext} from 'react'
import { DataNhom } from '../ConText/ContextNhom'

const GroupJoin = () => {
    const {personClb} = useContext(DataNhom)
    return (
        <>
        <nav className="mt-2">
          <div className="container col-md-11 ">
            <div className="card0">
              <div className="card-body font-weight-bold">Nhóm Trang Bạn Đã Tham Gia</div>
            </div>
            <br />
          </div>
          <div className="container" >
            {
            personClb.map((nhom)=>{
              return(
               
                <div className="row" key={nhom.id}>
                    <div className="card  col-md align-self-center font-weight-bold   " style={{margin:'20px',padding:'0px'}}>
                      <img className="avatar" src={nhom.logo} alt="Card image" style={{width: '40%',}} />
                      <div className="card-body">
                        <h4 className="card-title">{nhom.name}</h4>
                        <p className="card-text">ĐH Nha Trang</p>
                          <div className="d-flex justify-content-center">
                            <a href="#" className="btn btn-primary" onClick="join_card_CLB()" id="btn_join">Rời Nhóm</a>
                            <a href="descriptionCLB.html" className="btn btn-primary">Xem Nhóm</a>
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

export default GroupJoin
