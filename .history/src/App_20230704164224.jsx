import { BrowserRouter as Route, Router, Routes } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";


function App() {
  return (

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
