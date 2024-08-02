import { useState, useEffect } from "react";
import Countdown from "./components/Countdown";

function App() {
  const [months, setMonths] = useState(0);
  const [weeks, setWeeks] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [bgID, setbgID] = useState(0);

  useEffect(() => {
    setbgID(() => Math.floor(Math.random() * 8));
  }, []);

  let finalDate = new Date("Dec 12, 2024 00:00:00");
  setInterval(() => {
    let currentDate = new Date();
    let diff = finalDate.getTime() - currentDate.getTime();

    let monthsDiff = Math.floor(diff / (1000 * 60 * 60 * 24 * 7 * 4));
    setMonths(monthsDiff);

    let weeksDiff = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
    setWeeks(weeksDiff);

    let daysDiff = Math.floor(diff / (1000 * 60 * 60 * 24));
    setDays(daysDiff);

    let hoursDiff = Math.floor(diff / (1000 * 60 * 60));
    setHours(hoursDiff);
  }, 1000);

  return (
    <div className={`h-screen bg-[url('/pattern${bgID}.png')]`}>
      <div className="h-screen bg-[#2b2d46] bg-opacity-75">
        <div className="h-screen bg-gradient-to-t from-[#2b2d46] from-25% to-transparent">
          <div className="flex flex-col items-center justify-center bg-cover bg-center p-16">
            <h1 className="animate-gradient2 gradient-text-1 font-inter text-5xl font-extrabold md:text-8xl">
              Countdown
            </h1>
            <div className="mt-10 grid grid-cols-2 gap-4">
              <Countdown title="Months" count={months} />
              <Countdown title="Weeks" count={weeks} />
              <Countdown title="Days" count={days} />
              <Countdown title="Hours" count={hours} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
