import { useRef, useState } from "react";
import "../styles/OpeningCover.css";

function OpeningCover({
  opened,
  setOpened,
  setTransitioning,
}) {

  const audioRef = useRef(null);

  const [shine, setShine] =
    useState(false);

  const handleOpen = () => {

    setShine(true);

    setTimeout(() => {
      setTransitioning(true);
    }, 500);

    setTimeout(() => {

      setOpened(true);

      setTimeout(() => {

        const invitation =
          document.getElementById(
            "invitation"
          );

        if (invitation) {

          invitation.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

        }

      }, 300);

    }, 1500);

    setTimeout(() => {
      setTransitioning(false);
    }, 2500);

  };

  return (

    <section className="opening-cover">

      <audio
        ref={audioRef}
        src="/music/wedding.mp3"
        loop
      />

      <div className="cover-content">

        <div className="top-logo">

          <img
            src="/images/chinga.svg"
            alt=""
          />

        </div>

        <div
          className={`main-logo ${
            shine ? "shine" : ""
          }`}
        >

          <img
            src="/images/middle.svg"
            alt=""
          />

        </div>

        {!opened && (

          <button
            className="tap-btn"
            onClick={handleOpen}
          >
            Open Invitation
          </button>

        )}

      </div>

    </section>

  );

}

export default OpeningCover;