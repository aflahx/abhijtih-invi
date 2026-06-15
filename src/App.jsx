import { useState } from "react";

import OpeningCover from "./sections/OpeningCover";
import Invitation from "./sections/Invitation";
import ScratchReveal from "./sections/ScratchReveal";
import CountdownSection from "./sections/CountdownSection";
import Gallery from "./sections/Gallery";
import Schedule from "./sections/Schedule";
import GuestBook from "./sections/GuestBook";
import Finale from "./sections/Finale";
import TransitionOverlay from "./components/TransitionOverlay";


function App() {
  const [opened, setOpened] = useState(false);
  const [transitioning, setTransitioning] =
useState(false);

  return (
    <>
      <OpeningCover
        opened={opened}
        setOpened={setOpened}
        setTransitioning={setTransitioning}
      />

      {opened && (
        <>
          <Invitation />
          <ScratchReveal />
          <CountdownSection />
          <Gallery />
          <Schedule />
          <GuestBook />
          <Finale />
          <TransitionOverlay
            active={transitioning}
          />
        </>
      )}
    </>
  );
}

export default App;