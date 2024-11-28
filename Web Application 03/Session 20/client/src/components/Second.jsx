import Third from "./Third";
import { useContext } from "react";
import { nameContext } from "../App";

function First() {
  const cont = useContext(nameContext);
  return (
    <>
      <p>{cont.name}</p>
      <Third />
    </>
  );
}

export default First;
