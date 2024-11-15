import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]); // State to store the list of users
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage errors

  useEffect(() => {
    // Fetch the users data from the API
    axios
      .get("http://127.0.0.1:8000/api/khach-hang/tai-khoan")
      .then((response) => {
        setUsers(response.data.data); // Assuming the API response has 'data' containing the list of users
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        setError("Failed to fetch users.");
        setLoading(false); // Set loading to false in case of error
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading text while fetching data
  }

  if (error) {
    return <div>{error}</div>; // Show error message if there's an error
  }

  const formatDate = (date) => {
    // Chuyển đổi ngày theo múi giờ Việt Nam, chỉ hiển thị ngày, tháng, năm
    const vietnamTime = new Date(date).toLocaleDateString("vi-VN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return vietnamTime;
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="iq-card">
            <div className="iq-card-header d-flex justify-content-between">
              <div className="iq-header-title">
                <h4 className="card-title">Danh sách người dùng</h4>
              </div>
              <Link to={'/admin/user-add'}>
                <button type="submit" className="btn btn-primary">Thêm người dùng</button>
              </Link>
            </div>
            <div className="iq-card-body">
              <div className="table-responsive">
                <div className="row justify-content-between">
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
                </div>
                <table id="user-list-table" className="table table-striped table-borderless mt-4" role="grid" aria-describedby="user-list-page-info">
                  <thead>
                    <tr>
                      <th>Ảnh</th>
                      <th>Họ và tên</th>
                      <th>Tên người dùng</th>
                      <th>Số điện thoại</th>
                      <th>Email</th>
                      <th>Địa chỉ</th>
                      <th>Trạng thái</th>
                      <th>Ngày tham gia</th>
                      <th>Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td className="text-center">
                          <img className="rounded-circle img-fluid avatar-40" src="../src/assets/images/user/1.jpg" alt="profile" />
                        </td>
                        <td>{user.ho_ten}</td>
                        <td>{user.ten_nguoi_dung}</td>
                        <td>{user.dien_thoai}</td>
                        <td>{user.email}</td>
                        <td>{user.dia_chi}</td>
                        <td>
                          <span className="badge dark-icon-light iq-bg-primary">
                            Active
                          </span>
                        </td>
                        <td>{formatDate(user.created_at)}</td>
                        <td>
                          <div className="flex align-items-center list-user-action">
                            <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="Add" href="#">
                              <i className="ri-user-add-line" />
                            </a>
                            <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="Edit" href="#">
                              <i className="ri-pencil-line" />
                            </a>
                            <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="Delete" href="#">
                              <i className="ri-delete-bin-line" />
                            </a>
                          </div>
                        </td>
                      </tr>
                    ))}
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
  );
};

export default UserList;
