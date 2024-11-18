// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// const ListProduct = () => {
//     const [products, setProducts] = useState([]); // Lưu trữ danh sách sản phẩm
//     const [loading, setLoading] = useState(true); // Kiểm tra trạng thái tải dữ liệu
//     const [error, setError] = useState(null); // Lưu trữ lỗi nếu có
//     const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
//     const [totalPages, setTotalPages] = useState(1); // Tổng số trang

//     // Hàm format ngày
//     const formatDate = (date) => {
//         if (!date) return "N/A"; // Nếu ngày không hợp lệ
//         return new Date(date).toLocaleDateString("vi-VN", {
//             year: "numeric",
//             month: "long",
//             day: "numeric",
//         });
//     };

//     // Hàm lấy dữ liệu sản phẩm từ API
//     useEffect(() => {
//         axios
//             .get(`http://127.0.0.1:8000/api/san-pham/allProduct?page=${currentPage}`)
//             .then((response) => {
//                 setProducts(Array.isArray(response.data.data) ? response.data.data : []); // Đảm bảo rằng data là một mảng
//                 console.log(response.data); // Log data để kiểm tra
//                 setLoading(false); // Thay đổi trạng thái tải dữ liệu
//                 setError(null); // Nếu thành công, xóa lỗi
//                 setTotalPages(response.data.last_page); // Cập nhật tổng số trang
//             })
//             .catch((error) => {
//                 setError(error.message || "Lỗi khi tải dữ liệu sản phẩm"); // Nếu có lỗi, lưu thông báo lỗi
//                 setLoading(false);
//                 toast.error(error.message || "Lỗi khi tải dữ liệu sản phẩm");
//             });
//     }, [currentPage]);

//     // Hàm xóa sản phẩm
//     const handleDelete = (id) => {
//         // Xử lý xóa sản phẩm từ API
//         axios
//             .delete(`http://127.0.0.1:8000/api/san-pham/${id}`)
//             .then(() => {
//                 // Sau khi xóa, cập nhật lại danh sách sản phẩm
//                 setProducts(products.filter((products) => products.id !== id));
//                 toast.success("Xóa sản phẩm thành công");
//             })
//             .catch((error) => {
//                 toast.error(error.message || "Xóa sản phẩm thất bại");
//             });
//     };

//     if (loading) {
//         return <div>Đang tải...</div>;
//     }

//     if (error) {
//         return <div className="error-message">{error}</div>; // Hiển thị lỗi nếu có
//     }

//     return (
//         <div className="container-fluid">
//             <div className="row">
//                 <div className="col-sm-12">
//                     <div className="iq-card">
//                         <div className="iq-card-header d-flex justify-content-between">
//                             <div className="iq-header-title">
//                                 <h4 className="card-title">Danh sách sản phẩm</h4>
//                             </div>
//                             <Link to="/admin/them-san-pham">
//                                 <button type="button" className="btn btn-primary">
//                                     Thêm sản phẩm
//                                 </button>
//                             </Link>
//                         </div>
//                         <div className="iq-card-body">
//                             <div className="table-responsive">
//                                 <table className="table table-striped table-borderless" style={{ textAlign: 'center' }}>
//                                     <thead>
//                                         <tr>
//                                             <th>Ảnh</th>
//                                             <th>Tên sản phẩm</th>
//                                             <th>Danh mục</th>
//                                             <th>Danh mục con</th>
//                                             <th>Mô tả</th>
//                                             <th>Giá</th>
//                                             <th>Số lượng tồn kho</th>
//                                             <th>Lượt xem</th>
//                                             <th>Ngày tham gia</th>
//                                             <th>Hành động</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {products.length > 0 ? (
//                                             products.map((productsItem) => (
//                                                 <tr key={product.id}>
//                                                     <td className="text-center">
//                                                         <img
//                                                             className="rounded-circle img-fluid avatar-40"
//                                                             src={productsItem.duong_dan_anh || "/default-image.jpg"}
//                                                             alt="products"
//                                                         />
//                                                     </td>
//                                                     <td>{productsItem.ten_san_pham}</td>
//                                                     <td>{productsItem.danh_muc_id}</td>
//                                                     <td>{productsItem.danh_muc_con_id}</td>
//                                                     <td>{productsItem.mo_ta}</td>
//                                                     <td>{productsItem.gia}</td>
//                                                     <td>{productsItem.so_luong_ton_kho}</td>
//                                                     <td>{productsItem.luot_xem}</td>
//                                                     <td>{formatDate(productsItem.created_at)}</td>
//                                                     <td>
//                                                         <div className="flex align-items-center list-user-action" style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
//                                                             <Link
//                                                                 to={`/admin/sua-san-pham/${productsItem.id}`}
//                                                                 className="iq-bg-primary"
//                                                                 title="Chỉnh sửa"
//                                                                 style={{ marginRight: '10px' }}
//                                                             >
//                                                                 <i className="ri-pencil-line" />
//                                                             </Link>
//                                                             <button
//                                                                 className="iq-bg-primary border-0"
//                                                                 title="Xóa"
//                                                                 onClick={() => handleDelete(productsItem.id)}
//                                                                 style={{
//                                                                     marginRight: '0',
//                                                                     borderRadius: '5px',
//                                                                     height: '26px',
//                                                                 }}
//                                                             >
//                                                                 <i className="ri-delete-bin-line" />
//                                                             </button>
//                                                         </div>
//                                                     </td>
//                                                 </tr>
//                                             ))
//                                         ) : (
//                                             <tr>
//                                                 <td colSpan="10">Không có sản phẩm nào</td>
//                                             </tr>
//                                         )}
//                                     </tbody>

//                                 </table>
//                             </div>
//                             <div className="row justify-content-between mt-3">
//                                 <div className="col-md-6">
//                                     <span>Hiển thị {products.length} sản phẩm</span>
//                                 </div>
//                                 <div className="col-md-6">
//                                     <nav aria-label="Page navigation example">
//                                         <ul className="pagination justify-content-end mb-0">
//                                             <li className="page-item" onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}>
//                                                 <a className="page-link" href="#">
//                                                     Previous
//                                                 </a>
//                                             </li>
//                                             {[...Array(totalPages)].map((_, index) => (
//                                                 <li className="page-item" key={index}>
//                                                     <a className="page-link" href="#" onClick={() => setCurrentPage(index + 1)}>
//                                                         {index + 1}
//                                                     </a>
//                                                 </li>
//                                             ))}
//                                             <li className="page-item" onClick={() => setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages)}>
//                                                 <a className="page-link" href="#">
//                                                     Next
//                                                 </a>
//                                             </li>
//                                         </ul>
//                                     </nav>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ListProduct;
