import { useState } from 'react';
import product from "../../../../assets/img/cart/cart-1.png";
import product1 from "../../../../assets/img/cart/cart-2.png";

function Wishlist() {
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
        <div className="cart-main-area pt-90 pb-100">
            <div className="container">
                <h3 className="cart-page-title">Các sản phẩm yêu thích của bạn</h3>
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
                                            <th>Thêm vào giỏ hàng</th>
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
                                                <td className="product-wishlist-cart">
                                                    <a href="#">Thêm vào giỏ</a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Wishlist;
