import { useState } from "react";
import { motion } from "framer-motion";
import "../styles/ScratchReveal.css";

function ScratchReveal() {

  const [revealed, setRevealed] = useState(false);

  const handleReveal = () => {
    setRevealed(true);
  };

  return (

    <section className="scratch-section">

      <p className="scratch-heading">
        A Special Moment Awaits
      </p>

      <div
        className={`scratch-card ${
          revealed ? "revealed" : ""
        }`}
      >

        {!revealed && (

          <div
            className="gold-foil"
            onClick={handleReveal}
          >

            <div className="foil-shine"></div>

            <h2>
              Reveal Our Wedding Date
            </h2>

            <button className="reveal-btn">
              Tap To Reveal
            </button>

          </div>

        )}

        <motion.div
          className={`date-reveal ${
            revealed ? "show" : ""
          }`}
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={
            revealed
              ? {
                  opacity: 1,
                  scale: 1,
                }
              : {}
          }
          transition={{
            duration: 1.2,
          }}
        >

          <p className="save-date">
            Save The Date
          </p>

          <h2>
            30 August 2026
          </h2>

          <p className="event-time">
            Sunday • 9:00 AM
          </p>

        </motion.div>

      </div>

    </section>

  );

}

export default ScratchReveal;