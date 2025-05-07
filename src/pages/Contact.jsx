import React, { useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: "", text: "" });

  // EmailJS service configuration (replace with your actual keys)
  const serviceId = "service_rwzgdme"; // Replace with your EmailJS service ID
  const templateId = "template_iykgoar"; // Replace with your EmailJS template ID
  const userId = "cbQPlhvIXRuMONUdM"; // Replace with your EmailJS user ID

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage({ type: "info", text: "Sending message..." }); // Provide user feedback

    // Use EmailJS to send the email
    emailjs
      .send(serviceId, templateId, formData, userId)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setIsSubmitting(false);
        setSubmitMessage({
          type: "success",
          text: "Thank you for your message! We will get back to you within 24 hours.",
        });

        // Clear form
        setFormData({
          name: "",
          email: "",
          phone: "",
          eventType: "",
          eventDate: "",
          guestCount: "",
          message: "",
        });

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitMessage({ type: "", text: "" });
        }, 5000);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setIsSubmitting(false);
        setSubmitMessage({
          type: "error",
          text: "Sorry, there was an error sending your message. Please try again.",
        });
      });
  };

  return (
    <div className="pt-16 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600">
              Get in touch with our team to plan your next catering event
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <h2 className="text-2xl font-serif font-bold mb-6">
                Send Us a Message
              </h2>

              {submitMessage.text && (
                <div
                  className={`p-4 mb-6 rounded-md ${
                    submitMessage.type === "success"
                      ? "bg-green-50 text-green-800"
                      : submitMessage.type === "error"
                      ? "bg-red-50 text-red-800"
                      : "bg-blue-50 text-blue-800" // For the "Sending..." message
                  }`}
                >
                  {submitMessage.text}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                  />
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Event Type */}
                <div>
                  <label
                    htmlFor="eventType"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Event Type
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                  >
                    <option value="">Select an event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="engagement">Engagement Ceremony</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Event Date and Guest Count */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="eventDate"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Event Date
                    </label>
                    <input
                      id="eventDate"
                      name="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="guestCount"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Number of Guests
                    </label>
                    <input
                      id="guestCount"
                      name="guestCount"
                      type="number"
                      value={formData.guestCount}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-amber-600 text-white rounded-md font-medium hover:bg-amber-700 transition-colors disabled:bg-amber-400 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-serif font-bold mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex">
                  <div className="mr-4">
                    <div className="h-10 w-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Our Location</h3>
                    <p className="text-gray-600">
                      123 Catering Street, Foodville
                    </p>
                    <p className="text-gray-600">New York, NY 10001</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex">
                  <div className="mr-4">
                    <div className="h-10 w-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email Us</h3>
                    <p className="text-gray-600">contact@rahulcatering.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex">
                  <div className="mr-4">
                    <div className="h-10 w-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Call Us</h3>
                    <p className="text-gray-600">(+91) 8600455188</p>
                    <p className="text-gray-600">(+91) 7030107561</p>
                  </div>
                </div>

                {/* Hours */}
                {/* <div className="flex">
                  <div className="mr-4">
                    <div className="h-10 w-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-600">
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div> */}
              </div>

              {/* Google Map */}
              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Find Us on the Map</h3>
                <div className="bg-gray-200 h-64 rounded-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2155308287687!2d-73.98784792441536!3d40.75798833440445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1687458794568!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location Map"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
