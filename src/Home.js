import React from "react";
import { useState, useEffect } from "react";
import leaf from './leaf.png'

function Home({Id}) {
  // Initial time in seconds (1 hour)
  const initialTime = 3600 * 24 * 3;
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timerInterval);
          // Perform actions when the timer reaches zero
          console.log("Countdown complete!");
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(timerInterval);
  }, []); // The empty dependency array ensures the effect runs only once on mount

  // Convert seconds to hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (3600 * 24));
  const hours = Math.floor(timeRemaining % (3600 * 24) / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  return (
    <header className="h-full w-full flex flex-row bg-light-clay" id={Id}>
      <div className="justify-center m-auto flex flex-col text-center py-64">
        <div className="flex flex-row m-auto">
          <p className="bg-black rounded-md w-10 h-0.5 my-3"></p>
        <h1 className="font-bold font-serif px-5"> Pernikahan</h1>
        <p className="bg-black rounded-md w-10 h-0.5 my-3"></p>
        </div>
        <div className="flex flex-row m-auto">
          <img src={leaf} className="w-10 h-10 mt-20 md:mt-0 md:w-20 md:h-20 scale-x scale-x-[-1]"/>
          <h1 className="text-6xl font-body py-5 mx-8">Deden & Desi</h1>
          <img src={leaf} className="w-10 h-10 mt-20 md:mt-0 md:w-20 md:h-20 "/>
        </div>
        <p>{`${days}d ${hours}h ${minutes}m ${seconds}s`}</p>
      </div>
    </header>
  );
}

export default Home;
