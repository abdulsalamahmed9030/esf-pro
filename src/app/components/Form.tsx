"use client";

export default function ContactForm() {
  return (
    <>
      {/* Contact Form Section */}
      <section className="bg-[#111214] text-white py-16 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left side: Form inputs */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="uppercase text-sm tracking-widest mb-4">Send Us Message</h2>
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
                {/* Dropdown Service Type */}
                <select
                  required
                  className="w-full px-4 py-2 bg-transparent border border-gray-700 text-[#0ab0ff] focus:outline-none"
                >
                  <option value="">Select a Service</option>
                  <option value="SECURITY SYSTEMS">SECURITY SYSTEMS</option>
                  <option value="ELECTRICAL SERVICES">ELECTRICAL SERVICES</option>
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

              {/* Message Box */}
              <textarea
                placeholder="Your Message"
                className="w-full h-full min-h-[200px] md:h-auto px-4 py-2 bg-transparent border border-gray-700 focus:outline-none placeholder-white"
              ></textarea>
            </form>
          </div>

          {/* Right side: Contact Info */}
          <div>
            <h2 className="uppercase text-sm tracking-widest mb-4">Contact Info</h2>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>
                <span className="text-[#0ab0ff] font-semibold">Address:</span> California
              </li>
              <li>
                <span className="text-[#0ab0ff] font-semibold">Phone:</span> 650-770-4101
              </li>
              <li>
                <span className="text-[#0ab0ff] font-semibold">Email:</span> info@esfpros.com
              </li>
              <li>
                <span className="text-[#0ab0ff] font-semibold">Web:</span> esfpros.com
              </li>
              <li>
                <span className="text-[#0ab0ff] font-semibold">Open:</span> Sunday - Friday 08:00 - 18:00
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* Map Section */}
<section className="px-4 md:px-10 lg:px-30 bg-black">
  <div className="w-full h-[400px] md:h-[500px]">
    <iframe
      title="Company Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.8771495756205!2d-121.9158337!3d37.69908410000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808feddcd3089a19%3A0x685f88ef16d848d1!2s7059%20Commerce%20Cir%20Suite%20B%2C%20Pleasanton%2C%20CA%2094588%2C%20USA!5e0!3m2!1sen!2sin!4v1752069871028!5m2!1sen!2sin"
      width="100%"
      height="100%"
      allowFullScreen={true}
      loading="lazy"
      className="border-none w-full h-full"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</section>


    </>
  );
}
