import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Thêm useNavigate
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StaffAdd = () => {
    const navigate = useNavigate(); // Khởi tạo useNavigate
    const [setImageFile] = useState(null);
    const [userData, setUserData] = useState({
        anh_nguoi_dung: "", // Đặt giá trị mặc định cho ảnh người dùng
        ten_dang_nhap: "",
        mat_khau: "",
        ho_ten: "",
        email: "",
        role: "1", // Vai trò mặc định
        trang_thai: true, // Trạng thái mặc định
        dia_chi: "",
        so_dien_thoai: ""
    });

    // Hàm thay đổi giá trị các trường
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevState) => ({
            ...prevState,
            [name]: name === "trang_thai" ? value === "true" : value, // Chuyển đổi giá trị của trang_thai thành boolean
        }));
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Đặt tên tệp ảnh sau khi chọn (ví dụ: ảnh có tên gốc)
            const fileName = file.name;

            // Đường dẫn tới thư mục chứa ảnh (ở đây giả sử ảnh sẽ được lưu trong thư mục 'assets/images/upload')
            const imageUrl = `../src/assets/images/upload/${fileName}`;

            // Cập nhật đường dẫn của ảnh vào state
            setUserData({
                ...userData,
                anh_nguoi_dung: imageUrl, // Cập nhật URL của ảnh mới
            });

            // Nếu cần lưu ảnh vào thư mục frontend, bạn sẽ cần xử lý thêm ở phần build hoặc deploy
            // (Do React không thể ghi trực tiếp vào thư mục frontend tại runtime, bạn cần xử lý việc này ở phía backend hoặc lúc deploy)
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const finalUserData = {
            ...userData,
            anh_nguoi_dung: userData.anh_nguoi_dung || "https://cdn-icons-png.flaticon.com/512/219/219986.png"
        };

        axios.post("http://127.0.0.1:8000/api/quan-tri-viens/add", finalUserData)
            .then(response => {
                console.log(response); // In ra thông tin phản hồi từ server
                toast.success("Thêm người dùng thành công!");
                navigate("/admin/danh-sach-nhan-vien");
            })
            .catch(error => {
                console.error(error); // In ra lỗi chi tiết để kiểm tra
                toast.error("Đã có lỗi xảy ra, không thể thêm người dùng!");
            });
    };


    return (
        <div className="container-fluid mt-5" style={{ maxWidth: '95%' }}>
            <div className="row">
                <div className="col-lg-3">
                    <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                        </div>
                        <div className="iq-card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <div className="add-img-user profile-img-edit">
                                        <img
                                            className="profile-pic img-fluid"
                                            src={userData.anh_nguoi_dung || 'https://cdn-icons-png.flaticon.com/512/219/219986.png'} // Hiển thị ảnh mới từ state, nếu không có thì ảnh mặc định
                                            alt="profile-pic"
                                        />

                                        <div className="p-image">
                                            <label
                                                htmlFor="file-upload"
                                                className="upload-button btn iq-bg-primary"
                                            >
                                                Thêm ảnh
                                            </label>
                                            <input
                                                className="file-upload"
                                                type="file"
                                                id="file-upload"
                                                accept="image/*"
                                                onChange={handleImageChange} // Hàm xử lý khi chọn ảnh
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Vai trò:</label>
                                    <select
                                        className="form-control mt-1"
                                        id="selectuserrole"
                                        name="role"
                                        value={userData.role}
                                        onChange={handleInputChange}
                                    >
                                        <option value="1">Cộng tác viên</option>
                                    </select>
                                    <label className="mt-3">Trạng thái:</label>
                                    <select
                                        className="form-control mt-1"
                                        name="trang_thai"
                                        value={userData.trang_thai}
                                        onChange={handleInputChange}
                                    >
                                        <option value={true}>Hoạt động</option>
                                        <option value={false}>Không hoạt động</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                            <div className="iq-header-title">
                                <h4 className="card-title"></h4>
                            </div>
                        </div>
                        <div className="iq-card-body mt-3">
                            <div className="new-user-info">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="form-group col-md-12 mt-2">
                                            <label htmlFor="ho_ten">Họ và tên:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="ho_ten"
                                                name="ho_ten"
                                                value={userData.ho_ten}
                                                onChange={handleInputChange}
                                                placeholder="Họ và tên"
                                            />
                                        </div>
                                        <div className="form-group col-md-12 mt-2">
                                            <label htmlFor="email">Email:</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                name="email"
                                                value={userData.email}
                                                onChange={handleInputChange}
                                                placeholder="Email"
                                            />
                                        </div>
                                        <div className="form-group col-md-12 mt-2">
                                            <label htmlFor="so_dien_thoai">Số điện thoại:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="so_dien_thoai"
                                                name="so_dien_thoai"
                                                value={userData.so_dien_thoai}
                                                onChange={handleInputChange}
                                                placeholder="Số điện thoại"
                                            />
                                        </div>
                                        <div className="form-group col-md-12 mt-2">
                                            <label htmlFor="dia_chi">Địa chỉ:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="dia_chi"
                                                name="dia_chi"
                                                value={userData.dia_chi}
                                                onChange={handleInputChange}
                                                placeholder="Địa chỉ"
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-12 mt-2">
                                            <label htmlFor="ten_dang_nhap">Tên đăng nhập:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="ten_dang_nhap"
                                                name="ten_dang_nhap"
                                                value={userData.ten_dang_nhap}
                                                onChange={handleInputChange}
                                                placeholder="Tên đăng nhập"
                                            />
                                        </div>
                                        <div className="form-group col-md-12 mt-2">
                                            <label htmlFor="mat_khau">Mật khẩu:</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="mat_khau"
                                                name="mat_khau"
                                                value={userData.mat_khau}
                                                onChange={handleInputChange}
                                                placeholder="Mật khẩu"
                                            />
                                        </div>
                                        <div className="form-group col-md-12 mt-2">
                                            <label htmlFor="rpass">Nhập lại mật khẩu:</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="rpass"
                                                name="rpass"
                                                value={userData.rpass}
                                                onChange={handleInputChange}
                                                placeholder="Nhập lại mật khẩu"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group col-md-12 text-right mt-4">
                                        <button type="submit" className="btn btn-primary">
                                            Thêm người dùng
                                        </button>
                                        <Link to="/admin/danh-sach-nhan-vien">
                                            <button type="button" className="btn btn-danger ml-2" style={{ marginLeft: '10px' }}>
                                                Hủy
                                            </button>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StaffAdd;
