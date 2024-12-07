import { useState, useEffect } from 'react';
import { IoMdStarOutline, IoMdStar } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

const NewArrival = () => {
    const [activeTab, setActiveTab] = useState('product-1'); // Default tab
    const [newProducts, setNewProducts] = useState([]); // Data for "New Arrivals"
    const [saleProducts, setSaleProducts] = useState([]); // Data for "On Sale"

    // Fetch products data from API
    useEffect(() => {
        // Fetch new arrivals
        fetch('http://127.0.0.1:8000/api/san-pham/getNewProducts')
            .then((response) => response.json())
            .then((data) => {
                console.log('New Products:', data);  // Log new products for debugging
                if (data && data.data) {
                    setNewProducts(data.data);
                }
            })
            .catch((error) => console.error('Error fetching new products:', error));

        // Fetch sale products
        fetch('http://127.0.0.1:8000/api/sale-san-pham/get-sale')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch sale products');
                }
                return response.json();
            })
            .then((data) => {
                console.log('Sale Products:', data);  // Log sale products for debugging
                if (data && data.data) {
                    setSaleProducts(data.data);
                }
            })
            .catch((error) => {
                console.error('Error fetching sale products:', error);
                setSaleProducts([]); // Set to empty array if error occurs
            });
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
                                            <a href={`/chi-tiet-san-pham/${product.id}`}>
                                                <img className="default-img" src={product.duong_dan_anh} alt={product.ten_san_pham} />
                                                <img className="hover-img" src={product.duong_dan_anh} alt={product.ten_san_pham} />
                                            </a>
                                            <span className="pink">New</span>
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
                    <div className={`tab-pane ${activeTab === 'product-2' ? 'active' : ''}`} id="product-2">
                        <div className="row">
                            {saleProducts.length > 0 ? (
                                saleProducts.map((product, index) => {
                                    const productData = product.san_pham; // Reference to the product data
                                    const originalPrice = parseFloat(productData.gia);
                                    const discountPercentage = parseFloat(product.sale_theo_phan_tram);
                                    const discountAmount = (originalPrice * discountPercentage) / 100;
                                    const discountedPrice = originalPrice - discountAmount;

                                    return (
                                        <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6" key={index}>
                                            <div className="product-wrap mb-25">
                                                <div className="product-img">
                                                    <a href={`/chi-tiet-san-pham/${product.id}`}>
                                                        <img
                                                            className="default-img"
                                                            src={productData.duong_dan_anh || 'fallback-image-url.jpg'} // Fallback image
                                                            alt={productData.ten_san_pham || 'Product'} // Fallback name
                                                        />
                                                        <img
                                                            className="hover-img"
                                                            src={productData.duong_dan_anh || 'fallback-image-url.jpg'}
                                                            alt={productData.ten_san_pham || 'Product'}
                                                        />
                                                    </a>
                                                    {discountPercentage > 0 && (
                                                        <span className="pink">-{Math.round(discountPercentage)}%</span>
                                                    )}
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
                                                    <h3><a href="product-details.html">{productData.ten_san_pham}</a></h3>
                                                    <div className="product-rating">
                                                        <IoMdStar className="star-filled" />
                                                        <IoMdStar className="star-filled" />
                                                        <IoMdStar className="star-filled" />
                                                        <IoMdStarOutline className="star-empty" />
                                                        <IoMdStarOutline className="star-empty" />
                                                    </div>
                                                    <div className="product-price">
                                                        <span
                                                            className="old-price"
                                                            style={{
                                                                textDecoration: 'line-through',  /* Gạch ngang cho giá cũ */
                                                                color: '#888'  /* Màu xám cho giá cũ */
                                                            }}
                                                        >
                                                            {originalPrice.toLocaleString('vi-VN')} VNĐ
                                                        </span>
                                                        <span
                                                            className="new-price"
                                                            style={{
                                                                color: 'red',  /* Màu đỏ cho giá mới */
                                                                /* Đậm giá mới để nổi bật */
                                                            }}
                                                        >
                                                            {discountedPrice.toLocaleString('vi-VN')} VNĐ
                                                        </span>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <p>No sale products available</p> // Show message if no sale products
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewArrival;
