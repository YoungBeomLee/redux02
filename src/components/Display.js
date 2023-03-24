import React from "react";
import { connect } from "react-redux";
import "../App.css";

const Display = ({ count }) => {
  return (
    <div className="items">
      <p>디스플레이 카테고리 상품갯수:{count}</p>
    </div>
  );
};
const mapStateToProps = ({products}) => {
  return { count: products.count };
};

export default connect(mapStateToProps)(Display);
