import { useState } from "react";

import { Link } from 'react-router-dom';

// Import các tệp CSS (nếu bạn sử dụng Webpack hoặc Vite, bạn có thể import trực tiếp)
import '../../../../assets/vendor/fonts/boxicons.css';
import '../../../../assets/vendor/fonts/fontawesome.css';
import '../../../../assets/vendor/fonts/flag-icons.css';
import '../../../../assets/vendor/css/rtl/core.css';
import '../../../../assets/vendor/css/rtl/theme-default.css';
import '../../../../assets/css/demo.css';
import '../../../../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css';
import '../../../../assets/vendor/libs/typeahead-js/typeahead.css';
import '../../../../assets/vendor/libs/apex-charts/apex-charts.css';


// Import các thư viện JavaScript
import '../../../../assets/vendor/libs/jquery/jquery.js';
import '../../../../assets/vendor/libs/popper/popper.js';
import '../../../../assets/vendor/js/bootstrap.js';
import '../../../../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js';
import '../../../../assets/vendor/libs/hammer/hammer.js';
// import '../../../../assets/vendor/libs/i18n/i18n.js';
import '../../../../assets/vendor/libs/typeahead-js/typeahead.js';
import '../../../../assets/vendor/js/menu.js';

// Vendors JS
import '../../../../assets/vendor/libs/apex-charts/apexcharts.js';
import '../../../../assets/vendor/js/helpers.js';
import '../../../../assets/js/config.js';
import '../../../../assets/js/main.js';
import '../../../../assets/js/dashboards-analytics.js';
import logo from "../../../../assets/img/logo/logo1.png";
const SliderBar = () => {
    const [menuState, setMenuState] = useState({}); // Trạng thái động cho menu



    const toggleMenu = (menuKey) => {
        setMenuState((prevState) => ({
            ...prevState,
            [menuKey]: !prevState[menuKey], // Đảo trạng thái menu cụ thể
        }));
    };

    return (
        <>
            <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme" style={{ "max-width": "285px" }}>
                <div className="app-brand demo ">
                    <a href="index-2.html" className="app-brand-link">
                        <span className="app-brand-logo demo">
                            <img src={logo} alt="Hypertech Logo" style={{ width: '40px', height: '35px' }} />
                        </span>
                        <span className="app-brand-text demo menu-text fw-bold ms-2">hypertech</span>
                    </a>

                    <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto">
                        <i className="bx bx-chevron-left bx-sm d-flex align-items-center justify-content-center" />
                    </a>
                </div>
                <div className="menu-inner-shadow" />
                <ul className="menu-inner py-1">
                    {/* Dashboards */}
                    <li className="menu-item active open">
                        <a href="" className="menu-link">
                            <i className="menu-icon tf-icons bx bx-home-smile" />
                            <div className="text-truncate" data-i18n="Dashboards">Dashboards</div>
                        </a>
                    </li>
                    {/* Apps & Pages */}
                    <li className="menu-header small text-uppercase">
                        <span className="menu-header-text" data-i18n="Apps & Pages">Manager</span>
                    </li>

                    {/* Quản lý sản phẩm */}
                    <li className={`menu-item ${menuState["products"] ? "open" : ""}`}>
                        <a
                            href="javascript:void(0);"
                            className="menu-link menu-toggle"
                            onClick={() => toggleMenu("products")}
                        >
                            <i className="menu-icon tf-icons bx bx-cart-alt" />
                            <div className="text-truncate" data-i18n="eCommerce">
                                Quản lý sản phẩm
                            </div>
                        </a>
                        {menuState["products"] && (
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a href="app-ecommerce-product-list.html" className="menu-link">
                                        <div className="text-truncate" data-i18n="Product List">
                                            Danh sách sản phẩm
                                        </div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="app-ecommerce-product-add.html" className="menu-link">
                                        <div className="text-truncate" data-i18n="Add Product">
                                            Thêm sản phẩm
                                        </div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a
                                        href="app-ecommerce-category-list.html"
                                        className="menu-link"
                                    >
                                        <div className="text-truncate" data-i18n="Edit Product">
                                            Sửa sản phẩm
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* Quản lý danh mục */}
                    <li className={`menu-item ${menuState["categories"] ? "open" : ""}`}>
                        <a
                            href="javascript:void(0);"
                            className="menu-link menu-toggle"
                            onClick={() => toggleMenu("categories")}
                        >
                            <i className="menu-icon tf-icons bx bx-cube" />
                            <div className="text-truncate" data-i18n="eCommerce">
                                Quản lý danh mục
                            </div>
                        </a>
                        {menuState["categories"] && (
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a href="app-ecommerce-product-list.html" className="menu-link">
                                        <div className="text-truncate" data-i18n="Product List">
                                            Danh sách danh mục
                                        </div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="app-ecommerce-product-add.html" className="menu-link">
                                        <div className="text-truncate" data-i18n="Add Product">
                                            Thêm danh mục
                                        </div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a
                                        href="app-ecommerce-category-list.html"
                                        className="menu-link"
                                    >
                                        <div className="text-truncate" data-i18n="Edit Product">
                                            Sửa danh mục
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* Quản lý nhân viên */}
                    <li className={`menu-item ${menuState["employees"] ? "open" : ""}`}>
                        <a
                            href="javascript:void(0);"
                            className="menu-link menu-toggle"
                            onClick={() => toggleMenu("employees")}
                        >
                            <i className="menu-icon tf-icons bx bx-user" />
                            <div className="text-truncate" data-i18n="Users">
                                Quản lý nhân viên
                            </div>
                        </a>
                        {menuState["employees"] && (
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <Link to="danh-sach-nhan-vien" className="menu-link">
                                        <div className="text-truncate" data-i18n="List">Danh sách</div>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <a href="/admin/them-nhan-vien" className="menu-link">
                                        <div className="text-truncate" data-i18n="Add">Thêm nhân viên</div>
                                    </a>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* Quản lý hóa đơn */}
                    <li className={`menu-item ${menuState["invoice"] ? "open" : ""}`}>
                        <a
                            href="javascript:void(0);"
                            className="menu-link menu-toggle"
                            onClick={() => toggleMenu("invoice")}
                        >
                            <i className="menu-icon tf-icons bx bx-food-menu" />
                            <div className="text-truncate" data-i18n="Invoice">Quản lý hóa đơn</div>
                        </a>
                        {menuState["invoice"] && (
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a href="app-invoice-list.html" className="menu-link">
                                        <div className="text-truncate" data-i18n="List">List</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="app-invoice-preview.html" className="menu-link">
                                        <div className="text-truncate" data-i18n="Preview">Preview</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="app-invoice-edit.html" className="menu-link">
                                        <div className="text-truncate" data-i18n="Edit">Edit</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="app-invoice-add.html" className="menu-link">
                                        <div className="text-truncate" data-i18n="Add">Add</div>
                                    </a>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* Quản lý đơn hàng */}
                    <li className={`menu-item ${menuState["order"] ? "open" : ""}`}>
                        <a
                            href="javascript:void(0);"
                            className="menu-link menu-toggle"
                            onClick={() => toggleMenu("order")}
                        >
                            <i className="menu-icon tf-icons bx bx-package" />
                            <div className="text-truncate" data-i18n="Order">Quản lý đơn hàng</div>
                        </a>
                        {menuState["order"] && (
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a href="app-ecommerce-order-list.html" className="menu-link">
                                        <div className="text-truncate" data-i18n="Order List">
                                            Order List
                                        </div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a
                                        href="app-ecommerce-order-details.html"
                                        className="menu-link"
                                    >
                                        <div className="text-truncate" data-i18n="Order Details">
                                            Order Details
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        )}
                    </li>


                    <li className="menu-header small text-uppercase">
                        <span className="menu-header-text" data-i18n="Apps & Pages">Manager</span>
                    </li>

                    <li className="menu-item">
                        <a href="app-ecommerce-settings-shipping.html" className="menu-link">
                            <i className="menu-icon tf-icons bx bxs-ship" />
                            <div className="text-truncate" data-i18n="Shipping & Delivery">Vận chuyển &amp; Giao hàng</div>
                        </a>
                    </li>



                    <li className="menu-item">
                        <a href="wizard-ex-create-deal.html" className="menu-link">
                            <i className="menu-icon tf-icons bx bxs-discount" />
                            <div className="text-truncate" data-i18n="Create Deal">Quản lý voucher</div>
                        </a>
                    </li>

                    <li className="menu-item">
                        <a href="app-ecommerce-settings-checkout.html" className="menu-link">
                            <i className="menu-icon tf-icons bx bx-wallet" />

                            <div className="text-truncate" data-i18n="Checkout">Phương thức thanh toán</div>
                        </a>
                    </li>

                    <li className="menu-item">
                        <a href="app-ecommerce-manage-reviews.html" className="menu-link">
                            <i className="menu-icon tf-icons bx bx-comment-check" />
                            <div className="text-truncate" data-i18n="Manage Reviews">Xem xét đánh giá</div>
                        </a>
                    </li>

                    <li className="menu-item">
                        <a href="app-chat.html" className="menu-link">
                            <i className="menu-icon tf-icons bx bx-chat" />
                            <div className="text-truncate" data-i18n="Chat"> Quản lý tin nhắn</div>
                        </a>
                    </li>


                    <li className="menu-header small text-uppercase">
                        <span className="menu-header-text" data-i18n="Apps & Pages">Manager</span>
                    </li>

                    <li className={`menu-item ${menuState["role"] ? "open" : ""}`}>
                        <a href="javascript:void(0);" className="menu-link menu-toggle" onClick={() => toggleMenu("role")}>
                            <i className="menu-icon tf-icons bx bx-check-shield" />
                            <div className="text-truncate" data-i18n="Roles & Permissions">Vài trò &amp; quyền</div>
                        </a>
                        {menuState["role"] && (
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a href="app-access-roles.html" className="menu-link">
                                        <div className="text-truncate" data-i18n="Roles">Roles</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="app-access-permission.html" className="menu-link">
                                        <div className="text-truncate" data-i18n="Permission">Permission</div>
                                    </a>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li className={`menu-item ${menuState["authencation"] ? "open" : ""}`}>
                        <a href="javascript:void(0);" className="menu-link menu-toggle" onClick={() => toggleMenu("authencation")}>
                            <i className="menu-icon tf-icons bx bx-lock-open-alt" />
                            <div className="text-truncate" data-i18n="Authentications">Xác thực</div>
                        </a>
                        {menuState["authencation"] && (
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                                        <div className="text-truncate" data-i18n="Login">Login</div>
                                    </a>
                                    <ul className="menu-sub">
                                        <li className="menu-item">
                                            <a href="auth-login-basic.html" className="menu-link" target="_blank">
                                                <div className="text-truncate" data-i18n="Basic">Basic</div>
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="auth-login-cover.html" className="menu-link" target="_blank">
                                                <div className="text-truncate" data-i18n="Cover">Cover</div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item">
                                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                                        <div className="text-truncate" data-i18n="Register">Register</div>
                                    </a>
                                    <ul className="menu-sub">
                                        <li className="menu-item">
                                            <a href="auth-register-basic.html" className="menu-link" target="_blank">
                                                <div className="text-truncate" data-i18n="Basic">Basic</div>
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="auth-register-cover.html" className="menu-link" target="_blank">
                                                <div className="text-truncate" data-i18n="Cover">Cover</div>
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="auth-register-multisteps.html" className="menu-link" target="_blank">
                                                <div className="text-truncate" data-i18n="Multi-steps">Multi-steps</div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item">
                                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                                        <div className="text-truncate" data-i18n="Verify Email">Verify Email</div>
                                    </a>
                                    <ul className="menu-sub">
                                        <li className="menu-item">
                                            <a href="auth-verify-email-basic.html" className="menu-link" target="_blank">
                                                <div className="text-truncate" data-i18n="Basic">Basic</div>
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="auth-verify-email-cover.html" className="menu-link" target="_blank">
                                                <div className="text-truncate" data-i18n="Cover">Cover</div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item">
                                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                                        <div className="text-truncate" data-i18n="Reset Password">Reset Password</div>
                                    </a>
                                    <ul className="menu-sub">
                                        <li className="menu-item">
                                            <a href="auth-reset-password-basic.html" className="menu-link" target="_blank">
                                                <div className="text-truncate" data-i18n="Basic">Basic</div>
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="auth-reset-password-cover.html" className="menu-link" target="_blank">
                                                <div className="text-truncate" data-i18n="Cover">Cover</div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item">
                                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                                        <div className="text-truncate" data-i18n="Forgot Password">Forgot Password</div>
                                    </a>
                                    <ul className="menu-sub">
                                        <li className="menu-item">
                                            <a href="auth-forgot-password-basic.html" className="menu-link" target="_blank">
                                                <div className="text-truncate" data-i18n="Basic">Basic</div>
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="auth-forgot-password-cover.html" className="menu-link" target="_blank">
                                                <div className="text-truncate" data-i18n="Cover">Cover</div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item">
                                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                                        <div className="text-truncate" data-i18n="Two Steps">Two Steps</div>
                                    </a>
                                    <ul className="menu-sub">
                                        <li className="menu-item">
                                            <a href="auth-two-steps-basic.html" className="menu-link" target="_blank">
                                                <div className="text-truncate" data-i18n="Basic">Basic</div>
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="auth-two-steps-cover.html" className="menu-link" target="_blank">
                                                <div className="text-truncate" data-i18n="Cover">Cover</div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </aside>
            {/* / Menu */}
        </>
    )
};

export default SliderBar;
