import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo_2.gif'
import '../styles/Home.css'
const Navbar = () => {
    return (
        <>
        
          <div className="col-12 col-md-2 d-none d-sm-block text-center mb-0 m-0 p-0">
            <img src={logo} className="img-thumbnail m-0 p-0" id="logo" />
          </div>
          <div className="col-12 col-md-4 d-sm-flex align-items-center d-none">
            <div className="input-group">
              <input type="search" placeholder="Nhập từ bạn cần tìm?" aria-describedby="button-addon1" className="form-control border-0 bg-light" />
              <div className="input-group-append">
                <button id="button-addon1" type="submit" className="btn btn-link btn-light text-dark"><i className="fas fa-search" /></button>
              </div>
            </div>
          </div>
          {/* End Tim kiem va logo */}
          {/* TenCLB và tìm kiếm */}
          <nav className="d-sm-none show row col-12 m-0 p-0">
            <div className="col-5 mt-2 p-0">
              <p className="p-2 logoText">Social Network NTU</p>
            </div>
            <div className="search_box col-7 w-100 h-100 mt-2 m-0 pt-2 text-right">	
              <a href="#" className="search_btn float-right m-0 w-auto"><i className="fas fa-search" /></a>	
              <input type="text" className="search_txt float-right m-0 pl-2 text-dark" name="search_txt" placeholder="Bạn Muốn Tìm gì?" />    
            </div>
          </nav>
          {/* End Ten CLB va tim kiem */}
          {/* Menu Chinh */}
          <nav className="nav navbar-expand justify-content-center col col-md-4 align-items-center" id="menu_first">
            {/* content menu */}
            <ul className="navbar-nav mb-0">
              <li className="nav-item mr-md-2 ml-3 p-1 px-md-4 px-4">
                <Link to='/home' className="nav-link text-dark">
                  <i className="fas fa-home d-block text-center" />
                </Link>
              </li>
              <li className="nav-item mr-md-2 p-1 px-md-4 px-4">
                <Link to='/group' className="nav-link text-dark">
                  <i className="fas fa-users d-block text-center" />
                </Link>
              </li>
              <li className="nav-item mr-md-2 p-1 px-md-4 px-4">
                <a href="#" className="nav-link text-dark" data-toggle="dropdown">
                  <i className="far fa-bell text-center d-block" />
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <h6 className="dropdown-header">
                    Thông Báo
                  </h6>
                  <a className="dropdown-item d-flex" href="#">
                    <div className="mr-3">
                      <div className="icon-circle bg-primary">
                        <i className="fas fa-file-alt text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="small text-gray-500">16-12-2021</div>
                      <span className="font-weight-bold">Bạn có một thông báo từ nhóm K60</span>
                    </div>
                  </a>
                  <a className="dropdown-item d-flex" href="#">
                    <div className="mr-3">
                      <div className="icon-circle bg-success">
                        <i className="fas fa-file-alt text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="small text-gray-500">16-12-2021</div>
                      Tài đã thích bài băng của bạn
                    </div>
                  </a>
                <a className="dropdown-item d-flex" href="#">
                  <div className="mr-3">
                    <div className="icon-circle bg-warning">
                      <i className="fas fa-file-alt text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="small text-gray-500">16-12-2021</div>
                    Tài đã bình luận bài đăng của bạn
                  </div>
                </a>
              </div>
            </li>
            <li className="nav-item mr-md-2 p-1 px-md-4 px-4 d-sm-none show">
              <Link to='/setting' className="nav-link text-dark">
                <i className="fas fa-cog text-center" />
              </Link>
            </li>
            <li className="nav-item mr-md-2 p-1 px-md-4 px-4 d-sm-none show">
              <Link to='/personal' className="nav-link text-dark">
                <i className="fas fa-user text-center" />
              </Link>
            </li>
          </ul>
        </nav>
        </>
    )
}

export default Navbar
