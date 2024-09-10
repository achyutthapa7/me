import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });
  const { Name, Email, Message } = formData;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (!Name && !Email && !Message) {
      try {
        const response = await fetch("http://localhost:4000/api/sendMessage", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ Name, Email, Message }),
        });
        if (!response.ok) {
          alert("Failed to send message");
          setLoading(false);
        }
        setFormData({ Name: "", Email: "", Message: "" });
        alert("Message sent successfully!");
      } catch (error) {
        console.error("Error sending message: " + error);
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please fill in all fields");
      setLoading(false);
      return;
    }
  };
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      <section className="py-32 bg-gradient-to-r from-green-400 to-teal-500 text-white text-center">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4">Contact Me</h1>
          <p className="text-xl mb-6">
            I'd love to hear from you! Whether you have a question or just want
            to say hello, feel free to reach out.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Information */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <FaPhoneAlt className="text-3xl text-green-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-700">+977 974-8356-365</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <FaEnvelope className="text-3xl text-teal-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-700">achyut777thapa@gmail.com</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <FaMapMarkerAlt className="text-3xl text-blue-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-gray-700">Ghorahi-10, Dang, Nepal</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>

          <form
            onSubmit={handleSubmit}
            className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-md mx-auto"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="Name"
                value={Name}
                required
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="Email"
                value={Email}
                required
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="Message"
                value={Message}
                rows="4"
                required
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              disabled={loading}
              type="submit"
              className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          <h2 className="text-3xl font-bold text-center mt-16 mb-8">Find Us</h2>

          <div className="relative w-full h-64 mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d7066.494829066064!2d85.32072599999995!3d27.67874699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2snp!4v1725952248675!5m2!1sen!2snp"
              width="600"
              className="absolute inset-0 w-full h-full border-0"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
