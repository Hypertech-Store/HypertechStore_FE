import { useState, useEffect } from 'react';
import { IoMdStarOutline } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

const NewArrival = () => {
    const [activeTab, setActiveTab] = useState('product-1'); // Default tab
    const [newProducts, setNewProducts] = useState([]); // Data for "New Arrivals"
    // const [saleProducts, setSaleProducts] = useState([]); // Data for "On Sale"

    // Fetch products data from API
    useEffect(() => {
        // Fetch new arrivals
        fetch('http://127.0.0.1:8000/api/san-pham/getNewProducts')
            .then((response) => response.json())
            .then((data) => setNewProducts(data.data));

        // Fetch sale products (assuming the same endpoint for now)
        // fetch('http://127.0.0.1:8000/api/san-pham/getNewProducts')
        //     .then((response) => response.json())
        //     .then((data) => setSaleProducts(data.data));
    }, []);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="product-area pt-100 pb-70">
            <div className="container">
                <div className="section-title-6 text-center">
                    <h2>Sản phẩm nổi bật</h2>
                </div>
                <div className="product-tab-list nav pt-30 pb-55 text-center">
                    <a
                        href="#product-1"
                        onClick={() => handleTabClick('product-1')}
                        className={activeTab === 'product-1' ? 'active' : ''}
                    >
                        <h4>Hàng mới về</h4>
                    </a>
                    <a
                        href="#product-2"
                        onClick={() => handleTabClick('product-2')}
                        className={activeTab === 'product-2' ? 'active' : ''}
                    >
                        <h4>Khuyến mãi</h4>
                    </a>
                </div>
                <div className="tab-content jump">
                    {/* Tab for New Arrivals */}
                    <div className={`tab-pane ${activeTab === 'product-1' ? 'active' : ''}`} id="product-1">
                        <div className="row">
                            {newProducts.map((product, index) => (
                                <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6" key={index}>
                                    <div className="product-wrap mb-25">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <img className="default-img" src={product.duong_dan_anh} alt={product.ten_san_pham} />
                                                {/* Fallback if no hover image exists */}
                                                <img className="hover-img" src={product.duong_dan_anh} alt={product.ten_san_pham} />
                                            </a>

                                            {product.discount && <span className="pink">-{product.discount}%</span>}
                                            <div className="product-action">
                                                <div className="pro-same-action pro-wishlist">
                                                    <a title="Wishlist" href="wishlist.html"><CiHeart /></a>
                                                </div>
                                                <div className="pro-same-action pro-cart">
                                                    <a title="Add To Cart" href="#"><BsCart /> Add to cart</a>
                                                </div>
                                                <div className="pro-same-action pro-quickview">
                                                    <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><IoEyeOutline /></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">{product.ten_san_pham}</a></h3>
                                            <div className="product-rating">
                                                <IoMdStar className="star-filled" />
                                                <IoMdStar className="star-filled" />
                                                <IoMdStar className="star-filled" />
                                                <IoMdStarOutline className="star-empty" />
                                                <IoMdStarOutline className="star-empty" />
                                            </div>

                                            <div className="product-price">
                                                <span>{parseFloat(product.gia).toLocaleString('vi-VN')}₫</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tab for Sale Products */}
                    {/* <div className={`tab-pane ${activeTab === 'product-2' ? 'active' : ''}`} id="product-2">
                        <div className="row">
                            {saleProducts.map((product, index) => (
                                <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6" key={index}>
                                    <div className="product-wrap mb-25">
                                        <div className="product-img">
                                            <a href="product-details.html">
                                                <img className="default-img" src={product.duong_dan_anh} alt={product.ten_san_pham} />
                                                <img className="hover-img" src={product.duong_dan_anh} alt={product.ten_san_pham} />
                                            </a>
                                            {product.discount && <span className="pink">-{product.discount}%</span>}
                                            <div className="product-action">
                                                <div className="pro-same-action pro-wishlist">
                                                    <a title="Wishlist" href="wishlist.html"><CiHeart /></a>
                                                </div>
                                                <div className="pro-same-action pro-cart">
                                                    <a title="Add To Cart" href="#"><BsCart /> Add to cart</a>
                                                </div>
                                                <div className="pro-same-action pro-quickview">
                                                    <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><IoEyeOutline /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">{product.ten_san_pham}</a></h3>
                                            <div className="product-price">
                                                <span>{parseFloat(product.gia).toLocaleString('vi-VN')}₫</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default NewArrival;
