const Footer = () => {
  return (
    <footer
      className="content-footer footer"
      style={{
        backgroundColor: "#ccc", // Màu nền
        backgroundSize: "cover", // Kích thước ảnh phủ toàn bộ
        color: "#fff", // Màu chữ
      }}
    >
      <div className="container">
        <div className="footer-container d-flex align-items-center justify-content-between py-3 flex-column">
          <div className="text-body">
            © 2024, made with ❤️ by{" "}
            <a
              href="https://themeselection.com/"
              target="_blank"
              className="footer-link"
            >
              HypertechStore
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
