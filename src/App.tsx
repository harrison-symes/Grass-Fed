import { createBrowserHistory } from "history";
import Router from "./Router";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./configureStore";

const App = () => {
  console.log(store.getState());

  return (
    <Provider store={store}>
      <h1>TEST</h1>
      <div className="App">
        <Router />
      </div>
    </Provider>
  );
};

export default App;
