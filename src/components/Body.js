import React,{useContext} from 'react'
import { DataNhom } from '../ConText/ContextNhom'
import '../styles/Home.css'
import CenterBody from './CenterBody'
import RightBody from './RightBody'
import avatarT from '../images/avataT.png'
import { Link } from 'react-router-dom'
import { NHOM } from '../Data/DataNhom'
const Body = () => {
    const {name,logo,clbs,personClb, handleADD,handleRemove,setPersonClb,NHOMJOIN} = useContext(DataNhom)
    const handleAddClbPerson=(nhom,id)=>{
      if(personClb.includes(nhom) === true  ){
        alert("Nhóm đã tham gia")
      }
      else if(window.confirm("Bạn có muốn tham gia nhóm này")){
      setPersonClb([...personClb,nhom])
      }
  }


  console.log(personClb.length)
    return (
        <>
             {/*Body */}
      <nav className="row container-fluid mt-md-5 mt-0 w-100 m-0 p-0">
        {/* Left Body */}
        <nav className="boder border-bottom-1 d-none d-sm-block col-md-2 col-0 offset-md-1 p-0" id="left_body">
          {/* Left Body P1 */}
          <div className="w-100 m-0" id="header_left_body" />	
          <div className id="imgbackgound_left_body" />
          <img src={avatarT} className="rounded p-0 m-0" id="img_left_body" />
          <div className="border border-1 container-fluid text-center pt-5">
            <Link to='/personal' className="p-0 m-0 mb-2">Nguyễn Thành Tất</Link>
          </div>
          <div className="border border-1 border-top-0 container-fluid text-center pt-2">
            <p>Nhóm đã tham gia</p>
            <p> {personClb.length} </p><p>
            </p></div>
          <div className="border border-1 border-top-0 container-fluid text-center pt-2 pb-2">
            <Link to='/personal'  className="text-danger text-decoration-none">Xem trang cá nhân</Link>
          </div>
          <div className=" border border-1 mt-5 container-fluid text-left pt-2 pb-2">
            Đề xuất
          </div>
          <div className=" border border-1 border-bottom-0 container-fluid text-left pt-2 pb-2 pr-0">
            {NHOM.map(nhom=>{
              return(
                <div className=" mt-2 justify-content-center row" id="joinCLB" key={nhom.id}>
                <div className="m-0 p-0 col-md-2">
                  <img src={nhom.logo} className="rounded-circle p-0" id="img_clb" />
                </div>
                <div className="m-0 p-0 col-md-6" id="text_clb">
                  <Link to='/groupofme' className="text-decoration-none text-dark m-0">{nhom.name}</Link>
                </div>
                <div className="m-0 p-0 col-md-2">
                  <button type="submit" className="border border-1 m-0 float-right mr-1" id="icon_insert"  onClick={()=>handleAddClbPerson(nhom,nhom.id)}>+
                  </button></div>
              </div>
              )
              
            })}

            <div className="pl-5 pt-4">
              <Link to='/group' className="text-danger text-decoration-none pl-1">Xem thêm</Link>
            </div>
          </div></nav>
          <nav className="col-12 w-100 col-md-5 ml-md-5 m-0 p-0" style={{boxSizing: 'border-box'}}>
          <CenterBody/>
          </nav>
        {/* End Left Body */}
        <RightBody/>
      </nav>
        </>
    )
}

export default Body
