import React, { useState } from "react";
import { FaArrowTurnUp } from "react-icons/fa6";

function Account() {
    const [activePanel, setActivePanel] = useState("my-account-1");

    const togglePanel = (panelId) => {
        setActivePanel(activePanel === panelId ? "" : panelId);
    };

    return (
        <div className="checkout-area pb-80 pt-100">
            <div className="container">
                <div className="row">
                    <div className="ms-auto me-auto col-lg-9">
                        <div className="checkout-wrapper">
                            <div id="faq" className="panel-group">
                                {/* Account Information Panel */}
                                <div className="panel panel-default single-my-account">
                                    <div className="panel-heading my-account-title">
                                        <h3 className="panel-title">
                                            <span>1 .</span>{" "}
                                            <a onClick={() => togglePanel("my-account-1")}>
                                                Thông tin tài khoản của bạn
                                            </a>
                                        </h3>
                                    </div>
                                    {activePanel === "my-account-1" && (
                                        <div id="my-account-1" className="panel-collapse show">
                                            <div className="panel-body">
                                                <div className="myaccount-info-wrapper">
                                                    <div className="account-info-wrapper">
                                                        <h5>Thông tin chi tiết</h5>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="billing-info">
                                                                <label>Họ</label>
                                                                <input type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="billing-info">
                                                                <label>Tên</label>
                                                                <input type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 col-md-12">
                                                            <div className="billing-info">
                                                                <label>Email</label>
                                                                <input type="email" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="billing-info">
                                                                <label>Số điện thoại</label>
                                                                <input type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="billing-info">
                                                                <label>Địa chỉ</label>
                                                                <input type="text" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="billing-back-btn">
                                                        <div className="billing-back">
                                                            <a href="#"><FaArrowTurnUp /> back</a>
                                                        </div>
                                                        <div className="billing-btn">
                                                            <button type="submit">Tiếp tục</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Change Password Panel */}
                                <div className="panel panel-default single-my-account">
                                    <div className="panel-heading my-account-title">
                                        <h3 className="panel-title">
                                            <span>2 .</span>{" "}
                                            <a onClick={() => togglePanel("my-account-2")}>
                                                Thay đổi mật khẩu của bạn
                                            </a>
                                        </h3>
                                    </div>
                                    {activePanel === "my-account-2" && (
                                        <div id="my-account-2" className="panel-collapse show">
                                            <div className="panel-body">
                                                <div className="myaccount-info-wrapper">
                                                    <div className="account-info-wrapper">
                                                        <h5>Thay đổi mật khẩu</h5>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-12 col-md-12">
                                                            <div className="billing-info">
                                                                <label>Mật khẩu cũ</label>
                                                                <input type="password" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 col-md-12">
                                                            <div className="billing-info">
                                                                <label>Mật khẩu mới</label>
                                                                <input type="password" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 col-md-12">
                                                            <div className="billing-info">
                                                                <label>Xác nhận mật khẩu</label>
                                                                <input type="password" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="billing-back-btn">
                                                        <div className="billing-back">
                                                            <a href="#"><FaArrowTurnUp /> back</a>
                                                        </div>
                                                        <div className="billing-btn">
                                                            <button type="submit">Tiếp tục</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Address Panel */}
                                <div className="panel panel-default single-my-account">
                                    <div className="panel-heading my-account-title">
                                        <h3 className="panel-title">
                                            <span>3 .</span>{" "}
                                            <a onClick={() => togglePanel("my-account-3")}>
                                                Địa chỉ của bạn
                                            </a>
                                        </h3>
                                    </div>
                                    {activePanel === "my-account-3" && (
                                        <div id="my-account-3" className="panel-collapse show">
                                            <div className="panel-body">
                                                <div className="myaccount-info-wrapper">
                                                    <div className="account-info-wrapper">
                                                        <h4>Địa chỉ</h4>
                                                    </div>
                                                    <div className="entries-wrapper">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                                                                <div className="entries-info text-center">
                                                                    <p>Keith L. Castro, 559 Pratt Avenue, Orchards, WA 98662 </p>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                                                                <div className="entries-edit-delete text-center">
                                                                    <a className="edit" href="#">Sửa đổi</a>
                                                                    <a href="#">Xóa</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="billing-back-btn">
                                                        <div className="billing-back">
                                                            <a href="#"><FaArrowTurnUp /> back</a>
                                                        </div>
                                                        <div className="billing-btn">
                                                            <button type="submit">Tiếp tục</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;
