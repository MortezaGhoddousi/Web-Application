import { useState } from "react";
import TimerGPT from "./components/TimerGPT";

function App() {
  const [price, setPrice] = useState(100000);

  return (
    <>
      <TimerGPT price={price / 3600} />
      <TimerGPT price={price / 3600} />
      <TimerGPT price={price / 3600} />
      <TimerGPT price={price / 3600} />
      <TimerGPT price={price / 3600} />
      <TimerGPT price={price / 3600} />
    </>
  );
}

export default App;
