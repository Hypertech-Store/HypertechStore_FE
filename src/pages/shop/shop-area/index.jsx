import { FaTable } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { LiaAngleDoubleLeftSolid, LiaAngleDoubleRightSolid } from "react-icons/lia";
import product1 from "../../../assets/img/product/pro-1.jpg";
import product2 from "../../../assets/img/product/pro-1-1.jpg";
import product3 from "../../../assets/img/product/pro-2.jpg";
import product4 from "../../../assets/img/product/pro-2-1.jpg";
import product5 from "../../../assets/img/product/pro-3.jpg";
import product6 from "../../../assets/img/product/pro-3-1.jpg";
import product7 from "../../../assets/img/product/pro-4.jpg";
import product8 from "../../../assets/img/product/pro-4-1.jpg";
import product9 from "../../../assets/img/product/pro-5.jpg";
import product10 from "../../../assets/img/product/pro-5-1.jpg";
import product11 from "../../../assets/img/product/pro-6.jpg";
import product12 from "../../../assets/img/product/pro-6-1.jpg";
import product13 from "../../../assets/img/product/pro-7.jpg";
import product14 from "../../../assets/img/product/pro-8.jpg";


const Shop = () => {
    return (
        <>
            <div className="shop-area pt-95 pb-100 section-padding-1">
                <div className="container-fluid">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-9">
                            <div className="shop-top-bar">
                                <div className="select-shoing-wrap">
                                    <div className="shop-select">
                                        <select>
                                            <option value>Sort by newness</option>
                                            <option value>A to Z</option>
                                            <option value> Z to A</option>
                                            <option value>In stock</option>
                                        </select>
                                    </div>
                                    <p>Showing 1–12 of 20 result</p>
                                </div>
                                <div className="shop-tab nav">
                                    <a className="active" href="#shop-1" data-bs-toggle="tab">
                                        <FaTable />
                                    </a>
                                    <a href="#shop-2" data-bs-toggle="tab">
                                        <FaListUl />
                                    </a>
                                </div>
                            </div>
                            <div className="shop-bottom-area mt-35">
                                <div className="tab-content jump">
                                    <div id="shop-1" className="tab-pane active">
                                        <div className="row">
                                            <div className="col-xl-4 col-md-6 col-lg-6 col-sm-6">
                                                <div className="product-wrap mb-25 scroll-zoom">
                                                    <div className="product-img">
                                                        <a href="product-details.html">
                                                            <img className="default-img" src={product1} alt />
                                                            <img className="hover-img" src={product2} alt />
                                                        </a>
                                                        <span className="pink">-10%</span>
                                                        <div className="product-action">
                                                            <div className="pro-same-action pro-wishlist">
                                                                <a title="Wishlist" href="#"><i className="pe-7s-like" /></a>
                                                            </div>
                                                            <div className="pro-same-action pro-cart">
                                                                <a title="Add To Cart" href="#"><i className="pe-7s-cart" /> Add to cart</a>
                                                            </div>
                                                            <div className="pro-same-action pro-quickview">
                                                                <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-content text-center">
                                                        <h3><a href="product-details.html">T- Shirt And Jeans</a></h3>
                                                        <div className="product-rating">
                                                            <i className="fa fa-star-o yellow" />
                                                            <i className="fa fa-star-o yellow" />
                                                            <i className="fa fa-star-o yellow" />
                                                            <i className="fa fa-star-o" />
                                                            <i className="fa fa-star-o" />
                                                        </div>
                                                        <div className="product-price">
                                                            <span>$ 60.00</span>
                                                            <span className="old">$ 60.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6 col-lg-6 col-sm-6">
                                                <div className="product-wrap mb-25 scroll-zoom">
                                                    <div className="product-img">
                                                        <a href="product-details.html">
                                                            <img className="default-img" src={product3} alt />
                                                            <img className="hover-img" src={product4} alt />
                                                        </a>
                                                        <span className="purple">New</span>
                                                        <div className="product-action">
                                                            <div className="pro-same-action pro-wishlist">
                                                                <a title="Wishlist" href="#"><i className="pe-7s-like" /></a>
                                                            </div>
                                                            <div className="pro-same-action pro-cart">
                                                                <a title="Add To Cart" href="#"><i className="pe-7s-cart" /> Add to cart</a>
                                                            </div>
                                                            <div className="pro-same-action pro-quickview">
                                                                <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-content text-center">
                                                        <h3><a href="product-details.html">T- Shirt And Jeans</a></h3>
                                                        <div className="product-rating">
                                                            <i className="fa fa-star-o yellow" />
                                                            <i className="fa fa-star-o yellow" />
                                                            <i className="fa fa-star-o yellow" />
                                                            <i className="fa fa-star-o" />
                                                            <i className="fa fa-star-o" />
                                                        </div>
                                                        <div className="product-price">
                                                            <span>$ 60.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6 col-lg-6 col-sm-6">
                                                <div className="product-wrap mb-25 scroll-zoom">
                                                    <div className="product-img">
                                                        <a href="product-details.html">
                                                            <img className="default-img" src={product5} alt />
                                                            <img className="hover-img" src={product6} alt />
                                                        </a>
                                                        <span className="pink">-10%</span>
                                                        <div className="product-action">
                                                            <div className="pro-same-action pro-wishlist">
                                                                <a title="Wishlist" href="#"><i className="pe-7s-like" /></a>
                                                            </div>
                                                            <div className="pro-same-action pro-cart">
                                                                <a title="Add To Cart" href="#"><i className="pe-7s-cart" /> Add to cart</a>
                                                            </div>
                                                            <div className="pro-same-action pro-quickview">
                                                                <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-content text-center">
                                                        <h3><a href="product-details.html">T- Shirt And Jeans</a></h3>
                                                        <div className="product-rating">
                                                            <i className="fa fa-star-o yellow" />
                                                            <i className="fa fa-star-o yellow" />
                                                            <i className="fa fa-star-o yellow" />
                                                            <i className="fa fa-star-o" />
                                                            <i className="fa fa-star-o" />
                                                        </div>
                                                        <div className="product-price">
                                                            <span>$ 60.00</span>
                                                            <span className="old">$ 60.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6 col-lg-6 col-sm-6">
                                                <div className="product-wrap mb-25 scroll-zoom">
                                                    <div className="product-img">
                                                        <a href="product-details.html">
                                                            <img className="default-img" src={product7} alt />
                                                            <img className="hover-img" src={product8} alt />
                                                        </a>
                                                        <span className="purple">New</span>
                                                        <div className="product-action">
                                                            <div className="pro-same-action pro-wishlist">
                                                                <a title="Wishlist" href="#"><i className="pe-7s-like" /></a>
                                                            </div>
                                                            <div className="pro-same-action pro-cart">
                                                                <a title="Add To Cart" href="#"><i className="pe-7s-cart" /> Add to cart</a>
                                                            </div>
                                                            <div className="pro-same-action pro-quickview">
                                                                <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-content text-center">
                                                        <h3><a href="product-details.html">T- Shirt And Jeans</a></h3>
                                                        <div className="product-rating">
                                                            <i className="fa fa-star-o yellow" />
                                                            <i className="fa fa-star-o yellow" />
                                                            <i className="fa fa-star-o yellow" />
                                                            <i className="fa fa-star-o" />
                                                            <i className="fa fa-star-o" />
                                                        </div>
                                                        <div className="product-price">
                                                            <span>$ 60.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6 col-lg-6 col-sm-6">
                                                <div className="product-wrap mb-25 scroll-zoom">
                                                    <div className="product-img">
                                                        <a href="product-details.html">
                                                            <img className="default-img" src={product9} alt />
                                                            <img className="hover-img" src={product10} alt />
                                                        </a>
                                                        <span className="pink">-10%</span>
                                                        <div className="product-action">
                                                            <div className="pro-same-action pro-wishlist">
                                                                <a title="Wishlist" href="#"><i className="pe-7s-like" /></a>
                                                            </div>
                                                            <div className="pro-same-action pro-cart">
                                                                <a title="Add To Cart" href="#"><i className="pe-7s-cart" /> Add to cart</a>
                                                            </div>
                                                            <div className="pro-same-action pro-quickview">
                                                                <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-content text-center">
                                                        <h3><a href="product-details.html">T- Shirt And Jeans</a></h3>
                                                        <div className="product-rating">
                                                            <i className="fa fa-star-o yellow" />
                                                            <i className="fa fa-star-o yellow" />
                                                            <i className="fa fa-star-o yellow" />
                                                            <i className="fa fa-star-o" />
                                                            <i className="fa fa-star-o" />
                                                        </div>
                                                        <div className="product-price">
                                                            <span>$ 60.00</span>
                                                            <span className="old">$ 60.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6 col-lg-6 col-sm-6">
                                                <div className="product-wrap mb-25 scroll-zoom">
                                                    <div className="product-img">
                                                        <a href="product-details.html">
                                                            <img className="default-img" src={product11} alt />
                                                            <img className="hover-img" src={product12} alt />
                                                        </a>
                                                        <span className="purple">New</span>
                                                        <div className="product-action">
                                                            <div className="pro-same-action pro-wishlist">
                                                                <a title="Wishlist" href="#"><i className="pe-7s-like" /></a>
                                                            </div>
                                                            <div className="pro-same-action pro-cart">
                                                                <a title="Add To Cart" href="#"><i className="pe-7s-cart" /> Add to cart</a>
                                                            </div>
                                                            <div className="pro-same-action pro-quickview">
                                                                <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-content text-center">
                                                        <h3><a href="product-details.html">T- Shirt And Jeans</a></h3>
                                                        <div className="product-rating">
                                                            <i className="fa fa-star-o yellow" />
                                                            <i className="fa fa-star-o yellow" />
                                                            <i className="fa fa-star-o yellow" />
                                                            <i className="fa fa-star-o" />
                                                            <i className="fa fa-star-o" />
                                                        </div>
                                                        <div className="product-price">
                                                            <span>$ 60.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6 col-lg-6 col-sm-6">
                                                <div className="product-wrap mb-25 scroll-zoom">
                                                    <div className="product-img">
                                                        <a href="product-details.html">
                                                            <img className="default-img" src={product13} alt />

                                                            <img className="hover-img" src={product8} alt />
                                                        </a>
                                                        <span className="pink">-10%</span>
                                                        <div className="product-action">
                                                            <div className="pro-same-action pro-wishlist">
                                                                <a title="Wishlist" href="#"><i className="pe-7s-like" /></a>
                                                            </div>
                                                            <div className="pro-same-action pro-cart">
                                                                <a title="Add To Cart" href="#"><i className="pe-7s-cart" /> Add to cart</a>
                                                            </div>
                                                            <div className="pro-same-action pro-quickview">
                                                                <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-content text-center">
                                                        <h3><a href="product-details.html">T- Shirt And Jeans</a></h3>
                                                        <div className="product-rating">
                                                            <i className="fa fa-star-o yellow" />
                                                            <i className="fa fa-star-o yellow" />
                                                            <i className="fa fa-star-o yellow" />
                                                            <i className="fa fa-star-o" />
                                                            <i className="fa fa-star-o" />
                                                        </div>
                                                        <div className="product-price">
                                                            <span>$ 60.00</span>
                                                            <span className="old">$ 60.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6 col-lg-6 col-sm-6">
                                                <div className="product-wrap mb-25 scroll-zoom">
                                                    <div className="product-img">
                                                        <a href="product-details.html">
                                                            <img className="default-img" src={product14} alt />
                                                            <img className="hover-img" src={product11} alt />
                                                        </a>
                                                        <span className="purple">New</span>
                                                        <div className="product-action">
                                                            <div className="pro-same-action pro-wishlist">
                                                                <a title="Wishlist" href="#"><i className="pe-7s-like" /></a>
                                                            </div>
                                                            <div className="pro-same-action pro-cart">
                                                                <a title="Add To Cart" href="#"><i className="pe-7s-cart" /> Add to cart</a>
                                                            </div>
                                                            <div className="pro-same-action pro-quickview">
                                                                <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-content text-center">
                                                        <h3><a href="product-details.html">T- Shirt And Jeans</a></h3>
                                                        <div className="product-rating">
                                                            <i className="fa fa-star-o yellow" />
                                                            <i className="fa fa-star-o yellow" />
                                                            <i className="fa fa-star-o yellow" />
                                                            <i className="fa fa-star-o" />
                                                            <i className="fa fa-star-o" />
                                                        </div>
                                                        <div className="product-price">
                                                            <span>$ 60.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6 col-lg-6 col-sm-6">
                                                <div className="product-wrap mb-25 scroll-zoom">
                                                    <div className="product-img">
                                                        <a href="product-details.html">
                                                            <img className="default-img" src={product1} alt />
                                                            <img className="hover-img" src={product2} alt />
                                                        </a>
                                                        <span className="pink">-10%</span>
                                                        <div className="product-action">
                                                            <div className="pro-same-action pro-wishlist">
                                                                <a title="Wishlist" href="#"><i className="pe-7s-like" /></a>
                                                            </div>
                                                            <div className="pro-same-action pro-cart">
                                                                <a title="Add To Cart" href="#"><i className="pe-7s-cart" /> Add to cart</a>
                                                            </div>
                                                            <div className="pro-same-action pro-quickview">
                                                                <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-content text-center">
                                                        <h3><a href="product-details.html">T- Shirt And Jeans</a></h3>
                                                        <div className="product-rating">
                                                            <i className="fa fa-star-o yellow" />
                                                            <i className="fa fa-star-o yellow" />
                                                            <i className="fa fa-star-o yellow" />
                                                            <i className="fa fa-star-o" />
                                                            <i className="fa fa-star-o" />
                                                        </div>
                                                        <div className="product-price">
                                                            <span>$ 60.00</span>
                                                            <span className="old">$ 60.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6 col-lg-6 col-sm-6">
                                                <div className="product-wrap mb-25 scroll-zoom">
                                                    <div className="product-img">
                                                        <a href="product-details.html">
                                                            <img className="default-img" src={product1} alt />
                                                            <img className="hover-img" src={product2} alt />
                                                        </a>
                                                        <span className="pink">-10%</span>
                                                        <div className="product-action">
                                                            <div className="pro-same-action pro-wishlist">
                                                                <a title="Wishlist" href="#"><i className="pe-7s-like" /></a>
                                                            </div>
                                                            <div className="pro-same-action pro-cart">
                                                                <a title="Add To Cart" href="#"><i className="pe-7s-cart" /> Add to cart</a>
                                                            </div>
                                                            <div className="pro-same-action pro-quickview">
                                                                <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-content text-center">
                                                        <h3><a href="product-details.html">T- Shirt And Jeans</a></h3>
                                                        <div className="product-rating">
                                                            <i className="fa fa-star-o yellow" />
                                                            <i className="fa fa-star-o yellow" />
                                                            <i className="fa fa-star-o yellow" />
                                                            <i className="fa fa-star-o" />
                                                            <i className="fa fa-star-o" />
                                                        </div>
                                                        <div className="product-price">
                                                            <span>$ 60.00</span>
                                                            <span className="old">$ 60.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6 col-lg-6 col-sm-6">
                                                <div className="product-wrap mb-25 scroll-zoom">
                                                    <div className="product-img">
                                                        <a href="product-details.html">
                                                            <img className="default-img" src={product3} alt />
                                                            <img className="hover-img" src={product4} alt />
                                                        </a>
                                                        <span className="purple">New</span>
                                                        <div className="product-action">
                                                            <div className="pro-same-action pro-wishlist">
                                                                <a title="Wishlist" href="#"><i className="pe-7s-like" /></a>
                                                            </div>
                                                            <div className="pro-same-action pro-cart">
                                                                <a title="Add To Cart" href="#"><i className="pe-7s-cart" /> Add to cart</a>
                                                            </div>
                                                            <div className="pro-same-action pro-quickview">
                                                                <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-content text-center">
                                                        <h3><a href="product-details.html">T- Shirt And Jeans</a></h3>
                                                        <div className="product-rating">
                                                            <i className="fa fa-star-o yellow" />
                                                            <i className="fa fa-star-o yellow" />
                                                            <i className="fa fa-star-o yellow" />
                                                            <i className="fa fa-star-o" />
                                                            <i className="fa fa-star-o" />
                                                        </div>
                                                        <div className="product-price">
                                                            <span>$ 60.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6 col-lg-6 col-sm-6">
                                                <div className="product-wrap mb-25 scroll-zoom">
                                                    <div className="product-img">
                                                        <a href="product-details.html">
                                                            <img className="default-img" src={product5} alt />
                                                            <img className="hover-img" src={product6} alt />
                                                        </a>
                                                        <span className="pink">-10%</span>
                                                        <div className="product-action">
                                                            <div className="pro-same-action pro-wishlist">
                                                                <a title="Wishlist" href="#"><i className="pe-7s-like" /></a>
                                                            </div>
                                                            <div className="pro-same-action pro-cart">
                                                                <a title="Add To Cart" href="#"><i className="pe-7s-cart" /> Add to cart</a>
                                                            </div>
                                                            <div className="pro-same-action pro-quickview">
                                                                <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="pe-7s-look" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-content text-center">
                                                        <h3><a href="product-details.html">T- Shirt And Jeans</a></h3>
                                                        <div className="product-rating">
                                                            <i className="fa fa-star-o yellow" />
                                                            <i className="fa fa-star-o yellow" />
                                                            <i className="fa fa-star-o yellow" />
                                                            <i className="fa fa-star-o" />
                                                            <i className="fa fa-star-o" />
                                                        </div>
                                                        <div className="product-price">
                                                            <span>$ 60.00</span>
                                                            <span className="old">$ 60.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="shop-2" className="tab-pane">
                                        <div className="shop-list-wrap mb-30">
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-5 col-md-5 col-sm-6">
                                                    <div className="product-wrap">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src={product1} alt />
                                                                <img className="hover-img" src={product2} alt />
                                                            </a>
                                                            <span className="pink">-10%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-8 col-lg-7 col-md-7 col-sm-6">
                                                    <div className="shop-list-content">
                                                        <h3><a href="product-details.html">Products Name Here</a></h3>
                                                        <div className="product-list-price">
                                                            <span>$ 60.00</span>
                                                            <span className="old">$ 90.00</span>
                                                        </div>
                                                        <div className="rating-review">
                                                            <div className="product-list-rating">
                                                                <i className="fa fa-star-o yellow" />
                                                                <i className="fa fa-star-o yellow" />
                                                                <i className="fa fa-star-o yellow" />
                                                                <i className="fa fa-star-o" />
                                                                <i className="fa fa-star-o" />
                                                            </div>
                                                            <a href="#">3 Reviews</a>
                                                        </div>
                                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden. </p>
                                                        <div className="shop-list-btn btn-hover">
                                                            <a href="#">ADD TO CART</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="shop-list-wrap mb-30">
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-5 col-md-5 col-sm-6">
                                                    <div className="product-wrap">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src={product3} alt />
                                                                <img className="hover-img" src={product4} alt />
                                                            </a>
                                                            <span className="purple">New</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-8 col-lg-7 col-md-7 col-sm-6">
                                                    <div className="shop-list-content">
                                                        <h3><a href="product-details.html">Products Name Here</a></h3>
                                                        <div className="product-list-price">
                                                            <span>$ 60.00</span>
                                                        </div>
                                                        <div className="rating-review">
                                                            <div className="product-list-rating">
                                                                <i className="fa fa-star-o yellow" />
                                                                <i className="fa fa-star-o yellow" />
                                                                <i className="fa fa-star-o yellow" />
                                                                <i className="fa fa-star-o" />
                                                                <i className="fa fa-star-o" />
                                                            </div>
                                                            <a href="#">3 Reviews</a>
                                                        </div>
                                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden. </p>
                                                        <div className="shop-list-btn btn-hover">
                                                            <a href="#">ADD TO CART</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="shop-list-wrap mb-30">
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-5 col-md-5 col-sm-6">
                                                    <div className="product-wrap">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src={product5} alt />
                                                                <img className="hover-img" src={product6} alt />
                                                            </a>
                                                            <span className="pink">-20%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-8 col-lg-7 col-md-7 col-sm-6">
                                                    <div className="shop-list-content">
                                                        <h3><a href="product-details.html">Products Name Here</a></h3>
                                                        <div className="product-list-price">
                                                            <span>$ 30.00</span>
                                                            <span className="old">$ 50.00</span>
                                                        </div>
                                                        <div className="rating-review">
                                                            <div className="product-list-rating">
                                                                <i className="fa fa-star-o yellow" />
                                                                <i className="fa fa-star-o yellow" />
                                                                <i className="fa fa-star-o yellow" />
                                                                <i className="fa fa-star-o" />
                                                                <i className="fa fa-star-o" />
                                                            </div>
                                                            <a href="#">3 Reviews</a>
                                                        </div>
                                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden. </p>
                                                        <div className="shop-list-btn btn-hover">
                                                            <a href="#">ADD TO CART</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="shop-list-wrap mb-30">
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-5 col-md-5 col-sm-6">
                                                    <div className="product-wrap">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src={product7} alt />
                                                                <img className="hover-img" src={product8} alt />
                                                            </a>
                                                            <span className="purple">New</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-8 col-lg-7 col-md-7 col-sm-6">
                                                    <div className="shop-list-content">
                                                        <h3><a href="product-details.html">Products Name Here</a></h3>
                                                        <div className="product-list-price">
                                                            <span>$ 70.00</span>
                                                        </div>
                                                        <div className="rating-review">
                                                            <div className="product-list-rating">
                                                                <i className="fa fa-star-o yellow" />
                                                                <i className="fa fa-star-o yellow" />
                                                                <i className="fa fa-star-o yellow" />
                                                                <i className="fa fa-star-o" />
                                                                <i className="fa fa-star-o" />
                                                            </div>
                                                            <a href="#">3 Reviews</a>
                                                        </div>
                                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden. </p>
                                                        <div className="shop-list-btn btn-hover">
                                                            <a href="#">ADD TO CART</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pro-pagination-style text-center mt-30">
                                    <ul>
                                        <li><a className="prev" href="#"><LiaAngleDoubleLeftSolid /></a></li>
                                        <li><a className="active" href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a className="next" href="#"><LiaAngleDoubleRightSolid /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="sidebar-style mr-30">
                                <div className="sidebar-widget">
                                    <h4 className="pro-sidebar-title">Search </h4>
                                    <div className="pro-sidebar-search mb-50 mt-25">
                                        <form className="pro-sidebar-search-form" action="#">
                                            <input type="text" placeholder="Search here..." />
                                            <button>
                                                <i className="pe-7s-search" />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div className="sidebar-widget">
                                    <h4 className="pro-sidebar-title">Refine By </h4>
                                    <div className="sidebar-widget-list mt-30">
                                        <ul>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <input type="checkbox" /> <a href="#">On Sale <span>4</span> </a>
                                                    <span className="checkmark" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <input type="checkbox" defaultValue /> <a href="#">New <span>4</span></a>
                                                    <span className="checkmark" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <input type="checkbox" defaultValue /> <a href="#">In Stock <span>4</span> </a>
                                                    <span className="checkmark" />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar-widget mt-45">
                                    <h4 className="pro-sidebar-title">Filter By Price </h4>
                                    <div className="price-filter mt-10">
                                        <div className="price-slider-amount">
                                            <input type="text" id="amount" name="price" placeholder="Add Your Price" />
                                        </div>
                                        <div id="slider-range" />
                                    </div>
                                </div>
                                <div className="sidebar-widget mt-50">
                                    <h4 className="pro-sidebar-title">Colour </h4>
                                    <div className="sidebar-widget-list mt-20">
                                        <ul>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <input type="checkbox" defaultValue /> <a href="#">Green <span>4</span> </a>
                                                    <span className="checkmark" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <input type="checkbox" defaultValue /> <a href="#">Cream <span>4</span> </a>
                                                    <span className="checkmark" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <input type="checkbox" defaultValue /> <a href="#">Blue <span>4</span> </a>
                                                    <span className="checkmark" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <input type="checkbox" defaultValue /> <a href="#">Black <span>4</span> </a>
                                                    <span className="checkmark" />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar-widget mt-40">
                                    <h4 className="pro-sidebar-title">Size </h4>
                                    <div className="sidebar-widget-list mt-20">
                                        <ul>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <input type="checkbox" defaultValue /> <a href="#">XL</a>
                                                    <span className="checkmark" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <input type="checkbox" defaultValue /> <a href="#">L</a>
                                                    <span className="checkmark" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <input type="checkbox" defaultValue /> <a href="#">SM</a>
                                                    <span className="checkmark" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <input type="checkbox" defaultValue /> <a href="#">XXL</a>
                                                    <span className="checkmark" />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar-widget mt-50">
                                    <h4 className="pro-sidebar-title">Tag </h4>
                                    <div className="sidebar-widget-tag mt-25">
                                        <ul>
                                            <li><a href="#">Clothing</a></li>
                                            <li><a href="#">Accessories</a></li>
                                            <li><a href="#">For Men</a></li>
                                            <li><a href="#">Women</a></li>
                                            <li><a href="#">Fashion</a></li>
                                        </ul>
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

export default Shop;