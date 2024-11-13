import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";
import { FaTable } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import RangeSlider from 'react-range-slider-input';
import { LiaAngleDoubleLeftSolid, LiaAngleDoubleRightSolid } from "react-icons/lia";
import product1 from "../../../../assets/img/product/pro-1.jpg";
import product2 from "../../../../assets/img/product/pro-1-1.jpg";
import product3 from "../../../../assets/img/product/pro-2.jpg";
import product4 from "../../../../assets/img/product/pro-2-1.jpg";
import product5 from "../../../../assets/img/product/pro-3.jpg";
import product6 from "../../../../assets/img/product/pro-3-1.jpg";
import product7 from "../../../../assets/img/product/pro-4.jpg";
import product8 from "../../../../assets/img/product/pro-4-1.jpg";


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [userId] = useState(() => localStorage.getItem('userId'));
    const [wishlist, setWishlist] = useState(new Set());
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(100000); // Default values before API response
    const [range, setRange] = useState([0, 100000]);
    const [sortOption, setSortOption] = useState(''); // Track the selected sorting option
    const [sortedProducts, setSortedProducts] = useState([]); // Store sorted products



    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/san-pham/allProduct');
                const data = await response.json();

                if (data.status === "success" && Array.isArray(data.data.data)) {
                    setProducts(data.data.data);
                    setSortedProducts(data.data.data);

                    const prices = data.data.data
                        .map(product => parseFloat(product.gia))
                        .filter(price => !isNaN(price));

                    if (prices.length > 0) {
                        const min = Math.min(...prices);
                        const max = Math.max(...prices);

                        setMinPrice(min);
                        setMaxPrice(max);
                        setRange([min, max]);
                    }
                } else {
                    console.error('Error: Expected an array but got', typeof data.data.data);
                    setProducts([]);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);





    const handleSliderChange = (newRange) => {
        setRange(newRange);
    };

    const addToCart = (productId, price, variationId) => {
        const cartData = {
            khach_hang_id: userId,
            san_pham_id: productId,
            so_luong: 1,
            bien_the_san_pham_id: variationId,  // Use selected variation id
            gia: price,
        };

        fetch('http://127.0.0.1:8000/api/gio-hang/them-san-pham', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cartData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('API response:', data);  // In ra để kiểm tra dữ liệu trả về từ API

                // Kiểm tra nếu API trả về một message thành công
                if (data && data.message === 'Sản phẩm đã được thêm vào giỏ hàng thành công') {
                    console.log('Product added to cart:', data);
                    toast.success('Thêm sản phẩm thành công vào giỏ hàng!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                    });
                } else {
                    console.error('Failed to add product to cart:', data);
                    toast.error('Đã xảy ra lỗi khi thêm sản phẩm vào giỏ hàng!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                    });
                }
            })
            .catch(error => {
                console.error('Error adding product to cart:', error);
                toast.error('Đã xảy ra lỗi khi thêm sản phẩm vào giỏ hàng!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            });
    };

    const addToWishlist = (productId) => {
        const customerId = userId;  // Lấy customer ID từ userId hoặc từ localStorage/session nếu cần

        const data = {
            khach_hang_id: customerId,
            san_pham_id: productId,
        };

        axios.post('http://127.0.0.1:8000/api/danh-sach-yeu-thich/addWishlist', data)
            .then(response => {
                // Kiểm tra phản hồi API
                console.log('API response:', response.data);

                // Nếu sản phẩm đã có trong danh sách yêu thích
                if (response.data && response.data.message === 'Sản phẩm đã có trong danh sách yêu thích.') {
                    toast.info('Sản phẩm này đã có trong danh sách yêu thích.', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                    });
                }
                // Nếu sản phẩm đã được thêm thành công vào danh sách yêu thích
                else if (response.data && response.data.message === 'Sản phẩm đã được thêm vào danh sách yêu thích.') {
                    setWishlist(prev => new Set(prev).add(productId));
                    toast.success('Bạn đã thêm thành công sản phẩm vào yêu thích!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                    });
                }
                else {
                    // Nếu API trả về thông báo không xác định, xử lý như một lỗi
                    console.error('Failed to add product to wishlist:', response.data);
                    toast.error('Đã xảy ra lỗi khi thêm sản phẩm vào yêu thích!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                    });
                }
            })
            .catch(error => {
                console.error('Error adding product to wishlist:', error);
                toast.error('Đã xảy ra lỗi khi thêm sản phẩm vào yêu thích!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            });
    };

    const handleSortChange = (event) => {
        const option = event.target.value;
        setSortOption(option);

        // Sort products based on the selected option
        let sortedArray = [...products]; // copy products array to avoid mutating state directly

        switch (option) {
            case 'A to Z':
                sortedArray.sort((a, b) => a.ten_san_pham.localeCompare(b.ten_san_pham));
                break;
            case 'Z to A':
                sortedArray.sort((a, b) => b.ten_san_pham.localeCompare(a.ten_san_pham));
                break;
            case 'Giá cao':
                sortedArray.sort((a, b) => b.gia - a.gia);
                break;
            case 'Giá thấp':
                sortedArray.sort((a, b) => a.gia - b.gia);
                break;
            // case "In Stock":
            //     sortedArray = sortedArray.filter(product => product.so_luong_ton_kho > 0);
            //     break;
            default:
                break;
        }

        setSortedProducts(sortedArray); // Update sorted products
    };




    return (
        <>
            <div className="shop-area pt-95 pb-100 section-padding-1">
                <div className="container-fluid">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-9">
                            <div className="shop-top-bar">
                                <div className="select-shoing-wrap">
                                    <div className="shop-select">
                                        <select onChange={handleSortChange} value={sortOption}>
                                            <option value="" disabled>Sort by newness </option>
                                            <option value="A to Z">Từ A đến Z</option>
                                            <option value="Z to A">Từ Z đến A</option>
                                            <option value="Giá cao">Giá cao đến thấp</option>
                                            <option value="Giá thấp">Giá thấp đến cao</option>
                                            {/* <option value="In Stock">In Stock</option> */}
                                        </select>

                                    </div>
                                    <p>Hiển thị <strong>{sortedProducts.length}</strong> kết quả</p>
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
                                            {sortedProducts.map((product) => (
                                                <div key={product.id} className="col-xl-4 col-md-6 col-lg-6 col-sm-6">
                                                    <div className="product-wrap mb-25 scroll-zoom">
                                                        <div className="product-img">
                                                            <a href={`/chi-tiet-san-pham/${product.id}`}>
                                                                <img className="default-img" src={product.duong_dan_anh} alt={product.ten_san_pham} />
                                                            </a>
                                                            <span className="pink">-10%</span>
                                                            <div className="product-action">
                                                                <div className="pro-same-action pro-wishlist">
                                                                    <a onClick={() => addToWishlist(product.id)}><CiHeart /></a>
                                                                </div>
                                                                <div className="pro-same-action pro-cart">
                                                                    <a
                                                                        title="Add To Cart"
                                                                        href="#"
                                                                        onClick={() => addToCart(product.id, product.gia, 1)}  // Gọi addToCart với productId
                                                                    >
                                                                        <BsCart className="iconCart" /> Thêm giỏ hàng
                                                                    </a>
                                                                </div>
                                                                <div className="pro-same-action pro-quickview">
                                                                    <a title="Quick View" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><IoEyeOutline /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content text-center">
                                                            <h3><a href={`/chi-tiet-san-pham/${product.id}`}>{product.ten_san_pham}</a></h3>
                                                            <div className="product-rating">
                                                                <i className="fa fa-star-o yellow" />
                                                                <i className="fa fa-star-o yellow" />
                                                                <i className="fa fa-star-o yellow" />
                                                                <i className="fa fa-star-o" />
                                                                <i className="fa fa-star-o" />
                                                            </div>
                                                            <div className="product-price">
                                                                <span>
                                                                    {parseFloat(product.gia).toLocaleString('en-US', { minimumFractionDigits: product.gia % 1 === 0 ? 0 : 2 })} VNĐ
                                                                </span>
                                                                <span className="old">13.500.000 VNĐ</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div id="shop-2" className="tab-pane">
                                        <div className="shop-list-wrap mb-30">
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-5 col-md-5 col-sm-6">
                                                    <div className="product-wrap">
                                                        <div className="product-img">
                                                            <a href="/chi-tiet-san-pham">
                                                                <img className="default-img" src={product1} alt />
                                                                <img className="hover-img" src={product2} alt />
                                                            </a>
                                                            <span className="pink">-10%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-8 col-lg-7 col-md-7 col-sm-6">
                                                    <div className="shop-list-content">
                                                        <h3><a href="/chi-tiet-san-pham">Products Name Here</a></h3>
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
                                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden. </p>
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
                                                            <a href="/chi-tiet-san-pham">
                                                                <img className="default-img" src={product3} alt />
                                                                <img className="hover-img" src={product4} alt />
                                                            </a>
                                                            <span className="purple">New</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-8 col-lg-7 col-md-7 col-sm-6">
                                                    <div className="shop-list-content">
                                                        <h3><a href="/chi-tiet-san-pham">Products Name Here</a></h3>
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
                                                            <a href="/chi-tiet-san-pham">
                                                                <img className="default-img" src={product5} alt />
                                                                <img className="hover-img" src={product6} alt />
                                                            </a>
                                                            <span className="pink">-20%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-8 col-lg-7 col-md-7 col-sm-6">
                                                    <div className="shop-list-content">
                                                        <h3><a href="/chi-tiet-san-pham">Products Name Here</a></h3>
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
                                                            <a href="/chi-tiet-san-pham">
                                                                <img className="default-img" src={product7} alt />
                                                                <img className="hover-img" src={product8} alt />
                                                            </a>
                                                            <span className="purple">New</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-8 col-lg-7 col-md-7 col-sm-6">
                                                    <div className="shop-list-content">
                                                        <h3><a href="/chi-tiet-san-pham">Products Name Here</a></h3>
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
                                    <h4 className="pro-sidebar-title">Tìm kiếm </h4>
                                    <div className="pro-sidebar-search mb-50 mt-25">
                                        <form className="pro-sidebar-search-form" action="#">
                                            <input type="text" placeholder="Tìm kiếm ở đây..." />
                                            <button>
                                                <i className="pe-7s-search" />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div className="sidebar-widget">
                                    <h4 className="pro-sidebar-title">Bộ lọc </h4>
                                    <div className="sidebar-widget-list mt-30">
                                        <ul>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <input type="checkbox" /> <a href="#">Đang giảm giá <span>4</span> </a>
                                                    <span className="checkmark" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <input type="checkbox" defaultValue /> <a href="#">Sản phẩm mới <span>4</span></a>
                                                    <span className="checkmark" />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar-widget mt-45">
                                    <h4 className="pro-sidebar-title">Lọc theo giá</h4>
                                    <div className="price-filter mt-10">
                                        <div className="price-slider-amount" style={{ display: 'flex', alignItems: 'center' }}>
                                            {/* Ô nhập giá trị min */}
                                            <input
                                                type="text"
                                                id="min-price"
                                                name="min-price"
                                                value={`${new Intl.NumberFormat('vi-VN').format(range[0])} VNĐ`} // Format number as currency
                                                readOnly // Make the input field read-only
                                                style={{ width: '45%', textAlign: 'center' }}
                                            />
                                            {/* Dấu gạch ngang cố định */}
                                            <span style={{ margin: '0 5px' }}>-</span>
                                            {/* Ô nhập giá trị max */}
                                            <input
                                                type="text"
                                                id="max-price"
                                                name="max-price"
                                                value={`${new Intl.NumberFormat('vi-VN').format(range[1])} VNĐ`} // Format number as currency
                                                readOnly // Make the input field read-only
                                                style={{ width: '45%', textAlign: 'center' }}
                                            />
                                        </div>

                                        {/* Slider với giá trị min và max */}
                                        <div>
                                            <RangeSlider
                                                min={minPrice}
                                                max={maxPrice}
                                                value={range}
                                                onInput={handleSliderChange}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="sidebar-widget mt-50">
                                    <h4 className="pro-sidebar-title">Lọc theo hãng </h4>
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