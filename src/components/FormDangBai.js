import React from 'react'
import avatarT from '../images/avataT.png'
const FormDangBai = () => {
    return (
        <nav className="nav_post_posts">
            <div className="d-inline">
            <img src={avatarT} alt="Avatar" className="avatar_post_posts" />
            </div>
            <div className="d-inline ml-2">
            <span>Bạn đang nghĩ gì ?</span>
            </div>
            <div className="d-inline float-right mt-md-1">
            <input type="button" className="btn btn_post_posts" name defaultValue="Đăng Bài" data-toggle="modal" data-target="#modal_post" />
            </div>
        </nav>
    )
}

export default FormDangBai
