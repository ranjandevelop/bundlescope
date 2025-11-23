import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

// Pages
import { Home } from "./pages/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          {/* <Route index element={<Home />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
