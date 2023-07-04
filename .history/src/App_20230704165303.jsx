import {Route, Router, Routes } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";


function App() {
  return (

    <Router>
        <Route  element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route  element={<Products />} />
         
        </Route>
        </Router>
      
 

  );
}

export default App;
