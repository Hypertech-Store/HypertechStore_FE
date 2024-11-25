import { useState, useEffect } from 'react';
import { CiBookmarkRemove } from "react-icons/ci";
import { toast } from "react-toastify";
import haha from "../../../../assets/img/cart/image-removebg-preview.png";

// Mock function to simulate getting the logged-in user’s ID
const getUserId = () => {
    return localStorage.getItem('userId') || 1;  // Assuming the userId is stored in localStorage
};

function Wishlist() {
    const [userId] = useState(() => localStorage.getItem('userId'));
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const userId = getUserId();
        fetch(`http://127.0.0.1:8000/api/danh-sach-yeu-thich/${userId}`)
            .then(response => response.json())
            .then(data => {
                const productList = data.map(item => ({
                    image: item.san_pham.duong_dan_anh,
                    name: item.san_pham.ten_san_pham,
                    price: parseFloat(item.san_pham.gia),
                    stock: item.san_pham.so_luong_ton_kho,
                    id: item.san_pham_id
                }));
                setProducts(productList);
            })
            .catch(error => console.error('Error fetching wishlist data:', error));
    }, []);

    const removeFromWishlist = (productId) => {
        const userId = getUserId();
        fetch(`http://127.0.0.1:8000/api/danh-sach-yeu-thich/destroy`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                khach_hang_id: userId, // Send userId in the body
                san_pham_id: productId, // Send productId in the body
            }),
        })
            .then(response => {
                if (response.ok) {
                    setProducts(prevProducts => prevProducts.filter(product => product.id !== productId)); // Remove product from list
                    toast.success('Bạn đã xóa thành công sản phẩm yêu thích!');
                } else {
                    console.error('Failed to remove product from wishlist');
                }
            })
            .catch(error => console.error('Error:', error));
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

    return (
        <div className="cart-main-area pt-90 pb-100">
            {products.length > 0 ? (
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
                                                <th>Tình trạng kho</th>
                                                <th>Hành động</th>
                                                <th>Thêm giỏ hàng</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {products.map((product) => (
                                                <tr key={product.id}>
                                                    <td className="product-thumbnail">
                                                        <a href="#"><img src={product.image} alt={product.name} style={{ width: '170px', height: '150px' }} /></a>
                                                    </td>
                                                    <td className="product-name"><a href="#">{product.name}</a></td>
                                                    <td className="product-price-cart">
                                                        <span className="amount">{new Intl.NumberFormat('vi-VN').format(product.price)} VNĐ</span>
                                                    </td>
                                                    <td className="product-wishlist-cart">
                                                        {product.stock > 0 ? (
                                                            <a style={{ backgroundColor: '#28a745', color: 'white', padding: '7px 15px', borderRadius: '50px' }}>Còn hàng</a>
                                                        ) : (
                                                            <a style={{ backgroundColor: '#ff0000', color: 'white', padding: '7px 15px', borderRadius: '50px' }}>Hết hàng</a>
                                                        )}
                                                    </td>
                                                    <td className="product-wishlist-cart">
                                                        <CiBookmarkRemove
                                                            style={{ fontSize: '22px', marginRight: '15px', cursor: 'pointer' }}
                                                            onClick={() => removeFromWishlist(product.id)} // Call removeFromWishlist when clicked
                                                        />
                                                    </td>

                                                    <td className="product-wishlist-cart">
                                                        <a
                                                            href="#"
                                                            onClick={(e) => {
                                                                if (product.stock === 0) {
                                                                    e.preventDefault(); // Prevent action if out of stock
                                                                } else {
                                                                    addToCart(product.id, product.price); // Call addToCart if in stock
                                                                }
                                                            }}
                                                            style={{
                                                                display: 'inline-block',
                                                                padding: '7px 15px',
                                                                borderRadius: '50px',
                                                                textDecoration: 'none',
                                                                backgroundColor: product.stock > 0 ? '#28a745' : '#cccccc',
                                                                color: product.stock > 0 ? '#fff' : '#666666',
                                                                pointerEvents: product.stock > 0 ? 'auto' : 'none',
                                                                cursor: product.stock > 0 ? 'pointer' : 'not-allowed',
                                                                border: product.stock > 0 ? '2px solid transparent' : 'none',
                                                                transition: 'background-color 0.3s ease, color 0.3s ease, border 0.3s ease'
                                                            }}
                                                            onMouseEnter={(e) => {
                                                                if (product.stock > 0) {
                                                                    e.target.style.backgroundColor = '#fff';
                                                                    e.target.style.color = '#28a745';
                                                                    e.target.style.border = '2px solid #28a745';
                                                                }
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                if (product.stock > 0) {
                                                                    e.target.style.backgroundColor = '';
                                                                    e.target.style.color = '#fff';
                                                                    e.target.style.border = '2px solid transparent';
                                                                }
                                                            }}
                                                        >
                                                            {product.stock > 0 ? 'Thêm giỏ hàng' : 'Hết hàng'}
                                                        </a>
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
            ) : (
                <div className="container" style={{ textAlign: 'center' }}>
                    <img
                        src={haha}
                        alt="Không có sản phẩm"
                        style={{ marginBottom: '20px' }}
                    />
                    <p style={{ fontSize: '18px', color: '#999' }}>
                        Hiện tại bạn chưa có sản phẩm nào trong danh sách yêu thích.
                    </p>
                </div>
            )}
        </div>

    );
}

export default Wishlist;
