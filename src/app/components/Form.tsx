"use client";

import { useState } from "react";

export default function Form() {
  const [radio1, setRadio1] = useState("Option 1");
  const [radio2, setRadio2] = useState("Option 1");
  const [checkboxes1, setCheckboxes1] = useState<string[]>([]);
  const [checkboxes2, setCheckboxes2] = useState<string[]>([]);

  const toggleCheckbox = (label: string, group: "1" | "2") => {
    const update = (prev: string[]) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label];

    if (group === "1") {
      setCheckboxes1(update);
    } else {
      setCheckboxes2(update);
    }
  };

  return (
    <section className="bg-[#111214] text-white py-16 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Form Inputs */}
        <div>
          <h2 className="uppercase tracking-widest text-sm mb-6">Contact Form</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 bg-transparent border border-gray-700 focus:outline-none placeholder-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 bg-transparent border border-gray-700 focus:outline-none placeholder-white"
            />
            <input
              type="tel"
              placeholder="Your Phone"
              className="w-full px-4 py-2 bg-transparent border border-gray-700 focus:outline-none placeholder-white"
            />
            <textarea
              placeholder="Your Message"
              className="w-full h-40 px-4 py-2 bg-transparent border border-gray-700 focus:outline-none placeholder-white"
            ></textarea>
            <button
              type="submit"
              className="uppercase tracking-widest text-sm px-6 py-2 border border-gray-500 hover:bg-white hover:text-black transition"
            >
              Submit Form
            </button>
          </form>
        </div>

        {/* Right: Radios and Checkboxes */}
        <div className="space-y-8">
          {/* Radios Group 1 */}
          <div>
            <h3 className="uppercase tracking-widest text-sm mb-3">Radios</h3>
            <div className="flex flex-wrap gap-4">
              {["Option 1", "Option 2", "Option 3"].map((label) => (
                <label
                  key={label}
                  onClick={() => setRadio1(label)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-sm bg-[#1e1e1e] cursor-pointer ${
                    radio1 === label ? "text-yellow-400" : "text-gray-300"
                  }`}
                >
                  <input type="radio" name="radio1" className="hidden" />
                  {radio1 === label && <span className="text-xl">✔</span>}
                  {label}
                </label>
              ))}
            </div>
          </div>

          {/* Checkboxes Group 1 */}
          <div>
            <h3 className="uppercase tracking-widest text-sm mb-3">Checkboxes</h3>
            <div className="flex flex-wrap gap-4">
              {["Check Item 1", "Check Item 2", "Check Item 3"].map((label) => (
                <label
                  key={label}
                  onClick={() => toggleCheckbox(label, "1")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-sm bg-[#1e1e1e] cursor-pointer ${
                    checkboxes1.includes(label) ? "text-yellow-400" : "text-gray-300"
                  }`}
                >
                  <input type="checkbox" className="hidden" />
                  {checkboxes1.includes(label) && <span className="text-xl">✔</span>}
                  {label}
                </label>
              ))}
            </div>
          </div>

          {/* Radios Group 2 (Alternative Style) */}
          <div>
            <h3 className="uppercase tracking-widest text-sm mb-3">Radios (Alternative Style)</h3>
            <div className="flex flex-wrap gap-6 items-center">
              {["Option 1", "Option 2", "Option 3"].map((label) => (
                <label
                  key={label}
                  onClick={() => setRadio2(label)}
                  className={`flex items-center gap-2 cursor-pointer ${
                    radio2 === label ? "text-yellow-400" : "text-gray-300"
                  }`}
                >
                  <input type="radio" name="radio2" className="hidden" />
                  {radio2 === label && <span className="text-xl">✔</span>}
                  {label}
                </label>
              ))}
            </div>
          </div>

          {/* Checkboxes Group 2 (Alternative Style) */}
          <div>
            <h3 className="uppercase tracking-widest text-sm mb-3">Checkboxes (Alternative Style)</h3>
            <div className="flex flex-wrap gap-6 items-center">
              {["Check Item 1", "Check Item 2", "Check Item 3"].map((label) => (
                <label
                  key={label}
                  onClick={() => toggleCheckbox(label, "2")}
                  className={`flex items-center gap-2 cursor-pointer ${
                    checkboxes2.includes(label) ? "text-yellow-400" : "text-gray-300"
                  }`}
                >
                  <input type="checkbox" className="hidden" />
                  {checkboxes2.includes(label) && <span className="text-xl">✔</span>}
                  {label}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
