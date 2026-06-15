function TransitionOverlay({ active }) {
    return (
      <div
        className={`transition-overlay ${
          active ? "active" : ""
        }`}
      />
    );
  }
  
  export default TransitionOverlay;