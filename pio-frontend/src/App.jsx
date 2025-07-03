import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Auth, Orders, Tables, Menu } from "./pages";
import Header from "./components/shared/Header";

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/tables" element={<Tables />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="*" element={<duv>Not Found</duv>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
