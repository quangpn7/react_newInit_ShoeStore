import React from "react";
import { Carousel } from "antd";
const contentStyle = {
  height: "10rem",
  color: "#fff",
  lineHeight: "10rem",
  textAlign: "center",
  background: "#364d79",
};
const Home = () => {
  return (
    <Carousel autoplay dotPosition="bottom">
      <div>
        <h3 style={contentStyle}>
          <img src="https://picsum.photos/id/21/2000/360" alt="..." />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          {" "}
          <img src="https://picsum.photos/id/22/2000/360" alt="..." />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          {" "}
          <img src="https://picsum.photos/id/44/2000/360" alt="..." />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          {" "}
          <img src="https://picsum.photos/id/1/2000/360" alt="..." />
        </h3>
      </div>
    </Carousel>
  );
};

export default Home;
