import { useEffect, useState } from 'react';
import { IoMdStarOutline, IoMdStar } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import product1 from '../../../../assets/img/product/hm20-pro-12.jpg';
import product2 from '../../../../assets/img/product/hm20-pro-11.jpg';

const NewArrival = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/san-pham/allProduct')
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setProducts(data);
                } else if (data.data && Array.isArray(data.data)) {
                    setProducts(data.data); // Ensure to extract data from the correct field
                } else {
                    console.error('Error: Expected an array but got', typeof data);
                    setProducts([]);
                }
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className="product-area pt-100 pb-70">
            <div className="container">
                <div className="section-title-6 text-center">
                    <h2>New Arrivals</h2>
                </div>
                <div className="product-tab-list nav pt-30 pb-55 text-center">
                    <a href="#product-1" data-bs-toggle="tab">
                        <h4>New Arrivals</h4>
                    </a>
                    <a className="active" href="#product-2" data-bs-toggle="tab">
                        <h4>Best Sellers</h4>
                    </a>
                    <a href="#product-3" data-bs-toggle="tab">
                        <h4>Sale Items</h4>
                    </a>
                </div>
                <div className="tab-content jump">
                    <div className="tab-pane active" id="product-2">
                        <div className="row">
                            {products.length > 0 ? (
                                products.map((product, index) => (
                                    <div key={index} className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                        <div className="product-wrap mb-25">
                                            <div className="product-img">
                                                <a href={`/chi-tiet-san-pham/${product.id}`}>
                                                    <img className="default-img" src={product.duong_dan_anh || product1} alt={product.ten_san_pham} />
                                                    <img className="hover-img" src={product.duong_dan_anh || product2} alt={product.ten_san_pham} />
                                                </a>
                                                <span className="purple">New</span>
                                                <div className="product-action">
                                                    <div className="pro-same-action pro-wishlist">
                                                        <a title="Wishlist" href="/san-pham-yeu-thich"><CiHeart /></a>
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
                                                <h3><a href={`/chi-tiet-san-pham/${product.id}`}>{product.ten_san_pham}</a></h3>
                                                <div className="product-rating">
                                                    {/* Hardcoded rating for demo purposes, adjust according to actual data */}
                                                    {Array(5).fill(0).map((_, i) => (
                                                        i < 4 ? <IoMdStar className="star-filled" key={i} /> : <IoMdStarOutline className="star-empty" key={i} />
                                                    ))}
                                                </div>
                                                <div className="product-price">
                                                    <span>${product.gia}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No products available</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewArrival;
