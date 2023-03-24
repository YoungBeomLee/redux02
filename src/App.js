import Products from "./components/Products";
import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Products></Products>
      </div>
    </Provider>
  );
}

export default App;
