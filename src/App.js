import "./App.css";
import { Header } from "./components/Header";
import Main from "./components/Main";
import { Routes, Route } from "react-router";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
      </Routes>
    </div>
  );
}

export default App;
