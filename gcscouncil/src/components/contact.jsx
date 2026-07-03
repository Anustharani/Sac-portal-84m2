import { useState } from "react";
import axios from "axios";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );

      alert(response.data.message);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

    } catch (error) {

      console.log(error);

      alert("Something went wrong");

    } finally {

      setLoading(false);

    }

  };

  return (

    <section className="py-20 bg-slate-900 text-white">

      <div className="max-w-3xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center">

          Contact Us

        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 mt-10"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-lg text-black"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded-lg text-black"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-4 rounded-lg text-black"
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 rounded-lg text-black"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="bg-cyan-500 px-8 py-3 rounded-lg"
          >

            {loading ? "Sending..." : "Send Message"}

          </button>

        </form>

      </div>

    </section>

  );

}

export default Contact;