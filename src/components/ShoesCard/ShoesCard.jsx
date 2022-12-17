import React from "react";
import { NavLink } from "react-router-dom";

const ShoesCard = (props) => {
  const { product } = props;
  return (
    <div className="card">
      <img src={product?.image} alt="..." className="w-100" />
      <div className="card-body">
        <h3>{product?.name}</h3>

        <p className="badge bg-danger  text-white fs-5 fw-bold">
          $ {product?.price}
        </p>
        <p className="mb-3">{product.shortDescription}</p>

        <NavLink
          className="btn  btn-primary px-5"
          to={`/detail/${product?.id}`}
        >
          View
        </NavLink>
      </div>
    </div>
  );
};

export default ShoesCard;
