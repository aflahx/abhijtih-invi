import "../styles/Invitation.css";
import { motion } from "framer-motion";

function Invitation() {
  return (
    <section
      id="invitation"
      className="invitation-section"
    >

      <div className="particles"></div>

      <motion.div
        className="invitation-card"
        initial={{
          opacity: 0,
          y: 80,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 3,
        }}
        viewport={{ once: true }}
      >

        <div className="corner top-left"></div>
        <div className="corner top-right"></div>
        <div className="corner bottom-left"></div>
        <div className="corner bottom-right"></div>

        <p className="family-text">
          Together with our families
        </p>

        <h2 className="invitation-names">
          AVANI KRISHNA
          <span>&</span>
          ABHIJITH
        </h2>

        <p className="invitation-message">
          request the honour of your presence
          as they begin a beautiful journey
          of love, laughter and forever.
        </p>

      </motion.div>

    </section>
  );
}

export default Invitation;