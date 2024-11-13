import { useState, useEffect } from 'react';
import { TiTimes } from "react-icons/ti";
import axios from 'axios';  // Import axios for API calls
import { toast } from "react-toastify";
import Swal from 'sweetalert2'
const Cart = () => {
    const [cartId, setCartId] = useState(null);
    const userId = localStorage.getItem('userId');
    const [quantities, setQuantities] = useState([]);  // Array to store product quantities
    const [products, setProducts] = useState([]);  // Array to store product data
    // State để theo dõi loại vận chuyển được chọn
    const [shippingMethod, setShippingMethod] = useState(null); // null là không có lựa chọn nào

    // Hàm tính tổng tiền sản phẩm
    const totalProductPrice = products.reduce((acc, product, index) => acc + (product.price * quantities[index]), 0);

    // Hàm tính phí vận chuyển dựa trên lựa chọn
    const shippingCost = shippingMethod === 'standard' ? 54000 : (shippingMethod === 'express' ? 35000 : 0);

    // Tổng tiền
    const grandTotal = totalProductPrice + shippingCost;

    // Fetch cart data when the component mounts
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/gio-hang/${userId}`)
            .then(response => {
                const cartData = response.data.gio_hang.chi_tiet_gio_hangs;
                setCartId(response.data.gio_hang.id); // Lưu gio_hang_id vào state

                const productList = cartData.map(item => ({
                    image: item.san_pham.duong_dan_anh,
                    name: item.san_pham.ten_san_pham,
                    price: parseFloat(item.san_pham.gia),
                    quantity: item.so_luong,
                    id: item.san_pham.id,
                }));

                setProducts(productList);
                setQuantities(productList.map(product => product.quantity));
            })
            .catch(error => {
                console.error('Error fetching cart data:', error);
            });
    }, [userId]);  // Thực thi 1 lần khi component được mount


    const handleIncrement = (index) => {
        const newQuantities = [...quantities];
        newQuantities[index] += 1;
        setQuantities(newQuantities);

        // Cập nhật số lượng sản phẩm qua API
        const productId = products[index]?.id;
        if (productId) {
            updateProductQuantity(productId, newQuantities[index]);
        }
    };

    const handleDecrement = (index) => {
        const newQuantities = [...quantities];
        if (newQuantities[index] > 1) {
            newQuantities[index] -= 1;
            setQuantities(newQuantities);

            // Cập nhật số lượng sản phẩm qua API
            const productId = products[index]?.id;
            if (productId) {
                updateProductQuantity(productId, newQuantities[index]);
            }
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



    const updateProductQuantity = (productId, quantity) => {
        const payload = {
            gio_hang_id: cartId,  // Giỏ hàng của người dùng
            san_pham_id: productId,  // ID sản phẩm
            so_luong: quantity  // Số lượng mới
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
                        <a href="/" className="btn-backhome">Về trang chủ</a>
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
                                                                    {new Intl.NumberFormat('vi-VN').format(product.price)} VNĐ
                                                                </span>
                                                            </td>
                                                            <td className="product-quantity">
                                                                <div className="cart-plus-minus">
                                                                    <button onClick={() => handleDecrement(index)} className="dec qtybutton">-</button>
                                                                    <input className="cart-plus-minus-box" type="text" value={quantities[index]} readOnly />
                                                                    <button onClick={() => handleIncrement(index)} className="inc qtybutton">+</button>
                                                                </div>
                                                            </td>
                                                            <td className="product-quantity"></td>
                                                            <td className="product-subtotal">
                                                                {new Intl.NumberFormat('vi-VN').format(product.price * quantities[index])} VNĐ
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
