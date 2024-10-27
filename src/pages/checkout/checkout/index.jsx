import { useState } from 'react';
const Checkout = () => {
    const [openMethod, setOpenMethod] = useState(null);

    const toggleMethod = (methodId) => {
        setOpenMethod(openMethod === methodId ? null : methodId);
    };
    return (
        <>
            <div className="checkout-area pt-95 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="billing-info-wrap">
                                <h3>Chi tiết thanh toán</h3>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="billing-info mb-20">
                                            <label>Họ</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="billing-info mb-20">
                                            <label>Tên</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    {/* <div className="col-lg-12">
                                        <div className="billing-info mb-20">
                                            <label>Company Name</label>
                                            <input type="text" />
                                        </div>
                                    </div> */}
                                    <div className="col-lg-12">
                                        <div className="billing-select mb-20">
                                            <label>Quốc gia</label>
                                            <select>
                                                <option>--- Chọn một quốc gia ---</option>
                                                <option>Azerbaijan</option>
                                                <option>Bahamas</option>
                                                <option>Bahrain</option>
                                                <option>Bangladesh</option>
                                                <option>Barbados</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="billing-info mb-20">
                                            <label>Địa chỉ đường phố</label>
                                            <input className="billing-address" placeholder="House number and street name" type="text" />
                                            <input placeholder="Apartment, suite, unit etc." type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="billing-info mb-20">
                                            <label>Thị trấn / Thành phố</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="billing-info mb-20">
                                            <label>Tiểu bang / Quận</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="billing-info mb-20">
                                            <label>Mã bưu chính / ZIP</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="billing-info mb-20">
                                            <label>Số điện thoại</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="billing-info mb-20">
                                            <label>Địa chỉ Email</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="checkout-account mb-50">
                                    <input className="checkout-toggle2" type="checkbox" />
                                    <span>Create an account?</span>
                                </div>
                                <div className="checkout-account-toggle open-toggle2 mb-30">
                                    <input placeholder="Email address" type="email" />
                                    <input placeholder="Password" type="password" />
                                    <button className="btn-hover checkout-btn" type="submit">register</button>
                                </div> */}
                                <div className="additional-info-wrap">
                                    <h4>Ghi chú đơn hàng</h4>
                                    <div className="additional-info">
                                        <textarea placeholder="Ghi chú về đơn hàng của bạn, ví dụ ghi chú đặc biệt về giao hàng." name="message" defaultValue={""} />
                                    </div>
                                </div>
                                {/* <div className="checkout-account mt-25">
                                    <input className="checkout-toggle" type="checkbox" />
                                    <span>Ship to a different address?</span>
                                </div>
                                <div className="different-address open-toggle mt-30">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="billing-info mb-20">
                                                <label>First Name</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="billing-info mb-20">
                                                <label>Last Name</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="billing-info mb-20">
                                                <label>Company Name</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="billing-select mb-20">
                                                <label>Country</label>
                                                <select>
                                                    <option>Select a country</option>
                                                    <option>Azerbaijan</option>
                                                    <option>Bahamas</option>
                                                    <option>Bahrain</option>
                                                    <option>Bangladesh</option>
                                                    <option>Barbados</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="billing-info mb-20">
                                                <label>Street Address</label>
                                                <input className="billing-address" placeholder="House number and street name" type="text" />
                                                <input placeholder="Apartment, suite, unit etc." type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="billing-info mb-20">
                                                <label>Town / City</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="billing-info mb-20">
                                                <label>State / County</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="billing-info mb-20">
                                                <label>Postcode / ZIP</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="billing-info mb-20">
                                                <label>Phone</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="billing-info mb-20">
                                                <label>Email Address</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="your-order-area">
                                <h3>Đơn hàng của bạn</h3>
                                <div className="your-order-wrap gray-bg-4">
                                    <div className="your-order-product-info">
                                        <div className="your-order-top">
                                            <ul>
                                                <li>Sản phẩm</li>
                                                <li>Tổng cộng</li>
                                            </ul>
                                        </div>
                                        <div className="your-order-middle">
                                            <ul>
                                                <li><span className="order-middle-left">Product Name  X  1</span> <span className="order-price">$329 </span></li>
                                                <li><span className="order-middle-left">Product Name  X  1</span> <span className="order-price">$329 </span></li>
                                            </ul>
                                        </div>
                                        <div className="your-order-bottom">
                                            <ul>
                                                <li className="your-order-shipping">Vận chuyển</li>
                                                <li>Free shipping</li>
                                            </ul>
                                        </div>
                                        <div className="your-order-total">
                                            <ul>
                                                <li className="order-total">Tổng cộng</li>
                                                <li>$329</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="payment-method">
                                        <div className="payment-accordion element-mrg">
                                            <div className="panel-group" id="accordion">
                                                {/* Payment Method 1 */}
                                                <div className="panel payment-accordion">
                                                    <div className="panel-heading" id="method-one">
                                                        <h4 className="panel-title">
                                                            <button
                                                                type="button"
                                                                onClick={() => toggleMethod('method1')}
                                                                className={`accordion-button ${openMethod === 'method1' ? '' : 'collapsed'}`}
                                                            >
                                                                Chuyển khoản ngân hàng
                                                            </button>
                                                        </h4>
                                                    </div>
                                                    {openMethod === 'method1' && (
                                                        <div id="method1" className="panel-collapse">
                                                            <div className="panel-body">
                                                                <p>Vui lòng gửi séc đến Tên cửa hàng, Đường phố của cửa hàng, Thị trấn của cửa hàng, Tiểu bang/Quận của cửa hàng, Mã bưu chính của cửa hàng.</p>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Payment Method 2 */}
                                                <div className="panel payment-accordion">
                                                    <div className="panel-heading" id="method-two">
                                                        <h4 className="panel-title">
                                                            <button
                                                                type="button"
                                                                onClick={() => toggleMethod('method2')}
                                                                className={`accordion-button ${openMethod === 'method2' ? '' : 'collapsed'}`}
                                                            >
                                                                Thanh toán khi nhận hàng
                                                            </button>
                                                        </h4>
                                                    </div>
                                                    {openMethod === 'method2' && (
                                                        <div id="method2" className="panel-collapse">
                                                            <div className="panel-body">
                                                                <p>Vui lòng gửi séc đến Tên cửa hàng, Đường phố của cửa hàng, Thị trấn của cửa hàng, Tiểu bang/Quận của cửa hàng, Mã bưu chính của cửa hàng.</p>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Uncomment if you want to add another payment method */}
                                                {/* 
                                                <div className="panel payment-accordion">
                                                    <div className="panel-heading" id="method-three">
                                                    <h4 className="panel-title">
                                                        <button
                                                        type="button"
                                                        onClick={() => toggleMethod('method3')}
                                                        className={`accordion-button ${openMethod === 'method3' ? '' : 'collapsed'}`}
                                                        >
                                                        Cash on delivery
                                                        </button>
                                                    </h4>
                                                    </div>
                                                    {openMethod === 'method3' && (
                                                    <div id="method3" className="panel-collapse">
                                                        <div className="panel-body">
                                                        <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                                        </div>
                                                    </div>
                                                    )}
                                                </div>
                                                */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="Place-order mt-25">
                                    <a className="btn-hover" href="#">Đặt hàng</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Checkout;