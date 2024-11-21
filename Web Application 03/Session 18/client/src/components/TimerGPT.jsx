import React, { useState, useEffect } from "react";

const TimerGPT = ({ price }) => {
  const [isActive, setIsActive] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0); // Time spent in seconds
  const [Cost, setCost] = useState(0);
  const [time, setTime] = useState({
    hour: Math.floor(timeSpent / 3600),
    minutes: Math.floor(Math.floor(timeSpent % 3600) / 60),
    seconds: Math.floor(Math.floor(timeSpent % 3600) % 60),
  });
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTimeSpent((prevTime) => prevTime + 1); // Increment timeSpent by one second
        setTime({
          hour: Math.floor(timeSpent / 3600),
          minutes: Math.floor(Math.floor(timeSpent % 3600) / 60),
          seconds: Math.floor(Math.floor(timeSpent % 3600) % 60),
        });
      }, 1000);
    } else if (!isActive && timeSpent !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [isActive, timeSpent]);

  const handleStartStopClick = () => {
    setIsActive(!isActive); // Toggle active state
    const cost = (timeSpent * price).toFixed(2);
    setPrices([...prices, cost]);
    const sum = prices.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    setCost(sum);
    setTimeSpent(0);
  };

  const handleThis = () => {
    const cost = (timeSpent * price).toFixed(2);
    setPrices([...prices, cost]);
    setTimeSpent(0);
  };

  // Calculate cost based on time spent and price prop
  const cost = (timeSpent * price).toFixed(2);

  const prs = prices.map(function (el, ind) {
    return <p key={ind}>Cost: ${el}</p>;
  });

  return (
    <div>
      <h1>Timer</h1>
      <p>
        Time Spent: {time.hour}: {time.minutes}: {time.seconds}
      </p>
      <button onClick={handleStartStopClick}>
        {isActive ? "Stop Timer" : "Start Timer"}
      </button>
      <button onClick={handleThis}>باز و بسته</button>
      <p>Total Cost: ${cost}</p>
      <p>Total Cost: ${Cost}</p>

      {prs}
    </div>
  );
};

export default TimerGPT;
