import React from "react";

const Display = ({ name, Address }) => {
  //   console.log(props);

  //   //destructuring object
  //   let { name, Address } = props;
  return (
    <>
      <h1>Name:{name}</h1>
      <h2>Address:{Address}</h2>
    </>
  );
};

export default Display;
