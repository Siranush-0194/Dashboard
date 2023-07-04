import { BrowserRouter as Route, Router, Routes } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";


function App() {
  return (
{/* <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="product" element={<Products />} /> */}
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        {/* </Route>
      </Routes>
    </Router> */}
    <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Nested routes */}
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
