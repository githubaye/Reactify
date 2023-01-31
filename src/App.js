import { Provider } from "react-redux";
import GlobalContextProvider from "./Hooks/GlobalContext";
import Myroutes from "./Myroutes";
import { myStore } from "./Hooks/Redux/store";
import { createStore } from "redux";
import counterReducer from "./Hooks/Redux/CounterReducer";
function App() {
  const myStore = createStore(counterReducer);
  return (
    <>
      <Provider store={myStore}>
        <GlobalContextProvider>
          <Myroutes />
        </GlobalContextProvider>
      </Provider>
    </>
  );
}

export default App;
