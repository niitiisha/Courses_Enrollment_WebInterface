import React, { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = new Array(8).fill({
  title: "Career Transformation",
  text: "Thanks to Data Avengers, I made a complete career switch into Full Stack Development. The course structure and community support were invaluable.",
  name: "Maria Lopez",
  role: "Full Stack Developer",
});

const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-white py-20 px-4 text-center">
      <h2 className="text-5xl font-['Josefin_Sans'] text-black mb-4">Loved by Learners</h2>
      <div className="h-1 w-96 bg-[#f36c3c] mx-auto mt-2 mb-16 rounded-full" />

      <div
        ref={scrollRef}
        className="relative overflow-hidden"
        onMouseEnter={() => {
          if (scrollRef.current) {
            scrollRef.current.style.animationPlayState = "paused";
          }
        }}
        onMouseLeave={() => {
          if (scrollRef.current) {
            scrollRef.current.style.animationPlayState = "running";
          }
        }}
      >
        <div className="flex gap-8 w-max animate-scroll px-4">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="min-w-[400px] max-w-md bg-gray-50 border border-gray-200 rounded-xl p-8 shadow hover:shadow-md transition"
            >
              <div className="flex justify-between text-[#f36c3c] text-4xl mb-4">
                <Quote className="rotate-180" />
                <Quote />
              </div>
              <h3 className="font-semibold text-2xl mb-4 font-['Josefin_Sans']">{t.title}</h3>
              <p className="text-lg text-gray-700 mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-4 mt-6">
                <div className="w-16 h-16 rounded-full bg-gray-300"></div>
                <div className="text-left">
                  <p className="text-lg font-semibold font-['Josefin_Sans']">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;