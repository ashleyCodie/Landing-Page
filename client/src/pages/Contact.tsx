
// This file shows the Contact page for the website.
// It lets users see how to contact support or send a message.
// If you want to change the contact info, update the text below.
// If you want to change the layout or style, edit the className values (these use Tailwind CSS).
// If you see an error, check that all imported files exist and are spelled correctly.
// If you want to debug, use your browser's developer tools to inspect the page and see if the form works as expected.
// Anyone can update this file by following the comments and examples below.
import React from "react";
import Footer from "../sections/Footer";
import Card from "../components/ui/Card";

// This is the main Contact component. It shows support info and a message form.
// If you want to change the layout, update the JSX below. If you want to change the style, update the className values.
const Contact: React.FC = () => (
  <div className="flex flex-col min-h-screen bg-gray-200">
    <main className="flex-1 max-w-5xl mx-auto p-8">
      {/* Page title. Change the text to update the heading. */}
      <h2 className="text-3xl font-bold mb-8 text-center text-[#1E293B]">Contact Us</h2>
      {/* Cards for support and message form. Add, remove, or update cards as needed. */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {/* Customer Support card. Update the email/phone to change support info. */}
        <Card>
          <div className="flex flex-col items-center h-full justify-center">
            <h3 className="text-xl font-bold mb-2">Customer Support</h3>
            <p className="text-gray-700 mb-2">Email: support@shoestyle.com | Phone: (555) 123-4567</p>
            <img src="/images/shoe36.jpg" alt="ShoeStyle Logo" className="w-24 h-24 rounded-full mb-4 object-contain bg-white" />
          </div>
        </Card>
        {/* Message form card. Users can send a message here. Update the form fields as needed. */}
        <Card>
          <div className="flex flex-col h-full justify-center">
            <h3 className="text-xl font-bold mb-2">Send Us a Message</h3>
            <p className="text-gray-700 mb-4">Fill out the form below and our team will get back to you soon.</p>
            <form className="flex flex-col gap-4 mt-4">
              <input type="text" placeholder="Your Name" className="border rounded px-4 py-2" />
              <input type="email" placeholder="Your Email" className="border rounded px-4 py-2" />
              <textarea placeholder="Message" className="border rounded px-4 py-2" rows={4} />
              <button type="submit" className="bg-[#0D9488] text-white rounded px-4 py-2 font-semibold hover:bg-[#0C827A]">Send</button>
            </form>
          </div>
        </Card>
      </div>
    </main>
    {/* Footer at the bottom of the page. */}
    <Footer />
  </div>
);

export default Contact;
