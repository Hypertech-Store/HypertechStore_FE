import { useState } from 'react';
import { TiTimes } from "react-icons/ti";
import product from "../../../../assets/img/cart/cart-1.png";
import product1 from "../../../../assets/img/cart/cart-2.png";
const Cart = () => {
    const [quantities, setQuantities] = useState([2, 2, 2]);

    const handleIncrement = (index) => {
        const newQuantities = [...quantities];
        newQuantities[index] += 1;
        setQuantities(newQuantities);
    };

    const handleDecrement = (index) => {
        const newQuantities = [...quantities];
        if (newQuantities[index] > 1) {
            newQuantities[index] -= 1;
            setQuantities(newQuantities);
        }
    };

    const products = [
        { image: product, name: 'Product Name', price: 260.00 },
        { image: product1, name: 'Product Name', price: 150.00 },
        { image: product, name: 'Product Name', price: 170.00 }
    ];
    return (
        <>
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
                                                <th>Tổng cộng</th>
                                                <th>Hành động</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {products.map((product, index) => (
                                                <tr key={index}>
                                                    <td className="product-thumbnail">
                                                        <a href="#"><img src={product.image} alt={product.name} /></a>
                                                    </td>
                                                    <td className="product-name"><a href="#">{product.name}</a></td>
                                                    <td className="product-price-cart"><span className="amount">${product.price.toFixed(2)}</span></td>
                                                    <td className="product-quantity">
                                                        <div className="cart-plus-minus">
                                                            <button
                                                                onClick={() => handleDecrement(index)}
                                                                className="dec qtybutton"
                                                            >
                                                                -
                                                            </button>
                                                            <input
                                                                className="cart-plus-minus-box"
                                                                type="text"
                                                                value={quantities[index]}
                                                                readOnly
                                                            />
                                                            <button
                                                                onClick={() => handleIncrement(index)}
                                                                className="inc qtybutton"
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td className="product-subtotal">${(product.price * quantities[index]).toFixed(2)}</td>
                                                    <td className="product-remove">
                                                        <a href="#">
                                                            <TiTimes />
                                                        </a>
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
                                                <a href="#">Tiếp tục mua sắm</a>
                                            </div>
                                            <div className="cart-clear">
                                                <button>Cập nhật giỏ hàng</button>
                                                <a href="#">Xóa giỏ hàng</a>
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
                                                    <label>
                                                        * Country
                                                    </label>
                                                    <select className="email s-email s-wid">
                                                        <option>Bangladesh</option>
                                                        <option>Albania</option>
                                                        <option>Åland Islands</option>
                                                        <option>Afghanistan</option>
                                                        <option>Belgium</option>
                                                    </select>
                                                </div>
                                                <div className="tax-select">
                                                    <label>
                                                        * Region / State
                                                    </label>
                                                    <select className="email s-email s-wid">
                                                        <option>Bangladesh</option>
                                                        <option>Albania</option>
                                                        <option>Åland Islands</option>
                                                        <option>Afghanistan</option>
                                                        <option>Belgium</option>
                                                    </select>
                                                </div>
                                                <div className="tax-select">
                                                    <label>
                                                        * Zip/Postal Code
                                                    </label>
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
                                        <h5>Tổng số sản phẩm <span>$260.00</span></h5>
                                        <div className="total-shipping">
                                            <h5>Tổng chi phí vận chuyển</h5>
                                            <ul>
                                                <li><input type="checkbox" /> Standard <span>$20.00</span></li>
                                                <li><input type="checkbox" /> Express <span>$30.00</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="grand-totall-title">Grand Total  <span>$260.00</span></h4>
                                        <a href="/thanh-toan">Tiến hành thanh toán</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;