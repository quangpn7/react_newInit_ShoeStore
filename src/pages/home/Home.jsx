import React from "react";
import { Carousel } from "antd";
import { useDispatch, useSelector } from "react-redux";
import ShoesCard from "../../components/ShoesCard/ShoesCard";
import axios from "axios";
import { useEffect } from "react";
import { getProductAction } from "../../redux/reducers/productReducer";
const contentStyle = {
  height: "400px",
  color: "#fff",
  lineHeight: "1",
  // textAlign: "center",
  background: "#364d79",
};

const Home = () => {
  const { arrProduct } = useSelector((state) => state.productReducer);

  const dispatch = useDispatch();
  const getAllProduct = async () => {
    const result = await axios({
      url: "https://shop.cyberlearn.vn/api/Product",
      method: "GET",
    });

    const action = getProductAction(result.data.content);
    dispatch(action);
  };
  /**
   * action 1: {type, payload}
   * action 2: async action không phải là object mà là function (dispatch2) => {
   * }
   *
   */
  useEffect(() => {
    getAllProduct();
  }, []);
  return (
    <>
      <Carousel dotPosition="bottom">
        {arrProduct.slice(0, 4).map((product, index) => {
          return (
            <div key={index}>
              <div style={contentStyle} className="d-flex align-items-center">
                <div className="w-50 d-flex justify-content-center">
                  <img
                    src={product.image}
                    alt="..."
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="w-50 text-start">
                  <h3>{product.name}</h3>
                  <p>{product.shortDescription}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
      <div className="container">
        <h3 className="text-center display-4 my-5 fw-bold">Product Featured</h3>
        <div className="row g-4">
          {arrProduct.map((product, index) => {
            return (
              <div className="col-4" key={product.id}>
                <ShoesCard product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
