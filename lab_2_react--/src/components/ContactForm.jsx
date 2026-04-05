import { useState } from 'react';

/**
 * ContactForm component — Lab 4 Task 3: Modal Form
 * isOpen state controlled by parent (App.tsx) via props.
 * Shows after 60 seconds (setTimeout in parent's useEffect).
 * Submits to Formspree asynchronously.
 */
export default function ContactForm({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const formData = new FormData(e.target);
      const res = await fetch('https://formspree.io/f/xojppzvl', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => {
          onClose();
          setSubmitted(false);
        }, 3000);
      } else {
        const json = await res.json();
        const msg = json.errors?.map((e) => e.message).join(', ') || 'Unknown error';
        alert('❌ Error: ' + msg);
      }
    } catch {
      alert('❌ Network error. Please try again.');
    } finally {
      setSending(false);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') onClose();
  };

  return (
    <div
      className={`modal-overlay ${isOpen ? 'active' : ''}`}
      onClick={handleOverlayClick}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      tabIndex={-1}
    >
      <div className="modal">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <h2 id="modal-title">👋 Get in Touch</h2>
        <p className="modal-subtitle">You've been here for a while — feel free to reach out!</p>

        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="cf-name">Full Name</label>
              <input type="text" id="cf-name" name="name" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label htmlFor="cf-email">Email Address</label>
              <input type="email" id="cf-email" name="email" placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="cf-phone">Phone Number</label>
              <input type="tel" id="cf-phone" name="phone" placeholder="+380 XX XXX XXXX" />
            </div>
            <div className="form-group">
              <label htmlFor="cf-message">Message</label>
              <textarea
                id="cf-message"
                name="message"
                placeholder="Write your message here..."
                required
              />
            </div>
            <button type="submit" className="btn-submit" disabled={sending}>
              {sending ? 'Sending...' : 'Send Message 🚀'}
            </button>
          </form>
        ) : (
          <div className="form-success">
            <div className="checkmark">✅</div>
            <p>
              Message sent successfully!
              <br />
              <small>I'll get back to you soon.</small>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
