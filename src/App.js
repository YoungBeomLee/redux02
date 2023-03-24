import Products from "./components/Products";
import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import Display from "./components/Display";
import Carts from "./components/Carts";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Products></Products>
        <Display/>
        <Carts></Carts>
      </div>
    </Provider>
  );
}

export default App;
