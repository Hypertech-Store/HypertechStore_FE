import React from "react";
import { Link } from 'react-router-dom';

const UserAdd = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3">
          <div className="iq-card">
            <div className="iq-card-header d-flex justify-content-between">
              <div className="iq-header-title">
                <h4 className="card-title">Add New User</h4>
              </div>
            </div>
            <div className="iq-card-body">
              <form>
                <div className="form-group">
                  <div className="add-img-user profile-img-edit">
                    <img
                      className="profile-pic img-fluid"
                      src="../src/assets/images/user/1.jpg"
                      alt="profile-pic"
                    />
                    <div className="p-image">
                      <label
                        htmlFor="file-upload"
                        className="upload-button btn iq-bg-primary"
                      >
                        File Upload
                      </label>
                      <input
                        className="file-upload"
                        type="file"
                        id="file-upload"
                        accept="image/*"
                      />
                    </div>
                  </div>
                  <div className="img-extension mt-3">
                    <div className="d-inline-block align-items-center">
                      <span>Only</span>
                      <a href="javascript:void();">.jpg</a>
                      <a href="javascript:void();">.png</a>
                      <a href="javascript:void();">.jpeg</a>
                      <span>allowed</span>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>User Role:</label>
                  <select className="form-control" id="selectuserrole">
                    <option>Select</option>
                    <option>Web Designer</option>
                    <option>Web Developer</option>
                    <option>Tester</option>
                    <option>Php Developer</option>
                    <option>Ios Developer </option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="furl">Facebook Url:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="furl"
                    placeholder="Facebook Url"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="turl">Twitter Url:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="turl"
                    placeholder="Twitter Url"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="instaurl">Instagram Url:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="instaurl"
                    placeholder="Instagram Url"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lurl">Linkedin Url:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lurl"
                    placeholder="Linkedin Url"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="iq-card">
            <div className="iq-card-header d-flex justify-content-between">
              <div className="iq-header-title">
                <h4 className="card-title">New User Information</h4>
              </div>
            </div>
            <div className="iq-card-body">
              <div className="new-user-info">
                <form>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label htmlFor="fname">First Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="fname"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="lname">Last Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="lname"
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="add1">Street Address 1:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="add1"
                        placeholder="Street Address 1"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="add2">Street Address 2:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="add2"
                        placeholder="Street Address 2"
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <label htmlFor="cname">Company Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cname"
                        placeholder="Company Name"
                      />
                    </div>
                    <div className="form-group col-sm-12">
                      <label>Country:</label>
                      <select className="form-control" id="selectcountry">
                        <option>Select Country</option>
                        <option>Caneda</option>
                        <option>Noida</option>
                        <option>USA</option>
                        <option>India</option>
                        <option>Africa</option>
                      </select>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="mobno">Mobile Number:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="mobno"
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="altconno">Alternate Contact:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="altconno"
                        placeholder="Alternate Contact"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="email">Email:</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="pno">Pin Code:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="pno"
                        placeholder="Pin Code"
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <label htmlFor="city">Town/City:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        placeholder="Town/City"
                      />
                    </div>
                  </div>
                  <hr />
                  <h5 className="mb-3">Security</h5>
                  <div className="row">
                    <div className="form-group col-md-12">
                      <label htmlFor="uname">User Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="uname"
                        placeholder="User Name"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="pass">Password:</label>
                      <input
                        type="password"
                        className="form-control"
                        id="pass"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="rpass">Repeat Password:</label>
                      <input
                        type="password"
                        className="form-control"
                        id="rpass"
                        placeholder="Repeat Password "
                      />
                    </div>
                  </div>
                  <div className="d-flex gap-3">
                  <button type="submit" className="btn btn-primary mt-3">
                    Add New User
                  </button>

                  <Link to={'/admin/user-list'} className="btn btn-outline-primary mt-3">
                    Back
                  </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAdd;
