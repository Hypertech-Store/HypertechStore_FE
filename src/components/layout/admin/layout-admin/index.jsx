import { Outlet } from "react-router-dom"
import HeaderAdmin from "../header-admin"
import SliderBarAdmin from "../slidebar-admin"
import FooterAdmin from "../footer-admin"


// Import các tệp CSS (nếu bạn sử dụng Webpack hoặc Vite, bạn có thể import trực tiếp)
import '../../../../assets/vendor/fonts/boxicons.css';
import '../../../../assets/vendor/fonts/fontawesome.css';
import '../../../../assets/vendor/fonts/flag-icons.css';
import '../../../../assets/vendor/css/rtl/theme-default.css';
import '../../../../assets/css/demo.css';
import '../../../../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css';
import '../../../../assets/vendor/libs/typeahead-js/typeahead.css';
import '../../../../assets/vendor/libs/apex-charts/apex-charts.css';


// Import các thư viện JavaScript
import '../../../../assets/vendor/libs/jquery/jquery.js';
import '../../../../assets/vendor/libs/popper/popper.js';
import '../../../../assets/vendor/js/bootstrap.js';
import '../../../../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js';
import '../../../../assets/vendor/libs/hammer/hammer.js';
// import '../../../../assets/vendor/libs/i18n/i18n.js';
import '../../../../assets/vendor/libs/typeahead-js/typeahead.js';
import '../../../../assets/vendor/js/menu.js';

// Vendors JS
import '../../../../assets/vendor/libs/apex-charts/apexcharts.js';
import '../../../../assets/vendor/js/helpers.js';
import '../../../../assets/js/config.js';
import '../../../../assets/js/main.js';
import '../../../../assets/js/dashboards-analytics.js';


const LayoutAdmin = () => {
  document.title = "HyperTechStore – Dashboard"
  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <SliderBarAdmin />
          <div id="content-page" style={{}}>
            <HeaderAdmin />
            <Outlet />
          </div>
        </div>
      </div>
      <FooterAdmin />
    </>
  )
}

export default LayoutAdmin