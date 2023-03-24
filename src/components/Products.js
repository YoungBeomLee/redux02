import React ,{useState}from "react";
import { connect } from "react-redux";
import { addProduct, removeProduct } from "../redux";
import "../App.css";

const Products = ({ count, addProduct, removeProduct }) => {
  const [number, setNumber] = useState(1);
  return (
    <div className="items">
      <p>상품갯수:{count}</p>
      <input
        type="text"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <button onClick={() => {addProduct(number)}}>등록하기</button>
      <button onClick={() => {removeProduct(number)}}>삭제하기</button>
    </div>
  );
};
const mapStateToProps = ({products}) => {
  console.log(products);
  return { count:products.count };
  
};

/*const mapDispatchToProps = () => {
  return {
    addProduct: addProduct,
    removeProduct: removeProduct,
    
  };
};*/

const mapDispatchToProps={
  addProduct: (number) => addProduct(number),
  removeProduct: (number) => removeProduct(number),
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
