import { useState } from "react";
import "../styles/GuestBook.css";

function GuestBook() {

  const [rsvp, setRsvp] = useState("");
  const [name, setName] = useState("");
  const [guests, setGuests] = useState("");
  const [wishes, setWishes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwwDT9cs7PQwjcmMjX-dld5QxuBkmox0OBibvCF1G9bO2Xu8O_cLx4yc2cl5CsuAlQ/exec",
        {
          method: "POST",
          body: JSON.stringify({
            name,
            rsvp,
            guests:
              rsvp === "accept"
                ? guests
                : "0",
            wishes,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to submit RSVP"
        );
      }

      setSubmitted(true);

    } catch (error) {

      console.error(
        "Submission Error:",
        error
      );

      alert(
        "Something went wrong. Please try again."
      );

    } finally {

      setLoading(false);

    }

  };

  return (
    <section className="guestbook-section">

      <div className="guestbook-card">

        <h2 className="guestbook-title">
          Guest Wishes
        </h2>

        <p className="guestbook-subtitle">
          We'd love to hear from you
        </p>

        {!submitted ? (

          <form
            className="guestbook-form"
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              required
            />

            <div className="rsvp-group">

              <p className="rsvp-title">
                Will You Join Us?
              </p>

              <div className="rsvp-options">

                <label className="rsvp-option">

                  <input
                    type="radio"
                    name="rsvp"
                    value="accept"
                    checked={
                      rsvp === "accept"
                    }
                    onChange={() =>
                      setRsvp("accept")
                    }
                    required
                  />

                  <span>
                    Joyfully Accepts
                  </span>

                </label>

                <label className="rsvp-option">

                  <input
                    type="radio"
                    name="rsvp"
                    value="decline"
                    checked={
                      rsvp === "decline"
                    }
                    onChange={() =>
                      setRsvp("decline")
                    }
                  />

                  <span>
                    Regretfully Declines
                  </span>

                </label>

              </div>

            </div>

            {rsvp === "accept" && (

              <input
                type="number"
                placeholder="Number Of Guests"
                min="1"
                value={guests}
                onChange={(e) =>
                  setGuests(
                    e.target.value
                  )
                }
                required
              />

            )}

            <textarea
              rows="5"
              placeholder="Share your wishes..."
              value={wishes}
              onChange={(e) =>
                setWishes(
                  e.target.value
                )
              }
              required
            ></textarea>

            <button
              type="submit"
              disabled={loading}
            >
              {loading
                ? "Submitting..."
                : "Send Wishes"}
            </button>

          </form>

        ) : (

          <div
            style={{
              textAlign: "center",
              padding: "40px 20px",
            }}
          >

            <h3
              style={{
                color: "#c8a03b",
                marginBottom: "15px",
              }}
            >
              Thank You ❤️
            </h3>

            <p
              style={{
                color: "#666",
                lineHeight: "1.8",
              }}
            >
              Your wishes have been
              received successfully.
              <br />
              We look forward to
              celebrating with you.
            </p>

          </div>

        )}

      </div>

    </section>
  );
}

export default GuestBook;