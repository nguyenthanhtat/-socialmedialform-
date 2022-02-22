import React,{useState,useEffect,useContext} from 'react'
import {DataNhom} from '../ConText/ContextNhom'
import { Data } from '../ConText/ContextTodo'
import '../styles/Home.css'
import avatarT from '../images/avataT.png'
import BaiDang from './Comment/BaiDang'
import FormDangBai from './FormDangBai'
import { Fragment } from 'react'
const CenterBody = () => {
  const {personClb} = useContext(DataNhom)
  const {title,setTitle,hashtag,content,setHashtag,setContent,select,setSelect,state,setState} = useContext(Data)
  const handleAdd=()=>{
      setState([...state,{title,select,hashtag,content}])

  }
  const onChangeSelect=(e)=>{
      const selectedId=e.target.value;
      const selectedClb=personClb.filter((clb)=>clb.id==selectedId)[0];
      setSelect(selectedClb)
  }
  useEffect(()=>{
      setSelect(personClb[0])
  },[])
  
 
    return (
      <>
          {/* Center Body */}
          {/* Post a posts */}
          <FormDangBai/>
          <div className="modal fade" id="modal_post">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header" style={{backgroundColor: '#7ed6df'}}>
                  <div className="modal-title d-flex justify-content-center w-100"><h4 className="text-center w-100 m-0">Tạo Bài Viết</h4></div>
                </div>
                <div className="modal-body p-4">
                  <div className="mt-md-2 w-100 mt-2">
                    <input type="text" className="form-control" placeholder="Nhập tiêu đề vào đây nhé!" value={title} onChange={(e)=>setTitle(e.target.value)} name="title"/>
                  </div>
                  <div className="input-group w-100 mt-md-4 mt-4">
                    <select className="form-select form-control" id="inputGroupSelect02" value={select?.id} onChange={(e)=>{onChangeSelect(e)}} >
                      {personClb.map(clb=>{
                        return(
                          <option key={clb.id}
                          value={clb.id}
                          >{clb.name}</option>

                        )
                      })}
                
                    </select>
                  </div>
                  <div className=" mt-md-4 w-100 mt-4">
                    <input type="text" className="form-control" placeholder="VD: #CLB #Hello" value={hashtag} onChange={(e)=>setHashtag(e.target.value) } name="hashtag"/>
                  </div>
                  <textarea className="form-control mt-md-4 mt-4" rows={4} placeholder="Bạn đang nghĩ gì?" value={content} onChange={(e)=>setContent(e.target.value)}   name="content"/>	
                </div>
                <div className="modal-footer mt-md-2 border-0">
                  <input type="button" name="" defaultValue="Đăng bài" onClick={ handleAdd } className="btn btn_post_posts mt-0" data-dismiss="modal" />
                  <input type="button" name="" defaultValue="Hủy" className="btn btn_close mt-0" data-dismiss="modal" />
                </div>
              </div>
            </div>
          </div>
          {/* End post a posts */}
          {/* Post */}
          {state.map((item)=>{
            
              return(
    
                    <BaiDang  name={item.select.name} hashtag={item.hashtag} content={item.content} title={item.title} />
                )
                })}
        		
        {/* End center body */}
      </>
    )
}

export default CenterBody
