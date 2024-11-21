import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { LuPencilLine } from "react-icons/lu";
import { RiDeleteBin2Line } from "react-icons/ri";

const StaffList = () => {
    const [staff, setStaff] = useState([]); // Danh sách nhân viên
    const [loading, setLoading] = useState(true); // Trạng thái đang tải
    const [error, setError] = useState(null); // Quản lý lỗi
    const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
    const [totalPages, setTotalPages] = useState(1); // Tổng số trang

    useEffect(() => {
        setLoading(true);

        // API call với per_page=7
        axios
            .get(`http://127.0.0.1:8000/api/quan-tri-viens/getAll?page=${currentPage}&per_page=7`)
            .then((response) => {
                setStaff(response.data.data); // Dữ liệu nhân viên hiện tại
                setTotalPages(Math.ceil(response.data.total / 7)); // Số trang
                setLoading(false);
            })
            .catch(() => {
                setError("Không thể tải danh sách nhân viên.");
                setLoading(false);
            });
    }, [currentPage]);



    const handleStatusChange = (id, currentStatus) => {
        // Thay đổi trạng thái nhân viên
        const newStatus = !currentStatus;
        axios
            .patch(`http://127.0.0.1:8000/api/quan-tri-viens/${id}/toggle-active`, { trang_thai: newStatus })
            .then(() => {
                // Cập nhật trạng thái mới vào danh sách nhân viên
                setStaff(staff.map(item =>
                    item.id === id ? { ...item, trang_thai: newStatus } : item
                ));
            })
            .catch(() => {
                alert("Cập nhật trạng thái thất bại.");
            });
    };

    const formatDate = (date) => {
        if (!date) return "N/A"; // Nếu ngày không hợp lệ
        return new Date(date).toLocaleDateString("vi-VN", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: "Bạn có chắc chắn muốn xóa nhân viên này không?",
            text: "Hành động này không thể hoàn tác!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Đồng ý, xóa!",
            cancelButtonText: "Hủy bỏ",
        }).then((result) => {
            if (result.isConfirmed) {
                // Nếu người dùng nhấn "Đồng ý, xóa!", thực hiện xóa
                axios
                    .delete(`http://127.0.0.1:8000/api/quan-tri-viens/delete/${id}`)
                    .then((response) => {
                        if (response.status === 200) { // Check for a successful response
                            setStaff((prevStaff) => prevStaff.filter((item) => item.id !== id));
                            toast.success("Xóa người dùng thành công!");  // Ensure this is being called correctly
                        } else {
                            toast.error("Không thể xóa người dùng. Vui lòng thử lại.");
                        }
                    })
                    .catch((error) => {
                        console.error("Error deleting user:", error);  // Log error for debugging
                        toast.error("Đã có lỗi xảy ra, không thể xóa người dùng!");
                    });
            }
        });
    };

    if (loading) {
        return (
            <div className="text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }


    const handlePageChange = (page) => {
        if (page !== currentPage) {
            setCurrentPage(page);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };




    if (error) {
        return (
            <div className="alert alert-danger text-center" role="alert">
                {error}
            </div>
        );
    }
    // CSS cho switch
    const switchStyles = {
        position: "relative",
        display: "inline-block",
        width: "40px", // Giảm chiều rộng slider
        height: "20px", // Giảm chiều cao slider
        marginLeft: "20px",
        marginTop: "10px",
    };

    const sliderStyles = {
        position: "absolute",
        cursor: "pointer",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        backgroundColor: "#ccc", // Màu nền của slider
        transition: "0.4s", // Thêm hiệu ứng chuyển động
        borderRadius: "34px", // Bo tròn các góc slider

    };

    const sliderBeforeStyles = {
        position: "absolute",
        content: '""',
        height: "16px", // Giảm kích thước của con trỏ
        width: "16px", // Giảm chiều rộng của con trỏ
        left: "2px", // Đảm bảo con trỏ căn đều với slider
        bottom: "2.1px", // Điều chỉnh vị trí con trỏ
        backgroundColor: "white", // Màu nền của con trỏ
        transition: "0.4s", // Thêm hiệu ứng chuyển động cho con trỏ
        borderRadius: "50%", // Bo tròn con trỏ
    };

    const sliderCheckedStyles = {
        backgroundColor: "#4CAF50", // Màu nền khi bật
    };

    const sliderBeforeCheckedStyles = {
        transform: "translateX(20px)", // Dịch chuyển con trỏ sang phải khi bật
    };

    return (
        <div className="container-fluid mt-5" style={{ marginLeft: '50px', backgroundColor: '#f7f7f7' }}>
            <div className="row">
                <div className="col-sm-12">
                    <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                            <div className="iq-header-title">
                                <h4 className="card-title">Danh sách nhân viên</h4>
                            </div>
                            <Link to="/admin/them-nhan-vien">
                                <button type="button" className="btn btn-primary">
                                    Thêm nhân viên
                                </button>
                            </Link>
                        </div>
                        <div className="iq-card-body">
                            <div className="table-responsive">
                                <table className="table table-striped table-borderless" style={{ textAlign: 'center' }}>
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
                                        {staff.length > 0 ? (
                                            staff.map((staffItem) => (
                                                <tr key={staffItem.id}>
                                                    <td className="text-center">
                                                        <img
                                                            className="rounded-circle img-fluid avatar-40"
                                                            src={staffItem.anh_nguoi_dung || "/default-avatar.jpg"}
                                                            alt="profile" style={{ width: '50px', heigth: '50px' }}
                                                        />
                                                    </td>
                                                    <td>{staffItem.ho_ten}</td>
                                                    <td>{staffItem.ten_dang_nhap}</td>
                                                    <td>{staffItem.so_dien_thoai}</td>
                                                    <td>{staffItem.email}</td>
                                                    <td>{staffItem.dia_chi}</td>
                                                    <td className="">
                                                        {/* <div class="text-end">
                                                            <div class="form-check form-switch mb-0">
                                                                <input type="checkbox" class="form-check-input" checked />
                                                            </div>
                                                        </div> */}
                                                        <label className="switch" style={switchStyles}>
                                                            <span
                                                                className="slider round"
                                                                style={{
                                                                    ...sliderStyles,
                                                                    ...(staffItem.trang_thai ? sliderCheckedStyles : {}),
                                                                }}
                                                                onClick={() =>
                                                                    handleStatusChange(staffItem.id, staffItem.trang_thai)
                                                                }
                                                            >
                                                                <span
                                                                    className="sliderBefore"
                                                                    style={{
                                                                        ...sliderBeforeStyles,
                                                                        ...(staffItem.trang_thai ? sliderBeforeCheckedStyles : {}),
                                                                    }}
                                                                ></span>
                                                            </span>
                                                        </label>
                                                    </td>
                                                    <td>{formatDate(staffItem.created_at)}</td>
                                                    <td>
                                                        <div
                                                            className="flex align-items-center list-user-action"
                                                            style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}
                                                        >
                                                            <Link
                                                                to={`/admin/sua-nhan-vien/${staffItem.id}`}
                                                                className="iq-bg-primary"
                                                                title="Chỉnh sửa"
                                                                style={{ marginRight: '10px' }} // Thêm khoảng cách cho nút chỉnh sửa
                                                            >
                                                                <LuPencilLine />
                                                            </Link>
                                                            <button
                                                                className="iq-bg-primary border-0"
                                                                title="Xóa"
                                                                onClick={() => handleDelete(staffItem.id)}
                                                                style={{
                                                                    marginRight: '0', // Không cần khoảng cách sau nút xóa
                                                                    borderRadius: '5px', // Thêm border-radius vào đây
                                                                    height: '26px',

                                                                }}
                                                            >
                                                                <RiDeleteBin2Line />
                                                            </button>

                                                        </div>
                                                    </td>

                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="9" className="text-center">
                                                    Không tìm thấy nhân viên nào.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                            <div className="row justify-content-between mt-3">
                                <div className="col-md-6">
                                    <span>Hiển thị {staff.length} nhân viên</span>
                                </div>
                                <div className="col-md-6">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination justify-content-end mb-0">
                                            {/* Nút Previous */}
                                            <li
                                                className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}
                                                onClick={handlePreviousPage}
                                            >
                                                <a className="page-link" href="#">
                                                    Previous
                                                </a>
                                            </li>

                                            {/* Các nút trang */}
                                            {[...Array(totalPages)].map((_, index) => (
                                                <li
                                                    key={index}
                                                    className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
                                                    onClick={() => handlePageChange(index + 1)} // Chuyển sang trang mới
                                                >
                                                    <a className="page-link" href="#">
                                                        {index + 1}
                                                    </a>
                                                </li>
                                            ))}

                                            {/* Nút Next */}
                                            <li
                                                className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}
                                                onClick={handleNextPage}
                                            >
                                                <a className="page-link" href="#">
                                                    Next
                                                </a>
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

export default StaffList;
