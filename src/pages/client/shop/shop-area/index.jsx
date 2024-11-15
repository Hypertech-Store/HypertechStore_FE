import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";
import { FaTable } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
// import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdStarOutline, IoMdStar } from "react-icons/io";
import RangeSlider from 'react-range-slider-input';
import { LiaAngleDoubleLeftSolid, LiaAngleDoubleRightSolid } from "react-icons/lia";



const Shop = () => {
    const [userId] = useState(() => localStorage.getItem('userId'));
    const [products, setProducts] = useState([]);
    const [wishlist, setWishlist] = useState(new Set());
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(100000);
    const [range, setRange] = useState([0, 100000]);
    const [sortOption, setSortOption] = useState('');
    const [sortedProducts, setSortedProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [totalProducts, setTotalProducts] = useState(0);
    const [currentPageShop1, setCurrentPageShop1] = useState(1);
    const [currentPageShop2, setCurrentPageShop2] = useState(1);
    const productsPerPageShop1 = 9;
    const productsPerPageShop2 = 5;
    const [activeTab, setActiveTab] = useState("shop-1");
    const [newProducts, setNewProducts] = useState([]);
    const [saleProducts, setSaleProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/san-pham/allProduct`);
                const data = await response.json();

                if (data.status === "success" && Array.isArray(data.data.data)) {
                    setProducts(data.data.data); // Set all products
                    setSortedProducts(data.data.data);

                    const total = data.data.total; // Total products
                    setTotalProducts(total);

                    // Calculate total pages based on the tab
                    const totalPagesCalculated = Math.ceil(total / (activeTab === "shop-1" ? productsPerPageShop1 : productsPerPageShop2));
                    setTotalPages(totalPagesCalculated);

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
                    setSortedProducts([]);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [activeTab]); // Re-fetch data when activeTab changes

    const handlePageChange = (page) => {
        if (activeTab === "shop-1") {
            setCurrentPageShop1(page);
        } else if (activeTab === "shop-2") {
            setCurrentPageShop2(page);
        }
    };

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

    // Define the handleSortChange function here
    const handleSortChange = (event) => {
        const option = event.target.value;
        setSortOption(option);

        // Create a copy of the products array to avoid mutation
        let sortedArray = [...products];

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
            default:
                break;
        }

        setSortedProducts(sortedArray); // Update sorted products state
    };


    // Hàm để lấy sản phẩm mới
    const fetchNewProducts = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/san-pham/getNewProducts");
            setNewProducts(response.data.data);
        } catch (error) {
            console.error("Error fetching new products:", error);
        }
    };
    // Hàm để lấy sản phẩm đang sale
    const fetchSaleProducts = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/sale-san-pham/get-sale");
            setSaleProducts(response.data.data);
        } catch (error) {
            console.error("Error fetching sale products:", error);
        }
    };


    useEffect(() => {
        fetchNewProducts();
        fetchSaleProducts();
    }, []);

    // Hàm để kiểm tra nếu sản phẩm có phải là sản phẩm mới hoặc đang sale
    // Hàm kiểm tra nhãn cho sản phẩm
    const getLabel = (productId, productCreatedAt, saleStartDate, saleEndDate, salePercentage) => {
        const currentDate = new Date();
        const saleStart = new Date(saleStartDate);
        const saleEnd = new Date(saleEndDate);

        // Kiểm tra sản phẩm sale
        if (saleStart <= currentDate && saleEnd >= currentDate) {
            return `-${salePercentage}%`;  // Nếu sản phẩm đang sale, hiển thị phần trăm sale
        }

        // Kiểm tra sản phẩm mới (tạo trong 7 ngày gần đây)
        const productCreated = new Date(productCreatedAt);
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(currentDate.getDate() - 7);

        if (productCreated >= sevenDaysAgo) {
            return "New";  // Nếu sản phẩm mới, hiển thị "New"
        }

        return null;  // Nếu không phải sản phẩm sale hoặc mới, trả về null
    };

    // Hàm kiểm tra sản phẩm có phải là mới (được tạo trong vòng 7 ngày)
    function isNewProduct(createdAt) {
        const createdDate = new Date(createdAt);
        const currentDate = new Date();
        const diffTime = Math.abs(currentDate - createdDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // chuyển thời gian chênh lệch thành ngày
        return diffDays <= 7; // Nếu sản phẩm được tạo trong vòng 7 ngày, trả về true
    }

    return (
        <>
            <div className="shop-area pt-95 pb-100 section-padding-1">
                <div className="container-fluid">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-9">
                            <div className="shop-top-bar">
                                <div className="select-shoing-wrap">
                                    <div className="shop-select" style={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center' }}>
                                        <span style={{ marginRight: '10px', marginTop: '-10px' }}>Sắp xếp theo:</span>
                                        <select onChange={handleSortChange} value={sortOption}>
                                            <option value="A to Z">Từ A đến Z</option>
                                            <option value="Z to A">Từ Z đến A</option>
                                            <option value="Giá cao">Giá: Cao đến Thấp</option>
                                            <option value="Giá thấp">Giá: Thấp đến Cao</option>
                                            {/* Uncomment and use this option if needed */}
                                            {/* <option value="In Stock">Còn hàng</option> */}
                                        </select>
                                    </div>

                                    {/* Uncomment to display the count of sorted products */}
                                    {/* <p>Hiển thị <strong>{sortedProducts.length}</strong> kết quả</p> */}
                                </div>
                                <div className="shop-tab nav">
                                    <a
                                        className={activeTab === "shop-1" ? "active" : ""}
                                        href="#shop-1"
                                        data-bs-toggle="tab"
                                        onClick={() => setActiveTab("shop-1")} // Set activeTab to "shop-1" when clicked
                                    >
                                        <FaTable />
                                    </a>
                                    <a
                                        className={activeTab === "shop-2" ? "active" : ""}
                                        href="#shop-2"
                                        data-bs-toggle="tab"
                                        onClick={() => setActiveTab("shop-2")} // Set activeTab to "shop-2" when clicked
                                    >
                                        <FaListUl />
                                    </a>
                                </div>
                            </div>
                            <div className="shop-bottom-area mt-35">
                                <div className="tab-content jump">
                                    <div id="shop-1" className={`tab-pane ${activeTab === "shop-1" ? "active" : ""}`}>
                                        <div className="row">
                                            {sortedProducts.slice((currentPageShop1 - 1) * productsPerPageShop1, currentPageShop1 * productsPerPageShop1).map((product) => {
                                                // Tìm thông tin sale của sản phẩm (nếu có)
                                                const saleProduct = saleProducts.find(
                                                    (sale) => sale.san_pham_id === product.id
                                                );

                                                // Lấy thông tin nhãn cho sản phẩm
                                                const label = getLabel(
                                                    product.id,
                                                    product.created_at,
                                                    saleProduct ? saleProduct.ngay_bat_dau_sale : null,
                                                    saleProduct ? saleProduct.ngay_ket_thuc_sale : null,
                                                    saleProduct ? saleProduct.sale_theo_phan_tram : null
                                                );

                                                return (
                                                    <div key={product.id} className="col-xl-4 col-md-6 col-lg-6 col-sm-6">
                                                        <div className="product-wrap mb-25 scroll-zoom">
                                                            <div className="product-img">
                                                                <a href={`/chi-tiet-san-pham/${product.id}`}>
                                                                    <img className="default-img" src={product.duong_dan_anh} alt={product.ten_san_pham} />
                                                                </a>
                                                                {label && (
                                                                    <span className="pink">
                                                                        {/* Kiểm tra nếu sản phẩm đang sale, hiển thị phần trăm giảm giá */}
                                                                        {saleProduct && saleProduct.sale_theo_phan_tram && (
                                                                            <>
                                                                                {parseFloat(saleProduct.sale_theo_phan_tram).toFixed(0)}%
                                                                            </>
                                                                        )}

                                                                        {/* Kiểm tra nếu sản phẩm là mới (dựa trên thời gian created_at) và không có chương trình sale, hiển thị "New" */}
                                                                        {(!saleProduct || !saleProduct.sale_theo_phan_tram) && label === "New" && isNewProduct(product.created_at) && "New"}
                                                                    </span>
                                                                )}
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
                                                                    <IoMdStar className="star-filled" />
                                                                    <IoMdStar className="star-filled" />
                                                                    <IoMdStar className="star-filled" />
                                                                    <IoMdStarOutline className="star-empty" />
                                                                    <IoMdStarOutline className="star-empty" />
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
                                                );
                                            })}
                                        </div>
                                    </div>



                                    <div id="shop-2" className={`tab-pane ${activeTab === "shop-2" ? "active" : ""}`}>
                                        <div className="shop-list-wrap mb-30">
                                            <div className="row g-5">
                                                {/* Chỉ hiển thị tối đa 5 sản phẩm trên mỗi trang cho shop-2 */}
                                                {sortedProducts.slice((currentPageShop2 - 1) * productsPerPageShop2, currentPageShop2 * productsPerPageShop2).map((product) => {
                                                    // Tìm thông tin sale của sản phẩm (nếu có)
                                                    const saleProduct = saleProducts.find(
                                                        (sale) => sale.san_pham_id === product.id
                                                    );

                                                    // Lấy thông tin nhãn cho sản phẩm
                                                    const label = getLabel(
                                                        product.id,
                                                        product.created_at,
                                                        saleProduct ? saleProduct.ngay_bat_dau_sale : null,
                                                        saleProduct ? saleProduct.ngay_ket_thuc_sale : null,
                                                        saleProduct ? saleProduct.sale_theo_phan_tram : null
                                                    );

                                                    // Tính toán giá đã giảm
                                                    const originalPrice = parseFloat(product.gia);
                                                    let discountedPrice = originalPrice;
                                                    if (saleProduct && saleProduct.sale_theo_phan_tram) {
                                                        const discountPercentage = parseFloat(saleProduct.sale_theo_phan_tram);
                                                        const discountAmount = (originalPrice * discountPercentage) / 100;
                                                        discountedPrice = originalPrice - discountAmount;
                                                    }

                                                    return (
                                                        <div key={product.id} className="col-xl-12">
                                                            <div className="row">
                                                                {/* Hình ảnh sản phẩm */}
                                                                <div className="col-xl-4 col-lg-5 col-md-5 col-sm-6">
                                                                    <div className="product-wrap">
                                                                        <div className="product-img">
                                                                            <a href={`/chi-tiet-san-pham/${product.id}`}>
                                                                                <img className="default-img" src={product.duong_dan_anh} alt={product.ten_san_pham} />
                                                                                <img className="hover-img" src={product.duong_dan_anh} alt={product.ten_san_pham} />
                                                                            </a>
                                                                            {label && (
                                                                                <span className="pink">
                                                                                    {/* Kiểm tra nếu sản phẩm đang sale, hiển thị phần trăm giảm giá */}
                                                                                    {saleProduct && saleProduct.sale_theo_phan_tram && (
                                                                                        <>
                                                                                            {parseFloat(saleProduct.sale_theo_phan_tram).toFixed(0)}%
                                                                                        </>
                                                                                    )}

                                                                                    {/* Kiểm tra nếu sản phẩm là mới (dựa trên thời gian created_at) và không có chương trình sale, hiển thị "New" */}
                                                                                    {(!saleProduct || !saleProduct.sale_theo_phan_tram) && label === "New" && isNewProduct(product.created_at) && "New"}
                                                                                </span>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                {/* Thông tin sản phẩm */}
                                                                <div className="col-xl-8 col-lg-7 col-md-7 col-sm-6">
                                                                    <div className="shop-list-content">
                                                                        <h3><a href="/chi-tiet-san-pham">{product.ten_san_pham}</a></h3>
                                                                        <div className="product-list-price">
                                                                            {/* Định dạng giá đã giảm và thêm "VNĐ" */}
                                                                            <span>{new Intl.NumberFormat('vi-VN').format(discountedPrice)} VNĐ</span>

                                                                            {/* Nếu có sale, hiển thị cả giá gốc và thêm "VNĐ" */}
                                                                            {saleProduct && (
                                                                                <span className="old">
                                                                                    {new Intl.NumberFormat('vi-VN').format(originalPrice)} VNĐ
                                                                                </span>
                                                                            )}
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
                                                                        <p>{product.mo_ta}</p>
                                                                        <div className="shop-list-btn btn-hover">
                                                                            <a title="Add To Cart" href="#" onClick={() => addToCart(product.id, product.gia, 1)}>Thêm giỏ hàng</a>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pro-pagination-style text-center mt-30">
                                    <ul>
                                        <li>
                                            <a
                                                className="prev"
                                                href="#"
                                                onClick={() => handlePageChange(activeTab === "shop-1" ? currentPageShop1 - 1 : currentPageShop2 - 1)}
                                            >
                                                <LiaAngleDoubleLeftSolid />
                                            </a>
                                        </li>

                                        {/* Display page numbers */}
                                        {[...Array(totalPages)].map((_, index) => (
                                            <li key={index}>
                                                <a
                                                    href="#"
                                                    className={activeTab === "shop-1" ? (currentPageShop1 === index + 1 ? 'active' : '') : (currentPageShop2 === index + 1 ? 'active' : '')}
                                                    onClick={() => handlePageChange(index + 1)}
                                                >
                                                    {index + 1}
                                                </a>
                                            </li>
                                        ))}

                                        <li>
                                            <a
                                                className="next"
                                                href="#"
                                                onClick={() => handlePageChange(activeTab === "shop-1" ? currentPageShop1 + 1 : currentPageShop2 + 1)}
                                            >
                                                <LiaAngleDoubleRightSolid />
                                            </a>
                                        </li>
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