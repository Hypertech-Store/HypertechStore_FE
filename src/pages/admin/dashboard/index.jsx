const Dashboard = () => {
    document.title = "Dashboard - Hypertech Store";
    return (
      <>
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
                    <div className="rounded-circle iq-card-icon dark-icon-light iq-bg-primary ">
                      <i className="ri-inbox-fill" />
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
                      <h2>$37k</h2>
                      <p className="fontsize-sm m-0">Credited</p>
                    </div>
                    <div className="rounded-circle iq-card-icon iq-bg-danger">
                      <i className="ri-radar-line" />
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
                      <h2>32%</h2>
                      <p className="fontsize-sm m-0">Employee Costs</p>
                    </div>
                    <div className="rounded-circle iq-card-icon iq-bg-warning ">
                      <i className="ri-price-tag-3-line" />
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
                    <div className="rounded-circle iq-card-icon iq-bg-info ">
                      <i className="ri-refund-line" />
                    </div>
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
                      <span
                        className="dropdown-toggle"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                      >
                        <i className="ri-more-fill" />
                      </span>
                      <div
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a className="dropdown-item" href="#">
                          <i className="ri-eye-fill mr-2" />
                          View
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ri-delete-bin-6-fill mr-2" />
                          Delete
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ri-pencil-fill mr-2" />
                          Edit
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ri-printer-fill mr-2" />
                          Print
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ri-file-download-fill mr-2" />
                          Download
                        </a>
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
              <div
                className="iq-card iq-card-block iq-card-stretch iq-card-height"
                style={{ background: "transparent" }}
              >
                <div
                  className="iq-card-body rounded p-0"
                  style={{
                    background: "url(images/page-img/01.png) no-repeat",
                    backgroundSize: "cover",
                    height: 415,
                  }}
                >
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
                      <span
                        className="dropdown-toggle text-primary"
                        id="dropdownMenuButton5"
                        data-toggle="dropdown"
                      >
                        <i className="ri-more-fill" />
                      </span>
                      <div
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="dropdownMenuButton5"
                      >
                        <a className="dropdown-item" href="#">
                          <i className="ri-eye-fill mr-2" />
                          View
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ri-delete-bin-6-fill mr-2" />
                          Delete
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ri-pencil-fill mr-2" />
                          Edit
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ri-printer-fill mr-2" />
                          Print
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ri-file-download-fill mr-2" />
                          Download
                        </a>
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
                          <th scope="col" className="text-right">
                            Amount
                          </th>
                          <th scope="col" className="text-center">
                            Status
                          </th>
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
                            <div className="badge badge-pill iq-bg-success">
                              Paid
                            </div>
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
                            <div className="badge badge-pill iq-bg-success">
                              Paid
                            </div>
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
                            <div className="badge badge-pill iq-bg-danger">
                              Past Due
                            </div>
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
                            <div className="badge badge-pill iq-bg-success">
                              Paid
                            </div>
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
                            <div className="badge badge-pill iq-bg-success">
                              Paid
                            </div>
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
                      <span
                        className="dropdown-toggle"
                        id="dropdownMenuButton1"
                        data-toggle="dropdown"
                      >
                        <i className="ri-more-fill" />
                      </span>
                      <div
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="dropdownMenuButton1"
                        style={{}}
                      >
                        <a className="dropdown-item" href="#">
                          <i className="ri-eye-fill mr-2" />
                          View
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ri-delete-bin-6-fill mr-2" />
                          Delete
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ri-pencil-fill mr-2" />
                          Edit
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ri-printer-fill mr-2" />
                          Print
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ri-file-download-fill mr-2" />
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="iq-card-body">
                  <ul className="suggestions-lists m-0 p-0">
                    <li className="d-flex mb-4 align-items-center">
                      <div className="profile-icon iq-bg-success">
                        <span>
                          <i className="ri-check-fill" />
                        </span>
                      </div>
                      <div className="media-support-info ml-3">
                        <h6>Camelun ios</h6>
                        <p className="mb-0 fontsize-sm">
                          <span className="text-success">17/23</span> months paid
                        </p>
                      </div>
                      <div className="media-support-amount ml-3">
                        <h6>
                          <span className="text-secondary">$</span>
                          <b> 16,634.00</b>
                        </h6>
                        <p className="mb-0 d-flex justify-content-end">
                          per month
                        </p>
                      </div>
                    </li>
                    <li className="d-flex mb-4 align-items-center">
                      <div className="profile-icon iq-bg-warning">
                        <span>
                          <i className="ri-check-fill" />
                        </span>
                      </div>
                      <div className="media-support-info ml-3">
                        <h6>React</h6>
                        <p className="mb-0 fontsize-sm">
                          <span className="text-warning">12 weeks </span>Due
                        </p>
                      </div>
                      <div className="media-support-amount ml-3">
                        <h6>
                          <span className="text-secondary">$</span>
                          <b> 6,000.00</b>
                        </h6>
                        <p className="mb-0 d-flex justify-content-end">
                          per month
                        </p>
                      </div>
                    </li>
                    <li className="d-flex mb-4 align-items-center">
                      <div className="profile-icon iq-bg-success">
                        <span>
                          <i className="ri-check-fill" />
                        </span>
                      </div>
                      <div className="media-support-info ml-3">
                        <h6>Camelun ios</h6>
                        <p className="mb-0 fontsize-sm">
                          <span className="text-success">16/23</span> months paid
                        </p>
                      </div>
                      <div className="media-support-amount ml-3">
                        <h6>
                          <span className="text-secondary">$</span>
                          <b> 11,230.00</b>
                        </h6>
                        <p className="mb-0 d-flex justify-content-end">
                          per month
                        </p>
                      </div>
                    </li>
                    <li className="d-flex mb-1 align-items-center">
                      <div className="profile-icon iq-bg-danger">
                        <span>
                          <i className="ri-check-fill" />
                        </span>
                      </div>
                      <div className="media-support-info ml-3">
                        <h6>Camelun ios</h6>
                        <p className="mb-0 fontsize-sm">
                          <span className="text-danger">15/23</span> months paid
                        </p>
                      </div>
                      <div className="media-support-amount ml-3">
                        <h6>
                          <span className="text-secondary">$</span>
                          <b> 10,050.00</b>
                        </h6>
                        <p className="mb-0 d-flex justify-content-end">
                          per month
                        </p>
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
                        <span
                          className="dropdown-toggle"
                          id="dropdownMenuButton-one"
                          data-toggle="dropdown"
                        >
                          <i className="ri-more-fill" />
                        </span>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          aria-labelledby="dropdownMenuButton-one"
                          style={{}}
                        >
                          <a className="dropdown-item" href="#">
                            <i className="ri-eye-fill mr-2" />
                            View
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-delete-bin-6-fill mr-2" />
                            Delete
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-pencil-fill mr-2" />
                            Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-printer-fill mr-2" />
                            Print
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-file-download-fill mr-2" />
                            Download
                          </a>
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
                        <span
                          className="dropdown-toggle"
                          id="dropdownMenuButton-two"
                          data-toggle="dropdown"
                        >
                          <i className="ri-more-fill" />
                        </span>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          aria-labelledby="dropdownMenuButton-two"
                          style={{}}
                        >
                          <a className="dropdown-item" href="#">
                            <i className="ri-eye-fill mr-2" />
                            View
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-delete-bin-6-fill mr-2" />
                            Delete
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-pencil-fill mr-2" />
                            Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-printer-fill mr-2" />
                            Print
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-file-download-fill mr-2" />
                            Download
                          </a>
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
                        <span
                          className="dropdown-toggle"
                          id="dropdownMenuButton-three"
                          data-toggle="dropdown"
                        >
                          <i className="ri-more-fill" />
                        </span>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          aria-labelledby="dropdownMenuButton-three"
                          style={{}}
                        >
                          <a className="dropdown-item" href="#">
                            <i className="ri-eye-fill mr-2" />
                            View
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-delete-bin-6-fill mr-2" />
                            Delete
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-pencil-fill mr-2" />
                            Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-printer-fill mr-2" />
                            Print
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-file-download-fill mr-2" />
                            Download
                          </a>
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
                      <span
                        className="dropdown-toggle"
                        id="dropdownMenuButton-four"
                        data-toggle="dropdown"
                      >
                        <i className="ri-more-fill" />
                      </span>
                      <div
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="dropdownMenuButton-four"
                        style={{}}
                      >
                        <a className="dropdown-item" href="#">
                          <i className="ri-eye-fill mr-2" />
                          View
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ri-delete-bin-6-fill mr-2" />
                          Delete
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ri-pencil-fill mr-2" />
                          Edit
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ri-printer-fill mr-2" />
                          Print
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ri-file-download-fill mr-2" />
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="iq-card-body">
                  <ul className="suggestions-lists m-0 p-0">
                    <li className="d-flex mb-4 align-items-center">
                      <div className="profile-icon bg-secondary">
                        <span>
                          <i className="ri-refresh-line" />
                        </span>
                      </div>
                      <div className="media-support-info ml-3">
                        <h6>Deposit from ATL</h6>
                        <p className="mb-0 fontsize-sm">5 march, 18:33</p>
                      </div>
                      <div className="media-support-amount ml-3">
                        <h6 className="text-info">- $1,470</h6>
                      </div>
                    </li>
                    <li className="d-flex mb-4 align-items-center">
                      <div className="profile-icon dark-icon bg-primary">
                        <span>
                          <i className="ri-paypal-line" />
                        </span>
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
                      <div className="profile-icon icon dark-icon bg-primary">
                        <span>
                          <i className="ri-check-line" />
                        </span>
                      </div>
                      <div className="media-support-info ml-3">
                        <h6>Deposit from ATL</h6>
                        <p className="mb-0 fontsize-sm">5 march, 18:33</p>
                      </div>
                      <div className="media-support-amount ml-3">
                        <h6 className="text-primary">+ $250</h6>
                      </div>
                    </li>
                    <li className="d-flex mb-4 align-items-center">
                      <div className="profile-icon bg-info">
                        <span>
                          <i className="ri-close-line" />
                        </span>
                      </div>
                      <div className="media-support-info ml-3">
                        <h6>Cancelled</h6>
                        <p className="mb-0 fontsize-sm">5 march, 18:33</p>
                      </div>
                      <div className="media-support-amount ml-3">
                        <h6 className="text-info">$0</h6>
                      </div>
                    </li>
                    <li className="d-flex mb-4 align-items-center">
                      <div className="profile-icon bg-info">
                        <span>
                          <i className="ri-arrow-go-back-fill" />
                        </span>
                      </div>
                      <div className="media-support-info ml-3">
                        <h6>Refund</h6>
                        <p className="mb-0 fontsize-sm">5 march, 18:33</p>
                      </div>
                      <div className="media-support-amount ml-3">
                        <h6 className="text-info">- $500</h6>
                      </div>
                    </li>
                    <li className="d-flex mb-4 align-items-center">
                      <div className="profile-icon bg-secondary">
                        <span>
                          <i className="ri-bar-chart-grouped-fill" />
                        </span>
                      </div>
                      <div className="media-support-info ml-3">
                        <h6>Credit from ATL</h6>
                        <p className="mb-0 fontsize-sm">5 march, 18:33</p>
                      </div>
                      <div className="media-support-amount ml-3">
                        <h6 className="text-primary">+ $169</h6>
                      </div>
                    </li>
                    <li className="d-flex mb-4 align-items-center">
                      <div className="profile-icon bg-warning">
                        <span>
                          <i className="ri-qr-scan-line" />
                        </span>
                      </div>
                      <div className="media-support-info ml-3">
                        <h6>Deposit from Paypal</h6>
                        <p className="mb-0 fontsize-sm">5 march, 18:33</p>
                      </div>
                      <div className="media-support-amount ml-3">
                        <h6 className="text-info">- $1,470</h6>
                      </div>
                    </li>
                    <li className="d-flex mb-0 align-items-center">
                      <div className="profile-icon bg-danger">
                        <span>
                          <i className="ri-mail-send-fill" />
                        </span>
                      </div>
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
      </>
    );
  };
  export default Dashboard;
  