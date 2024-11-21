import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { LuPencilLine } from "react-icons/lu";
import { RiDeleteBin2Line } from "react-icons/ri";

const ListProduct = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [categories, setCategories] = useState([]);  // Danh sách danh mục
    const [subCategories, setSubCategories] = useState([]);  // Danh sách danh mục con
    const [currentPage, setCurrentPage] = useState(1);  // Trang hiện tại
    const [totalProducts, setTotalProducts] = useState(0);  // Tổng số sản phẩm
    const [totalPages, setTotalPages] = useState(1);  // Tổng số trang
    const [itemsPerPage] = useState(5);  // Số sản phẩm trên mỗi trang (5 sản phẩm)

    const formatDate = (date) => {
        if (!date) return "N/A"; // Nếu ngày không hợp lệ
        return new Date(date).toLocaleDateString("vi-VN", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    // Hàm lấy tên danh mục từ ID
    const getCategoryName = (categoryId) => {
        const category = categories.find(cat => cat.id === categoryId);
        return category ? category.ten_danh_muc : "Không có danh mục";
    };

    // Hàm lấy tên danh mục con từ ID
    const getSubCategoryName = (subCategoryId) => {
        const subCategory = subCategories.find(sub => sub.id === subCategoryId);
        return subCategory ? subCategory.ten_danh_muc_con : "Không có danh mục con";
    };

    useEffect(() => {
        // Lấy danh mục
        axios.get('http://127.0.0.1:8000/api/danh-muc')
            .then(response => {
                setCategories(response.data || []);  // Cập nhật danh mục
            })
            .catch(error => {
                console.error("Error fetching categories:", error);
                setError("Lỗi khi tải danh mục");
            });

        // Lấy danh mục con
        axios.get('http://127.0.0.1:8000/api/danh-muc-con')
            .then(response => {
                setSubCategories(response.data || []);  // Cập nhật danh mục con
            })
            .catch(error => {
                console.error("Error fetching subcategories:", error);
                setError("Lỗi khi tải danh mục con");
            });

        // Lấy sản phẩm theo trang
        axios
            .get(`http://127.0.0.1:8000/api/san-pham/allProduct?page=${currentPage}&per_page=${itemsPerPage}`)
            .then((response) => {
                const productList = response.data.data.data || [];
                setProducts(productList);
                setTotalProducts(response.data.data.total || 0);  // Tổng số sản phẩm
                setTotalPages(response.data.data.last_page || 1);  // Tổng số trang
                setLoading(false);
                setError(null);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setError(error.message || "Lỗi khi tải dữ liệu sản phẩm");
                setLoading(false);
            });
    }, [currentPage, itemsPerPage]);  // Lấy lại dữ liệu khi trang thay đổi

    const handleDelete = (id) => {
        axios
            .delete(`http://127.0.0.1:8000/api/san-pham/${id}`)
            .then(() => {
                setProducts(products.filter((product) => product.id !== id));
                toast.success("Xóa sản phẩm thành công");
            })
            .catch((error) => {
                toast.error(error.message || "Xóa sản phẩm thất bại");
            });
    };

    if (loading) {
        return <div>Đang tải...</div>;
    }

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    // Hàm cắt ngắn mô tả
    const truncateDescription = (description, maxLength = 50) => {
        if (!description) return "Không có mô tả";
        return description.length > maxLength ? description.slice(0, maxLength) + "..." : description;
    };

    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-sm-12">
                    <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                            <div className="iq-header-title">
                                <h4 className="card-title">Danh sách sản phẩm</h4>
                            </div>
                            <Link to="/admin/them-san-pham">
                                <button type="button" className="btn btn-primary">
                                    Thêm sản phẩm
                                </button>
                            </Link>
                        </div>
                        <div className="iq-card-body">
                            <div className="table-responsive">
                                <table className="table table-striped table-borderless text-center" style={{ textAlign: 'center' }}>
                                    <thead>
                                        <tr>
                                            <th>Ảnh</th>
                                            <th>Tên sản phẩm</th>
                                            <th>Danh mục</th>
                                            <th>Danh mục con</th>
                                            <th>Mô tả</th>
                                            <th>Giá</th>
                                            <th>Số lượng tồn kho</th>
                                            <th>Lượt xem</th>
                                            <th>Ngày tham gia</th>
                                            <th>Hành động</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.length > 0 ? (
                                            products.map((productsItem) => (
                                                <tr key={productsItem.id}>
                                                    <td>
                                                        <img
                                                            className="rounded img-fluid"
                                                            src={productsItem.duong_dan_anh || "/default-image.jpg"}
                                                            alt={productsItem.ten_san_pham || "Ảnh sản phẩm"}
                                                            width="100"  // Chiều rộng ảnh
                                                            height="70" // Chiều cao ảnh
                                                        />
                                                    </td>

                                                    <td>{productsItem.ten_san_pham || "Không có tên"}</td>
                                                    <td>{getCategoryName(productsItem.danh_muc_id)}</td>
                                                    <td>{getSubCategoryName(productsItem.danh_muc_con_id)}</td>
                                                    <td>{truncateDescription(productsItem.mo_ta)}</td>
                                                    <td>{productsItem.gia || "0"}</td>
                                                    <td>{productsItem.so_luong_ton_kho || "Không có tồn kho"}</td>
                                                    <td>{productsItem.luot_xem || "0"}</td>
                                                    <td>{formatDate(productsItem.created_at)}</td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <Link
                                                                to={`/admin/sua-san-pham/${productsItem.id}`}
                                                                className="btn btn-primary mx-1"
                                                                title="Chỉnh sửa"
                                                            >
                                                                <LuPencilLine />
                                                            </Link>
                                                            <button
                                                                className="btn btn-danger mx-1"
                                                                title="Xóa"
                                                                onClick={() => handleDelete(productsItem.id)}
                                                            >
                                                                <RiDeleteBin2Line />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="10">Không có sản phẩm nào</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                            <div className="row justify-content-between mt-3">
                                <div className="col-md-6">
                                    <span>Hiển thị {products.length} trên tổng số {totalProducts} sản phẩm</span>
                                </div>
                                <div className="col-md-6">
                                    <nav>
                                        <ul className="pagination justify-content-end mb-0">
                                            <li
                                                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                                                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                            >
                                                <button className="page-link">Previous</button>
                                            </li>
                                            {[...Array(totalPages)].map((_, index) => (
                                                <li
                                                    key={index}
                                                    className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
                                                    onClick={() => setCurrentPage(index + 1)}
                                                >
                                                    <button className="page-link">{index + 1}</button>
                                                </li>
                                            ))}
                                            <li
                                                className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
                                                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                            >
                                                <button className="page-link">Next</button>
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

export default ListProduct;
