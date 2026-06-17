import "../styles/Schedule.css";

function Schedule() {

  const openTemple = () => {
    window.open(
      "https://maps.app.goo.gl/ExWNt2PBtDMYa2HHA",
      "_blank"
    );
  };

  const openBrideCeremony = () => {
    window.open(
      "https://maps.app.goo.gl/AwhGVjrzS4Bj2zvH6",
      "_blank"
    );
  };

  const openReception = () => {
    window.open(
      "https://maps.app.goo.gl/LtAMK16i57QDX76P7",
      "_blank"
    );
  };

  return (
    <section className="schedule-section">

      <p className="schedule-subtitle">
        Our Special Day
      </p>

      <h2 className="schedule-title">
        Wedding Schedule
      </h2>

      <div className="schedule-grid">

        <div
          className="schedule-card"
          onClick={openTemple}
        >

          <p className="event-time">
            09:00 AM – 10:00 AM
          </p>

          <h3>
            Thalikettu Ceremony
          </h3>

          <p className="event-location">
            Guruvayoor Sree Krishna Temple
          </p>

          <span className="directions-text">
            Tap For Directions
          </span>

        </div>

        <div
          className="schedule-card"
          onClick={openBrideCeremony}
        >

          <p className="event-time">
            11:00 AM – 02:00 PM
          </p>

          <h3>
            Bride's Ceremony
          </h3>

          <p className="event-location">
            Yamuna Castle Auditorium
          </p>

          <span className="directions-text">
            Tap For Directions
          </span>

        </div>

        <div
          className="schedule-card"
          onClick={openReception}
        >

          <p className="event-time">
            05:00 PM – 09:00 PM
          </p>

          <h3>
            Reception
          </h3>

          <p className="event-location">
            Thazhekkad Parish Hall
          </p>

          <span className="directions-text">
            Tap For Directions
          </span>

        </div>

      </div>

    </section>
  );
}

export default Schedule;