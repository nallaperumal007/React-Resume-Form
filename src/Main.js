// Main.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import DataTable from './DataTable';
import Details from './Details';

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/data-table" element={<DataTable />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default Main;
