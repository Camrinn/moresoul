import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, phone, email, message } = formData;

    // Construct the mailto link
    const mailtoLink = `mailto:Gavingonzbusiness@gmail.com?subject=New Inquiry from ${name}&body=Name: ${name}%0D%0APhone: ${phone}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;

    // Open the mailto link to launch the user's email client
    window.location.href = mailtoLink;
  };

  return (
    <section id='footer' className="relative min-h-screen flex bg-black flex-col items-center shadow-xl px-4 justify-center">
      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-xl bg-gray-800 rounded-lg shadow-md p-4 space-y-10"
      >
        <h2 className="text-2xl font-bold text-center text-white">
          Contact Me!
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-[#2E294E]"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-[#2E294E]"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-[#2E294E]"
          required
        />

        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-[#2E294E] h-32"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 bg-[#2E294E] text-white font-semibold rounded-md hover:bg-[#4B6A9B] transition-colors"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
