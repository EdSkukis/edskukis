import React from 'react';
import Navbar from './components/Navbar';
import Chart from './components/Chart';
import DataTable from './components/DataTable';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Data Analyst Portfolio</h1>
        <Chart />
        <DataTable />
      </main>
    </div>
  );
}

export default App;