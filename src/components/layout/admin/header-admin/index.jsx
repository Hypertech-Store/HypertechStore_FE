import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsShowSiteBarAdmin } from "../../../../redux/slice/toggleSiteBarAdminSlice";
import { Link, NavLink, useLocation } from "react-router-dom";
const Header = () => {
  const [isToggle, setIsToggle] = useState({
    user: false,
    product: false,
    auth: false,
  });

  const isShow = useSelector((state) => state.toggleSiteBarAdmin.isShow);
  const dispatch = useDispatch();
  const location = useLocation();
  return (
    <div>
      {/* <div id="loading">
        <div id="loading-center">
        </div>
      </div> */}
      <div className={`iq-sidebar ${isShow ? "sidebar-main" : ""}`}>
        <div className="iq-sidebar-logo d-flex justify-content-between">
          <a href="index.html">
            <div className="iq-light-logo">
              <div className="iq-light-logo">
                <img src="../src/assets/images/logo.gif" className="img-fluid" />
              </div>
              <div className="iq-dark-logo">
                <img src="images/logo-dark.gif" className="img-fluid" />
              </div>
            </div>
            <div className="iq-dark-logo">
              <img src="images/logo-dark.gif" className="img-fluid" />
            </div>
            <span>Hypertech</span>
          </a>
          <div className="iq-menu-bt-sidebar">
            <div className="iq-menu-bt align-self-center" onClick={() => dispatch(setIsShowSiteBarAdmin(!isShow))}>
              <div className={`wrapper-menu ${isShow ? "open" : ""}`}>
                <div className="main-circle"><i className="ri-arrow-left-s-line" /></div>
                <div className="hover-circle"><i className="ri-arrow-right-s-line" /></div>
              </div>
            </div>
          </div>
        </div>
        <div id="sidebar-scrollbar">
          <nav className="iq-sidebar-menu">
            <ul id="iq-sidebar-toggle" className="iq-menu">
              {/* <li className="iq-menu-title"><i className="ri-subtract-line" /><span>Dashboard</span></li> */}
              <NavLink to={'dashboard'} className={`${location.pathname.startsWith('dashboard') ? "active" : ""} iq-menu-item`}>
                <a className="iq-waves-effect"><i className="ri-home-4-line" /><span>Dashboard</span></a>
              </NavLink>
              {/* <li>
                <a href="dashboard-1.html" className="iq-waves-effect"><i className="ri-home-3-line" /><span>Dashboard
                  2</span></a>
              </li>
              <li>
                <a href="dashboard-2.html" className="iq-waves-effect"><i className="ri-home-8-line" /><span>Dashboard
                  3</span></a>
              </li>
              <li>
                <a href="dashboard-3.html" className="iq-waves-effect"><i className="ri-home-7-line" /><span>Dashboard
                  4</span></a>
              </li> */}
              {/* <li>
                <a href="#menu-design" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i className="ri-menu-3-line" /><span>Menu Design</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                <ul id="menu-design" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                  <li><a href="horizontal-menu.html"><i className="ri-git-commit-line" />Horizontal menu</a></li>
                  <li><a href="horizontal-top-menu.html"><i className="ri-text-spacing" />Horizontal Top Menu</a>
                  </li>
                  <li><a href="two-sidebar.html"><i className="ri-indent-decrease" />Two Sidebar</a></li>
                  <li><a href="vertical-top-menu.html"><i className="ri-line-height" />Vertical block menu</a></li>
                </ul>
              </li> */}
              {/* <li className="iq-menu-title"><i className="ri-subtract-line" /><span>Apps</span></li> */}
              {/* <li>
                <a href="#mailbox" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i className="ri-mail-line" /><span>Email</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                <ul id="mailbox" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                  <li><a href="app/index.html"><i className="ri-inbox-line" />Inbox</a></li>
                  <li><a href="app/email-compose.html"><i className="ri-edit-line" />Email Compose</a></li>
                </ul>
              </li> */}
              {/* <li><a href="todo.html" className="iq-waves-effect" aria-expanded="false"><i className="ri-chat-check-line" /><span>Todo</span></a></li> */}
              {/* <li>
                <a href="#userinfo" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded={isToggle.user} onClick={() => setIsToggle({auth: false, product: false, user: !isToggle.user})}><i className="ri-user-line" /><span>User</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                <ul id="userinfo" className={`iq-submenu collapse ${isToggle.user ? "show" : ""}`} data-parent="#iq-sidebar-toggle">
                  <li><a href="profile.html"><i className="ri-profile-line" />User Profile</a></li>
                  <li><a href="profile-edit.html"><i className="ri-file-edit-line" />User Edit</a></li>
                  <li><a href="add-user.html"><i className="ri-user-add-line" />User Add</a></li>
                  <li><Link to={'user-list'}><i className="ri-file-list-line" />User List</Link></li>
                </ul>
              </li> */}
              {/* <li className="iq-menu-item">
                <Link to={'user-list'} className="iq-waves-effect"><i className="ri-user-line" /><span>User</span></Link>
              </li> */}
              <NavLink to={'user-list'} className={`${location.pathname.startsWith('user-list') ? "active" : ""} iq-menu-item`}>
                <a className="iq-waves-effect"><i className="ri-user-line" /><span>User</span></a>
              </NavLink>
              {/* <li><a href="calendar.html" className="iq-waves-effect"><i className="ri-calendar-2-line" /><span>Calendar</span></a></li> */}
              <li className="iq-menu-item"><a href="chat.html" className="iq-waves-effect"><i className="ri-message-line" /><span>Chat</span></a>
              </li>
              <li className="iq-menu-item">
                <a href="#ecommerce" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded={isToggle.product} onClick={() => setIsToggle({auth: false, product: !isToggle.product, user: false})}><i className="ri-shopping-cart-line" /><span>E-commerce</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                <ul id="ecommerce" className={`iq-submenu collapse ${isToggle.product ? "show" : ""}`} data-parent="#iq-sidebar-toggle">
                  <li><a href="e-commerce-product-list.html"><i className="ri-file-list-line" />Product Listing</a>
                  </li>
                  <li><a href="e-commerce-product-detail.html"><i className="ri-pages-line" />Product Details</a>
                  </li>
                  <li><a href="e-commerce-checkout.html"><i className="ri-shopping-cart-2-line" />Checkout</a></li>
                  <li><a href="e-commerce-wishlist.html"><i className="ri-heart-line" />Wishlist</a></li>
                </ul>
              </li>
              {/* <li className="iq-menu-title"><i className="ri-subtract-line" /><span>Components</span></li>
              <li>
                <a href="#ui-elements" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i className="ri-pencil-ruler-line" /><span>UI Elements</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                <ul id="ui-elements" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                  <li><a href="ui-colors.html"><i className="ri-font-color" />colors</a></li>
                  <li><a href="ui-typography.html"><i className="ri-text" />Typography</a></li>
                  <li><a href="ui-alerts.html"><i className="ri-alert-line" />Alerts</a></li>
                  <li><a href="ui-badges.html"><i className="ri-building-3-line" />Badges</a></li>
                  <li><a href="ui-breadcrumb.html"><i className="ri-menu-2-line" />Breadcrumb</a></li>
                  <li><a href="ui-buttons.html"><i className="ri-checkbox-blank-line" />Buttons</a></li>
                  <li><a href="ui-cards.html"><i className="ri-bank-card-line" />Cards</a></li>
                  <li><a href="ui-carousel.html"><i className="ri-slideshow-line" />Carousel</a></li>
                  <li><a href="ui-embed-video.html"><i className="ri-slideshow-2-line" />Video</a></li>
                  <li><a href="ui-grid.html"><i className="ri-grid-line" />Grid</a></li>
                  <li><a href="ui-images.html"><i className="ri-image-line" />Images</a></li>
                  <li><a href="ui-list-group.html"><i className="ri-file-list-3-line" />list Group</a></li>
                  <li><a href="ui-media-object.html"><i className="ri-camera-line" />Media</a></li>
                  <li><a href="ui-modal.html"><i className="ri-stop-mini-line" />Modal</a></li>
                  <li><a href="ui-notifications.html"><i className="ri-notification-line" />Notifications</a></li>
                  <li><a href="ui-pagination.html"><i className="ri-pages-line" />Pagination</a></li>
                  <li><a href="ui-popovers.html"><i className="ri-folder-shield-2-line" />Popovers</a></li>
                  <li><a href="ui-progressbars.html"><i className="ri-battery-low-line" />Progressbars</a></li>
                  <li><a href="ui-tabs.html"><i className="ri-database-line" />Tabs</a></li>
                  <li><a href="ui-tooltips.html"><i className="ri-record-mail-line" />Tooltips</a></li>
                </ul>
              </li>
              <li>
                <a href="#forms" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i className="ri-profile-line" /><span>Forms</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                <ul id="forms" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                  <li><a href="form-layout.html"><i className="ri-tablet-line" />Form Elements</a></li>
                  <li><a href="form-validation.html"><i className="ri-device-line" />Form Validation</a></li>
                  <li><a href="form-switch.html"><i className="ri-toggle-line" />Form Switch</a></li>
                  <li><a href="form-chechbox.html"><i className="ri-checkbox-line" />Form Checkbox</a></li>
                  <li><a href="form-radio.html"><i className="ri-radio-button-line" />Form Radio</a></li>
                </ul>
              </li>
              <li>
                <a href="#wizard-form" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i className="ri-archive-drawer-line" /><span>Forms Wizard</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                <ul id="wizard-form" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                  <li><a href="form-wizard.html"><i className="ri-clockwise-line" />Simple Wizard</a></li>
                  <li><a href="form-wizard-validate.html"><i className="ri-clockwise-2-line" />Validate Wizard</a>
                  </li>
                  <li><a href="form-wizard-vertical.html"><i className="ri-anticlockwise-line" />Vertical Wizard</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#tables" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i className="ri-table-line" /><span>Table</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                <ul id="tables" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                  <li><a href="tables-basic.html"><i className="ri-table-line" />Basic Tables</a></li>
                  <li><a href="data-table.html"><i className="ri-database-line" />Data Table</a></li>
                  <li><a href="table-editable.html"><i className="ri-refund-line" />Editable Table</a></li>
                </ul>
              </li>
              <li>
                <a href="#charts" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i className="ri-pie-chart-box-line" /><span>Charts</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                <ul id="charts" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                  <li><a href="chart-morris.html"><i className="ri-file-chart-line" />Morris Chart</a></li>
                  <li><a href="chart-high.html"><i className="ri-bar-chart-line" />High Charts</a></li>
                  <li><a href="chart-am.html"><i className="ri-folder-chart-line" />Am Charts</a></li>
                  <li><a href="chart-apex.html"><i className="ri-folder-chart-2-line" />Apex Chart</a></li>
                </ul>
              </li>
              <li>
                <a href="#icons" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i className="ri-list-check" /><span>Icons</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                <ul id="icons" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                  <li><a href="icon-dripicons.html"><i className="ri-stack-line" />Dripicons</a></li>
                  <li><a href="icon-fontawesome-5.html"><i className="ri-facebook-fill" />Font Awesome 5</a></li>
                  <li><a href="icon-lineawesome.html"><i className="ri-keynote-line" />line Awesome</a></li>
                  <li><a href="icon-remixicon.html"><i className="ri-remixicon-line" />Remixicon</a></li>
                  <li><a href="icon-unicons.html"><i className="ri-underline" />unicons</a></li>
                </ul>
              </li>
              <li className="iq-menu-title"><i className="ri-subtract-line" /><span>Pages</span></li>
              <li>
                <a href="#authentication" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i className="ri-pages-line" /><span>Authentication</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                <ul id="authentication" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                  <li><a href="sign-in.html"><i className="ri-login-box-line" />Login</a></li>
                  <li><a href="sign-up.html"><i className="ri-login-circle-line" />Register</a></li>
                  <li><a href="pages-recoverpw.html"><i className="ri-record-mail-line" />Recover Password</a></li>
                  <li><a href="pages-confirm-mail.html"><i className="ri-file-code-line" />Confirm Mail</a></li>
                  <li><a href="pages-lock-screen.html"><i className="ri-lock-line" />Lock Screen</a></li>
                </ul>
              </li>
              <li>
                <a href="#map-page" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i className="ri-map-pin-user-line" /><span>Maps</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                <ul id="map-page" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                  <li><a href="pages-map.html"><i className="ri-google-line" />Google Map</a></li>
                  <li><a href="#"><i className="ri-map-pin-range-line" />Vector Map</a></li>
                </ul>
              </li>
              <li>
                <a href="#extra-pages" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i className="ri-pantone-line" /><span>Extra Pages</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                <ul id="extra-pages" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                  <li><a href="pages-timeline.html"><i className="ri-map-pin-time-line" />Timeline</a></li>
                  <li><a href="pages-invoice.html"><i className="ri-question-answer-line" />Invoice</a></li>
                  <li><a href="blank-page.html"><i className="ri-invision-line" />Blank Page</a></li>
                  <li><a href="pages-error.html"><i className="ri-error-warning-line" />Error 404</a></li>
                  <li><a href="pages-error-500.html"><i className="ri-error-warning-line" />Error 500</a></li>
                  <li><a href="pages-pricing.html"><i className="ri-price-tag-line" />Pricing</a></li>
                  <li><a href="pages-pricing-one.html"><i className="ri-price-tag-2-line" />Pricing 1</a></li>
                  <li><a href="pages-maintenance.html"><i className="ri-archive-line" />Maintenance</a></li>
                  <li><a href="pages-comingsoon.html"><i className="ri-mastercard-line" />Coming Soon</a></li>
                  <li><a href="pages-faq.html"><i className="ri-compasses-line" />Faq</a></li>
                </ul>
              </li>
              <li>
                <a href="#menu-level" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i className="ri-record-circle-line" /><span>Menu Level</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                <ul id="menu-level" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                  <li><a href="#"><i className="ri-record-circle-line" />Menu 1</a></li>
                  <li><a href="#"><i className="ri-record-circle-line" />Menu 2</a>
                    <ul>
                      <li>
                        <a href="#sub-menu" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i className="ri-play-circle-line" /><span>Sub-menu</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                        <ul id="sub-menu" className="iq-submenu iq-submenu-data collapse">
                          <li><a href="#"><i className="ri-record-circle-line" />Sub-menu 1</a></li>
                          <li><a href="#"><i className="ri-record-circle-line" />Sub-menu 2</a></li>
                          <li><a href="#"><i className="ri-record-circle-line" />Sub-menu 3</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><a href="#"><i className="ri-record-circle-line" />Menu 3</a></li>
                  <li><a href="#"><i className="ri-record-circle-line" />Menu 4</a></li>
                </ul>
              </li> */}
            </ul>
          </nav>
          <div className="p-3" />
        </div>
      </div>
    </div>
  );
};
export default Header;

