import React from 'react';
import './TechSupportTestimonialSlider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import user1 from "../../assets/banner2.webp";
import user2 from "../../assets/banner4.webp";
import user3 from "../../assets/banner5.webp";

// Dummy testimonial data
const testimonials = [
  {
    name: 'Sarah M.',
    title: 'Small Business Owner',
    image: user1,
    quote: 'I had a major laptop issue before an important meeting. Their team fixed it remotely in less than 20 minutes. Absolute lifesavers!',
  },
  {
    name: 'John D.',
    title: 'Freelancer',
    image: user2,
    quote: 'Fast, reliable, and professional. They solved my tech problem without me leaving home!',
  },
  {
    name: 'Emily R.',
    title: 'Entrepreneur',
    image: user3,
    quote: 'Amazing service! I could not ask for better support.',
  },
  {
    name: 'Michael B.',
    title: 'Startup Founder',
    image: user3,
    quote: 'Quick and efficient. Saved me a lot of time and stress.',
  },
  {
    name: 'Jessica K.',
    title: 'Designer',
    image: user2,
    quote: 'They really care about their clients. Highly recommended!',
  },
  {
    name: 'David S.',
    title: 'Developer',
    image: user1,
    quote: 'Superb support team. Solved my issues remotely in no time.',
  },
];

const TechSupportTestimonialSlider = () => {
  return (
    <div className="techsupporttestimonialslider-section">

      {/* Header Section */}
      <div className="techsupporttestimonialslider-header">
        <h2 className="techsupporttestimonialslider-header-title">
          What Our Customers Say
        </h2>
        <p className="techsupporttestimonialslider-subtitle">
          Trusted by thousands worldwide, our clients share their experiences of hassle-free tech support.
        </p>
      </div>

      {/* First Slider */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30}
        slidesPerView={3}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          480: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 25 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Second Slider */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30}
        slidesPerView={3}
        className="techsupporttestimonialslider-second"
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          480: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 25 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        style={{ marginTop: '50px' }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <TestimonialCardSecond item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

/* First Slider Card */
const TestimonialCard = ({ item }) => (
  <div className="techsupporttestimonialslider-card">
    <div className="techsupporttestimonialslider-quote">❝</div>
    <p className="techsupporttestimonialslider-text">{item.quote}</p>
    <div className="techsupporttestimonialslider-user">
      <img
        src={item.image}
        alt={item.name}
        className="techsupporttestimonialslider-avatar"
      />
      <div className="techsupporttestimonialslider-user-info">
        <p className="techsupporttestimonialslider-name">— {item.name}</p>
        <p className="techsupporttestimonialslider-title">{item.title}</p>
      </div>
    </div>
  </div>
);

/* Second Slider Card */
const TestimonialCardSecond = ({ item }) => (
  <div className="techsupporttestimonialslider-card-second">
    <div className="techsupporttestimonialslider-quote-second">❝</div>
    <p className="techsupporttestimonialslider-text-second">{item.quote}</p>
    <div className="techsupporttestimonialslider-user-second">
      <img
        src={item.image}
        alt={item.name}
        className="techsupporttestimonialslider-avatar-second"
      />
      <div className="techsupporttestimonialslider-user-info-second">
        <p className="techsupporttestimonialslider-name-second">— {item.name}</p>
        <p className="techsupporttestimonialslider-title-second">{item.title}</p>
      </div>
    </div>
  </div>
);

export default TechSupportTestimonialSlider;
