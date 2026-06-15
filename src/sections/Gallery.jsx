import "../styles/Gallery.css";

function Gallery() {
  return (
    <section className="gallery-section">

      <h2 className="gallery-title">
        Captured Moments
      </h2>

      <p className="gallery-subtitle">
        A glimpse into our story
      </p>

      <div className="gallery-grid">

        <div className="gallery-card">

          <img
            src="/images/gallery1.jpg"
            alt="Gallery 1"
            className="gallery-image"
          />

          <p className="gallery-quote">
            Every love story is beautiful,
            but ours is my favourite.
          </p>

        </div>

        <div className="gallery-card">

          <img
            src="/images/gallery2.jpg"
            alt="Gallery 2"
            className="gallery-image"
          />

          <p className="gallery-quote">
            Together is a wonderful place to be.
          </p>

        </div>

        <div className="gallery-card">

          <img
            src="/images/gallery3.jpg"
            alt="Gallery 3"
            className="gallery-image"
          />

          <p className="gallery-quote">
            Two hearts,
            one beautiful journey.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Gallery;