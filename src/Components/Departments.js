import React from "react";
import { Link } from "react-router-dom";

const imgStyles = {
  width: "100%",
  height: "100%",
  objectFit: "contain",
};

const Departments = () => {
  return (
    <>
      <div className="container">
        <div className="card-group my-4 ">
          <div className="card">
            <img
              src="./categoryImages/Cars.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                <Link to="#">card title </Link>
              </h5>
              <p className="card-text"></p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              style={imgStyles}
              src="./categoryImages/Diamonds.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                <Link to="#">card title</Link>
              </h5>
              <p className="card-text"></p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              style={imgStyles}
              src="./categoryImages/Sneakers.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                <Link to="#">card title </Link>
              </h5>
              <p className="card-text"></p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              style={imgStyles}
              src="./categoryImages/Laptops.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                <Link to="#">card title </Link>
              </h5>
              <p className="card-text"></p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Departments;
