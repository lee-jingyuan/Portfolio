import TitleHeader from "../components/TitleHeader";

const Testimonial = () => {
  return (
    <section id="testimonial" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="Testimonial" />
        
        {/* Coach Name */}
        <p className="text-white-500 text-sm mb-3">
          From Coach Gilbert Heng
        </p>

        {/* Header bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-black-50">
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-red-500" />
            <div className="size-3 rounded-full bg-yellow-500" />
            <div className="size-3 rounded-full bg-green-500" />
          </div>
          <a
            href="images/testimonial.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white-500 hover:text-white transition-colors"
          >
            Open ↗
          </a>
        </div>
        {/* PDF iframe */}
        <iframe
          src="images/testimonial.pdf"
          title="Testimonial"
          className="w-full h-[600px]"
        />
      </div>
    </section>
  );
};

export default Testimonial;