import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
const StaffEdit = () => {
    const { id } = useParams(); // Extract the id from the URL
    const [userData, setUserData] = useState(null); // State to hold user data
    const [isLoading, setIsLoading] = useState(true);  // State to handle loading spinner visibility
    const [error, setError] = useState(null); // State to handle errors
    const navigate = useNavigate();  // Initialize navigate

    useEffect(() => {
        // Fetch the user data from the API
        const fetchUserData = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/quan-tri-viens/detail/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setUserData(data);
                setIsLoading(false); // Hide the loading spinner after data is loaded
            } catch (err) {
                setError(err.message); // Handle the error
                setIsLoading(false);
            }
        };

        fetchUserData();
    }, [id]); // Trigger the effect when the component mounts or when `id` changes

    if (isLoading) {
        return (
            <div id="loading">
                <div id="loading-center">
                    {/* Spinner Icon */}
                    <div className="spinner"></div>
                </div>
            </div>
        );
    }

    if (error) {
        return <div>Error: {error}</div>; // Display error message
    }

    // Handler functions for form changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        // Handle file upload (not implemented here)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedData = {
            ten_dang_nhap: userData.ten_dang_nhap,
            ho_ten: userData.ho_ten,
            email: userData.email,
            role: userData.role,
            trang_thai: userData.trang_thai,
            anh_nguoi_dung: userData.anh_nguoi_dung,
            dia_chi: userData.dia_chi,
            so_dien_thoai: userData.so_dien_thoai,
        };

        try {
            const response = await fetch(`http://127.0.0.1:8000/api/quan-tri-viens/update/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,  // Add the token here if needed
                },
                body: JSON.stringify(updatedData),
            });

            if (!response.ok) {
                throw new Error('Có lỗi sảy ra vui lòng thử lại!');
            }

            const result = await response.json();
            console.log(result);
            toast.success('Cập nhật nhân viên thành công!');
            // Redirect to the employee list page
            navigate('/admin/danh-sach-nhan-vien');  // Use navigate to redirect
        } catch (err) {
            toast.error(`Error: ${err.message}`);
        }
    };


    return (
        <div className="container-fluid mt-5" style={{ maxWidth: '95%' }}>
            <div className="row">
                <div className="col-lg-3">
                    <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                        </div>
                        <div className="iq-card-body ">
                            <form>
                                <div className="form-group">
                                    <div className="add-img-user profile-img-edit">
                                        <img
                                            className="profile-pic img-fluid"
                                            src={userData.anh_nguoi_dung} // Use image data from API
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
                                                onChange={handleImageChange} // Handle image change
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
                                        {/* You can add more role options if needed */}
                                    </select>
                                    <label className="mt-3">Trạng thái:</label>
                                    <select
                                        className="form-control mt-1"
                                        name="trang_thai"
                                        value={userData.trang_thai}
                                        onChange={handleInputChange}
                                    >
                                        <option value={1}>Hoạt động</option>
                                        <option value={0}>Không hoạt động</option>
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
                                <h4 className="card-title">Thông tin người dùng mới</h4>
                            </div>
                        </div>
                        <div className="iq-card-body mt-3">
                            <div className="new-user-info">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="form-group col-md-12">
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

                                    <div className="d-flex gap-3">
                                        <button type="submit" className="btn btn-primary mt-3">
                                            Cập nhật
                                        </button>

                                        <Link to={'/admin/danh-sach-nhan-vien'} className="btn btn-danger mt-3">Hủy</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default StaffEdit;
