import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { PiUserCircleLight } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { PiShoppingBagThin } from "react-icons/pi";
import Swal from 'sweetalert2'
import axios from 'axios';

import logo from "../../../../assets/img/logo/logo2.png";
import { toast } from "react-toastify";

const HeaderClient = () => {
  const userId = localStorage.getItem('userId');
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const [isSearchContentOpen, setIsSearchContentOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path); // Chuyển hướng đến đường dẫn được truyền vào
  };
  

  useEffect(() => {
    // Kiểm tra xem có token trong localStorage không để xác định trạng thái đăng nhập
    // Gọi API để lấy dữ liệu giỏ hàng (chỉ là ví dụ, bạn cần tùy chỉnh cho phù hợp)
    axios.get(`http://127.0.0.1:8000/api/gio-hang/${userId}`)
      .then(response => {
        const cartItems = response.data.gio_hang.chi_tiet_gio_hangs || [];
        setCartItemsCount(cartItems.length);
      })
      .catch(error => {
        console.error('Có lỗi khi lấy dữ liệu giỏ hàng:', error);
      });
  }, []); // Chạy khi component được mount

  const token = localStorage.getItem('userToken');
  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [token]); // Chạy khi token trong localStorage thay đổi

  const handleLogout = () => {
    Swal.fire({
      title: "Bạn có chắc chắn muốn đăng xuất?",
      text: "Bạn sẽ không thể hoàn tác hành động này!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Đồng ý, đăng xuất!",
      cancelButtonText: "Hủy bỏ"
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('userToken');
        localStorage.removeItem('userId');
        localStorage.removeItem('userInfo');
        setIsLoggedIn(false); // Cập nhật trạng thái đăng xuất
        toast.success("Đăng xuất thành công!");
        setTimeout(() => {
          navigate('/');
        }, 100); // Delay 100ms để đảm bảo trạng thái đã được cập nhật
      }
    });
  };


  const toggleAccountDropdown = (e) => {
    e.preventDefault();
    setIsAccountDropdownOpen(!isAccountDropdownOpen);
  };

  const toggleSearchContent = (e) => {
    e.preventDefault();
    setIsSearchContentOpen(!isSearchContentOpen);
  };

  return (
    <>
      <header className="header-area header-padding-2 sticky-bar header-res-padding clearfix">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-6 col-4">
              <div className="logo">
                <a href="/">
                  <img src={logo} alt="Hypertech Store Logo" style={{ width: '200px', height: '70px', marginTop: -25 }} />
                </a>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 d-none d-lg-block">
              <div className="main-menu">
                <nav>
                  <ul>
                    <li><a href="/">Trang chủ</a></li>
                    <li><a href="cua-hang" onClick={() => handleNavigate('/cua-hang')}>Cửa hàng</a></li>
                    <li><a href="bai-viet" onClick={() => handleNavigate('/bai-viet')}>Bài viết</a></li>
                    <li><a href="lien-he" onClick={() => handleNavigate('/lien-he')}>Liên hệ</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6 col-8">
              <div className="header-right-wrap">
                <div className="same-style header-search">
                  <a className="search-active" href="#" onClick={toggleSearchContent}><CiSearch /></a>
                  <div className={`search-content`} style={{
                    opacity: isSearchContentOpen ? 1 : 0,
                    visibility: isSearchContentOpen ? "visible" : "hidden"
                  }}>
                    <form action="#">
                      <input type="text" placeholder="Search" />
                      <button className="button-search"><CiSearch /></button>
                    </form>
                  </div>
                </div>
                <div className="same-style account-satting">
                  <a className="account-satting-active" href="#" onClick={toggleAccountDropdown}><PiUserCircleLight /></a>
                  <div className="account-dropdown" style={{
                    opacity: isAccountDropdownOpen ? 1 : 0,
                    visibility: isAccountDropdownOpen ? "visible" : "hidden"
                  }}>
                    <ul>
                      {isLoggedIn ? (
                        <>
                          {/* <li><a href="/admin">Dashboard</a></li> */}
                          <li><a href="/tai-khoan">Tài khoản</a></li>
                          <li><a href="#" onClick={handleLogout}>Đăng xuất</a></li>
                        </>
                      ) : (
                        <>
                          <li><a href="/dang-nhap">Đăng nhập</a></li>
                          <li><a href="/dang-ky">Đăng ký</a></li>
                        </>
                      )}

                    </ul>
                  </div>
                </div>
                <div className="same-style header-wishlist">
                  <a href="/san-pham-yeu-thich"><CiHeart /></a>
                </div>
                <div className="same-style cart-wrap">
                  <button onClick={() => navigate('/gio-hang')}>
                    <PiShoppingBagThin />
                    <span className="count-style">{cartItemsCount}</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="mobile-menu-area">
              <div className="mobile-menu">
                <nav id="mobile-menu-active">
                  <ul className="menu-overflow">
                    <li><a href="/">Trang chủ</a></li>
                    <li><a href="/cua-hang">Cửa hàng</a></li>
                    <li><a href="/bai-viet">Bài viết</a></li>
                    <li><a href="/lien-he">Liên hệ</a></li>
                    {isLoggedIn ? (
                      <>
                        {/* <li><a href="/admin">Dashboard</a></li> */}
                        <li><a href="/tai-khoan">Tài khoản</a></li>
                        <li><a href="#" onClick={handleLogout}>Đăng xuất</a></li>
                      </>
                    ) : (
                      <>
                        <li><a href="/dang-nhap">Đăng nhập</a></li>
                        <li><a href="/dang-ky">Đăng ký</a></li>
                      </>
                    )}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderClient;
