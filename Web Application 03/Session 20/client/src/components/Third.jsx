import { useContext } from "react";
import { nameContext } from "../App";

function First() {
  const cont = useContext(nameContext);

  return (
    <>
      <h1>{cont.name}</h1>
    </>
  );
}

export default First;
