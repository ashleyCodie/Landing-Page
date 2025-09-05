
import React from "react";
import Footer from "../sections/Footer";
import Card from "../components/ui/Card";

const Contact: React.FC = () => (
  <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
    <main className="flex-1 max-w-xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-[#1E293B]">Contact Us</h2>
      <Card>
        <div className="mb-8 flex flex-col items-center">
          <h3 className="text-xl font-bold mb-2">Customer Support</h3>
          <p className="text-gray-700 mb-2">Email: support@shoestyle.com | Phone: (555) 123-4567</p>
          <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80" alt="Contact" className="w-24 h-24 rounded-full mb-4 object-cover" />
        </div>
      </Card>
      <Card>
        <div className="mb-8">
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
    </main>
    <Footer />
  </div>
);

export default Contact;
