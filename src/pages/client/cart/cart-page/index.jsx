import { useState, useEffect } from 'react';
import { TiTimes } from "react-icons/ti";
import axios from 'axios';  // Import axios for API calls
import { toast } from "react-toastify";
import Swal from 'sweetalert2'
const Cart = () => {
    const [cartId, setCartId] = useState(null);
    const userId = localStorage.getItem('userId');
    const [total, setTotal] = useState(0);
    const [quantities, setQuantities] = useState([]);  // Array to store product quantities
    const [products, setProducts] = useState([]);  // Array to store product data
    // State để theo dõi loại vận chuyển được chọn
    const [shippingMethod, setShippingMethod] = useState(null); // null là không có lựa chọn nào

    // Tính tổng tiền sản phẩm
    const totalProductPrice = products.reduce((acc, product, index) => acc + (product.totalPrice), 0);

    // Tính phí vận chuyển
    const shippingCost = shippingMethod === 'standard' ? 54000 : (shippingMethod === 'express' ? 35000 : 0);

    // Tính tổng tiền (sản phẩm + phí vận chuyển)
    const grandTotal = totalProductPrice + shippingCost;

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/gio-hang/${userId}`)
            .then(response => {
                const cartData = response.data.gio_hang.chi_tiet_gio_hangs;
                console.log(response);
                setCartId(response.data.gio_hang.id);

                const productList = cartData.map(item => {
                    return {
                        id: item.san_pham.id,
                        bien_the_san_pham_id: item.bien_the_san_pham?.id,
                        image: item.san_pham.duong_dan_anh,
                        name: item.san_pham.ten_san_pham,
                        productPrice: parseFloat(item.chi_tiet_san_pham.gia_goc),
                        quantity: item.so_luong,
                        variantName: item.bien_the_san_pham?.ten_bien_the || 'Không có biến thể',
                        variantValue: item.bien_the_san_pham?.gia_tri_bien_the || 'Không có giá trị',
                        salePrice: item.chi_tiet_san_pham.gia_sau_sale,
                        totalPrice: item.chi_tiet_san_pham.tong_tien,
                        giaSaleVariant: item.chi_tiet_san_pham.gia_sau_sale_them_gia_bien_the
                    };
                });

                setProducts(productList);
                setQuantities(productList.map(product => product.quantity));
            })
            .catch(error => {
                console.error('Error fetching cart data:', error);
            });
    }, [userId]);

    const handleIncrement = async (index) => {
        try {
            const newQuantities = [...quantities];
            newQuantities[index] += 1;
    
            const product = products[index];
            if (!product) {
                toast.error('Không thể tìm thấy sản phẩm.');
                return;
            }
    
            const { id: productId, bien_the_san_pham_id, giaSaleVariant, productPrice, salePrice } = product;
    
            // Cập nhật số lượng trong state
            setQuantities(newQuantities);
    
            // Lấy giá sản phẩm, ưu tiên giá biến thể (giaSaleVariant)
            const price = giaSaleVariant || salePrice || productPrice;
    
            // Tính lại tổng tiền cho sản phẩm sau khi thay đổi số lượng
            const newTotalPrice = price * newQuantities[index];
            const updatedProducts = [...products];
            updatedProducts[index].totalPrice = newTotalPrice;
    
            // Tính lại tổng tiền giỏ hàng
            const updatedTotal = updatedProducts.reduce((acc, item) => acc + item.totalPrice, 0);
            setTotal(updatedTotal); // setTotal là state để lưu tổng tiền của giỏ hàng
    
            // Cập nhật số lượng trong server
            await updateProductQuantity(productId, bien_the_san_pham_id, newQuantities[index], giaSaleVariant);
    
            toast.success('Cập nhật số lượng thành công!');
        } catch (error) {
            console.error('Lỗi khi tăng số lượng:', error);
            toast.error('Lỗi khi tăng số lượng sản phẩm.');
        }
    };
    
    const handleDecrement = async (index) => {
        try {
            const newQuantities = [...quantities];
            if (newQuantities[index] > 1) {
                newQuantities[index] -= 1;
    
                const product = products[index];
                if (!product) {
                    toast.error('Không thể tìm thấy sản phẩm.');
                    return;
                }
    
                const { id: productId, bien_the_san_pham_id, giaSaleVariant, productPrice, salePrice } = product;
    
                // Cập nhật số lượng trong state
                setQuantities(newQuantities);
    
                // Lấy giá sản phẩm, ưu tiên giá biến thể (giaSaleVariant)
                const price = giaSaleVariant || salePrice || productPrice;
    
                // Tính lại tổng tiền cho sản phẩm sau khi thay đổi số lượng
                const newTotalPrice = price * newQuantities[index];
                const updatedProducts = [...products];
                updatedProducts[index].totalPrice = newTotalPrice;
    
                // Tính lại tổng tiền giỏ hàng
                const updatedTotal = updatedProducts.reduce((acc, item) => acc + item.totalPrice, 0);
                setTotal(updatedTotal); // setTotal là state để lưu tổng tiền của giỏ hàng
    
                // Cập nhật số lượng trong server
                await updateProductQuantity(productId, bien_the_san_pham_id, newQuantities[index], giaSaleVariant);
    
                toast.success('Cập nhật số lượng thành công!');
            } else {
                toast.warning('Số lượng tối thiểu là 1.');
            }
        } catch (error) {
            console.error('Lỗi khi giảm số lượng:', error);
            toast.error('Lỗi khi giảm số lượng sản phẩm.');
        }
    };    

    const handleRemoveProduct = (index) => {
        const productId = products[index]?.id; // Đảm bảo rằng 'id' tồn tại trước khi xóa

        if (!productId) {
            console.error('Product ID not found for the selected item.');
            return;
        }

        const payload = {
            gio_hang_id: cartId, // Thay thế bằng `gio_hang_id` của người dùng nếu cần
            san_pham_id: productId
        };

        // Gửi yêu cầu POST để xóa sản phẩm
        axios.post('http://127.0.0.1:8000/api/gio-hang/xoa-san-pham', payload)
            .then((response) => {
                if (response.status === 200) {
                    // Sản phẩm đã được xóa thành công, cập nhật state
                    const updatedProducts = products.filter((_, i) => i !== index);
                    const updatedQuantities = quantities.filter((_, i) => i !== index);
                    setProducts(updatedProducts);
                    setQuantities(updatedQuantities);
                    // Thêm thông báo thành công và reload lại trang
                    toast.success('Bạn đã xóa sản phẩm thành công!');
                    window.location.reload(); // Reload lại trang sau khi xóa sản phẩm
                    console.log('Bạn đã xóa sản phẩm thành công.');
                } else {
                    console.error('Error:', response.data.message || 'Failed to remove product.');
                }
            })
            .catch((error) => {
                console.error('Error removing product:', error.response?.data || error.message);
            });
    };

    // Hàm xóa tất cả giỏ hàng
    const handleClearCart = async () => {
        // Hiển thị hộp thoại xác nhận với SweetAlert2
        Swal.fire({
            title: "Bạn có chắc chắn muốn xóa giỏ hàng không?",
            text: "Bạn sẽ không thể hoàn tác hành động này!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Đồng ý, xóa giỏ hàng!",
            cancelButtonText: "Hủy bỏ",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    // Gửi yêu cầu xóa giỏ hàng
                    const response = await axios.delete(`http://127.0.0.1:8000/api/gio-hang/xoa-gio-hang/${userId}`);
                    if (response.status === 200) {
                        toast.success("Bạn đã xóa giỏ hàng thành công!");
                        // Reset các giá trị giỏ hàng sau khi xóa
                        setCartId(null);
                        setQuantities([]);
                        setProducts([]);
                    }
                } catch (error) {
                    console.error("Lỗi khi xóa giỏ hàng:", error);
                    Swal.fire("Có lỗi xảy ra!", "Không thể xóa giỏ hàng.", "error");
                }
            } else {
                // Nếu người dùng chọn hủy bỏ
                Swal.fire("Đã hủy xóa giỏ hàng.", "", "info");
            }
        });
    };

    const updateProductQuantity = (productId, bien_the_san_pham_id, quantity, gia_sau_sale_them_gia_bien_the) => {
        const payload = {
            gio_hang_id: cartId,  // Giỏ hàng của người dùng
            san_pham_id: productId,  // ID sản phẩm
            bien_the_san_pham_id: bien_the_san_pham_id,
            so_luong: quantity,  // Số lượng mới
            gia_sau_sale_them_gia_bien_the: parseFloat(gia_sau_sale_them_gia_bien_the),
        };

        // Gửi yêu cầu POST để cập nhật số lượng sản phẩm
        axios.post('http://127.0.0.1:8000/api/gio-hang/cap-nhat-san-pham', payload)
            .then((response) => {
                if (response.status === 200) {
                    console.log('Sản phẩm đã được cập nhật thành công.');
                } else {
                    console.error('Error:', response.data.message || 'Failed to update product quantity.');
                }
            })
            .catch((error) => {
                console.error('Error updating product quantity:', error.response?.data || error.message);
            });
    };

    return (
        <>
            <div>
                {/* Kiểm tra nếu giỏ hàng trống */}
                {products.length === 0 ? (
                    <div className="cart-empty">
                        <i className="iconcart-empty"></i>
                        <h1>Giỏ hàng trống</h1>
                        <span className="dmx">Không có sản phẩm nào trong giỏ hàng</span>
                        <a href="/cua-hang" className="btn-backhome">Tiếp tục mua sắm</a>
                        <p className="note-help">
                            Khi cần trợ giúp vui lòng gọi
                            <a style={{ color: '#288ad6' }} href="tel:1900232460"> 1900 232 460 </a>
                            hoặc
                            <a style={{ color: '#288ad6' }} href="tel:02836221060"> 028.3622.1060 </a>
                            (8h00 - 21h30)
                        </p>
                    </div>
                ) : (
                    <div className="cart-main-area pt-90 pb-100">
                        <div className="container">
                            <h3 className="cart-page-title">Các sản phẩm giỏ hàng</h3>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <form action="#">
                                        <div className="table-content table-responsive cart-table-content">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>Hình ảnh</th>
                                                        <th>Tên sản phẩm</th>
                                                        <th>Giá</th>
                                                        <th>Số lượng</th>
                                                        <th>Biến thể</th>
                                                        <th>Tổng cộng</th>
                                                        <th>Hành động</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {products.map((product, index) => (
                                                        <tr key={index}>
                                                            <td className="product-thumbnail">
                                                                <a href="#">
                                                                    <img src={product.image} alt={product.name} style={{ width: '130px', height: '130px' }} />
                                                                </a>
                                                            </td>
                                                            <td className="product-name">
                                                                <a href="#">{product.name}</a>
                                                            </td>
                                                            <td className="product-price-cart">
                                                                <span className="amount">
                                                                    {new Intl.NumberFormat('vi-VN').format(product.salePrice)} VNĐ
                                                                </span>
                                                            </td>
                                                            <td className="product-quantity">
                                                                <div className="cart-plus-minus">
                                                                    <button onClick={() => handleDecrement(index)} className="dec qtybutton">-</button>
                                                                    <input className="cart-plus-minus-box" type="text" value={quantities[index]} readOnly />
                                                                    <button onClick={() => handleIncrement(index)} className="inc qtybutton">+</button>
                                                                </div>
                                                            </td>
                                                            <td className="product-quantity" style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                                <div className="pro-details-content" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                                    <div className="pro-details-color-wrap" style={{ marginRight: "10px" }}>
                                                                        <div className="pro-details-color-content">
                                                                            <ul>
                                                                                <li
                                                                                    style={{
                                                                                        backgroundColor: getBackgroundColor(product.variantName),
                                                                                        borderRadius: "50%",  // Làm cho phần tử có hình tròn
                                                                                        color: "transparent",  // Ẩn văn bản
                                                                                        padding: "10px",  // Thêm padding để phần tử có kích thước
                                                                                        width: "15px",      // Đặt chiều rộng
                                                                                        height: "15px"      // Đặt chiều cao
                                                                                    }}
                                                                                >

                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    <div className="pro-details-size">
                                                                        <div className="pro-details-size-content">
                                                                            <ul>
                                                                                <li
                                                                                    style={{
                                                                                        border: "1px solid #ccc",  // Thêm viền cho thẻ span
                                                                                        backgroundColor: "#f0f0f0", // Thêm màu nền cho thẻ span
                                                                                        padding: "2px 7px",        // Thêm khoảng cách bên trong thẻ span
                                                                                        borderRadius: "5px",        // Làm cho viền thẻ span có độ cong
                                                                                    }}
                                                                                ><span>{product.variantValue || "Không có biến thể"}</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="product-subtotal">
                                                                {new Intl.NumberFormat('vi-VN').format(product.totalPrice)} VNĐ
                                                            </td>
                                                            <td className="product-remove">
                                                                <a onClick={() => handleRemoveProduct(index)}><TiTimes /></a>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="cart-shiping-update-wrapper">
                                                    <div className="cart-shiping-update">
                                                        <a href="/cua-hang">Tiếp tục mua sắm</a>
                                                    </div>
                                                    <div className="cart-clear">
                                                        <button onClick={handleClearCart}>Xóa tất cả giỏ hàng</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="cart-tax">
                                                <div className="title-wrap">
                                                    <h4 className="cart-bottom-title section-bg-gray">Ước tính chi phí vận chuyển và thuế</h4>
                                                </div>
                                                <div className="tax-wrapper">
                                                    <p>Nhập điểm đến của bạn để nhận được ước tính chi phí vận chuyển.</p>
                                                    <div className="tax-select-wrapper">
                                                        <div className="tax-select">
                                                            <label>* Country</label>
                                                            <select className="email s-email s-wid">
                                                                <option>Bangladesh</option>
                                                                <option>Albania</option>
                                                                <option>Åland Islands</option>
                                                                <option>Afghanistan</option>
                                                                <option>Belgium</option>
                                                            </select>
                                                        </div>
                                                        <div className="tax-select">
                                                            <label>* Region / State</label>
                                                            <select className="email s-email s-wid">
                                                                <option>Bangladesh</option>
                                                                <option>Albania</option>
                                                                <option>Åland Islands</option>
                                                                <option>Afghanistan</option>
                                                                <option>Belgium</option>
                                                            </select>
                                                        </div>
                                                        <div className="tax-select">
                                                            <label>* Zip/Postal Code</label>
                                                            <input type="text" />
                                                        </div>
                                                        <button className="cart-btn-2" type="submit">Áp dụng</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="discount-code-wrapper">
                                                <div className="title-wrap">
                                                    <h4 className="cart-bottom-title section-bg-gray">Sử dụng mã giảm giá</h4>
                                                </div>
                                                <div className="discount-code">
                                                    <p>Nhập mã phiếu giảm giá nếu bạn có.</p>
                                                    <form>
                                                        <input type="text" required name="name" />
                                                        <button className="cart-btn-2" type="submit">Áp dụng</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-12">
                                            <div className="grand-totall">
                                                <div className="title-wrap">
                                                    <h4 className="cart-bottom-title section-bg-gary-cart">Tổng số giỏ hàng</h4>
                                                </div>
                                                <h5>Tổng số sản phẩm <span>{new Intl.NumberFormat('vi-VN').format(totalProductPrice)} VNĐ</span></h5>
                                                <div className="total-shipping">
                                                    <h5>Tổng chi phí vận chuyển</h5>
                                                    <ul>
                                                        <li>
                                                            <input type="radio" id="standard" name="shippingMethod" value="standard" checked={shippingMethod === 'standard'} onChange={() => setShippingMethod('standard')} />
                                                            <label htmlFor="standard">Standard</label>
                                                            <span>{new Intl.NumberFormat('vi-VN').format(54000)} VNĐ</span>
                                                        </li>
                                                        <li>
                                                            <input type="radio" id="express" name="shippingMethod" value="express" checked={shippingMethod === 'express'} onChange={() => setShippingMethod('express')} />
                                                            <label htmlFor="express">Express</label>
                                                            <span>{new Intl.NumberFormat('vi-VN').format(35000)} VNĐ</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h4 className="grand-totall-title">Tổng cộng <span>{new Intl.NumberFormat('vi-VN').format(grandTotal)} VNĐ</span></h4>
                                                <a href="#">Tiến hành thanh toán</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Cart;

function getBackgroundColor(color) {
    switch (color.toLowerCase()) {
        case 'black':
            return '#000000'; // Màu đen
        case 'blue':
            return '#4798f3'; // Màu xanh dương
        case 'maroon':
            return '#736751'; // Màu nâu đỏ
        case 'gray':
            return '#c0c0c0'; // Màu xám
        case 'green':
            return '#139c57'; // Màu xanh lá cây
        case 'yellow':
            return '#e28b37'; // Màu vàng
        case 'red':
            return '#e28b37'; // Màu đỏ
        case 'white':
            return '#ffffff'; // Màu trắng
        case 'silver':
            return '#c0c0c0'; // Màu bạc
        case 'gold':
            return '#d4af37'; // Màu vàng kim loại
        case 'green':
            return '#004b49'; // Màu xanh đêm (Apple)
        case 'purple':
            return '#6a0dad'; // Màu tím đậm
        case 'aqua':
            return '#00ffff'; // Màu aqua
        default:
            return '#000000'; // Màu mặc định nếu không có trong danh sách
    }
}


