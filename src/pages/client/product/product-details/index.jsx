import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IoMdStarOutline } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
// import { CiShuffle } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';

// Importing images

import product1 from '../../../../assets/img/product/hm20-pro-12.jpg';
import product2 from '../../../../assets/img/product/hm20-pro-11.jpg';
import product3 from '../../../../assets/img/product/hm20-pro-10.jpg';
import product4 from '../../../../assets/img/product/hm20-pro-9.jpg';
import testimonial1 from '../../../../assets/img/testimonial/1.jpg';
import testimonial2 from '../../../../assets/img/testimonial/2.jpg';
import axios from 'axios';
import { toast } from 'react-toastify';

const link = "http://127.0.0.1:8000/storage/";

const ShopDetails = () => {
    const userId = localStorage.getItem('userId');
    const { productId } = useParams(); // Get the productId from route params
    const [productData, setProductData] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeTab, setActiveTab] = useState('des-details1'); // Default tab state
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);  // Để theo dõi số lượng


    useEffect(() => {
        // Fetch product details
        fetch(`http://127.0.0.1:8000/api/san-pham/detail/${productId}`)
            .then((response) => response.json())
            .then((data) => {
                const product = data;  // Assuming 'data' is the product object
                console.log('Product data:', data);

                setProductData(product);
                setSelectedImage({ img: product?.sanPham?.duong_dan_anh, zoomImg: product?.sanPham?.duong_dan_anh });
            })
            .catch((error) => console.error('Error fetching product data:', error));


    }, [productId]);

    // Quantity handling functions
    const handleDecrease = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    // Handle tab click
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    // Toggle description expand/collapse
    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    // Truncate text to a specific character limit
    const truncateText = (text, wordLimit) => {
        const words = text.split(" ");
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(" ") + "...";
        }
        return text;
    };

    // State to manage the visibility of dropdown sections
    const [isOpen, setIsOpen] = useState({
        config: false,
        camera: false,
        battery: false,
        features: false,
        connectivity: false,
        design: false,
    });

    const handleColorChange = (color) => {
        setSelectedColor(color);
        if (selectedSize) {
            saveSelection(color, selectedSize);
        }
    };

    const handleSizeChange = (size) => {
        setSelectedSize(size);
        if (selectedColor) {
            saveSelection(selectedColor, size);
        }
    };

    const saveSelection = (color, size) => {
        console.log('Lưu trữ dữ liệu:', { color, size });

    };

    const handleAddToCartWithVariant = async () => {
        if (!selectedColor || !selectedSize) {
            toast.error('Vui lòng chọn màu và dung lượng!');
            return;
        }

        try {
            // 1. Kiểm tra biến thể trước khi thêm vào giỏ hàng
            const variantResponse = await axios.post('http://127.0.0.1:8000/api/bien-the-san-pham/kiem-tra-bien-the', {
                ten_bien_the: selectedColor,
                gia_tri_bien_the: selectedSize
            });

            // Kiểm tra nếu không có id hoặc không thành công
            if (!variantResponse.data.data.id) {
                console.log('Biến thể sản phẩm không tồn tại!');
                return;
            }

            const priceAfterDiscount = productData?.sale_theo_phan_tram
                ? productData?.sanPham?.gia * (1 - parseFloat(productData?.sale_theo_phan_tram) / 100)
                : productData?.sanPham?.gia;

            const giaSanPham = (Math.floor(priceAfterDiscount) + Math.floor(variantResponse.data.data.gia)) * quantity;

            console.log('Variant ID:', variantResponse.data.data.id);
            console.log('khach_hang_id', userId);
            // console.log('gio_hang_id', cartResponse);
            console.log('san_pham_id', productId);
            console.log('so_luong', quantity);
            console.log('gia', giaSanPham);
            // Tiến hành thêm vào giỏ hàng nếu biến thể hợp lệ
            const payload = {
                khach_hang_id: userId,
                san_pham_id: productId,
                bien_the_san_pham_id: variantResponse.data.data.id,
                so_luong: quantity,
                gia: giaSanPham
            };

            // 2. Gửi yêu cầu thêm sản phẩm vào giỏ hàng
            const addToCartResponse = await axios.post('http://127.0.0.1:8000/api/gio-hang/them-san-pham', payload);

            if (addToCartResponse.status === 200) {
                toast.success('Sản phẩm đã được thêm vào giỏ hàng!');
            } else {
                toast.error('Đã có lỗi xảy ra khi thêm sản phẩm vào giỏ hàng.');
                console.error('Error:', addToCartResponse.data.message || 'Failed to add product.');
            }
        } catch (error) {
            toast.error('Đã có lỗi xảy ra. Vui lòng thử lại!');
            console.error('Error:', error);
        }
    };


    // Toggle function for dropdown
    const toggleDropdown = (section) => {
        setIsOpen(prevState => ({
            ...prevState,
            [section]: !prevState[section], // Toggle the specific section
        }));
    };

    const styles = {
        wrapper: {
            marginTop: '20px',
        },
        boxSpecifi: {
            marginBottom: '15px',
        },
        link: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px',
            backgroundColor: '#f4f4f4',
            color: '#333',
            cursor: 'pointer',
            textDecoration: 'none',
            borderRadius: '10px',
        },
        linkHover: {
            backgroundColor: '#eaeaea',
        },
        textSpecifi: {
            display: 'none',
            paddingLeft: '20px',
        },
        textSpecifiItem: {
            marginTop: '15px',
            display: 'flex',
            justifyContent: 'space-between',  // Đảm bảo thẳng hàng các phần tử theo chiều ngang
            alignItems: 'center',  // Căn giữa các phần tử theo chiều dọc
            marginBottom: '10px',
        },
        itemLabel: {
            display: 'inline-block',
            fontWeight: '600',
            color: '#344054',
            paddingRight: '4px',  // Reduced padding-right to bring itemLabel closer to itemValue
        },
        itemValue: {
            fontWeight: 'normal',
            paddingLeft: '4px',  // Reduced padding-left to bring itemValue closer to itemLabel
            display: 'flex',      // Chuyển sang flexbox để kiểm soát căn chỉnh các phần tử
            justifyContent: 'flex-start',  // Căn trái các phần tử trong itemValue
            alignItems: 'center',  // Căn giữa các phần tử theo chiều dọc
        },

        itemValueSpan: {
            marginLeft: '-35pc',  // Thêm margin-left vào span để căn chỉnh với itemLabel
        },

        activeTextSpecifi: {
            display: 'block',
        },
        icon: {
            fontSize: '28px', // Kích thước icon lớn hơn
        },
        h4: {
            fontSize: '15px',
        },

        // New style for a custom divider
        itemSeparator: {
            border: 'none',
            height: '1px',
            backgroundColor: '#ddd', // Light color for the divider
            margin: '8px 0',  // Space between items
            opacity: 0.5,     // Make it slightly transparent for a lighter look
        },
    };


    const wordLimit = 40; // Limit to 40 characters

    if (!productData) return <div>Loading...</div>;

    const description = productData?.sanPham?.mo_ta || "No description available.";

    return (
        <>
            <div className="shop-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        {/* Product Image Section */}
                        <div className="col-xl-7 col-lg-7 col-md-12">
                            <div className="product-details-img mr-20 product-details-tab">
                                <div
                                    id="gallery"
                                    className="product-dec-slider-2"
                                    style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: '10px', // Khoảng cách giữa các ảnh
                                    }}
                                >
                                    {productData?.sanPham?.hinh_anh_san_phams?.map((image, index) => (
                                        <a
                                            key={index}
                                            data-image={`${link}${image?.duong_dan_hinh_anh_luong}`}
                                            data-zoom-image={`${link}${image?.duong_dan_hinh_anh_zoom}`}
                                            style={{
                                                display: 'block',
                                                backgroundColor: '#f7f7f7', // Nền của mỗi hình ảnh
                                                padding: '10px', // Khoảng cách giữa ảnh và nền
                                                borderRadius: '5px', // Bo tròn góc
                                            }}
                                        >
                                            <img
                                                src={`${link}${image?.duong_dan_hinh_anh}`}
                                                alt={`Product Image ${index + 1}`}
                                                style={{
                                                    display: 'block',
                                                    width: '100px',
                                                    height: '122px',
                                                    objectFit: 'cover', // Đảm bảo hình ảnh không bị méo
                                                }}
                                            />
                                        </a>
                                    ))}
                                </div>

                                <div className="zoompro-wrap zoompro-2 pl-20" style={{
                                    backgroundColor: "#f7f7f7", height: "600px", width: "500px",     // Sử dụng flexbox để căn giữa
                                    padding: '20px',  // Padding bên trong
                                    display: 'flex',
                                    flexDirection: 'column',  // Căn chỉnh nội dung theo chiều dọc
                                    justifyContent: 'center',  // Căn giữa theo chiều dọc
                                    alignItems: 'center',
                                    marginLeft: "10px",
                                }}>
                                    <div className="zoompro-border zoompro-span">
                                        <img
                                            className="zoompro"
                                            src={selectedImage.img}
                                            data-zoom-image={selectedImage.zoomImg}
                                            alt={productData?.sanPham?.ten_san_pham || 'Product Image'}
                                        />
                                        {productData?.sale_theo_phan_tram && (
                                            <span>-{parseFloat(productData?.sale_theo_phan_tram).toFixed(0)}%</span>
                                        )}

                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Product Details Section */}
                        <div className="col-lg-5 col-md-12">
                            <div className="product-details-content">
                                <h2>{productData?.sanPham?.ten_san_pham}</h2>
                                <div className="product-details-price">
                                    {
                                        productData?.sale_theo_phan_tram ? (
                                            // Nếu có giảm giá, hiển thị giá giảm và giá gốc
                                            <>
                                                <span>
                                                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })
                                                        .format(productData?.sanPham?.gia * (1 - (parseFloat(productData?.sale_theo_phan_tram) / 100)))
                                                        .replace('₫', 'VNĐ')}
                                                </span>
                                                <span className="old">
                                                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })
                                                        .format(productData?.sanPham?.gia)
                                                        .replace('₫', 'VNĐ')}
                                                </span>
                                            </>
                                        ) : (
                                            // Nếu không có giảm giá, chỉ hiển thị giá gốc
                                            <span>
                                                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })
                                                    .format(productData?.sanPham?.gia)
                                                    .replace('₫', 'VNĐ')}
                                            </span>
                                        )
                                    }
                                </div>

                                {/* Product Rating */}
                                <div className="pro-details-rating-wrap">
                                    <div className="pro-details-rating">
                                        <IoMdStar className="star-filled" />
                                        <IoMdStar className="star-filled" />
                                        <IoMdStar className="star-filled" />
                                        <IoMdStarOutline className="star-empty" />
                                        <IoMdStarOutline className="star-empty" />
                                    </div>
                                    <span><a href="#">3 Reviews</a></span>
                                </div>

                                <p style={{ display: "inline" }}>
                                    {/* Show truncated or full description based on the isExpanded state */}
                                    {isExpanded ? description : truncateText(description, wordLimit)}
                                </p>
                                {description.split(" ").length > wordLimit && (
                                    <span
                                        onClick={toggleDescription}
                                        style={{
                                            cursor: "pointer",
                                            marginLeft: "10px", // Space between the description and toggle link
                                            display: "inline", // Ensure it stays on the same line as the description
                                        }}
                                        className="toggle-description"
                                    >
                                        {isExpanded ? "Thu gọn" : "Xem thêm"}
                                    </span>
                                )}

                                <div className="pro-details-size-color mt-3">
                                    {/* Color Selection */}
                                    <div className="pro-details-color-wrap">
                                        <span>Color</span>
                                        <div className="pro-details-color-content">
                                            <ul>
                                                {Array.from(new Set(productData?.bienTheSanPhams?.map(variant => variant.ten_bien_the))) // Loại bỏ màu trùng lặp
                                                    .map((color, index) => {
                                                        const colorClass = color.toLowerCase();
                                                        const isSelected = selectedColor === color;  // Kiểm tra xem màu có được chọn không
                                                        return (
                                                            <li
                                                                key={index}
                                                                onClick={() => handleColorChange(color)}
                                                                style={{
                                                                    backgroundColor: getBackgroundColor(colorClass),  // (tuỳ chọn) Thêm màu nền
                                                                    border: isSelected ? '2px solid #000' : 'none',  // Hiển thị viền khi chọn
                                                                    cursor: 'pointer',  // Thêm con trỏ để người dùng biết có thể click
                                                                    transform: isSelected ? 'scale(1.1)' : 'scale(1)',  // Phóng to màu khi chọn
                                                                    transition: 'transform 0.2s ease',  // Thêm hiệu ứng chuyển động mượt mà
                                                                }}
                                                            />
                                                        );
                                                    })}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Storage Size Selection */}
                                    <div className="pro-details-size">
                                        <span>Dung lượng</span>
                                        <div className="pro-details-size-content">
                                            <ul>
                                                {Array.from(new Set(productData?.bienTheSanPhams?.map(variant => variant.gia_tri_bien_the))) // Loại bỏ dung lượng trùng lặp
                                                    .map((size, index) => {
                                                        const isSelected = selectedSize === size;  // Kiểm tra xem dung lượng có được chọn không
                                                        return (
                                                            <li
                                                                key={index}
                                                                onClick={() => handleSizeChange(size)}
                                                            >
                                                                <span style={{
                                                                    border: isSelected ? '2px solid #000' : 'none',  // Hiển thị viền khi chọn
                                                                    cursor: 'pointer',  // Thêm con trỏ để người dùng biết có thể click
                                                                }}>{size}</span>
                                                            </li>
                                                        );
                                                    })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>




                                {/* Quantity Selection */}
                                <div className="pro-details-quality">
                                    <div className="cart-plus-minus">
                                        <button className="dec qtybutton" onClick={handleDecrease}>-</button>
                                        <input className="cart-plus-minus-box" type="text" value={quantity} readOnly />
                                        <button className="inc qtybutton" onClick={handleIncrease}>+</button>
                                    </div>
                                    <div className="pro-details-cart btn-hover">
                                        <button onClick={handleAddToCartWithVariant}>Thêm giỏ hàng</button>
                                    </div>
                                    <div className="pro-details-wishlist">
                                        <a><CiHeart /></a>
                                    </div>

                                </div>

                                {/* Categories */}
                                <div className="pro-details-meta">
                                    <span>Danh mục :</span>
                                    <ul>
                                        {/* Kiểm tra và nối các danh mục với dấu phẩy */}
                                        <li>
                                            <a href="#">
                                                {productData.ten_danh_muc && productData.ten_danh_muc}
                                                {productData.ten_danh_muc && productData.ten_danh_muc_con && ", "}
                                                {productData.ten_danh_muc_con && productData.ten_danh_muc_con}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="pro-details-meta">
                                    <span>Tag :</span>
                                    <ul>
                                        <li><a href="#">Furniture,</a></li>
                                        <li><a href="#">Electronic</a></li>
                                    </ul>
                                </div>




                                {/* Social Share Buttons */}
                                <div className="pro-details-social">
                                    <ul>
                                        <li><a href="#"><FaFacebookF /></a></li>
                                        <li><a href="#"><FaDribbble /></a></li>
                                        <li><a href="#"><FaPinterestP /></a></li>
                                        <li><a href="#"><FaTwitter /></a></li>
                                        <li><a href="#"><FaLinkedinIn /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="description-review-area pb-90">
                <div className="container">
                    <div className="description-review-wrapper">
                        <div className="description-review-topbar nav">
                            <a
                                className={activeTab === 'des-details1' ? 'active' : ''}
                                onClick={() => handleTabClick('des-details1')}
                            >
                                Thông số kỹ thuật
                            </a>
                            <a
                                className={activeTab === 'des-details2' ? 'active' : ''}
                                onClick={() => handleTabClick('des-details2')}
                            >
                                Bài viết đánh giá (2)
                            </a>
                        </div>
                        <div className="tab-content description-review-bottom">
                            {/* Additional Information Tab */}
                            <div className="tab-content description-review-bottom">
                                {/* Kiểm tra xem sản phẩm thuộc loại điện thoại, máy tính hay đồng hồ */}
                                {productData.sanPham?.danh_muc_id === 1 ? (
                                    <div id="des-details1" className={`tab-pane ${activeTab === 'des-details1' ? 'active' : ''}`} style={styles.wrapper}>
                                        <div className="product-anotherinfo-wrapper">
                                            {/* Cấu hình & Bộ nhớ Section */}
                                            <div className="box-specifi" style={styles.boxSpecifi}>
                                                <a href="javascript:;" onClick={() => toggleDropdown('config')} style={styles.link}>
                                                    <h4 style={styles.h4}>Bộ xử lý</h4>
                                                    {isOpen.config ? <RiArrowDropUpLine style={styles.icon} /> : <RiArrowDropDownLine style={styles.icon} />}
                                                </a>
                                                <ul className="text-specifi" style={isOpen.config ? { ...styles.textSpecifi, ...styles.activeTextSpecifi } : styles.textSpecifi}>
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Công nghệ của bộ vi xử lý (CPU):</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_may_tinh?.cong_nghe_cpu}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Số nhân:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_may_tinh?.so_nhan}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Số lượng lõi:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_may_tinh?.so_luong_luong}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Tốc độ CPU:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_may_tinh?.toc_do_cpu}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Tốc độ tối đa:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_may_tinh?.toc_do_toi_da}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Bộ nhớ cache:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_may_tinh?.bo_nho_cache}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* Bố nhớ ram & ổn cứng */}
                                            <div className="box-specifi" style={styles.boxSpecifi}>
                                                <a href="javascript:;" onClick={() => toggleDropdown('ram')} style={styles.link}>
                                                    <h4 style={styles.h4}>Bộ nhớ RAM, Ổ cứng</h4>
                                                    {isOpen.ram ? <RiArrowDropUpLine style={styles.icon} /> : <RiArrowDropDownLine style={styles.icon} />}
                                                </a>
                                                <ul className="text-specifi" style={isOpen.ram ? { ...styles.textSpecifi, ...styles.activeTextSpecifi } : styles.textSpecifi}>
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>RAM:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_may_tinh?.ram}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Loại RAM:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_may_tinh?.loai_ram}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Tốc độ bus RAM:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_may_tinh?.toc_do_bus_ram}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Hỗ trợ RAM tối đa:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_may_tinh?.ho_tro_ram_toi_da}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Ổ cứng:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_may_tinh?.o_cung}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* Camera & Màn hình Section */}
                                            <div className="box-specifi" style={styles.boxSpecifi}>
                                                <a href="javascript:;" onClick={() => toggleDropdown('camera')} style={styles.link}>
                                                    <h4 style={styles.h4}>Màn hình</h4>
                                                    {isOpen.camera ? <RiArrowDropUpLine style={styles.icon} /> : <RiArrowDropDownLine style={styles.icon} />}
                                                </a>
                                                <ul className="text-specifi" style={isOpen.camera ? { ...styles.textSpecifi, ...styles.activeTextSpecifi } : styles.textSpecifi}>
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Màn hình:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_may_tinh?.man_hinh}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Độ phân giải:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_may_tinh?.do_phan_giai}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Tần số quét:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_may_tinh?.tan_so_quet}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Công nghệ màn hình:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_may_tinh?.cong_nghe_man_hinh}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Card đồ họa:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_may_tinh?.card_do_hoa}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />

                                                </ul>

                                            </div>

                                            {/* Pin & Sạc Section */}
                                            <div className="box-specifi" style={styles.boxSpecifi}>
                                                <a href="javascript:;" onClick={() => toggleDropdown('battery')} style={styles.link}>
                                                    <h4 style={styles.h4}>Kích thước khối lượng</h4>
                                                    {isOpen.battery ? <RiArrowDropUpLine style={styles.icon} /> : <RiArrowDropDownLine style={styles.icon} />}
                                                </a>
                                                <ul className="text-specifi" style={isOpen.battery ? { ...styles.textSpecifi, ...styles.activeTextSpecifi } : styles.textSpecifi}>
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Khối lượng:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_may_tinh?.khoi_luong}
                                                            </span>
                                                        </aside>
                                                    </li>

                                                </ul>

                                            </div>

                                            {/* Tiện ích Section */}
                                            <div className="box-specifi" style={styles.boxSpecifi}>
                                                <a href="javascript:;" onClick={() => toggleDropdown('features')} style={styles.link}>
                                                    <h4 style={styles.h4}>Đồ họa và Âm thanh</h4>
                                                    {isOpen.features ? <RiArrowDropUpLine style={styles.icon} /> : <RiArrowDropDownLine style={styles.icon} />}
                                                </a>
                                                <ul className="text-specifi" style={isOpen.features ? { ...styles.textSpecifi, ...styles.activeTextSpecifi } : styles.textSpecifi}>
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Công nghệ âm thanh:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_may_tinh?.cong_nghe_am_thanh}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Cổng giao tiếp:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_may_tinh?.cong_giao_tiep}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Kết nối không dây:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_may_tinh?.ket_noi_khong_day}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Webcam:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_may_tinh?.webcam}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Tính năng khác:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_may_tinh?.tinh_nang_khac}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />

                                                </ul>



                                            </div>

                                            {/* Kết nối Section */}
                                            <div className="box-specifi" style={styles.boxSpecifi}>
                                                <a href="javascript:;" onClick={() => toggleDropdown('connectivity')} style={styles.link}>
                                                    <h4 style={styles.h4}>Cổng kết nối & tính năng mở rộng</h4>
                                                    {isOpen.connectivity ? <RiArrowDropUpLine style={styles.icon} /> : <RiArrowDropDownLine style={styles.icon} />}
                                                </a>
                                                <ul className="text-specifi" style={isOpen.connectivity ? { ...styles.textSpecifi, ...styles.activeTextSpecifi } : styles.textSpecifi}>
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Kết nối không dây:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_may_tinh?.ket_noi_khong_day}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Cổng giao tiếp:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_may_tinh?.cong_giao_tiep}
                                                            </span>
                                                        </aside>
                                                    </li>

                                                </ul>


                                            </div>

                                            {/* Thiết kế & Chất liệu Section */}
                                            <div className="box-specifi" style={styles.boxSpecifi}>
                                                <a href="javascript:;" onClick={() => toggleDropdown('design')} style={styles.link}>
                                                    <h4 style={styles.h4}>Thông tin khác</h4>
                                                    {isOpen.design ? <RiArrowDropUpLine style={styles.icon} /> : <RiArrowDropDownLine style={styles.icon} />}
                                                </a>
                                                <ul className="text-specifi" style={isOpen.design ? { ...styles.textSpecifi, ...styles.activeTextSpecifi } : styles.textSpecifi}>
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Đèn bàn phím:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_may_tinh?.den_ban_phim}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Thời điểm ra mắt:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_may_tinh?.thoi_diem_ra_mat}
                                                            </span>
                                                        </aside>
                                                    </li>

                                                </ul>

                                            </div>
                                        </div>
                                    </div>
                                ) : productData.sanPham?.danh_muc_id === 2 ? (
                                    <div id="des-details1" className={`tab-pane ${activeTab === 'des-details1' ? 'active' : ''}`} style={styles.wrapper}>
                                        <div className="product-anotherinfo-wrapper">
                                            {/* Cấu hình & Bộ nhớ Section */}
                                            <div className="box-specifi" style={styles.boxSpecifi}>
                                                <a href="javascript:;" onClick={() => toggleDropdown('config')} style={styles.link}>
                                                    <h4 style={styles.h4}>Cấu hình & Bộ nhớ</h4>
                                                    {isOpen.config ? <RiArrowDropUpLine style={styles.icon} /> : <RiArrowDropDownLine style={styles.icon} />}
                                                </a>
                                                <ul className="text-specifi" style={isOpen.config ? { ...styles.textSpecifi, ...styles.activeTextSpecifi } : styles.textSpecifi}>
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Chip xử lý (CPU):</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>{productData.sanPham?.thong_so_dien_thoai?.chip_xu_ly}</span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Tốc độ CPU:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>{productData.sanPham?.thong_so_dien_thoai?.toc_do_cpu}</span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Chip đồ họa (GPU):</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>{productData.sanPham?.thong_so_dien_thoai?.chip_do_hoa}</span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>RAM:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>{productData.sanPham?.thong_so_dien_thoai?.ram}</span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Dung lượng lưu trữ:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>{productData.sanPham?.thong_so_dien_thoai?.dung_luong_luu_tru}</span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Dung lượng còn lại:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>{productData.sanPham?.thong_so_dien_thoai?.dung_luong_con_lai}</span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Thẻ nhớ:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>{productData.sanPham?.thong_so_dien_thoai?.the_nho}</span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Danh bạ:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>{productData.sanPham?.thong_so_dien_thoai?.danh_ba}</span>
                                                        </aside>
                                                    </li>
                                                </ul>

                                            </div>

                                            {/* Camera & Màn hình Section */}
                                            <div className="box-specifi" style={styles.boxSpecifi}>
                                                <a href="javascript:;" onClick={() => toggleDropdown('camera')} style={styles.link}>
                                                    <h4 style={styles.h4}>Camera & Màn hình</h4>
                                                    {isOpen.camera ? <RiArrowDropUpLine style={styles.icon} /> : <RiArrowDropDownLine style={styles.icon} />}
                                                </a>
                                                <ul className="text-specifi" style={isOpen.camera ? { ...styles.textSpecifi, ...styles.activeTextSpecifi } : styles.textSpecifi}>
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Camera sau resolution:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_dien_thoai?.camera_sau_resolution}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} /> {/* Custom horizontal line */}

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Quay phim camera sau:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_dien_thoai?.camera_sau_video}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} /> {/* Custom horizontal line */}

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Đèn Flash camera sau:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_dien_thoai?.camera_sau_flash}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} /> {/* Custom horizontal line */}

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Tính năng camera sau:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_dien_thoai?.camera_sau_tinh_nang}
                                                            </span>
                                                        </aside>
                                                    </li>

                                                    <div style={styles.itemSeparator} /> {/* Custom horizontal line */}

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Camera trước resolution:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_dien_thoai?.camera_truoc_resolution}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} /> {/* Custom horizontal line */}

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Tính năng camera trước:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_dien_thoai?.camera_truoc_tinh_nang}
                                                            </span>
                                                        </aside>
                                                    </li>

                                                    <div style={styles.itemSeparator} /> {/* Custom horizontal line */}

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Công nghệ màn hình:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_dien_thoai?.cong_nghe_man_hinh}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} /> {/* Custom horizontal line */}

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Màn hình resolution:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_dien_thoai?.man_hinh_resolution}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} /> {/* Custom horizontal line */}

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Màn hình rộng:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_dien_thoai?.man_hinh_rong} inch
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} /> {/* Custom horizontal line */}

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Độ sáng màn hình max:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_dien_thoai?.man_hinh_do_sang_max} nits
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} /> {/* Custom horizontal line */}

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Mặt kính cảm ứng:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_dien_thoai?.mat_kinh_cam_ung}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                </ul>

                                            </div>

                                            {/* Pin & Sạc Section */}
                                            <div className="box-specifi" style={styles.boxSpecifi}>
                                                <a href="javascript:;" onClick={() => toggleDropdown('battery')} style={styles.link}>
                                                    <h4 style={styles.h4}>Pin & Sạc</h4>
                                                    {isOpen.battery ? <RiArrowDropUpLine style={styles.icon} /> : <RiArrowDropDownLine style={styles.icon} />}
                                                </a>
                                                <ul className="text-specifi" style={isOpen.battery ? { ...styles.textSpecifi, ...styles.activeTextSpecifi } : styles.textSpecifi}>
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Dung lượng pin:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_dien_thoai?.dung_luong_pin} mAh
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} /> {/* Custom horizontal line */}

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Loại pin:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_dien_thoai?.loai_pin}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} /> {/* Custom horizontal line */}

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Hỗ trợ sạc tối đa:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_dien_thoai?.sac_toi_da} W
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} /> {/* Custom horizontal line */}

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Cổng sạc kèm theo:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_dien_thoai?.sac_kem_theo}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} /> {/* Custom horizontal line */}

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Công nghệ sạc:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_dien_thoai?.cong_nghe_pin}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                </ul>

                                            </div>

                                            {/* Tiện ích Section */}
                                            <div className="box-specifi" style={styles.boxSpecifi}>
                                                <a href="javascript:;" onClick={() => toggleDropdown('features')} style={styles.link}>
                                                    <h4 style={styles.h4}>Tiện ích</h4>
                                                    {isOpen.features ? <RiArrowDropUpLine style={styles.icon} /> : <RiArrowDropDownLine style={styles.icon} />}
                                                </a>
                                                <ul className="text-specifi" style={isOpen.features ? { ...styles.textSpecifi, ...styles.activeTextSpecifi } : styles.textSpecifi}>
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Face ID:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_dien_thoai?.bao_mat_nang_cao === "Face ID" ? "Có" : "Không"}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} /> {/* Custom horizontal line */}

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Tính năng đặc biệt</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_dien_thoai?.tinh_nang_dac_biet === "Spatial audio" ? "Có" : "Không"}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} /> {/* Custom horizontal line */}

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Kháng nước bụi:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_dien_thoai?.khang_nuoc_bui === "IP68" ? "IP68" : "Không"}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} /> {/* Custom horizontal line */}

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Ghi âm:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_dien_thoai?.ghi_am === "Stereo" ? "Stereo" : "Không"}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} /> {/* Custom horizontal line */}

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Radio:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_dien_thoai?.radio === "FM radio" ? "FM radio" : "Không"}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} /> {/* Custom horizontal line */}

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Xem phim:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_dien_thoai?.xem_phim === "HDR" ? "HDR" : "Không"}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} /> {/* Custom horizontal line */}

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Nghe nhạc:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_dien_thoai?.nghe_nhac === "Apple Music" ? "Apple Music" : "Không"}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                </ul>



                                            </div>

                                            {/* Kết nối Section */}
                                            <div className="box-specifi" style={styles.boxSpecifi}>
                                                <a href="javascript:;" onClick={() => toggleDropdown('connectivity')} style={styles.link}>
                                                    <h4 style={styles.h4}>Kết nối</h4>
                                                    {isOpen.connectivity ? <RiArrowDropUpLine style={styles.icon} /> : <RiArrowDropDownLine style={styles.icon} />}
                                                </a>
                                                <ul className="text-specifi" style={isOpen.connectivity ? { ...styles.textSpecifi, ...styles.activeTextSpecifi } : styles.textSpecifi}>
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Mạng di động:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_dien_thoai?.mang_di_dong}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} /> {/* Custom horizontal line */}

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>SIM:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_dien_thoai?.sim}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} /> {/* Custom horizontal line */}

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Wi-Fi:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_dien_thoai?.wifi}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} /> {/* Custom horizontal line */}

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Bluetooth:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_dien_thoai?.bluetooth}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} /> {/* Custom horizontal line */}

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Cổng kết nối/sạc:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_dien_thoai?.cong_ket_noi_sac}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} /> {/* Custom horizontal line */}

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Jack tai nghe:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_dien_thoai?.jack_tai_nghe}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} /> {/* Custom horizontal line */}

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Kết nối khác:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_dien_thoai?.ket_noi_khac}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                </ul>


                                            </div>

                                            {/* Thiết kế & Chất liệu Section */}
                                            <div className="box-specifi" style={styles.boxSpecifi}>
                                                <a href="javascript:;" onClick={() => toggleDropdown('design')} style={styles.link}>
                                                    <h4 style={styles.h4}>Thiết kế & Chất liệu</h4>
                                                    {isOpen.design ? <RiArrowDropUpLine style={styles.icon} /> : <RiArrowDropDownLine style={styles.icon} />}
                                                </a>
                                                <ul className="text-specifi" style={isOpen.design ? { ...styles.textSpecifi, ...styles.activeTextSpecifi } : styles.textSpecifi}>
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Thiết kế:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_dien_thoai?.thiet_ke}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} /> {/* Custom horizontal line */}

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Chất liệu:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_dien_thoai?.chat_lieu}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} /> {/* Custom horizontal line */}

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Kích thước, khối lượng:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_dien_thoai?.kich_thuoc_khoi_luong}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} /> {/* Custom horizontal line */}

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Thời điểm ra mắt:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_dien_thoai?.thoi_diem_ra_mat}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} /> {/* Custom horizontal line */}

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Hãng:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>
                                                                {productData.sanPham?.thong_so_dien_thoai?.hang}
                                                            </span>
                                                        </aside>
                                                    </li>
                                                </ul>

                                            </div>
                                        </div>
                                    </div>
                                ) : productData.sanPham?.danh_muc_id === 3 ? (
                                    <div id="des-details1" className={`tab-pane ${activeTab === 'des-details1' ? 'active' : ''}`} style={styles.wrapper}>
                                        <div className="product-anotherinfo-wrapper">
                                            {/* Camera & Màn hình Section */}
                                            <div className="box-specifi" style={styles.boxSpecifi}>
                                                <a href="javascript:;" onClick={() => toggleDropdown('camera')} style={styles.link}>
                                                    <h4 style={styles.h4}>Màn hình</h4>
                                                    {isOpen.camera ? <RiArrowDropUpLine style={styles.icon} /> : <RiArrowDropDownLine style={styles.icon} />}
                                                </a>
                                                <ul className="text-specifi" style={isOpen.camera ? { ...styles.textSpecifi, ...styles.activeTextSpecifi } : styles.textSpecifi}>
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Công nghệ màn hình:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>{productData.sanPham?.thong_so_dong_ho?.cong_nghe_man_hinh}</span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Kích thước màn hình:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>{productData.sanPham?.thong_so_dong_ho?.kich_thuoc_man_hinh}</span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Độ phân giải màn hình:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>{productData.sanPham?.thong_so_dong_ho?.do_phan_giai}</span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Kích thước mặt:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>{productData.sanPham?.thong_so_dong_ho?.kich_thuoc_mat}</span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />

                                                </ul>

                                            </div>
                                            <div className="box-specifi" style={styles.boxSpecifi}>
                                                <a href="javascript:;" onClick={() => toggleDropdown('material')} style={styles.link}>
                                                    <h4 style={styles.h4}>Thiết kế</h4>
                                                    {isOpen.material ? <RiArrowDropUpLine style={styles.icon} /> : <RiArrowDropDownLine style={styles.icon} />}
                                                </a>
                                                <ul className="text-specifi" style={isOpen.material ? { ...styles.textSpecifi, ...styles.activeTextSpecifi } : styles.textSpecifi}>

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Chất liệu mặt:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>{productData.sanPham?.thong_so_dong_ho?.chat_lieu_mat}</span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Chất liệu khung viền:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>{productData.sanPham?.thong_so_dong_ho?.chat_lieu_khung_vien}</span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Chất liệu dây:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>{productData.sanPham?.thong_so_dong_ho?.chat_lieu_day}</span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Độ rộng dây:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>{productData.sanPham?.thong_so_dong_ho?.do_rong_day}</span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Độ dài dây:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>{productData.sanPham?.thong_so_dong_ho?.do_dai_day}</span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />
                                                </ul>
                                            </div>

                                            {/* Tiện ích Section */}
                                            <div className="box-specifi" style={styles.boxSpecifi}>
                                                <a href="javascript:;" onClick={() => toggleDropdown('features')} style={styles.link}>
                                                    <h4 style={styles.h4}>Tiện ích</h4>
                                                    {isOpen.features ? <RiArrowDropUpLine style={styles.icon} /> : <RiArrowDropDownLine style={styles.icon} />}
                                                </a>
                                                <ul className="text-specifi" style={isOpen.features ? { ...styles.textSpecifi, ...styles.activeTextSpecifi } : styles.textSpecifi}>
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Môn thể thao:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>{productData.sanPham?.thong_so_dong_ho?.mon_the_thao}</span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Hỗ trợ ngoài ghi:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>{productData.sanPham?.thong_so_dong_ho?.ho_tro_ngoai_ghi}</span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Tiện ích đặc biệt:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>{productData.sanPham?.thong_so_dong_ho?.tien_ich_dac_biet}</span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Chống nước:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>{productData.sanPham?.thong_so_dong_ho?.chong_nuoc}</span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Theo dõi sức khỏe:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>{productData.sanPham?.thong_so_dong_ho?.theo_doi_suc_khoe}</span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Tiện ích khác:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>{productData.sanPham?.thong_so_dong_ho?.tien_ich_khac}</span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Hiển thị thông báo:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>{productData.sanPham?.thong_so_dong_ho?.hien_thi_thong_bao}</span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Cảm biến:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>{productData.sanPham?.thong_so_dong_ho?.cam_bien}</span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />
                                                </ul>



                                            </div>


                                            {/* Pin & Sạc Section */}
                                            <div className="box-specifi" style={styles.boxSpecifi}>
                                                <a href="javascript:;" onClick={() => toggleDropdown('battery')} style={styles.link}>
                                                    <h4 style={styles.h4}>Pin</h4>
                                                    {isOpen.battery ? <RiArrowDropUpLine style={styles.icon} /> : <RiArrowDropDownLine style={styles.icon} />}
                                                </a>
                                                <ul className="text-specifi" style={isOpen.battery ? { ...styles.textSpecifi, ...styles.activeTextSpecifi } : styles.textSpecifi}>
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Khả năng thay dây:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>{productData.sanPham?.thong_so_dong_ho?.kha_nang_thay_day}</span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Thời gian sử dụng pin:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>{productData.sanPham?.thong_so_dong_ho?.thoi_gian_su_dung_pin}</span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Thời gian sạc:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>{productData.sanPham?.thong_so_dong_ho?.thoi_gian_sac}</span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Dung lượng pin:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>{productData.sanPham?.thong_so_dong_ho?.dung_luong_pin}</span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Cổng sạc:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>{productData.sanPham?.thong_so_dong_ho?.cong_sac}</span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />
                                                </ul>

                                            </div>
                                            {/* Cấu hình & Bộ nhớ Section */}
                                            <div className="box-specifi" style={styles.boxSpecifi}>
                                                <a href="javascript:;" onClick={() => toggleDropdown('config')} style={styles.link}>
                                                    <h4 style={styles.h4}>Cấu hình & Kết nối</h4>
                                                    {isOpen.config ? <RiArrowDropUpLine style={styles.icon} /> : <RiArrowDropDownLine style={styles.icon} />}
                                                </a>
                                                <ul className="text-specifi" style={isOpen.config ? { ...styles.textSpecifi, ...styles.activeTextSpecifi } : styles.textSpecifi}>
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Chip xử lý (CPU):</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>{productData.sanPham?.thong_so_dong_ho?.cpu}</span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Bộ nhớ trong:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>{productData.sanPham?.thong_so_dong_ho?.bo_nho_trong}</span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Hệ điều hành:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>{productData.sanPham?.thong_so_dong_ho?.he_dieu_hanh}</span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Kết nối hệ điều hành:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>{productData.sanPham?.thong_so_dong_ho?.ket_noi_he_dieu_hanh}</span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Ứng dụng quản lý:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>{productData.sanPham?.thong_so_dong_ho?.ung_dung_quan_ly}</span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Kết nối:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>{productData.sanPham?.thong_so_dong_ho?.ket_noi}</span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Định vị:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>{productData.sanPham?.thong_so_dong_ho?.dinh_vi}</span>
                                                        </aside>
                                                    </li>
                                                </ul>


                                            </div>

                                            {/* Thiết kế & Chất liệu Section */}
                                            <div className="box-specifi" style={styles.boxSpecifi}>
                                                <a href="javascript:;" onClick={() => toggleDropdown('design')} style={styles.link}>
                                                    <h4 style={styles.h4}>Thông tin khác</h4>
                                                    {isOpen.design ? <RiArrowDropUpLine style={styles.icon} /> : <RiArrowDropDownLine style={styles.icon} />}
                                                </a>
                                                <ul className="text-specifi" style={isOpen.design ? { ...styles.textSpecifi, ...styles.activeTextSpecifi } : styles.textSpecifi}>
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Sản xuất tại:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>{productData.sanPham?.thong_so_dong_ho?.san_xuat_tai}</span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Ngôn ngữ:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>{productData.sanPham?.thong_so_dong_ho?.ngon_ngu}</span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />

                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Hãng sản xuất:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>{productData.sanPham?.thong_so_dong_ho?.hang_san_xuat}</span>
                                                        </aside>
                                                    </li>
                                                    <div style={styles.itemSeparator} />
                                                    <li style={styles.textSpecifiItem}>
                                                        <aside style={styles.itemLabel}>Thời điểm ra mắt:</aside>
                                                        <aside style={styles.itemValue}>
                                                            <span style={styles.itemValueSpan}>{productData.sanPham?.thong_so_dong_ho?.thoi_diem_ra_mat}</span>
                                                        </aside>
                                                    </li>
                                                </ul>

                                            </div>




                                        </div>
                                    </div>



                                ) : null}
                            </div>


                            {/* Reviews Tab */}
                            <div id="des-details2" className={`tab-pane ${activeTab === 'des-details2' ? 'active' : ''}`}>
                                <div className="row">
                                    <div className="col-lg-7">
                                        <div className="review-wrapper">
                                            <div className="single-review">
                                                <div className="review-img">
                                                    <img src={testimonial1} alt="Testimonial" />
                                                </div>
                                                <div className="review-content">
                                                    <div className="review-top-wrap">
                                                        <div className="review-left">
                                                            <div className="review-name">
                                                                <h4 style={styles.h4}>White Lewis</h4>
                                                            </div>
                                                            <div className="review-rating">
                                                                <IoMdStar className="star-filled" />
                                                                <IoMdStar className="star-filled" />
                                                                <IoMdStar className="star-filled" />
                                                                <IoMdStar className="star-filled" />
                                                                <IoMdStar className="star-filled" />
                                                            </div>
                                                        </div>
                                                        <div className="review-right">
                                                            <a href="#">Reply</a>
                                                        </div>
                                                    </div>
                                                    <div className="review-bottom">
                                                        <p>Vestibulum ante ipsum primis aucibus orci luctus et ultrices posuere cubilia Curae Suspendisse viverra ed viverra. Mauris ullamcorper euismod vehicula. Phasellus quam nisi, congue id nulla.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-review child-review">
                                                <div className="review-img">
                                                    <img src={testimonial2} alt="Testimonial" />
                                                </div>
                                                <div className="review-content">
                                                    <div className="review-top-wrap">
                                                        <div className="review-left">
                                                            <div className="review-name">
                                                                <h4 style={styles.h4}>John Doe</h4>
                                                            </div>
                                                            <div className="review-rating">
                                                                <IoMdStar className="star-filled" />
                                                                <IoMdStar className="star-filled" />
                                                                <IoMdStar className="star-filled" />
                                                                <IoMdStar className="star-filled" />
                                                                <IoMdStar className="star-filled" />
                                                            </div>
                                                        </div>
                                                        <div className="review-right">
                                                            <a href="#">Reply</a>
                                                        </div>
                                                    </div>
                                                    <div className="review-bottom">
                                                        <p>Vestibulum ante ipsum primis aucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse viverra ed viverra. Mauris ullamcorper euismod vehicula.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="ratting-form-wrapper pl-50">
                                            <h4 style={styles.h4}>Add a Review</h4>
                                            <div className="ratting-form">
                                                <form action="#">
                                                    <div className="star-box">
                                                        <span>Your rating:</span>
                                                        <div className="ratting-star">
                                                            <IoMdStar className="star-filled" />
                                                            <IoMdStar className="star-filled" />
                                                            <IoMdStar className="star-filled" />
                                                            <IoMdStar className="star-filled" />
                                                            <IoMdStar className="star-filled" />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="rating-form-style mb-10">
                                                                <input placeholder="Name" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="rating-form-style mb-10">
                                                                <input placeholder="Email" type="email" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="rating-form-style form-submit">
                                                                <textarea name="Your Review" placeholder="Message" defaultValue={""} />
                                                                <input type="submit" value="Submit" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="product-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title text-center mb-50">
                        <h2>Sản phẩm liên quan</h2>
                    </div>
                    <div className="tab-content jump">
                        <div className="tab-pane active" id="product-2">
                            <div className="row">
                                <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                    <div className="product-wrap mb-25">
                                        <div className="product-img">
                                            <a href="/chi-tiet-san-pham">
                                                <img className="default-img" src={product4} />
                                                <img className="hover-img" src={product4} />
                                            </a>
                                            <span className="pink">-10%</span>
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
                                            <h4 style={styles.h4}><a href="/chi-tiet-san-pham">Product Title Here</a></h4>
                                            <div className="product-rating">
                                                <IoMdStar className="star-filled" />
                                                <IoMdStar className="star-filled" />
                                                <IoMdStar className="star-filled" />
                                                <IoMdStarOutline className="star-empty" />
                                                <IoMdStarOutline className="star-empty" />
                                            </div>
                                            <div className="product-price">
                                                <span>$ 60.00</span>
                                                <span className="old">$ 60.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                    <div className="product-wrap mb-25">
                                        <div className="product-img">
                                            <a href="/chi-tiet-san-pham">
                                                <img className="default-img" src={product3} />
                                                <img className="hover-img" src={product3} />
                                            </a>
                                            <span className="purple">New</span>
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
                                            <h4 style={styles.h4}><a href="/chi-tiet-san-pham">Product Title Here</a></h4>
                                            <div className="product-rating">
                                                <IoMdStar className="star-filled" />
                                                <IoMdStar className="star-filled" />
                                                <IoMdStar className="star-filled" />
                                                <IoMdStarOutline className="star-empty" />
                                                <IoMdStarOutline className="star-empty" />
                                            </div>
                                            <div className="product-price">
                                                <span>$ 60.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                    <div className="product-wrap mb-25">
                                        <div className="product-img">
                                            <a href="/chi-tiet-san-pham">
                                                <img className="default-img" src={product2} />
                                                <img className="hover-img" src={product2} />
                                            </a>
                                            <span className="pink">-10%</span>
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
                                            <h4 style={styles.h4}><a href="/chi-tiet-san-pham">Product Title Here</a></h4>
                                            <div className="product-rating">
                                                <IoMdStar className="star-filled" />
                                                <IoMdStar className="star-filled" />
                                                <IoMdStar className="star-filled" />
                                                <IoMdStarOutline className="star-empty" />
                                                <IoMdStarOutline className="star-empty" />
                                            </div>
                                            <div className="product-price">
                                                <span>$ 60.00</span>
                                                <span className="old">$ 60.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                    <div className="product-wrap mb-25">
                                        <div className="product-img">
                                            <a href="/chi-tiet-san-pham">
                                                <img className="default-img" src={product1} />
                                                <img className="hover-img" src={product1} />
                                            </a>
                                            <span className="purple">New</span>
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
                                            <h4 style={styles.h4}><a href="/chi-tiet-san-pham">Product Title Here</a></h4>
                                            <div className="product-rating">
                                                <IoMdStar className="star-filled" />
                                                <IoMdStar className="star-filled" />
                                                <IoMdStar className="star-filled" />
                                                <IoMdStarOutline className="star-empty" />
                                                <IoMdStarOutline className="star-empty" />
                                            </div>
                                            <div className="product-price">
                                                <span>$ 60.00</span>
                                            </div>
                                        </div>
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
export default ShopDetails;

// Hàm để lấy màu sắc nếu không có trong CSS
function getBackgroundColor(color) {
    switch (color.toLowerCase()) {
        case 'black':
            return '#000000'; // Màu đen
        case 'blue':
            return '#4798f3'; // Màu xanh dương
        case 'maroon':
            return '#736751'; // Màu nâu đỏ
        case 'gray':
            return '#c0c0c0'; // Màu xám
        case 'green':
            return '#139c57'; // Màu xanh lá cây
        case 'yellow':
            return '#e28b37'; // Màu vàng
        case 'red':
            return '#e28b37'; // Màu đỏ
        case 'white':
            return '#ffffff'; // Màu trắng
        case 'silver':
            return '#c0c0c0'; // Màu bạc
        case 'gold':
            return '#d4af37'; // Màu vàng kim loại
        case 'green':
            return '#004b49'; // Màu xanh đêm (Apple)
        case 'purple':
            return '#6a0dad'; // Màu tím đậm
        case 'aqua':
            return '#00ffff'; // Màu aqua
        default:
            return '#000000'; // Màu mặc định nếu không có trong danh sách
    }
}
