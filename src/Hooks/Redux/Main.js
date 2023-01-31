import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Main = () => {
  const counterStore = useSelector((store) => store);
  let count = counterStore.count;
  let data = counterStore.data
let dispatch = useDispatch()
  const increaseCount =()=>{
    dispatch({type:'INCREASE_COUNT'})

}
  return (
    <>
      <h3> Count:{count}</h3>
      <button className="btn btn-warning" onClick={increaseCount}>Update Count</button>
      <h1 className="display-2 " text-center>data:{data}</h1>
      <button className="btn btn-warning" onClick={()=>dispatch({type:"INCREASE_DATA"})}>Increase Data</button>
    </>
  );
};

export default Main;
