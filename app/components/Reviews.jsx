import { reviewsData } from "@/assets/assets";
import { motion } from "motion/react";
import React from "react";

const CARD_WIDTH = 300;
const CARD_GAP = 24;
// Cards that fit in a ~1440px viewport
const CARDS_PER_SCREEN = 4;

const StarRating = ({ rating }) => (
  <div className="flex gap-1 mb-3">
    {Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={i < rating ? "text-yellow-400 text-xl" : "text-gray-300 dark:text-gray-600 text-xl"}
      >
        ★
      </span>
    ))}
  </div>
);

const ReviewCard = ({ name, project, review, rating }) => (
  <div
    style={{ minWidth: `${CARD_WIDTH}px`, maxWidth: `${CARD_WIDTH}px` }}
    className="border border-gray-200 dark:border-gray-700
      rounded-xl px-6 py-7 flex flex-col gap-2
      bg-white dark:bg-white/5
      hover:bg-lightHover dark:hover:bg-darkHover
      hover:-translate-y-1 duration-300 cursor-default shadow-sm"
  >
    <StarRating rating={rating} />
    <p className="text-sm text-gray-600 dark:text-white/75 italic leading-relaxed flex-1">
      "{review}"
    </p>
    <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
      <p className="font-semibold text-gray-800 dark:text-white text-sm">{name}</p>
      <p className="text-xs text-gray-400 dark:text-white/50 mt-0.5">{project}</p>
    </div>
  </div>
);

const Reviews = () => {
  const useCarousel = reviewsData.length > CARDS_PER_SCREEN;

  // Carousel: double the array so the loop is seamless
  const items = useCarousel
    ? [...reviewsData, ...reviewsData]
    : reviewsData;

  const setWidth = reviewsData.length * (CARD_WIDTH + CARD_GAP);
  const duration = Math.max(10, Math.round(setWidth / 60));

  return (
    <div id="reviews" className="w-full py-16 scroll-mt-20">
      {useCarousel && (
        <style>{`
          @keyframes reviews-marquee {
            from { transform: translateX(0px); }
            to   { transform: translateX(-${setWidth}px); }
          }
        `}</style>
      )}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="px-[12%]"
      >
        <h4 className="text-center mb-2 text-lg font-Ovo">Testimonials</h4>
        <h2 className="text-center text-4xl font-Ovo">What Clients Say</h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
          Here's what some of my clients have to say about working together.
        </p>
      </motion.div>

      {useCarousel ? (
        // Scrolling carousel for many reviews
        <div
          className="w-full overflow-hidden"
          onMouseEnter={(e) => {
            const track = e.currentTarget.querySelector(".marquee-inner");
            if (track) track.style.animationPlayState = "paused";
          }}
          onMouseLeave={(e) => {
            const track = e.currentTarget.querySelector(".marquee-inner");
            if (track) track.style.animationPlayState = "running";
          }}
        >
          <div
            className="marquee-inner flex"
            style={{
              gap: `${CARD_GAP}px`,
              width: "max-content",
              animation: `reviews-marquee ${duration}s linear infinite`,
            }}
          >
            {items.map((r, i) => (
              <ReviewCard key={i} {...r} />
            ))}
          </div>
        </div>
      ) : (
        // Static centered row for few reviews
        <div className="px-[12%] flex flex-wrap justify-center gap-6">
          {items.map((r, i) => (
            <ReviewCard key={i} {...r} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Reviews;
