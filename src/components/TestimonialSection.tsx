import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const TestimonialSection = () => {
  const scrollRef = useRef(null);

  const testimonials = [
    {
      quote: "M'Global Business Consultancy transformed our online presence with a stunning website that perfectly captures our brand. Their attention to detail is unmatched!",
      name: "Pst. Barnabas",
      location: "Kisii, Kenya",
      bg: "bg-gradient-to-br from-blue-400 to-indigo-500"
    },
    {
        quote: "M'Global Business Consultancy has been a blessing to our ministry, providing beautifully designed e-cards that help us connect with our congregation. Their creativity, professionalism, and understanding of our vision keep us coming back!",
        name: "Pst. Laban",
        location: "Nairobi, Kenya",
        bg: "bg-gradient-to-br from-green-400 to-teal-500"
    },
    {
        quote: "M'Global Business Consultancy creates stunning e-cards that capture the spirit of adventure, helping us connect with clients and promote our tours. Their creativity, professionalism, and efficiency make them a valued partner!",
        name: "Isaac",
        location: "Kisii, Kenya",
        bg: "bg-gradient-to-br from-pink-400 to-purple-500"
    },
    {
      quote: "The mobile app developed by M'Global Business Consultancy increased our customer engagement by 200%. Professional and reliable service!",
      name: "Michael",
      location: "San Francisco, CA",
      bg: "bg-gradient-to-br from-yellow-400 to-orange-500"
    },
    {
      quote: "Their digital marketing strategies helped us reach our target audience effectively. We saw results within weeks!",
      name: "Emma",
      location: "London, UK",
      bg: "bg-gradient-to-br from-blue-400 to-indigo-500"
    },
    {
      quote: "The business planning service was a game-changer for our startup. Comprehensive and strategic approach!",
      name: "Ahmed",
      location: "Dubai, UAE",
      bg: "bg-gradient-to-br from-green-400 to-teal-500"
    }
  ];

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = direction === "left" ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    
      <div className="max-w-7xl mx-auto px-2 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-red-500 via-orange-300 to-slate-950">
          What Our Clients Say
        </h2>
        <p className="text-md md:text-lg text-center mb-12 text-gray-300 max-w-3xl mx-auto">
          Real stories from satisfied clients around the world
        </p>
        
        <div className="flex items-center gap-1 sm:gap-4">
          {/* Left Navigation Arrow */}
          <button 
            onClick={() => scroll("left")}
            className="bg-purple-600 p-2 sm:p-3 rounded-full hover:bg-purple-700 transition-colors flex-shrink-0"
          >
            <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
          </button>

          {/* Testimonial Cards */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto space-x-2 sm:space-x-6 pb-4 snap-x snap-mandatory scrollbar-hide flex-1"
            style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="flex-none w-52 sm:w-80 md:w-96 snap-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`bg-gray-800 rounded-lg p-3 sm:p-6 h-48 sm:h-64 flex flex-col justify-between shadow-lg`}>
                  <p className="text-gray-200 italic text-xs sm:text-md leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="text-right mt-2 sm:mt-4">
                    <p className="text-purple-300 font-semibold text-xs sm:text-base">{testimonial.name}</p>
                    <p className="text-gray-400 text-xs">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Navigation Arrow */}
          <button 
            onClick={() => scroll("right")}
            className="bg-purple-600 p-2 sm:p-3 rounded-full hover:bg-purple-700 transition-colors flex-shrink-0"
          >
            <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
          </button>
        </div>
      </div>
  );
};

export default TestimonialSection;