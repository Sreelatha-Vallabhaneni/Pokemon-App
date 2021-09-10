import React from "react";

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div className="btn-container">
      {gotoPrevPage && (
        <button className="prev-btn" onClick={gotoPrevPage}>
          Previous
        </button>
      )}
      {gotoNextPage && (
        <button className="next-btn" onClick={gotoNextPage}>
          Next
        </button>
      )}
    </div>
  );
}
