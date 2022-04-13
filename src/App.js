import React from "react";
import MainLayout from "./screens/MainLayout/MainLayout";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// screens
import Users from "./screens/Users/Users";
import Analitika from "./screens/Analitika/Analitika";
import AddPrescription from "./screens/AddPrescription/AddPrescription";

function App () {
  return(
    <Router>
      <div className="app">
        <main>
          <Routes>
            <Route  path="/" element={<MainLayout />} />
            <Route  path="/users" element={<Users />} />
            <Route  path="/analitika" element={<Analitika />} />
            <Route  path="/addPrescription" element={<AddPrescription />} />
          </Routes>
        </main>
      </div>
    </Router>
    
  )
}

export default App;