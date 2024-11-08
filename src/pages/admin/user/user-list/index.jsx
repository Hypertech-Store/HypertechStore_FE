import { Link } from "react-router-dom";

const UserList = () => {
    return (
<>
<div className="container-fluid">
  <div className="row">
    <div className="col-sm-12">
      <div className="iq-card">
        <div className="iq-card-header d-flex justify-content-between">
          <div className="iq-header-title">
            <h4 className="card-title">User List</h4>
          </div>
          <Link to={'/admin/user-add'}>
            <button type="submit" class="btn btn-primary">Add New User</button>
          </Link>
        </div>
        <div className="iq-card-body">
          <div className="table-responsive">
            {/* <div className="row justify-content-between">
              <div className="col-sm-12 col-md-6">
                <div id="user_list_datatable_info" className="dataTables_filter">
                  <form className="mr-3 position-relative">
                    <div className="form-group mb-0">
                      <input type="search" className="form-control" id="exampleInputSearch" placeholder="Search" aria-controls="user-list-table" />
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="user-list-files d-flex float-right">
                  <a className="iq-bg-primary" href="javascript:void();">
                    Print
                  </a>
                  <a className="iq-bg-primary" href="javascript:void();">
                    Excel
                  </a>
                  <a className="iq-bg-primary" href="javascript:void();">
                    Pdf
                  </a>
                </div>
              </div>
            </div> */}
            <table id="user-list-table" className="table table-striped table-borderless mt-4" role="grid" aria-describedby="user-list-page-info">
              <thead>
                <tr>
                  <th>Profile</th>
                  <th>Name</th>
                  <th>Contact</th>
                  <th>Email</th>
                  <th>Country</th>
                  <th>Status</th>
                  <th>Company</th>
                  <th>Join Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center"><img className="rounded-circle img-fluid avatar-40" src="../src/assets/images/user/1.jpg" alt="profile" /></td>
                  <td>Anna Sthesia</td>
                  <td>(760) 756 7568</td>
                  <td>annasthesia@gmail.com</td>
                  <td>USA</td>
                  <td><span className="badge dark-icon-light iq-bg-primary">Active</span></td>
                  <td>Acme Corporation</td>
                  <td>2019/12/01</td>
                  <td>
                    <div className="flex align-items-center list-user-action">
                      <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title data-original-title="Add" href="#"><i className="ri-user-add-line" /></a>
                      <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title data-original-title="Edit" href="#"><i className="ri-pencil-line" /></a>
                      <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title data-original-title="Delete" href="#"><i className="ri-delete-bin-line" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-center"><img className="rounded-circle img-fluid avatar-40" src="../src/assets/images/user/1.jpg" alt="profile" /></td>
                  <td>Brock Lee</td>
                  <td>+62 5689 458 658</td>
                  <td>brocklee@gmail.com</td>
                  <td>Indonesia</td>
                  <td><span className="badge  dark-icon-light iq-bg-primary">Active</span></td>
                  <td>Soylent Corp</td>
                  <td>2019/12/01</td>
                  <td>
                    <div className="flex align-items-center list-user-action">
                      <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title data-original-title="Add" href="#"><i className="ri-user-add-line" /></a>
                      <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title data-original-title="Edit" href="#"><i className="ri-pencil-line" /></a>
                      <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title data-original-title="Delete" href="#"><i className="ri-delete-bin-line" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-center"><img className="rounded-circle img-fluid avatar-40" src="../src/assets/images/user/1.jpg" alt="profile" /></td>
                  <td>Dan Druff</td>
                  <td>+55 6523 456 856</td>
                  <td>dandruff@gmail.com</td>
                  <td>Brazil</td>
                  <td><span className="badge iq-bg-warning">Pending</span></td>
                  <td>Umbrella Corporation</td>
                  <td>2019/12/01</td>
                  <td>
                    <div className="flex align-items-center list-user-action">
                      <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title data-original-title="Add" href="#"><i className="ri-user-add-line" /></a>
                      <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title data-original-title="Edit" href="#"><i className="ri-pencil-line" /></a>
                      <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title data-original-title="Delete" href="#"><i className="ri-delete-bin-line" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-center"><img className="rounded-circle img-fluid avatar-40" src="../src/assets/images/user/1.jpg" alt="profile" /></td>
                  <td>Hans Olo</td>
                  <td>+91 2586 253 125</td>
                  <td>hansolo@gmail.com</td>
                  <td>India</td>
                  <td><span className="badge iq-bg-danger">Inactive</span></td>
                  <td>Vehement Capital</td>
                  <td>2019/12/01</td>
                  <td>
                    <div className="flex align-items-center list-user-action">
                      <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title data-original-title="Add" href="#"><i className="ri-user-add-line" /></a>
                      <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title data-original-title="Edit" href="#"><i className="ri-pencil-line" /></a>
                      <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title data-original-title="Delete" href="#"><i className="ri-delete-bin-line" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-center"><img className="rounded-circle img-fluid avatar-40" src="../src/assets/images/user/1.jpg" alt="profile" /></td>
                  <td>Lynn Guini</td>
                  <td>+27 2563 456 589</td>
                  <td>lynnguini@gmail.com</td>
                  <td>Africa</td>
                  <td><span className="badge  dark-icon-light iq-bg-primary">Active</span></td>
                  <td>Massive Dynamic</td>
                  <td>2019/12/01</td>
                  <td>
                    <div className="flex align-items-center list-user-action">
                      <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title data-original-title="Add" href="#"><i className="ri-user-add-line" /></a>
                      <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title data-original-title="Edit" href="#"><i className="ri-pencil-line" /></a>
                      <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title data-original-title="Delete" href="#"><i className="ri-delete-bin-line" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-center"><img className="rounded-circle img-fluid avatar-40" src="../src/assets/images/user/1.jpg" alt="profile" /></td>
                  <td>Eric Shun</td>
                  <td>+55 25685 256 589</td>
                  <td>ericshun@gmail.com</td>
                  <td>Brazil</td>
                  <td><span className="badge iq-bg-warning">Pending</span></td>
                  <td>Globex Corporation</td>
                  <td>2019/12/01</td>
                  <td>
                    <div className="flex align-items-center list-user-action">
                      <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title data-original-title="Add" href="#"><i className="ri-user-add-line" /></a>
                      <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title data-original-title="Edit" href="#"><i className="ri-pencil-line" /></a>
                      <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title data-original-title="Delete" href="#"><i className="ri-delete-bin-line" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-center"><img className="rounded-circle img-fluid avatar-40" src="../src/assets/images/user/1.jpg" alt="profile" /></td>
                  <td>aaronottix</td>
                  <td>(760) 765 2658</td>
                  <td>budwiser@ymail.com</td>
                  <td>USA</td>
                  <td><span className="badge iq-bg-info">Hold</span></td>
                  <td>Acme Corporation</td>
                  <td>2019/12/01</td>
                  <td>
                    <div className="flex align-items-center list-user-action">
                      <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title data-original-title="Add" href="#"><i className="ri-user-add-line" /></a>
                      <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title data-original-title="Edit" href="#"><i className="ri-pencil-line" /></a>
                      <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title data-original-title="Delete" href="#"><i className="ri-delete-bin-line" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-center"><img className="rounded-circle img-fluid avatar-40" src="../src/assets/images/user/1.jpg" alt="profile" /></td>
                  <td>Marge Arita</td>
                  <td>+27 5625 456 589</td>
                  <td>margearita@gmail.com</td>
                  <td>Africa</td>
                  <td><span className="badge iq-bg-success">Complite</span></td>
                  <td>Vehement Capital</td>
                  <td>2019/12/01</td>
                  <td>
                    <div className="flex align-items-center list-user-action">
                      <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title data-original-title="Add" href="#"><i className="ri-user-add-line" /></a>
                      <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title data-original-title="Edit" href="#"><i className="ri-pencil-line" /></a>
                      <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title data-original-title="Delete" href="#"><i className="ri-delete-bin-line" /></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-center"><img className="rounded-circle img-fluid avatar-40" src="../src/assets/images/user/1.jpg" alt="profile" /></td>
                  <td>Bill Dabear</td>
                  <td>+55 2563 456 589</td>
                  <td>billdabear@gmail.com</td>
                  <td>Brazil</td>
                  <td><span className="badge  dark-icon-light iq-bg-primary">active</span></td>
                  <td>Massive Dynamic</td>
                  <td>2019/12/01</td>
                  <td>
                    <div className="flex align-items-center list-user-action">
                      <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title data-original-title="Add" href="#"><i className="ri-user-add-line" /></a>
                      <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title data-original-title="Edit" href="#"><i className="ri-pencil-line" /></a>
                      <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title data-original-title="Delete" href="#"><i className="ri-delete-bin-line" /></a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row justify-content-between mt-3">
            <div id="user-list-page-info" className="col-md-6">
              <span>Showing 1 to 5 of 5 entries</span>
            </div>
            <div className="col-md-6">
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end mb-0">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">Previous</a>
                  </li>
                  <li className="page-item active"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</>
    )
}

export default UserList;