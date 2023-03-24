import React, { useState } from "react";
import { connect } from "react-redux";
import "../App.css";
import { addCart,removeCart} from "../redux";

const Carts = ({ count, addCart ,removeCart}) => {
  //useState Hook을 사용하여 컴포넌트 상태값 변경
  const [number, setNumber] = useState(1);
  return (
    <div className="items">
      <p>장바구니수:{count}</p>
      <input
        type="text"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <button onClick={() => addCart(number)}>장바구니 추가하기</button>
      <button onClick={() => removeCart(number)}>장바구니 삭제하기</button>
    </div>
  );
};
const mapStateToProps = ({ carts }) => {
  return { count: carts.count };
};

const mapDispatchToProps = {
  addCart: (number) => addCart(number),
  removeCart: (number) => removeCart(number),
};

export default connect(mapStateToProps, mapDispatchToProps)(Carts);
