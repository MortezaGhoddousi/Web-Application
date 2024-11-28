import { createContext, useState } from "react";
import First from "./components/First";
import Login from "./components/Login";

export const nameContext = createContext();

function App() {
  // const [name, setName] = useState("Morteza");

  return (
    <nameContext.Provider value={{ name: "Morteza" }}>
      {/* <First /> */}
      <Login />
    </nameContext.Provider>
  );
}

export default App;
