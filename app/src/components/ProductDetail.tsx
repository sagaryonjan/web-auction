import React from "react";

const ProductDetail = () => {
  return (
    <>
      <div className="product-info mt-5">
        <div className="container">
          <div className="row">
            <div className="col-xs-1 col-sm-6 col-md-6">
              <div className="card shadow border-0">
                <img
                  className="card-img-top h-100"
                  src="../images/gramophone.jpeg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xs-1 col-sm-6 col-md-6">
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <h2>Current bid: $68.00</h2>
              <hr />
              <div className="">
                <span>Time left:</span>
                <p>21 Days 9 hours 52 minutes 12 seconds</p>
              </div>
              <div className="">
                <span>Auction ends:</span>
                <p> December 12, 2021 12:00 am</p>
              </div>
              <div className="form-group">
                <label className="mb-2">Enter your Bid Amount:</label>
                <input type="number" className="form-control" />
              </div>
              <div className="mt-4">
                <a href="#" className="btn btn-primary">
                  Bid Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
