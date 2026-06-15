import { useEffect, useState } from "react";
import "../styles/CountdownSection.css";

function CountdownSection() {

  const weddingDate =
  new Date("2026-08-30T09:00:00");

  const [timeLeft, setTimeLeft] =
    useState({});

  useEffect(() => {

    const timer = setInterval(() => {

      const now = new Date();

      const difference =
        weddingDate - now;

      if (difference > 0) {

        setTimeLeft({

          days:
            Math.floor(
              difference /
              (1000 * 60 * 60 * 24)
            ),

          hours:
            Math.floor(
              (
                difference /
                (1000 * 60 * 60)
              ) % 24
            ),

          minutes:
            Math.floor(
              (
                difference /
                (1000 * 60)
              ) % 60
            ),

          seconds:
            Math.floor(
              (
                difference /
                1000
              ) % 60
            )

        });

      }

    }, 1000);

    return () =>
      clearInterval(timer);

  }, []);

  return (

    <section className="countdown-section">

      <p className="countdown-subtitle">
        The Celebration Begins In
      </p>

      <h2 className="countdown-title">
        Counting Every Moment
      </h2>

      <div className="countdown-grid">

        <div className="time-card">
          <h3>{timeLeft.days || 0}</h3>
          <p>Days</p>
        </div>

        <div className="time-card">
          <h3>{timeLeft.hours || 0}</h3>
          <p>Hours</p>
        </div>

        <div className="time-card">
          <h3>{timeLeft.minutes || 0}</h3>
          <p>Minutes</p>
        </div>

        <div className="time-card">
          <h3>{timeLeft.seconds || 0}</h3>
          <p>Seconds</p>
        </div>

      </div>

    </section>

  );
}

export default CountdownSection;