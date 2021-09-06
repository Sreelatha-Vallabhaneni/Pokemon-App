import React from "react";

function CardsPerPage({ change }) {
  return (
    <div className="select">
      <div className="select-container">
        <select className="select__wrap" onChange={change}  placeholder="Select No.of Cards" >
        <option value="Select cards per page">Select cards per page</option> 
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
    </div>
  );
}

export default CardsPerPage;
