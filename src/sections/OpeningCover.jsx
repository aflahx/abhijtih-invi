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

    // Uncomment later if you want music
    // if (audioRef.current) {
    //   audioRef.current.volume = 0.25;
    //   audioRef.current.play();
    // }

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

      {/* <audio
        ref={audioRef}
        src="/music/wedding.mp3"
        loop
      /> */}

      <div className="cover-overlay"></div>

      <div className="cover-content">

        <div className="top-logo">

          <img
            src="/typography/chinga.png"
            alt="ചിങ്ങത്തിൽ കല്യാണം"
          />

        </div>

        <div
          className={`main-logo ${
            shine ? "shine" : ""
          }`}
        >

          <img
            src="/typography/middle.png"
            alt="അഭിജിത് കൂടെ ആവണി"
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