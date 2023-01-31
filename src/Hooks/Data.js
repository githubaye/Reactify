import React, { useContext } from "react";
import Display from "./Display";
import { GlobalContext } from "./GlobalContext";

const Data = () => {
  let info = useContext(GlobalContext);
  return (
    <>
      <div>{info}</div>

      <Display name={"Mero Naam"} Address={"kathmandu"} />
      <hr />
      <Display name={"Ninja"} Address={"NY"} />
    </>
  );
};

export default Data;
