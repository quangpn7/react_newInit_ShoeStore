import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";

import ShoesCard from "../../components/ShoesCard/ShoesCard";
import { useEffect } from "react";
import { getProductDetail } from "../../redux/reducers/productReducer";

const Detail = () => {
  const { productDetail } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const params = useParams();

  const getProductById = async () => {
    const result = await axios({
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${params.id}`,
      method: "GET",
    });
    const action = getProductDetail(result.data.content);
    console.log(result.data.content);
    dispatch(action);
  };
  useEffect(() => {
    getProductById();
  }, [params.id]);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-4">
          <img src={productDetail?.image} alt="..." className="w-100" />
        </div>
        <div className="col-8">
          <h3 className="display-5">{productDetail?.name}</h3>
          <p className="badge bg-danger text-white fw-bold fs-3">
            $ {productDetail?.price}
          </p>
          <p className="fs-4">{productDetail.description}</p>
          <button className="btn btn-lg btn-dark">
            Add to cart <i className="fas fa-cart-plus    "></i>
          </button>
        </div>
      </div>
      <div className="mt-2">
        <h3 className="display-4 text-center fw-bold">Related Product</h3>
        <div className="row g-4 mb-5">
          {productDetail?.relatedProducts?.map((product) => {
            return (
              <div className="col-4" key={product.id}>
                <ShoesCard product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Detail;
