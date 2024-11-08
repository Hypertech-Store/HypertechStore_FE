import logoImage from '../../../../assets/img/logo/logo2.png'; // Import logo image

const Footer = () => {
  // Get the current year
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-area bg-gray pt-100 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-4 col-sm-4">
            <div className="copyright mb-30">
              <div className="footer-logo" style={{ marginTop: -25, marginLeft: -10 }} >
                <a href="/">
                  {/* Add marginLeft to move the logo 10px to the left */}
                  <img src={logoImage} alt="Hypertech Store Logo" style={{ width: '200px', height: '70px' }} />
                </a>
              </div>
              <p>© {currentYear} Hypertech Store.<br /> All Rights Reserved</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="footer-widget mb-30 ml-70">
              <div className="footer-title">
                <h3>TỔNG ĐÀI HỖ TRỢ</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    Gọi mua: <a href="tel:1900232460" style={{ color: '#2f80ed', fontWeight: '550' }}>1900 232 460</a> (8:00 - 21:30)
                  </li>
                  <li>
                    Khiếu nại: <a href="tel:18001062" style={{ color: '#2f80ed', fontWeight: '550' }}>1800.1062</a> (8:00 - 21:30)
                  </li>
                  <li>
                    Bảo hành: <a href="tel:1900232464" style={{ color: '#2f80ed', fontWeight: '550' }}>1900 232 464</a> (8:00 - 21:00)
                  </li>
                </ul>
              </div>
            </div>
          </div>


          <div className="col-lg-2 col-md-4 col-sm-4">
            <div className="footer-widget mb-30 ml-30">
              <div className="footer-title">
                <h3>VỀ CHÚNG TÔI</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li><a href="/gioi-thieu">Giới thiệu</a></li>
                  <li><a href="#">Tìm cửa hàng</a></li>
                  <li><a href="/lien-he">Liên hệ</a></li>
                  <li><a href="#">Orders tracking</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="footer-widget mb-30 ml-70">
              <div className="footer-title">
                <h3>MUA NGAY</h3>
              </div>
              <div className="subscribe-style">
                <p>Nhập email để nhận thông báo những sản phẩm mới nhất và các ưu đãi đặc biệt của chúng tôi.</p>
                <div id="mc_embed_signup" className="subscribe-form">
                  <form id="mc-embedded-subscribe-form" className="validate" noValidate target="_blank" name="mc-embedded-subscribe-form" method="post" action="https://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef">
                    <div id="mc_embed_signup_scroll" className="mc-form">
                      <input className="email" type="email" required placeholder="Nhập email của bạn vào đây..." name="EMAIL" />
                      <div className="mc-news" aria-hidden="true">
                        <input type="text" defaultValue tabIndex={-1} name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef" />
                      </div>
                      <div className="clear">
                        <input id="mc-embedded-subscribe" className="button" type="submit" name="subscribe" value="Đăng ký" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
