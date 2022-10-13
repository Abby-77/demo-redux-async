import "./styles.css";
import store from "./store";
import { Provider } from "react-redux";
import Numbers from "./pages/Numbers";
import Add from "./pages/Add";
import Sub from "./pages/Sub";
import Odd from "./pages/Odd";
import Async from "./pages/Async";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Numbers />
        <Add />
        <Sub />
        <Odd />
        <Async />
      </div>
    </Provider>
  );
}
