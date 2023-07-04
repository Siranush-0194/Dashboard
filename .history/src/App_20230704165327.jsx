import {Route, Router, Routes } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";


function App() {
  return (

    <Router>
      <Routes>
        <Route  element={<Layout />}>
          <Route element={<Dashboard />} />
          <Route  element={<Products />} />
         
        </Route>
        </Routes>
        </Router>
      
 

  );
}

export default App;
