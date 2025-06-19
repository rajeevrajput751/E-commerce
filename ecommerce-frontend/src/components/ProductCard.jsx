import React from "react";
import { FaEye } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="col-md-4 mb-4" data-aos="zoom-in">
      <div className="card h-100 shadow-sm border-0">
        <img
          src={product.image}
          className="card-img-top"
          alt={product.name}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title fw-semibold">{product.name}</h5>
          <p className="card-text text-primary fw-bold">${product.price}</p>
          <button className="btn btn-outline-primary">
            <FaEye className="me-2" /> View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;