import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import avatarT from './avataT.png'
const Reply = () => {
    const [reply,setReply] = useState('')
    const [replyStack,setReplyStack] = useState([])
    const [mount,setMount]=useState(false)
    const handleAdd =()=>{
        setReplyStack([...replyStack,MXH])
        setReply('')
    }
    const MXH ={
        id:uuidv4(),
        write:reply
      }
    console.log(replyStack)  

    return (
        <>
                {replyStack.map((item,index)=>{
                return(
                    <>
                    <div className="d-inline">
                        <img src={avatarT} alt="Avatar" className="avatar_post" />
                    </div>
                    <div className="d-inline p-md-1 m-md-1 p-1 m-1">
                        <span><Link to='/personal' style={{textDecoration: 'none', color: 'inherit'}}><b className="mr-md-2 mr-2">Nguyễn Thành Tất</b>➤</Link></span>
                    </div>
                    <div className="ml-5 pl-2">

                    <li key={index}>{item}</li>
                    </div>
                    </>
                )
            })}
           
                <div >
                <div className="d-inline">
                    <img src={avatarT} alt="Avatar" className="avatar_post" />
                </div>
                <input type="text" value={reply} onChange={(e)=>setReply(e.target.value)} className="p-2 rounded-pill comment_outline" />
                <button onClick={handleAdd}>ADD </button>
                </div>


        </>
    )
}

export default Reply
