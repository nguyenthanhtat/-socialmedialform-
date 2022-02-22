import React,{Fragment, useState,useContext} from 'react'
import { Link } from 'react-router-dom'
import avatarT from './avataT.png'
import BinhLuan1 from './Comments'
import { Data } from '../../ConText/CommentContext'
const BinhLuan = ({hashtag,content,title,name}) => {
    const {writeArray} = useContext(Data)
    const [mount,setMount]=useState(false)
    return (

        <nav className="container-fluid mt-md-3 w-100 nav_posts mt-2 pt-md-2" id="posts" >
        <div className="d-inline">
          <img src={avatarT} alt="Avatar" className="avatar_post" />
        </div>
        <div className="d-inline p-md-1 m-md-1 p-1 m-1">
          <span><Link to='/personal' style={{textDecoration: 'none', color: 'inherit'}}><b className="mr-md-2 mr-2">Nguyễn Thành Tất</b>➤</Link></span>
          <span><Link to='/groupofme' style={{textDecoration: 'none', color: 'inherit'}}><b>{name}</b></Link></span>
        </div>
        <hr className="mt-0 mb-0" />
        <nav className="container-fluid ml-2 mt-md-3 mt-2">
          <div>
            <span><b>{title}</b></span>
          </div>
          <div className="mt-2">
            <div>{content}</div>
          </div>
          <div className="mt-3" style={{color: '#2d3436'}}>
            <span className="border rounded-pill p-1" style={{backgroundColor: '#dfe6e9'}}>{hashtag}</span>
          </div>
        </nav>
      
        <hr className="mb-2" />
        {/* Love and comment */}
        <div className="m-0 pb-2">
         <i className="fas fa-comment-alt mt-0 ml-4 comment" onClick={()=>setMount(!mount)}><span className="ml-2 mt-0">Bình Luận {writeArray.length !==0 ?(<span className="ml-2 mt-0">{writeArray.length}</span>):'' } </span></i>
        </div>
        <hr className="mt-1" />
        {mount &&<BinhLuan1/>}    
    </nav>

    )
}

export default BinhLuan
