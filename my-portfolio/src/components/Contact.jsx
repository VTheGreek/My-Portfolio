import { useForm, ValidationError } from "@formspree/react";
import "../styles/Contact.css";

function Contact() {
  const [state, handleSubmit] = useForm("xqpagygq");

  if (state.succeeded) {
    return (
      <section id="contact">
        <h2>Contact</h2>
        <p>Thanks for reaching out! I'll get back to you as soon as possible.</p>
      </section>
    );
  }

  return (
    <section id="contact">
      <h2>Contact</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Your Email Address
        </label>

        <input
          id="email"
          type="email"
          name="email"
          placeholder="example@gmail.com"
          required
        />

        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />

        <label htmlFor="message">
          Message
        </label>

        <textarea
          id="message"
          name="message"
          placeholder="Write your message here..."
          required
        />

        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button type="submit" disabled={state.submitting}>
          {state.submitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}

export default Contact;