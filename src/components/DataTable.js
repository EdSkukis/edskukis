import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

export default function DataTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Papa.parse(process.env.PUBLIC_URL + '/data/sample.csv', {
      download: true,
      header: true,
      complete: results => {
        setData(results.data);
      }
    });
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Data Table</h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            {data[0] && Object.keys(data[0]).map((key) => (
              <th key={key} className="px-4 py-2 border">{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              {Object.values(row).map((val, i) => (
                <td key={i} className="px-4 py-2 border">{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}