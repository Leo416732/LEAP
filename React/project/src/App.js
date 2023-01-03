import logo from "./logo.svg";
import "./App.css";
import "../src/component/Header.js";
import Header from "../src/component/Header.js";
import Footer from "../src/component/Footer.js";
import Right from "../src/component/Right.js";
import Left from "../src/component/Left.js";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-body">
        <Left />
        <Right />
      </div>
      <Footer />
    </div>
  );
}

export default App;
