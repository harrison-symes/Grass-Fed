import { createBrowserHistory } from "history";
import Router from "./Router";
import { createStore } from "./configureStore";
import { Provider } from "react-redux";

const App = () => {
  const history = createBrowserHistory();

  const store = createStore(history);
  console.log(store.getState());

  return (
    <Provider store={store}>
      <div className="App">
        <Router />
      </div>
    </Provider>
  );
};

export default App;
