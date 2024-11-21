import { useState, useEffect } from "react";
import { FaArrowTurnUp } from "react-icons/fa6";

function Account() {
    const [activePanel, setActivePanel] = useState("my-account-1");
    const userId = localStorage.getItem('userId');
    const [isLoading, setIsLoading] = useState(true); // Loading state
    const [profileData, setProfileData] = useState({});
    const [formData, setFormData] = useState({
        ten_nguoi_dung: "",
        ho_ten: "",
        email: "",
        dien_thoai: "",
        dia_chi: "",
        mat_khau: "",
    });

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const togglePanel = (panelId) => {
        setActivePanel(activePanel === panelId ? "" : panelId);
    };

    // Fetch user data when component mounts
    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/khach-hang/profile/${userId}`);
                const data = await response.json();
                setProfileData(data);
                setIsLoading(false);
                setFormData({
                    ho_ten: data.user.ho_ten || "",
                    email: data.user.email || "",
                    dien_thoai: data.user.dien_thoai || "",
                    dia_chi: data.user.dia_chi || "",
                    mat_khau: "", // Empty password field after fetching
                });
            } catch (error) {
                console.error("Có lỗi khi tải dữ liệu", error);
                setIsLoading(false);
            }
        };
        fetchProfileData();
    }, []);

    // Handle form data change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle profile update
    const handleUpdateProfile = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/khach-hang/update-profile/1", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ho_ten: formData.ho_ten,
                    email: formData.email,
                    dien_thoai: formData.dien_thoai,
                    dia_chi: formData.dia_chi,
                    updated_at: null, // Let API update timestamp
                }),
            });

            const data = await response.json();
            if (response.ok) {
                alert("Cập nhật thông tin thành công!");
                console.log("Cập nhật thành công", data);
                // Auto reload page after successful update
                window.location.reload();
            } else {
                console.error("Cập nhật thất bại", data);
                alert("Cập nhật thất bại! Vui lòng thử lại.");
            }
        } catch (error) {
            console.error("Có lỗi khi cập nhật thông tin", error);
            alert("Có lỗi khi cập nhật thông tin! Vui lòng thử lại.");
        }
    };

    const handleChangePassword = async () => {
        if (newPassword !== confirmPassword) {
            alert("Mật khẩu mới và mật khẩu xác nhận không khớp.");
            return;
        }

        if (newPassword.length < 8) {
            alert("Mật khẩu mới phải có ít nhất 8 ký tự.");
            return;
        }

        try {
            const response = await fetch("http://127.0.0.1:8000/api/khach-hang/update-profile/1", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    old_password: oldPassword,
                    new_password: newPassword,
                }),
            });

            const data = await response.json();
            if (response.ok) {
                console.log("Mật khẩu đã được cập nhật thành công!");  // Log thông báo khi mật khẩu thành công
                console.log("Dữ liệu người dùng đã cập nhật:", data);  // Log dữ liệu trả về từ server (nếu cần)
                alert("Cập nhật mật khẩu thành công!");
                // Auto reload page after successful update
                window.location.reload();
            } else {
                console.error("Cập nhật mật khẩu thất bại", data);
                alert(data.message || "Cập nhật mật khẩu thất bại! Vui lòng thử lại.");
            }
        } catch (error) {
            console.error("Có lỗi khi cập nhật mật khẩu", error);
            alert("Có lỗi khi cập nhật mật khẩu! Vui lòng thử lại.");
        }
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
                                                        <div className="col-lg-12 col-md-12">
                                                            <div className="billing-info">
                                                                <label>Họ và tên</label>
                                                                <input
                                                                    type="text"
                                                                    name="ho_ten"
                                                                    value={formData.ho_ten}
                                                                    onChange={handleInputChange}
                                                                    readOnly={isLoading}
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-12 col-md-12">
                                                            <div className="billing-info">
                                                                <label>Email</label>
                                                                <input
                                                                    type="email"
                                                                    name="email"
                                                                    value={formData.email}
                                                                    onChange={handleInputChange}
                                                                    readOnly={isLoading}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="billing-info">
                                                                <label>Số điện thoại</label>
                                                                <input
                                                                    type="text"
                                                                    name="dien_thoai"
                                                                    value={formData.dien_thoai}
                                                                    onChange={handleInputChange}
                                                                    readOnly={isLoading}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="billing-info">
                                                                <label>Địa chỉ</label>
                                                                <input
                                                                    type="text"
                                                                    name="dia_chi"
                                                                    value={formData.dia_chi}
                                                                    onChange={handleInputChange}
                                                                    readOnly={isLoading}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="billing-back-btn">
                                                        <div className="billing-back">
                                                            <a href="#"><FaArrowTurnUp /> back</a>
                                                        </div>
                                                        <div className="billing-btn">
                                                            <button type="button" onClick={handleUpdateProfile} disabled={isLoading}>Cập nhật</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>


                                {/* Password Change Panel */}
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
                                                                <input
                                                                    type="password"
                                                                    value={oldPassword}
                                                                    onChange={(e) => setOldPassword(e.target.value)}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 col-md-12">
                                                            <div className="billing-info">
                                                                <label>Mật khẩu mới</label>
                                                                <input
                                                                    type="password"
                                                                    value={newPassword}
                                                                    onChange={(e) => setNewPassword(e.target.value)}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 col-md-12">
                                                            <div className="billing-info">
                                                                <label>Xác nhận mật khẩu mới</label>
                                                                <input
                                                                    type="password"
                                                                    value={confirmPassword}
                                                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="billing-back-btn">
                                                        <div className="billing-back">
                                                            <a href="#"><FaArrowTurnUp /> back</a>
                                                        </div>
                                                        <div className="billing-btn">
                                                            <button type="button" onClick={handleChangePassword} disabled={isLoading}>Cập nhật mật khẩu</button>
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
