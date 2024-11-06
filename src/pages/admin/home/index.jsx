import { useState } from "react";
import { useSelector } from "react-redux";

const Home = () => {
    document.title = "Dashboard - Hypertech Store"
    const [isShowModal, setIsShowModal] = useState(false);
    const isShow = useSelector((state) => state.toggleSiteBarAdmin.isShow);
    return (
        <div>
            <div className={`iq-top-navbar ${isShow ? "sidebar-main-active" : ""}`}>
                <div className="iq-navbar-custom">
                    {/* <div className="iq-sidebar-logo">
                        <div className="top-logo">
                            <a href="index.html" className="logo">
                                <div className="iq-light-logo">
                                    <img src="/src/assets/images/logo-dark.gif" className="img-fluid" />
                                </div>
                                <div className="iq-dark-logo">
                                    <img src={logo1} className="img-fluid" />
                                </div>
                                <span>vito</span>
                            </a>
                        </div>
                    </div> */}
                    <nav className="navbar navbar-light p-0">
                        <div className="navbar-left">
                            <div className="iq-search-bar d-none d-md-block">
                                <form action="#" className="searchbox">
                                    <input type="text" className="text search-input" placeholder="Type here to search..." />
                                    <a className="search-link" href="#"><i className="ri-search-line" /></a>
                                    <div className="searchbox-datalink">
                                        <h6 className="pl-3 pt-3 pb-3">Pages</h6>
                                        <ul className="m-0 pl-3 pr-3 pb-3">
                                            <li className="iq-bg-primary-hover rounded"><a href="index.html" className="nav-link router-link-exact-active router-link-active pr-2"><i className="ri-home-4-line pr-2" />Dashboard</a></li>
                                            <li className="iq-bg-primary-hover rounded"><a href="dashboard-1.html" className="nav-link router-link-exact-active router-link-active pr-2"><i className="ri-home-3-line pr-2" />Dashboard-1</a></li>
                                            <li className="iq-bg-primary-hover rounded"><a href="chat.html" className="nav-link"><i className="ri-message-line pr-2" />Chat</a></li>
                                            <li className="iq-bg-primary-hover rounded"><a href="calendar.html" className="nav-link"><i className="ri-calendar-2-line pr-2" />Calendar</a></li>
                                            <li className="iq-bg-primary-hover rounded"><a href="profile.html" className="nav-link"><i className="ri-profile-line pr-2" />Profile</a></li>
                                            <li className="iq-bg-primary-hover rounded"><a href="todo.html" className="nav-link"><i className="ri-chat-check-line pr-2" />Todo</a></li>
                                            <li className="iq-bg-primary-hover rounded"><a href="app/index.html" className="nav-link"><i className="ri-mail-line pr-2" />Email</a></li>
                                            <li className="iq-bg-primary-hover rounded"><a href="e-commerce-product-list.html" className="nav-link"><i className="ri-message-line pr-2" />Product Listing</a></li>
                                            <li className="iq-bg-primary-hover rounded"><a href="e-commerce-product-detail.html" className="nav-link"><i className="ri-file-list-line pr-2" />Product Details</a></li>
                                            <li className="iq-bg-primary-hover rounded"><a href="pages-faq.html" className="nav-link"><i className="ri-compasses-line pr-2" />Faq</a></li>
                                            <li className="iq-bg-primary-hover rounded"><a href="form-wizard.html" className="nav-link"><i className="ri-clockwise-line pr-2" />Form-wizard</a></li>
                                        </ul>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
                            <i className="ri-menu-3-line" />
                        </button> */}
                        {/* <div className="iq-menu-bt align-self-center">
                            <div className="wrapper-menu">
                                <div className="main-circle"><i className="ri-arrow-left-s-line" /></div>
                                <div className="hover-circle"><i className="ri-arrow-right-s-line" /></div>
                            </div>
                        </div> */}
                        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto navbar-list">
                                <li className="nav-item">
                                    <a className="search-toggle iq-waves-effect language-title" href="#">
                                        <img src="images/small/flag-01.png" className="img-fluid mr-1" style={{ height: 16, width: 16 }} />
                                        English <i className="ri-arrow-down-s-line" /></a>
                                    <div className="iq-sub-dropdown">
                                        <a className="iq-sub-card" href="#"><img src="images/small/flag-02.png" className="img-fluid mr-2" />French</a>
                                        <a className="iq-sub-card" href="#"><img src="images/small/flag-03.png" className="img-fluid mr-2" />Spanish</a>
                                        <a className="iq-sub-card" href="#"><img src="images/small/flag-04.png" className="img-fluid mr-2" />Italian</a>
                                        <a className="iq-sub-card" href="#"><img src="images/small/flag-05.png" className="img-fluid mr-2" />German</a>
                                        <a className="iq-sub-card" href="#"><img src="images/small/flag-06.png" className="img-fluid mr-2" />Japanese</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="search-toggle iq-waves-effect">
                                        <div id="lottie-beil" />
                                        <span className="bg-danger dots" />
                                    </a>
                                    <div className="iq-sub-dropdown">
                                        <div className="iq-card shadow-none m-0">
                                            <div className="iq-card-body p-0 ">
                                                <div className="bg-primary p-3">
                                                    <h5 className="mb-0 text-white">All Notifications<small className="badge  badge-light float-right pt-1">4</small></h5>
                                                </div>
                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div>
                                                            <img className="avatar-40 rounded" src="images/user/01.jpg" />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Emma Watson Nik</h6>
                                                            <small className="float-right font-size-12">Just Now</small>
                                                            <p className="mb-0">95 MB</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div>
                                                            <img className="avatar-40 rounded" src="images/user/02.jpg" />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">New customer is join</h6>
                                                            <small className="float-right font-size-12">5 days ago</small>
                                                            <p className="mb-0">Jond Nik</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div>
                                                            <img className="avatar-40 rounded" src="images/user/03.jpg" />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Two customer is left</h6>
                                                            <small className="float-right font-size-12">2 days ago</small>
                                                            <p className="mb-0">Jond Nik</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div>
                                                            <img className="avatar-40 rounded" src="images/user/04.jpg" />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">New Mail from Fenny</h6>
                                                            <small className="float-right font-size-12">3 days ago</small>
                                                            <p className="mb-0">Jond Nik</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href="#" className="search-toggle iq-waves-effect">
                                        <div id="lottie-mail" />
                                        <span className="bg-primary count-mail" />
                                    </a>
                                    <div className="iq-sub-dropdown">
                                        <div className="iq-card shadow-none m-0">
                                            <div className="iq-card-body p-0 ">
                                                <div className="bg-primary p-3">
                                                    <h5 className="mb-0 text-white">All Messages<small className="badge  badge-light float-right pt-1">5</small></h5>
                                                </div>
                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div>
                                                            <img className="avatar-40 rounded" src="images/user/01.jpg" />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Nik Emma Watson</h6>
                                                            <small className="float-left font-size-12">13 Jun</small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div>
                                                            <img className="avatar-40 rounded" src="images/user/02.jpg" />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Lorem Ipsum Watson</h6>
                                                            <small className="float-left font-size-12">20 Apr</small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div>
                                                            <img className="avatar-40 rounded" src="images/user/03.jpg" />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Why do we use it?</h6>
                                                            <small className="float-left font-size-12">30 Jun</small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div>
                                                            <img className="avatar-40 rounded" src="images/user/04.jpg" />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Variations Passages</h6>
                                                            <small className="float-left font-size-12">12 Sep</small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div>
                                                            <img className="avatar-40 rounded" src="images/user/05.jpg" />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Lorem Ipsum generators</h6>
                                                            <small className="float-left font-size-12">5 Dec</small>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div> */}
                        <ul className="navbar-list" onClick={() => setIsShowModal(!isShowModal)}>
                            <li className={`${isShowModal ? "iq-show" : ""}`}>
                                <a href="#" className="search-toggle iq-waves-effect d-flex align-items-center bg-primary rounded">
                                    <img src="../src/assets/images/user/1.jpg" className="img-fluid rounded mr-3" />
                                    <div className="caption">
                                        <h6 className="mb-0 line-height text-white">Xin chào</h6>
                                        <span className="font-size-12 text-white">Hai</span>
                                    </div>
                                </a>
                                <div className="iq-sub-dropdown iq-user-dropdown">
                                    <div className="iq-card shadow-none m-0">
                                        <div className="iq-card-body p-0 ">
                                            <div className="bg-primary p-3">
                                                <h5 className="mb-0 text-white line-height">Hello Nik jone</h5>
                                                <span className="text-white font-size-12">Available</span>
                                            </div>
                                            <a href="profile.html" className="iq-sub-card iq-bg-primary-hover">
                                                <div className="media align-items-center">
                                                    <div className="rounded iq-card-icon iq-bg-primary">
                                                        <i className="ri-file-user-line" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">My Profile</h6>
                                                        <p className="mb-0 font-size-12">View personal profile details.</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="profile-edit.html" className="iq-sub-card iq-bg-primary-hover">
                                                <div className="media align-items-center">
                                                    <div className="rounded iq-card-icon iq-bg-primary">
                                                        <i className="ri-profile-line" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">Edit Profile</h6>
                                                        <p className="mb-0 font-size-12">Modify your personal details.</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="account-setting.html" className="iq-sub-card iq-bg-primary-hover">
                                                <div className="media align-items-center">
                                                    <div className="rounded iq-card-icon iq-bg-primary">
                                                        <i className="ri-account-box-line" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">Account settings</h6>
                                                        <p className="mb-0 font-size-12">Manage your account parameters.</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="privacy-setting.html" className="iq-sub-card iq-bg-primary-hover">
                                                <div className="media align-items-center">
                                                    <div className="rounded iq-card-icon iq-bg-primary">
                                                        <i className="ri-lock-line" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">Privacy Settings</h6>
                                                        <p className="mb-0 font-size-12">Control your privacy parameters.</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="d-inline-block w-100 text-center p-3">
                                                <a className="btn btn-primary dark-btn-primary" href="sign-in.html" role="button">Sign
                                                    out<i className="ri-login-box-line ml-2" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div id="content-page" className={`content-page ${isShow ? "sidebar-main-active" : ""}`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="iq-card iq-card-block iq-card-stretch ">
                                <div className="iq-card-body">
                                    <div className="d-flex d-flex align-items-center justify-content-between">
                                        <div>
                                            <h2>352</h2>
                                            <p className="fontsize-sm m-0">Invoice Sent</p>
                                        </div>
                                        <div className="rounded-circle iq-card-icon dark-icon-light iq-bg-primary "> <i className="ri-inbox-fill" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="iq-card iq-card-block iq-card-stretch ">
                                <div className="iq-card-body">
                                    <div className="d-flex d-flex align-items-center justify-content-between">
                                        <div>
                                            <h2>$37k</h2>
                                            <p className="fontsize-sm m-0">Credited</p>
                                        </div>
                                        <div className="rounded-circle iq-card-icon iq-bg-danger"><i className="ri-radar-line" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="iq-card iq-card-block iq-card-stretch ">
                                <div className="iq-card-body">
                                    <div className="d-flex d-flex align-items-center justify-content-between">
                                        <div>
                                            <h2>32%</h2>
                                            <p className="fontsize-sm m-0">Employee Costs</p>
                                        </div>
                                        <div className="rounded-circle iq-card-icon iq-bg-warning "><i className="ri-price-tag-3-line" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="iq-card iq-card-block iq-card-stretch ">
                                <div className="iq-card-body">
                                    <div className="d-flex d-flex align-items-center justify-content-between">
                                        <div>
                                            <h2>27h</h2>
                                            <p className="fontsize-sm m-0">Payment Delay</p>
                                        </div>
                                        <div className="rounded-circle iq-card-icon iq-bg-info "><i className="ri-refund-line" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-7">
                            <div className="iq-card iq-card-block iq-card-stretch iq-card-height overflow-hidden">
                                <div className="iq-card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                        <h4 className="card-title">Invoice Stats</h4>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                        <div className="dropdown">
                                            <span className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown">
                                                <i className="ri-more-fill" />
                                            </span>
                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#"><i className="ri-eye-fill mr-2" />View</a>
                                                <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill mr-2" />Delete</a>
                                                <a className="dropdown-item" href="#"><i className="ri-pencil-fill mr-2" />Edit</a>
                                                <a className="dropdown-item" href="#"><i className="ri-printer-fill mr-2" />Print</a>
                                                <a className="dropdown-item" href="#"><i className="ri-file-download-fill mr-2" />Download</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="iq-card-body">
                                    <div id="home-chart-02" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-5">
                            <div className="iq-card iq-card-block iq-card-stretch iq-card-height" style={{ background: 'transparent' }}>
                                <div className="iq-card-body rounded p-0" style={{ background: 'url(images/page-img/01.png) no-repeat', backgroundSize: 'cover', height: 415 }}>
                                    <div className="iq-caption">
                                        <h1>450</h1>
                                        <p>Invoice</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                                <div className="iq-card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                        <h4 className="card-title">Open Invoices</h4>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                        <div className="dropdown">
                                            <span className="dropdown-toggle text-primary" id="dropdownMenuButton5" data-toggle="dropdown">
                                                <i className="ri-more-fill" />
                                            </span>
                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton5">
                                                <a className="dropdown-item" href="#"><i className="ri-eye-fill mr-2" />View</a>
                                                <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill mr-2" />Delete</a>
                                                <a className="dropdown-item" href="#"><i className="ri-pencil-fill mr-2" />Edit</a>
                                                <a className="dropdown-item" href="#"><i className="ri-printer-fill mr-2" />Print</a>
                                                <a className="dropdown-item" href="#"><i className="ri-file-download-fill mr-2" />Download</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="iq-card-body">
                                    <div className="table-responsive">
                                        <table className="table mb-0 table-borderless">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Client</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Invoice</th>
                                                    <th scope="col" className="text-right">Amount</th>
                                                    <th scope="col" className="text-center">Status</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Ira Membrit</td>
                                                    <td>18/10/2019</td>
                                                    <td>20156</td>
                                                    <td className="text-right">$1500.00</td>
                                                    <td className="text-center">
                                                        <div className="badge badge-pill iq-bg-success">Paid</div>
                                                    </td>
                                                    <td>
                                                        <i className="ri-ball-pen-fill text-success pr-1" />
                                                        <i className="ri-delete-bin-5-line text-danger" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Pete Sariya</td>
                                                    <td>26/10/2019</td>
                                                    <td>7859</td>
                                                    <td className="text-right">$2000.00</td>
                                                    <td className="text-center">
                                                        <div className="badge badge-pill iq-bg-success">Paid</div>
                                                    </td>
                                                    <td>
                                                        <i className="ri-ball-pen-fill text-success pr-1" />
                                                        <i className="ri-delete-bin-5-line text-danger" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Cliff Hanger</td>
                                                    <td>18/11/2019</td>
                                                    <td>6396</td>
                                                    <td className="text-right">$2500.00</td>
                                                    <td className="text-center">
                                                        <div className="badge badge-pill iq-bg-danger">Past Due</div>
                                                    </td>
                                                    <td>
                                                        <i className="ri-ball-pen-fill text-success pr-1" />
                                                        <i className="ri-delete-bin-5-line text-danger" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Terry Aki</td>
                                                    <td>14/12/2019</td>
                                                    <td>7854</td>
                                                    <td className="text-right">$5000.00</td>
                                                    <td className="text-center">
                                                        <div className="badge badge-pill iq-bg-success">Paid</div>
                                                    </td>
                                                    <td>
                                                        <i className="ri-ball-pen-fill text-success pr-1" />
                                                        <i className="ri-delete-bin-5-line text-danger" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Anna Mull</td>
                                                    <td>24/12/2019</td>
                                                    <td>568569</td>
                                                    <td className="text-right">$10000.00</td>
                                                    <td className="text-center">
                                                        <div className="badge badge-pill iq-bg-success">Paid</div>
                                                    </td>
                                                    <td>
                                                        <i className="ri-ball-pen-fill text-success pr-1" />
                                                        <i className="ri-delete-bin-5-line text-danger" />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                                <div className="iq-card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                        <h4 className="card-title">Monthly Invoices</h4>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                        <div className="dropdown">
                                            <span className="dropdown-toggle" id="dropdownMenuButton1" data-toggle="dropdown">
                                                <i className="ri-more-fill" />
                                            </span>
                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton1" style={{}}>
                                                <a className="dropdown-item" href="#"><i className="ri-eye-fill mr-2" />View</a>
                                                <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill mr-2" />Delete</a>
                                                <a className="dropdown-item" href="#"><i className="ri-pencil-fill mr-2" />Edit</a>
                                                <a className="dropdown-item" href="#"><i className="ri-printer-fill mr-2" />Print</a>
                                                <a className="dropdown-item" href="#"><i className="ri-file-download-fill mr-2" />Download</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="iq-card-body">
                                    <ul className="suggestions-lists m-0 p-0">
                                        <li className="d-flex mb-4 align-items-center">
                                            <div className="profile-icon iq-bg-success"><span><i className="ri-check-fill" /></span></div>
                                            <div className="media-support-info ml-3">
                                                <h6>Camelun ios</h6>
                                                <p className="mb-0 fontsize-sm"><span className="text-success">17/23</span> months paid</p>
                                            </div>
                                            <div className="media-support-amount ml-3">
                                                <h6><span className="text-secondary">$</span><b> 16,634.00</b></h6>
                                                <p className="mb-0 d-flex justify-content-end">per month</p>
                                            </div>
                                        </li>
                                        <li className="d-flex mb-4 align-items-center">
                                            <div className="profile-icon iq-bg-warning"><span><i className="ri-check-fill" /></span></div>
                                            <div className="media-support-info ml-3">
                                                <h6>React</h6>
                                                <p className="mb-0 fontsize-sm"><span className="text-warning">12 weeks </span>Due</p>
                                            </div>
                                            <div className="media-support-amount ml-3">
                                                <h6><span className="text-secondary">$</span><b> 6,000.00</b></h6>
                                                <p className="mb-0 d-flex justify-content-end">per month</p>
                                            </div>
                                        </li>
                                        <li className="d-flex mb-4 align-items-center">
                                            <div className="profile-icon iq-bg-success"><span><i className="ri-check-fill" /></span></div>
                                            <div className="media-support-info ml-3">
                                                <h6>Camelun ios</h6>
                                                <p className="mb-0 fontsize-sm"><span className="text-success">16/23</span> months paid</p>
                                            </div>
                                            <div className="media-support-amount ml-3">
                                                <h6><span className="text-secondary">$</span><b> 11,230.00</b></h6>
                                                <p className="mb-0 d-flex justify-content-end">per month</p>
                                            </div>
                                        </li>
                                        <li className="d-flex mb-1 align-items-center">
                                            <div className="profile-icon iq-bg-danger"><span><i className="ri-check-fill" /></span></div>
                                            <div className="media-support-info ml-3">
                                                <h6>Camelun ios</h6>
                                                <p className="mb-0 fontsize-sm"><span className="text-danger">15/23</span> months paid</p>
                                            </div>
                                            <div className="media-support-amount ml-3">
                                                <h6><span className="text-secondary">$</span><b> 10,050.00</b></h6>
                                                <p className="mb-0 d-flex justify-content-end">per month</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 row m-0 p-0">
                            <div className="col-md-12">
                                <div className="iq-card iq-card-block iq-card-stretch ">
                                    <div className="iq-card-header d-flex justify-content-between">
                                        <div className="iq-header-title">
                                            <h4 className="card-title">Exchange Rates</h4>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                            <div className="dropdown">
                                                <span className="dropdown-toggle" id="dropdownMenuButton-one" data-toggle="dropdown">
                                                    <i className="ri-more-fill" />
                                                </span>
                                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton-one" style={{}}>
                                                    <a className="dropdown-item" href="#"><i className="ri-eye-fill mr-2" />View</a>
                                                    <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill mr-2" />Delete</a>
                                                    <a className="dropdown-item" href="#"><i className="ri-pencil-fill mr-2" />Edit</a>
                                                    <a className="dropdown-item" href="#"><i className="ri-printer-fill mr-2" />Print</a>
                                                    <a className="dropdown-item" href="#"><i className="ri-file-download-fill mr-2" />Download</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="iq-card-body">
                                        <div id="home-chart-01" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="iq-card iq-card-block iq-card-stretch ">
                                    <div className="iq-card-header d-flex justify-content-between">
                                        <div className="iq-header-title">
                                            <h4 className="card-title">Last costs</h4>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                            <div className="dropdown">
                                                <span className="dropdown-toggle" id="dropdownMenuButton-two" data-toggle="dropdown">
                                                    <i className="ri-more-fill" />
                                                </span>
                                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton-two" style={{}}>
                                                    <a className="dropdown-item" href="#"><i className="ri-eye-fill mr-2" />View</a>
                                                    <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill mr-2" />Delete</a>
                                                    <a className="dropdown-item" href="#"><i className="ri-pencil-fill mr-2" />Edit</a>
                                                    <a className="dropdown-item" href="#"><i className="ri-printer-fill mr-2" />Print</a>
                                                    <a className="dropdown-item" href="#"><i className="ri-file-download-fill mr-2" />Download</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="iq-card-body ">
                                        <div id="home-chart-05" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="iq-card iq-card-block iq-card-stretch ">
                                    <div className="iq-card-header d-flex justify-content-between">
                                        <div className="iq-header-title">
                                            <h4 className="card-title">Efficiency</h4>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                            <div className="dropdown">
                                                <span className="dropdown-toggle" id="dropdownMenuButton-three" data-toggle="dropdown">
                                                    <i className="ri-more-fill" />
                                                </span>
                                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton-three" style={{}}>
                                                    <a className="dropdown-item" href="#"><i className="ri-eye-fill mr-2" />View</a>
                                                    <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill mr-2" />Delete</a>
                                                    <a className="dropdown-item" href="#"><i className="ri-pencil-fill mr-2" />Edit</a>
                                                    <a className="dropdown-item" href="#"><i className="ri-printer-fill mr-2" />Print</a>
                                                    <a className="dropdown-item" href="#"><i className="ri-file-download-fill mr-2" />Download</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="iq-card-body ">
                                        <div id="home-chart-11" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="iq-card iq-card-block iq-card-stretch ">
                                <div className="iq-card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                        <h4 className="card-title">Payment History</h4>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                        <div className="dropdown">
                                            <span className="dropdown-toggle" id="dropdownMenuButton-four" data-toggle="dropdown">
                                                <i className="ri-more-fill" />
                                            </span>
                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton-four" style={{}}>
                                                <a className="dropdown-item" href="#"><i className="ri-eye-fill mr-2" />View</a>
                                                <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill mr-2" />Delete</a>
                                                <a className="dropdown-item" href="#"><i className="ri-pencil-fill mr-2" />Edit</a>
                                                <a className="dropdown-item" href="#"><i className="ri-printer-fill mr-2" />Print</a>
                                                <a className="dropdown-item" href="#"><i className="ri-file-download-fill mr-2" />Download</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="iq-card-body">
                                    <ul className="suggestions-lists m-0 p-0">
                                        <li className="d-flex mb-4 align-items-center">
                                            <div className="profile-icon bg-secondary"><span><i className="ri-refresh-line" /></span></div>
                                            <div className="media-support-info ml-3">
                                                <h6>Deposit from ATL</h6>
                                                <p className="mb-0 fontsize-sm">5 march, 18:33</p>
                                            </div>
                                            <div className="media-support-amount ml-3">
                                                <h6 className="text-info">- $1,470</h6>
                                            </div>
                                        </li>
                                        <li className="d-flex mb-4 align-items-center">
                                            <div className="profile-icon dark-icon bg-primary"><span><i className="ri-paypal-line" /></span>
                                            </div>
                                            <div className="media-support-info ml-3">
                                                <h6>Deposit PayPal</h6>
                                                <p className="mb-0 fontsize-sm">5 march, 18:33</p>
                                            </div>
                                            <div className="media-support-amount ml-3">
                                                <h6 className="text-primary">+ $2,220</h6>
                                            </div>
                                        </li>
                                        <li className="d-flex mb-4 align-items-center">
                                            <div className="profile-icon icon dark-icon bg-primary"><span><i className="ri-check-line" /></span></div>
                                            <div className="media-support-info ml-3">
                                                <h6>Deposit from ATL</h6>
                                                <p className="mb-0 fontsize-sm">5 march, 18:33</p>
                                            </div>
                                            <div className="media-support-amount ml-3">
                                                <h6 className="text-primary">+ $250</h6>
                                            </div>
                                        </li>
                                        <li className="d-flex mb-4 align-items-center">
                                            <div className="profile-icon bg-info"><span><i className="ri-close-line" /></span></div>
                                            <div className="media-support-info ml-3">
                                                <h6>Cancelled</h6>
                                                <p className="mb-0 fontsize-sm">5 march, 18:33</p>
                                            </div>
                                            <div className="media-support-amount ml-3">
                                                <h6 className="text-info">$0</h6>
                                            </div>
                                        </li>
                                        <li className="d-flex mb-4 align-items-center">
                                            <div className="profile-icon bg-info"><span><i className="ri-arrow-go-back-fill" /></span></div>
                                            <div className="media-support-info ml-3">
                                                <h6>Refund</h6>
                                                <p className="mb-0 fontsize-sm">5 march, 18:33</p>
                                            </div>
                                            <div className="media-support-amount ml-3">
                                                <h6 className="text-info">- $500</h6>
                                            </div>
                                        </li>
                                        <li className="d-flex mb-4 align-items-center">
                                            <div className="profile-icon bg-secondary"><span><i className="ri-bar-chart-grouped-fill" /></span></div>
                                            <div className="media-support-info ml-3">
                                                <h6>Credit from ATL</h6>
                                                <p className="mb-0 fontsize-sm">5 march, 18:33</p>
                                            </div>
                                            <div className="media-support-amount ml-3">
                                                <h6 className="text-primary">+ $169</h6>
                                            </div>
                                        </li>
                                        <li className="d-flex mb-4 align-items-center">
                                            <div className="profile-icon bg-warning"><span><i className="ri-qr-scan-line" /></span></div>
                                            <div className="media-support-info ml-3">
                                                <h6>Deposit from Paypal</h6>
                                                <p className="mb-0 fontsize-sm">5 march, 18:33</p>
                                            </div>
                                            <div className="media-support-amount ml-3">
                                                <h6 className="text-info">- $1,470</h6>
                                            </div>
                                        </li>
                                        <li className="d-flex mb-0 align-items-center">
                                            <div className="profile-icon bg-danger"><span><i className="ri-mail-send-fill" /></span></div>
                                            <div className="media-support-info ml-3">
                                                <h6>Refund Amount</h6>
                                                <p className="mb-0 fontsize-sm">5 march, 18:33</p>
                                            </div>
                                            <div className="media-support-amount ml-3">
                                                <h6 className="text-primary">+ $9,480</h6>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;