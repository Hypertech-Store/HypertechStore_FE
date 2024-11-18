import wallet from "../../../assets/img/icons/unicons/wallet-primary.png";
import paypal from "../../../assets/img/icons/unicons/paypal.png";
import wallet1 from "../../../assets/img/icons/unicons/wallet.png";
import chart from "../../../assets/img/icons/unicons/chart.png";
import credit from "../../../assets/img/icons/unicons/cc-primary.png";
import matercard from "../../../assets/img/icons/unicons/cc-warning.png";

import chorme from "../../../assets/img/icons/brands/chrome.png";
import safari from "../../../assets/img/icons/brands/safari.png";
import firefox from "../../../assets/img/icons/brands/firefox.png";
import edge from "../../../assets/img/icons/brands/edge.png";
import opera from "../../../assets/img/icons/brands/opera.png";
import browser from "../../../assets/img/icons/brands/uc.png";

import pdf from "../../../assets/img/icons/misc/pdf.png";
import avatar from "../../../assets/img/avatars/1.png";
import avatar1 from "../../../assets/img/avatars/5.png";
import avatar2 from "../../../assets/img/avatars/12.png";
import avatar3 from "../../../assets/img/avatars/6.png";

const Dashboard = () => {
    document.title = "Dashboard - Hypertech Store";
    return (
        <>
            {/* Layout container */}
            <div className="layout-page" style={{ width: "100%" }}>
                {/* Content wrapper */}
                <div className="content-wrapper">
                    {/* Content */}
                    <div className="container-xxl flex-grow-1 container-p-y">
                        <div className="row">
                            {/* Order Statistics */}
                            <div className="col-md-6 col-lg-4 col-xl-4 order-0 mb-6">
                                <div className="card h-100">
                                    <div className="card-header d-flex justify-content-between">
                                        <div className="card-title mb-0">
                                            <h5 className="mb-1 me-2">Order Statistics</h5>
                                            <p className="card-subtitle">42.82k Total Sales</p>
                                        </div>
                                        <div className="dropdown">
                                            <button className="btn text-muted p-0" type="button" id="orederStatistics" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="bx bx-dots-vertical-rounded bx-lg" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="orederStatistics">
                                                <a className="dropdown-item" href="javascript:void(0);">Select All</a>
                                                <a className="dropdown-item" href="javascript:void(0);">Refresh</a>
                                                <a className="dropdown-item" href="javascript:void(0);">Share</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center mb-6">
                                            <div className="d-flex flex-column align-items-center gap-1">
                                                <h3 className="mb-1">8,258</h3>
                                                <small>Total Orders</small>
                                            </div>
                                            <div id="orderStatisticsChart" />
                                        </div>
                                        <ul className="p-0 m-0">
                                            <li className="d-flex align-items-center mb-5">
                                                <div className="avatar flex-shrink-0 me-3">
                                                    <span className="avatar-initial rounded bg-label-primary"><i className="bx bx-mobile-alt" /></span>
                                                </div>
                                                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                    <div className="me-2">
                                                        <h6 className="mb-0">Electronic</h6>
                                                        <small>Mobile, Earbuds, TV</small>
                                                    </div>
                                                    <div className="user-progress">
                                                        <h6 className="mb-0">82.5k</h6>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center mb-5">
                                                <div className="avatar flex-shrink-0 me-3">
                                                    <span className="avatar-initial rounded bg-label-success"><i className="bx bx-closet" /></span>
                                                </div>
                                                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                    <div className="me-2">
                                                        <h6 className="mb-0">Fashion</h6>
                                                        <small>T-shirt, Jeans, Shoes</small>
                                                    </div>
                                                    <div className="user-progress">
                                                        <h6 className="mb-0">23.8k</h6>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center mb-5">
                                                <div className="avatar flex-shrink-0 me-3">
                                                    <span className="avatar-initial rounded bg-label-info"><i className="bx bx-home-alt" /></span>
                                                </div>
                                                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                    <div className="me-2">
                                                        <h6 className="mb-0">Decor</h6>
                                                        <small>Fine Art, Dining</small>
                                                    </div>
                                                    <div className="user-progress">
                                                        <h6 className="mb-0">849k</h6>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center">
                                                <div className="avatar flex-shrink-0 me-3">
                                                    <span className="avatar-initial rounded bg-label-secondary"><i className="bx bx-football" /></span>
                                                </div>
                                                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                    <div className="me-2">
                                                        <h6 className="mb-0">Sports</h6>
                                                        <small>Football, Cricket Kit</small>
                                                    </div>
                                                    <div className="user-progress">
                                                        <h6 className="mb-0">99</h6>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*/ Order Statistics */}
                            {/* Expense Overview */}
                            <div className="col-md-6 col-lg-4 order-1 mb-6">
                                <div className="card h-100">
                                    <div className="card-header nav-align-top">
                                        <ul className="nav nav-pills" role="tablist">
                                            <li className="nav-item">
                                                <button type="button" className="nav-link active" role="tab" data-bs-toggle="tab" data-bs-target="#navs-tabs-line-card-income" aria-controls="navs-tabs-line-card-income" aria-selected="true">Income</button>
                                            </li>
                                            <li className="nav-item">
                                                <button type="button" className="nav-link" role="tab">Expenses</button>
                                            </li>
                                            <li className="nav-item">
                                                <button type="button" className="nav-link" role="tab">Profit</button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-body">
                                        <div className="tab-content p-0">
                                            <div className="tab-pane fade show active" id="navs-tabs-line-card-income" role="tabpanel">
                                                <div className="d-flex mb-6">
                                                    <div className="avatar flex-shrink-0 me-3">
                                                        <img src={wallet} alt="User" />
                                                    </div>
                                                    <div>
                                                        <p className="mb-0">Total Balance</p>
                                                        <div className="d-flex align-items-center">
                                                            <h6 className="mb-0 me-1">$459.10</h6>
                                                            <small className="text-success fw-medium">
                                                                <i className="bx bx-chevron-up bx-lg" />
                                                                42.9%
                                                            </small>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="incomeChart" />
                                                <div className="d-flex align-items-center justify-content-center mt-6 gap-3">
                                                    <div className="flex-shrink-0">
                                                        <div id="expensesOfWeek" />
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-0">Income this week</h6>
                                                        <small>$39k less than last week</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*/ Expense Overview */}
                            {/* Transactions */}
                            <div className="col-md-6 col-lg-4 order-2 mb-6">
                                <div className="card h-100">
                                    <div className="card-header d-flex align-items-center justify-content-between">
                                        <h5 className="card-title m-0 me-2">Transactions</h5>
                                        <div className="dropdown">
                                            <button className="btn text-muted p-0" type="button" id="transactionID" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="bx bx-dots-vertical-rounded bx-lg" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="transactionID">
                                                <a className="dropdown-item" href="javascript:void(0);">Last 28 Days</a>
                                                <a className="dropdown-item" href="javascript:void(0);">Last Month</a>
                                                <a className="dropdown-item" href="javascript:void(0);">Last Year</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body pt-4">
                                        <ul className="p-0 m-0">
                                            <li className="d-flex align-items-center mb-6">
                                                <div className="avatar flex-shrink-0 me-3">
                                                    <img src={paypal} alt="User" className="rounded" />
                                                </div>
                                                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                    <div className="me-2">
                                                        <small className="d-block">Paypal</small>
                                                        <h6 className="fw-normal mb-0">Send money</h6>
                                                    </div>
                                                    <div className="user-progress d-flex align-items-center gap-2">
                                                        <h6 className="fw-normal mb-0">+82.6</h6> <span className="text-muted">USD</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center mb-6">
                                                <div className="avatar flex-shrink-0 me-3">
                                                    <img src={wallet1} alt="User" className="rounded" />
                                                </div>
                                                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                    <div className="me-2">
                                                        <small className="d-block">Wallet</small>
                                                        <h6 className="fw-normal mb-0">Mac</h6>
                                                    </div>
                                                    <div className="user-progress d-flex align-items-center gap-2">
                                                        <h6 className="fw-normal mb-0">+270.69</h6> <span className="text-muted">USD</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center mb-6">
                                                <div className="avatar flex-shrink-0 me-3">
                                                    <img src={chart} alt="User" className="rounded" />
                                                </div>
                                                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                    <div className="me-2">
                                                        <small className="d-block">Transfer</small>
                                                        <h6 className="fw-normal mb-0">Refund</h6>
                                                    </div>
                                                    <div className="user-progress d-flex align-items-center gap-2">
                                                        <h6 className="fw-normal mb-0">+637.91</h6> <span className="text-muted">USD</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center mb-6">
                                                <div className="avatar flex-shrink-0 me-3">
                                                    <img src={credit} alt="User" className="rounded" />
                                                </div>
                                                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                    <div className="me-2">
                                                        <small className="d-block">Credit Card</small>
                                                        <h6 className="fw-normal mb-0">Ordered Food</h6>
                                                    </div>
                                                    <div className="user-progress d-flex align-items-center gap-2">
                                                        <h6 className="fw-normal mb-0">-838.71</h6> <span className="text-muted">USD</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center mb-6">
                                                <div className="avatar flex-shrink-0 me-3">
                                                    <img src={wallet1} alt="User" className="rounded" />
                                                </div>
                                                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                    <div className="me-2">
                                                        <small className="d-block">Wallet</small>
                                                        <h6 className="fw-normal mb-0">Starbucks</h6>
                                                    </div>
                                                    <div className="user-progress d-flex align-items-center gap-2">
                                                        <h6 className="fw-normal mb-0">+203.33</h6> <span className="text-muted">USD</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center">
                                                <div className="avatar flex-shrink-0 me-3">
                                                    <img src={matercard} alt="User" className="rounded" />
                                                </div>
                                                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                    <div className="me-2">
                                                        <small className="d-block">Mastercard</small>
                                                        <h6 className="fw-normal mb-0">Ordered Food</h6>
                                                    </div>
                                                    <div className="user-progress d-flex align-items-center gap-2">
                                                        <h6 className="fw-normal mb-0">-92.45</h6> <span className="text-muted">USD</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*/ Transactions */}
                            {/* Activity Timeline */}
                            <div className="col-md-12 col-lg-6 order-4 order-lg-3">
                                <div className="card h-100">
                                    <div className="card-header d-flex justify-content-between">
                                        <h5 className="card-title m-0 me-2">Activity Timeline</h5>
                                        <div className="dropdown">
                                            <button className="btn text-muted p-0" type="button" id="timelineWapper" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="bx bx-dots-vertical-rounded bx-lg" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="timelineWapper">
                                                <a className="dropdown-item" href="javascript:void(0);">Select All</a>
                                                <a className="dropdown-item" href="javascript:void(0);">Refresh</a>
                                                <a className="dropdown-item" href="javascript:void(0);">Share</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body pt-2">
                                        <ul className="timeline mb-0">
                                            <li className="timeline-item timeline-item-transparent">
                                                <span className="timeline-point timeline-point-primary" />
                                                <div className="timeline-event">
                                                    <div className="timeline-header mb-3">
                                                        <h6 className="mb-0">12 Invoices have been paid</h6>
                                                        <small className="text-muted">12 min ago</small>
                                                    </div>
                                                    <p className="mb-2">
                                                        Invoices have been paid to the company
                                                    </p>
                                                    <div className="d-flex align-items-center mb-1">
                                                        <div className="badge bg-lighter rounded-2">
                                                            <img src={pdf} alt="img" width={15} className="me-2" />
                                                            <span className="h6 mb-0 text-body">invoices.pdf</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="timeline-item timeline-item-transparent">
                                                <span className="timeline-point timeline-point-success" />
                                                <div className="timeline-event">
                                                    <div className="timeline-header mb-3">
                                                        <h6 className="mb-0">Client Meeting</h6>
                                                        <small className="text-muted">45 min ago</small>
                                                    </div>
                                                    <p className="mb-2">
                                                        Project meeting with john @10:15am
                                                    </p>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2">
                                                        <div className="d-flex flex-wrap align-items-center">
                                                            <div className="avatar avatar-sm me-2">
                                                                <img src={avatar} alt="Avatar" className="rounded-circle" />
                                                            </div>
                                                            <div>
                                                                <p className="mb-0 small fw-medium">Lester McCarthy (Client)</p>
                                                                <small>CEO of ThemeSelection</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="timeline-item timeline-item-transparent">
                                                <span className="timeline-point timeline-point-info" />
                                                <div className="timeline-event">
                                                    <div className="timeline-header mb-3">
                                                        <h6 className="mb-0">Create a new project for client</h6>
                                                        <small className="text-muted">2 Day Ago</small>
                                                    </div>
                                                    <p className="mb-2">
                                                        6 team members in a project
                                                    </p>
                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap p-0">
                                                            <div className="d-flex flex-wrap align-items-center">
                                                                <ul className="list-unstyled users-list d-flex align-items-center avatar-group m-0 me-2">
                                                                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Vinnie Mostowy" className="avatar pull-up">
                                                                        <img className="rounded-circle" src={avatar1} alt="Avatar" />
                                                                    </li>
                                                                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Allen Rieske" className="avatar pull-up">
                                                                        <img className="rounded-circle" src={avatar2} alt="Avatar" />
                                                                    </li>
                                                                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Julee Rossignol" className="avatar pull-up">
                                                                        <img className="rounded-circle" src={avatar3} alt="Avatar" />
                                                                    </li>
                                                                    <li className="avatar">
                                                                        <span className="avatar-initial rounded-circle pull-up text-heading" data-bs-toggle="tooltip" data-bs-placement="bottom" title="3 more">+3</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*/ Activity Timeline */}
                            {/* pill table */}
                            <div className="col-md-6 order-3 order-lg-4 mb-6 mb-lg-0">
                                <div className="card text-center h-100">
                                    <div className="card-header nav-align-top">
                                        <ul className="nav nav-pills" role="tablist">
                                            <li className="nav-item">
                                                <button type="button" className="nav-link active" role="tab" data-bs-toggle="tab" data-bs-target="#navs-pills-browser" aria-controls="navs-pills-browser" aria-selected="true">Browser</button>
                                            </li>
                                            <li className="nav-item">
                                                <button type="button" className="nav-link" role="tab" data-bs-toggle="tab" data-bs-target="#navs-pills-os" aria-controls="navs-pills-os" aria-selected="false">Operating
                                                    System</button>
                                            </li>
                                            <li className="nav-item">
                                                <button type="button" className="nav-link" role="tab" data-bs-toggle="tab" data-bs-target="#navs-pills-country" aria-controls="navs-pills-country" aria-selected="false">Country</button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-content pt-0 pb-4">
                                        <div className="tab-pane fade show active" id="navs-pills-browser" role="tabpanel">
                                            <div className="table-responsive text-start text-nowrap">
                                                <table className="table table-borderless">
                                                    <thead>
                                                        <tr>
                                                            <th>No</th>
                                                            <th>Browser</th>
                                                            <th>Visits</th>
                                                            <th className="w-50">Data In Percentage</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={chorme} alt="Chrome" height={24} className="me-3" />
                                                                    <span className="text-heading">Chrome</span>
                                                                </div>
                                                            </td>
                                                            <td className="text-heading">8.92k</td>
                                                            <td>
                                                                <div className="d-flex justify-content-between align-items-center gap-4">
                                                                    <div className="progress w-100" style={{ height: 10 }}>
                                                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '64.75%' }} aria-valuenow="64.75" aria-valuemin={0} aria-valuemax={100} />
                                                                    </div>
                                                                    <small className="fw-medium">64.75%</small>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={safari} alt="Safari" height={24} className="me-3" />
                                                                    <span className="text-heading">Safari</span>
                                                                </div>
                                                            </td>
                                                            <td className="text-heading">1.29k</td>
                                                            <td>
                                                                <div className="d-flex justify-content-between align-items-center gap-4">
                                                                    <div className="progress w-100" style={{ height: 10 }}>
                                                                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: '18.43%' }} aria-valuenow="18.43" aria-valuemin={0} aria-valuemax={100} />
                                                                    </div>
                                                                    <small className="fw-medium">18.43%</small>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={firefox} alt="Firefox" height={24} className="me-3" />
                                                                    <span className="text-heading">Firefox</span>
                                                                </div>
                                                            </td>
                                                            <td className="text-heading">328</td>
                                                            <td>
                                                                <div className="d-flex justify-content-between align-items-center gap-4">
                                                                    <div className="progress w-100" style={{ height: 10 }}>
                                                                        <div className="progress-bar bg-info" role="progressbar" style={{ width: '8.37%' }} aria-valuenow="8.37" aria-valuemin={0} aria-valuemax={100} />
                                                                    </div>
                                                                    <small className="fw-medium">8.37%</small>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={edge} alt="Edge" height={24} className="me-3" />
                                                                    <span className="text-heading">Edge</span>
                                                                </div>
                                                            </td>
                                                            <td className="text-heading">142</td>
                                                            <td>
                                                                <div className="d-flex justify-content-between align-items-center gap-4">
                                                                    <div className="progress w-100" style={{ height: 10 }}>
                                                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: '6.12%' }} aria-valuenow="6.12" aria-valuemin={0} aria-valuemax={100} />
                                                                    </div>
                                                                    <small className="fw-medium">6.12%</small>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>5</td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={opera} alt="Opera" height={24} className="me-3" />
                                                                    <span className="text-heading">Opera</span>
                                                                </div>
                                                            </td>
                                                            <td className="text-heading">82</td>
                                                            <td>
                                                                <div className="d-flex justify-content-between align-items-center gap-4">
                                                                    <div className="progress w-100" style={{ height: 10 }}>
                                                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: '2.12%' }} aria-valuenow="1.94" aria-valuemin={0} aria-valuemax={100} />
                                                                    </div>
                                                                    <small className="fw-medium">2.12%</small>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>6</td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={browser} alt="uc" height={24} className="me-3" />
                                                                    <span className="text-heading">UC Browser</span>
                                                                </div>
                                                            </td>
                                                            <td className="text-heading">328</td>
                                                            <td>
                                                                <div className="d-flex justify-content-between align-items-center gap-4">
                                                                    <div className="progress w-100" style={{ height: 10 }}>
                                                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: '20.14%' }} aria-valuenow="1.94" aria-valuemin={0} aria-valuemax={100} />
                                                                    </div>
                                                                    <small className="fw-medium">20.14%</small>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="navs-pills-os" role="tabpanel">
                                            <div className="table-responsive text-start text-nowrap">
                                                <table className="table table-borderless">
                                                    <thead>
                                                        <tr>
                                                            <th>No</th>
                                                            <th>System</th>
                                                            <th>Visits</th>
                                                            <th className="w-50">Data In Percentage</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src="../../assets/img/icons/brands/windows.png" alt="Windows" height={24} className="me-3" />
                                                                    <span className="text-heading">Windows</span>
                                                                </div>
                                                            </td>
                                                            <td className="text-heading">875.24k</td>
                                                            <td>
                                                                <div className="d-flex justify-content-between align-items-center gap-4">
                                                                    <div className="progress w-100" style={{ height: 10 }}>
                                                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '61.50%' }} aria-valuenow="61.50" aria-valuemin={0} aria-valuemax={100} />
                                                                    </div>
                                                                    <small className="fw-medium">61.50%</small>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src="../../assets/img/icons/brands/mac.png" alt="Mac" height={24} className="me-3" />
                                                                    <span className="text-heading">Mac</span>
                                                                </div>
                                                            </td>
                                                            <td className="text-heading">89.68k</td>
                                                            <td>
                                                                <div className="d-flex justify-content-between align-items-center gap-4">
                                                                    <div className="progress w-100" style={{ height: 10 }}>
                                                                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: '16.67%' }} aria-valuenow="16.67" aria-valuemin={0} aria-valuemax={100} />
                                                                    </div>
                                                                    <small className="fw-medium">16.67%</small>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src="../../assets/img/icons/brands/ubuntu.png" alt="Ubuntu" height={24} className="me-3" />
                                                                    <span className="text-heading">Ubuntu</span>
                                                                </div>
                                                            </td>
                                                            <td className="text-heading">37.68k</td>
                                                            <td>
                                                                <div className="d-flex justify-content-between align-items-center gap-4">
                                                                    <div className="progress w-100" style={{ height: 10 }}>
                                                                        <div className="progress-bar bg-info" role="progressbar" style={{ width: '12.82%' }} aria-valuenow="12.82" aria-valuemin={0} aria-valuemax={100} />
                                                                    </div>
                                                                    <small className="fw-medium">12.82%</small>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src="../../assets/img/icons/brands/chrome.png" alt="Chrome" height={24} className="me-3" />
                                                                    <span className="text-heading">Chrome</span>
                                                                </div>
                                                            </td>
                                                            <td className="text-heading">8.34k</td>
                                                            <td>
                                                                <div className="d-flex justify-content-between align-items-center gap-4">
                                                                    <div className="progress w-100" style={{ height: 10 }}>
                                                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: '6.25%' }} aria-valuenow="6.25" aria-valuemin={0} aria-valuemax={100} />
                                                                    </div>
                                                                    <small className="fw-medium">6.25%</small>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>5</td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src="../../assets/img/icons/brands/cent.png" alt="Cent" height={24} className="me-3" />
                                                                    <span className="text-heading">Cent</span>
                                                                </div>
                                                            </td>
                                                            <td className="text-heading">2.25k</td>
                                                            <td>
                                                                <div className="d-flex justify-content-between align-items-center gap-4">
                                                                    <div className="progress w-100" style={{ height: 10 }}>
                                                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: '2.76%' }} aria-valuenow="2.76" aria-valuemin={0} aria-valuemax={100} />
                                                                    </div>
                                                                    <small className="fw-medium">2.76%</small>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>6</td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src="../../assets/img/icons/brands/linux.png" alt="linux" height={24} className="me-3" />
                                                                    <span className="text-heading">Linux</span>
                                                                </div>
                                                            </td>
                                                            <td className="text-heading">328k</td>
                                                            <td>
                                                                <div className="d-flex justify-content-between align-items-center gap-4">
                                                                    <div className="progress w-100" style={{ height: 10 }}>
                                                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: '20.14%' }} aria-valuenow="2.76" aria-valuemin={0} aria-valuemax={100} />
                                                                    </div>
                                                                    <small className="fw-medium">20.14%</small>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="navs-pills-country" role="tabpanel">
                                            <div className="table-responsive text-start text-nowrap">
                                                <table className="table table-borderless">
                                                    <thead>
                                                        <tr>
                                                            <th>No</th>
                                                            <th>Country</th>
                                                            <th>Visits</th>
                                                            <th className="w-50">Data In Percentage</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <i className="fis fi fi-us rounded-circle fs-4 me-3" />
                                                                    <span className="text-heading">USA</span>
                                                                </div>
                                                            </td>
                                                            <td className="text-heading">87.24k</td>
                                                            <td>
                                                                <div className="d-flex justify-content-between align-items-center gap-4">
                                                                    <div className="progress w-100" style={{ height: 10 }}>
                                                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '38.12%' }} aria-valuenow="38.12" aria-valuemin={0} aria-valuemax={100} />
                                                                    </div>
                                                                    <small className="fw-medium">38.12%</small>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <i className="fis fi fi-br rounded-circle fs-4 me-3" />
                                                                    <span className="text-heading">Brazil</span>
                                                                </div>
                                                            </td>
                                                            <td className="text-heading">42.68k</td>
                                                            <td>
                                                                <div className="d-flex justify-content-between align-items-center gap-4">
                                                                    <div className="progress w-100" style={{ height: 10 }}>
                                                                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: '28.23%' }} aria-valuenow="28.23" aria-valuemin={0} aria-valuemax={100} />
                                                                    </div>
                                                                    <small className="fw-medium">28.23%</small>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <i className="fis fi fi-in rounded-circle fs-4 me-3" />
                                                                    <span className="text-heading">India</span>
                                                                </div>
                                                            </td>
                                                            <td className="text-heading">12.58k</td>
                                                            <td>
                                                                <div className="d-flex justify-content-between align-items-center gap-4">
                                                                    <div className="progress w-100" style={{ height: 10 }}>
                                                                        <div className="progress-bar bg-info" role="progressbar" style={{ width: '14.82%' }} aria-valuenow="14.82" aria-valuemin={0} aria-valuemax={100} />
                                                                    </div>
                                                                    <small className="fw-medium">14.82%</small>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <i className="fis fi fi-au rounded-circle fs-4 me-3" />
                                                                    <span className="text-heading">Australia</span>
                                                                </div>
                                                            </td>
                                                            <td className="text-heading">4.13k</td>
                                                            <td>
                                                                <div className="d-flex justify-content-between align-items-center gap-4">
                                                                    <div className="progress w-100" style={{ height: 10 }}>
                                                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: '12.72%' }} aria-valuenow="12.72" aria-valuemin={0} aria-valuemax={100} />
                                                                    </div>
                                                                    <small className="fw-medium">12.72%</small>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>5</td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <i className="fis fi fi-fr rounded-circle fs-4 me-3" />
                                                                    <span className="text-heading">France</span>
                                                                </div>
                                                            </td>
                                                            <td className="text-heading">2.21k</td>
                                                            <td>
                                                                <div className="d-flex justify-content-between align-items-center gap-4">
                                                                    <div className="progress w-100" style={{ height: 10 }}>
                                                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: '7.11%' }} aria-valuenow="7.11" aria-valuemin={0} aria-valuemax={100} />
                                                                    </div>
                                                                    <small className="fw-medium">7.11%</small>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>6</td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <i className="fis fi fi-ca rounded-circle fs-4 me-3" />
                                                                    <span className="text-heading">Canada</span>
                                                                </div>
                                                            </td>
                                                            <td className="text-heading">22.35k</td>
                                                            <td>
                                                                <div className="d-flex justify-content-between align-items-center gap-4">
                                                                    <div className="progress w-100" style={{ height: 10 }}>
                                                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: '15.13%' }} aria-valuenow="7.11" aria-valuemin={0} aria-valuemax={100} />
                                                                    </div>
                                                                    <small className="fw-medium">15.13%</small>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*/ pill table */}
                        </div>
                    </div>
                </div>
                {/* Content wrapper */}
            </div>
            {/* / Layout page */}
        </>
    );
};
export default Dashboard;
