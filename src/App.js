import logo from "./logo.svg";
import "./App.css";
import { User } from "./component/User";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <User />
      </div>
    </UserContextProvider>
  );
}

export default App;
