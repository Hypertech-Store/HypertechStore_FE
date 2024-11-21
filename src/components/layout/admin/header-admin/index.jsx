import { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import avatar from "../../../../assets/img/avatars/1.png";
import avatar1 from "../../../../assets/img/avatars/5.png";
import avatar2 from "../../../../assets/img/avatars/12.png";
const Header = () => {
  const [user, setUser] = useState(null); // Store the user data
  const navigate = useNavigate();

  // Lấy thông tin người dùng từ localStorage khi trang được load
  useEffect(() => {
    const savedUser = localStorage.getItem('userInfo');
    console.log('User info retrieved from localStorage in Header:', savedUser); // Kiểm tra giá trị lấy từ localStorage

    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUser(userData); // Cập nhật state user với thông tin lấy từ localStorage
      console.log('User state updated in Header:', userData); // Kiểm tra state sau khi cập nhật
    } else {
      console.log('No user info found in localStorage in Header');
    }
  }, []);


  const handleLogout = () => {
    Swal.fire({
      title: "Bạn có chắc chắn muốn đăng xuất?",
      text: "Bạn sẽ không thể hoàn tác hành động này!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Đồng ý, đăng xuất!",
      cancelButtonText: "Hủy bỏ",
    }).then((result) => {
      if (result.isConfirmed) {
        // Xóa các thông tin đăng nhập trong localStorage
        localStorage.removeItem("userToken");
        localStorage.removeItem("userInfo");

        // Hiển thị thông báo đăng xuất thành công
        toast.success("Đăng xuất thành công!");

        // Chuyển hướng về trang login sau khi đăng xuất
        setTimeout(() => {
          navigate("/login");
        }, 100); // Delay 100ms để đảm bảo trạng thái đã được cập nhật
      }
    });
  };


  return (
    <>
      {/* Navbar */}
      <nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
        <div className="layout-menu-toggle navbar-nav align-items-xl-center me-4 me-xl-0   d-xl-none ">
          <a className="nav-item nav-link px-0 me-xl-6" href="javascript:void(0)">
            <i className="bx bx-menu bx-md" />
          </a>
        </div>
        <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse" >
          {/* Search */}
          <div className="navbar-nav align-items-center">
            <div className="nav-item navbar-search-wrapper mb-0">
              <a className="nav-item nav-link search-toggler px-0" href="javascript:void(0);">
                <i className="bx bx-search bx-md" />
                <span className="d-none d-md-inline-block text-muted fw-normal ms-4">Search (Ctrl+/)</span>
              </a>
            </div>
          </div>
          {/* /Search */}
          <ul className="navbar-nav flex-row align-items-center ms-auto">
            {/* Language */}
            <li className="nav-item dropdown-language dropdown me-2 me-xl-0">
              <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                <i className="bx bx-globe bx-md" />
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="javascript:void(0);" data-language="en" data-text-direction="ltr">
                    <span>English</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="javascript:void(0);" data-language="fr" data-text-direction="ltr">
                    <span>French</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="javascript:void(0);" data-language="ar" data-text-direction="rtl">
                    <span>Arabic</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="javascript:void(0);" data-language="de" data-text-direction="ltr">
                    <span>German</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* /Language */}
            {/* Notification */}
            <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-2">
              <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                <span className="position-relative">
                  <i className="bx bx-bell bx-md" />
                  <span className="badge rounded-pill bg-danger badge-dot badge-notifications border" />
                </span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end p-0">
                <li className="dropdown-menu-header border-bottom">
                  <div className="dropdown-header d-flex align-items-center py-3">
                    <h6 className="mb-0 me-auto">Notification</h6>
                    <div className="d-flex align-items-center h6 mb-0">
                      <span className="badge bg-label-primary me-2">8 New</span>
                      <a href="javascript:void(0)" className="dropdown-notifications-all p-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Mark all as read"><i className="bx bx-envelope-open text-heading" /></a>
                    </div>
                  </div>
                </li>
                <li className="dropdown-notifications-list scrollable-container">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item list-group-item-action dropdown-notifications-item">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar">
                            <img src={avatar} alt className="rounded-circle" />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="small mb-0">Congratulation Lettie 🎉</h6>
                          <small className="mb-1 d-block text-body">Won the monthly best seller gold badge</small>
                          <small className="text-muted">1h ago</small>
                        </div>
                        <div className="flex-shrink-0 dropdown-notifications-actions">
                          <a href="javascript:void(0)" className="dropdown-notifications-read"><span className="badge badge-dot" /></a>
                          <a href="javascript:void(0)" className="dropdown-notifications-archive"><span className="bx bx-x" /></a>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar">
                            <span className="avatar-initial rounded-circle bg-label-danger">CF</span>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="small mb-0">Charles Franklin</h6>
                          <small className="mb-1 d-block text-body">Accepted your connection</small>
                          <small className="text-muted">12hr ago</small>
                        </div>
                        <div className="flex-shrink-0 dropdown-notifications-actions">
                          <a href="javascript:void(0)" className="dropdown-notifications-read"><span className="badge badge-dot" /></a>
                          <a href="javascript:void(0)" className="dropdown-notifications-archive"><span className="bx bx-x" /></a>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar">
                            <img src={avatar1} alt className="rounded-circle" />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="small mb-0">New Message ✉️</h6>
                          <small className="mb-1 d-block text-body">You have new message from Natalie</small>
                          <small className="text-muted">1h ago</small>
                        </div>
                        <div className="flex-shrink-0 dropdown-notifications-actions">
                          <a href="javascript:void(0)" className="dropdown-notifications-read"><span className="badge badge-dot" /></a>
                          <a href="javascript:void(0)" className="dropdown-notifications-archive"><span className="bx bx-x" /></a>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar">
                            <span className="avatar-initial rounded-circle bg-label-success"><i className="bx bx-cart" /></span>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="small mb-0">Whoo! You have new order 🛒 </h6>
                          <small className="mb-1 d-block text-body">ACME Inc. made new order $1,154</small>
                          <small className="text-muted">1 day ago</small>
                        </div>
                        <div className="flex-shrink-0 dropdown-notifications-actions">
                          <a href="javascript:void(0)" className="dropdown-notifications-read"><span className="badge badge-dot" /></a>
                          <a href="javascript:void(0)" className="dropdown-notifications-archive"><span className="bx bx-x" /></a>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar">
                            <img src={avatar2} alt className="rounded-circle" />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="small mb-0">Application has been approved 🚀 </h6>
                          <small className="mb-1 d-block text-body">Your ABC project application has been
                            approved.</small>
                          <small className="text-muted">2 days ago</small>
                        </div>
                        <div className="flex-shrink-0 dropdown-notifications-actions">
                          <a href="javascript:void(0)" className="dropdown-notifications-read"><span className="badge badge-dot" /></a>
                          <a href="javascript:void(0)" className="dropdown-notifications-archive"><span className="bx bx-x" /></a>
                        </div>
                      </div>
                    </li>

                  </ul>
                </li>
                <li className="border-top">
                  <div className="d-grid p-4">
                    <a className="btn btn-primary btn-sm d-flex" href="javascript:void(0);">
                      <small className="align-middle">View all notifications</small>
                    </a>
                  </div>
                </li>
              </ul>
            </li>
            {/*/ Notification */}
            <ul className="navbar-nav flex-row align-items-center ms-auto">
              {/* Nếu có người dùng */}
              {user ? (
                <ul className="nav navbar-nav navbar-dropdown dropdown-user dropdown">
                  <li className="nav-item">
                    <a className="nav-link dropdown-toggle hide-arrow p-0" href="javascript:void(0);" data-bs-toggle="dropdown">
                      <div className="avatar avatar-online">
                        <img
                          src={user.anh_nguoi_dung || 'default-avatar.png'} // Nếu không có avatar, sử dụng ảnh mặc định
                          className="w-px-40 h-auto rounded-circle"
                          alt="User Avatar"
                        />
                      </div>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="pages-account-settings-account.html">
                          <i className="bx bx-user me-2" />
                          <span>Profile</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="javascript:void(0);" onClick={handleLogout}>
                          <i className="bx bx-power-off me-2" />
                          <span>Logout</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              ) : null}
            </ul>
          </ul>
        </div>
      </nav>
      {/* / Navbar */}
    </>
  )
};

export default Header;
