import React from "react";

const DataDisplay = ({ poster }) => {
  return (
    <>
      <div className="m-5 p-4 border-3 shadow-lg">
        <h4>User:{poster.userId}</h4>
        <h3> Id:{poster.id}</h3>
        <h3>Title:{poster.title}</h3>
        <p>Body:{poster.body}</p>
      </div>
    </>
  );
};

export default DataDisplay;
