const Footer = () => {
  return (
    <div>
      <footer className="iq-footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <ul className="list-inline mb-0">
                <li className="list-inline-item"><a href="privacy-policy.html">Privacy Policy</a></li>
                <li className="list-inline-item"><a href="terms-of-service.html">Terms of Use</a></li>
              </ul>
            </div>
            <div className="col-lg-6 text-right">
              Copyright <span id="copyright">
              </span> <a href="#">Vito</a> All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
      <nav className="iq-float-menu">
        <input type="checkbox" href="#" className="iq-float-menu-open" name="menu-open" id="menu-open" />
        <label className="iq-float-menu-open-button" htmlFor="menu-open">
          <span className="lines line-1" />
          <span className="lines line-2" />
          <span className="lines line-3" />
        </label>
        <button className="iq-float-menu-item bg-info" data-toggle="tooltip" data-placement="top" title="Direction Mode" data-mode="rtl"><i className="ri-text-direction-r" /></button>
        <button className="iq-float-menu-item bg-danger" data-toggle="tooltip" data-placement="top" title="Color Mode" id="dark-mode" data-active="true"><i className="ri-sun-line" /></button>
        <button className="iq-float-menu-item bg-warning" data-toggle="tooltip" data-placement="top" title="Comming Soon"><i className="ri-palette-line" /></button>
      </nav>
    </div>

  );
};
export default Footer;
