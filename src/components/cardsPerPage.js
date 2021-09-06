import React from "react";

function CardsPerPage({ change, length }) {
  return (
    <div className="select">
      <h3 className="select__title">Select cards per page </h3>
      <div className="select-container">
        <select className="select__wrap" onChange={change} defaultValue={20}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
        <p>Total display Cards: {length}</p>
      </div>
    </div>
  );
}

export default CardsPerPage;
