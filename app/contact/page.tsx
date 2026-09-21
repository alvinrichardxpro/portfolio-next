"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  const phoneNumber = "6282122972829";

  const message =
    `Halo Alvin,\n\n` +
    `Nama: ${formData.name}\n` +
    `Email: ${formData.email}\n\n` +
    `Pesan:\n${formData.message}`;

  const whatsappURL =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");
};

  return (
    <main className="contact-page">
      <section className="contact-section">

        <p className="contact-description">
          Interested in working together or have any questions?
          Feel free to send me a message.
        </p>

        <div className="contact-card">

          <form onSubmit={handleSubmit}>

            {/* NAME */}
            <div className="form-group">
              <label htmlFor="name">
                Your Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* EMAIL */}
            <div className="form-group">
              <label htmlFor="email">
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* MESSAGE */}
            <div className="form-group">
              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="whatsapp-button"
            >
              Send Message
            </button>

          </form>
        </div>

      </section>

      <style jsx>{`
        .contact-page {
          min-height: calc(100vh - 78px);
          background: #020617;
          color: #ffffff;
          padding: 0 24px 60px;
        }

        .contact-section {
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact-description {
          text-align: center;
          color: #9fb5d6;
          font-size: 24px;
          line-height: 1.5;
          margin: 0 auto 74px;
          padding-top: 4px;
        }

        .contact-card {
          max-width: 1100px;
          margin: 0 auto;
          padding: 48px;
          background: rgba(15, 23, 42, 0.7);
          border: 1px solid #263650;
          border-radius: 24px;
          box-sizing: border-box;
        }

        .form-group {
          margin-bottom: 38px;
        }

        label {
          display: block;
          margin-bottom: 14px;
          color: #dbeafe;
          font-size: 20px;
          font-weight: 500;
        }

        input,
        textarea {
          width: 100%;
          box-sizing: border-box;
          background: #020617;
          color: #ffffff;
          border: 1px solid #263650;
          border-radius: 12px;
          padding: 20px 24px;
          font-size: 20px;
          outline: none;
          transition: 0.2s ease;
          font-family: inherit;
        }

        input {
          height: 74px;
        }

        textarea {
          min-height: 180px;
          resize: vertical;
        }

        input::placeholder,
        textarea::placeholder {
          color: #71809b;
        }

        input:focus,
        textarea:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);
        }

        .whatsapp-button {
          width: 100%;
          height: 64px;
          border: none;
          border-radius: 12px;
          background: #2f7df6;
          color: white;
          font-size: 22px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .whatsapp-button:hover {
          background: #2563eb;
          transform: translateY(-1px);
        }

        .whatsapp-button:active {
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .contact-page {
            padding: 0 16px 40px;
          }

          .contact-description {
            font-size: 18px;
            margin-bottom: 40px;
          }

          .contact-card {
            padding: 28px 20px;
            border-radius: 18px;
          }

          .form-group {
            margin-bottom: 28px;
          }

          label {
            font-size: 17px;
          }

          input,
          textarea {
            font-size: 16px;
            padding: 16px;
          }

          input {
            height: 58px;
          }

          textarea {
            min-height: 150px;
          }

          .whatsapp-button {
            height: 58px;
            font-size: 18px;
          }
        }
      `}</style>
    </main>
  );
}