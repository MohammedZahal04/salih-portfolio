const testimonials = [
  {
    name: "Tea Time Qatar",
    company: "Tea Time",
    testimonial:
      "Muhammed Salih created a great promotional video that clearly showed our brand and atmosphere. It helped us connect better with our audience in Qatar.",
  },
  {
    name: "King Tea",
    company: "King Tea Restaurant",
    testimonial:
      "Muhammed Salih created a stunning promotional video that perfectly captured the vibe and energy of our restaurant. His professionalism and creativity helped us elevate our brand presence.",
  },

  {
    name: "Ahlanz Fragrance",
    company: "Ahlanz Fragrance",
    testimonial:
      "Muhammed Salih produced a captivating promotional video that beautifully highlighted the elegance and luxury of our perfumes. His creative vision brought our brand to life on screen.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-tertiary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">
          Client Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <p className="mb-4 text-gray-600 italic">
                "{testimonial.testimonial}"
              </p>
              <p className="text-md  font-semibold">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
