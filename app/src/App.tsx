import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import AppBody from "./components/AppBody";

const App = () => {
  return (
    <div>
      <NavBar />
      <AppBody />
    </div>
  );
};

export default App;
