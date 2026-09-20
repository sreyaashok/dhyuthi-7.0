import { useEffect, useState } from "react";
import "./Countdown.css";

const EVENT_DATE = new Date("2026-10-28T09:00:00+05:30").getTime();

function calculateTimeLeft() {
  const difference = EVENT_DATE - Date.now();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(
      difference / (1000 * 60 * 60 * 24)
    ),

    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    ),

    minutes: Math.floor(
      (difference / (1000 * 60)) % 60
    ),

    seconds: Math.floor(
      (difference / 1000) % 60
    ),
  };
}

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (number) =>
    String(number).padStart(2, "0");

  return (
    <div className="countdown-box">

      {/* TOP LABEL */}
      <div className="countdown-title">
        <span className="countdown-line" />

        <span>COUNTDOWN TO DHYUTHI 7.0</span>

        <span className="countdown-line" />
      </div>


      {/* TIMER */}
      <div className="countdown-timer">

        {/* DAYS */}
        <div className="countdown-unit">
          <strong>
            {formatNumber(timeLeft.days)}
          </strong>

          <small>DAYS</small>
        </div>


        <div className="countdown-colon">
          :
        </div>


        {/* HOURS */}
        <div className="countdown-unit">
          <strong>
            {formatNumber(timeLeft.hours)}
          </strong>

          <small>HOURS</small>
        </div>


        <div className="countdown-colon">
          :
        </div>


        {/* MINUTES */}
        <div className="countdown-unit">
          <strong>
            {formatNumber(timeLeft.minutes)}
          </strong>

          <small>MIN</small>
        </div>


        <div className="countdown-colon">
          :
        </div>


        {/* SECONDS */}
        <div className="countdown-unit">
          <strong>
            {formatNumber(timeLeft.seconds)}
          </strong>

          <small>SEC</small>
        </div>

      </div>


      {/* EVENT DATES */}
      <div className="countdown-event-dates">
        <span>28</span>
        <i>—</i>
        <span>29</span>
        <i>—</i>
        <span>30</span>
        <b>OCTOBER 2026</b>
      </div>

    </div>
  );
}

export default Countdown;