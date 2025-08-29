import React, { useEffect } from "react";
import { DataTable } from "simple-datatables";

const DataTableCard = () => {
  useEffect(() => {
    const table = document.getElementById("datatablesSimple");
    if (table) {
      new DataTable(table);
    }
  }, []);

  return (
    <div className="row">
      <div className="col-xl-6">
       <div className="card my-4">
          <div className="card-header">
  <i className="fas fa-table me-1"></i>
            Data Produk
          </div>
          <div className="card-body">     
      
              
    <table id="datatablesSimple">
  <thead>
    <tr>
      <th>Name</th>
      <th>Position</th>
      <th>Office</th>
      <th>Age</th>
      <th>Start date</th>
      <th>Salary</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Donna Snider</td>
      <td>Customer Support</td>
      <td>New York</td>
      <td>27</td>
      <td>2011/01/25</td>
      <td>$112,000</td>
    </tr>
    
    <tr>
      <td>mon</td>
      <td>Customer Support</td>
      <td>New York</td>
      <td>27</td>
      <td>2011/01/25</td>
      <td>$112,000</td>
    </tr>
  </tbody>
</table>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTableCard;