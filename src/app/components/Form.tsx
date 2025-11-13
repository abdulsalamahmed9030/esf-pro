"use client";

export default function ContactForm() {
  return (
    <>
      {/* Contact Form Section */}
      <section className="bg-[#111214] text-white py-16 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left side: Form inputs */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="uppercase text-sm tracking-widest mb-4">
              Send Us Message
            </h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2 bg-transparent border border-gray-700 focus:outline-none placeholder-white"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-2 bg-transparent border border-gray-700 focus:outline-none placeholder-white"
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  required
                  className="w-full px-4 py-2 bg-transparent border border-gray-700 focus:outline-none placeholder-white"
                />
                <select
                  required
                  className="w-full px-4 py-2 bg-transparent border border-gray-700 text-[#0ab0ff] focus:outline-none"
                >
                  <option value="">Select a Service</option>
                  <option value="SECURITY SYSTEMS">SECURITY SYSTEMS</option>
                  <option value="ELECTRICAL SERVICES">
                    ELECTRICAL SERVICES
                  </option>
                  <option value="FIRE PROTECTION">FIRE PROTECTION</option>
                  <option value="OTHER">OTHER</option>
                </select>

                <button
                  type="submit"
                  className="uppercase tracking-widest text-sm px-6 py-2 border border-gray-500 hover:bg-[#0ab0ff] hover:text-black transition w-fit"
                >
                  Submit Form
                </button>
              </div>

              <textarea
                placeholder="Your Message"
                className="w-full h-full min-h-[200px] md:h-auto px-4 py-2 bg-transparent border border-gray-700 focus:outline-none placeholder-white"
              ></textarea>
            </form>
          </div>

          {/* Right side: Contact Info */}
          <div>
            <h2 className="uppercase text-sm tracking-widest mb-4">
              Contact Info
            </h2>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>
                <span className="text-[#0ab0ff] font-semibold">Address:</span>{" "}
                California
              </li>
              <li>
                <span className="text-[#0ab0ff] font-semibold">Phone:</span>{" "}
                650-770-4101
              </li>
              <li>
                <span className="text-[#0ab0ff] font-semibold">Email:</span>{" "}
                info@esfpros.com
              </li>
              <li>
                <span className="text-[#0ab0ff] font-semibold">Web:</span>{" "}
                esfpros.com
              </li>
              <li>
                <span className="text-[#0ab0ff] font-semibold">Open:</span>{" "}
                Sunday - Friday 08:00 - 18:00
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ✅ Google Map Embed Section */}
      <section className="w-full">
        <div suppressHydrationWarning>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50535.5637376212!2d-121.91814145974027!3d37.66159833307568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fe9a261ba755f%3A0xb3ab6847e1ea7d16!2sPleasanton%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1752237364743!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}
