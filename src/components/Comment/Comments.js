import React,{useState,useContext} from 'react'

import Reply from './Reply'
import avatarT from './avataT.png'
import { Data } from '../../ConText/CommentContext';
const BinhLuan1 = () => {
  const {write,setWrite,writeArray,setWriteArray,acReply,setAcReply,MXH}=useContext(Data)
  // const [write,setWrite] = useState('')
  // const [writeArray,setWriteArray] = useState([

  // ])
  // const [acReply,setAcReply] = useState(false)
  
  // const MXH ={
  //   id:uuidv4(),
  //   write:write
  // }
  
  
  const handleAddCmt =()=>{
    if(write==='')
    {alert('vui lòng nhập bình luận của bạn')}
    else{

      setWriteArray([...writeArray,MXH])
      setWrite('')
    }
  }
  console.log(writeArray)
    return (
        <>

          {/* Comment of user */}
          {writeArray.map((item)=>{
            return(
              <div className="mb-2 ml-2" id="container_comment_user" key={item.id}>					
                <img src={avatarT} className="d-inline avatar_comment" alt="Avatar" />
                <input type="text" name placeholder={item.write} readOnly className="p-2 rounded-pill comment_outline" />
                <div className="ml-5 pl-2">
                  <span className="comment pl-2" onClick={()=>setAcReply(!acReply)} >Trả lời</span>
                  
                </div>
                <div className="ml-5 pl-2">
                
                </div>
                
              </div>
              
            )
          })}
          {acReply && <Reply />}

          {/* end Comment of user */}
          
          <div className>
            <img src={avatarT} className="d-inline avatar_comment" alt="Avatar" />
            <input type="text" name placeholder="Viết bình luận của bạn vào đây...." className="p-2 rounded-pill d-inline comment_outline" style={{width: '70%'}}
            value={write} onChange={(e)=>setWrite(e.target.value)}
            />
            <button className="btn btn_post_posts mt-0" onClick={handleAddCmt}>Add</button>
          </div>
          
          
        </>
    )
}

export default BinhLuan1
