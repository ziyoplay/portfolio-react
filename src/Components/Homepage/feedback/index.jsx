import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './style.css'

const testimonials = [
    {
        name: 'Dr. James Anderson',
        title: 'Director of the College of Art and Design',
        quote:
            "As the director of the college, I have witnessed Callum's remarkable growth as a designer. He has a keen eye for detail and a commendable dedication to his craft, which has set a high standard for his peers. Callum's work is a testament to his potential in the design industry.",
        avatar: '/images/Image (2).png'
    },
    {
        name: 'Elizabeth Thompson',
        title: 'Senior Lecturer in Graphic Design',
        quote:
            'Callum consistently demonstrated exceptional creativity and a deep understanding of user-centric design principles in my design class. His projects were not only aesthetically pleasing but also showcased practical functionality that exceeded course expectations.',
        avatar: '/images/Image (2).png'
    },
    {
        name: 'Michael Roberts',
        title: 'Creative Director at PixelCraft',
        quote:
            'Working with Callum was a pleasure. He approaches problems with curiosity and delivers solutions that balance brand integrity with usability. I would gladly collaborate with him again on future projects.',
        avatar: '/images/Image (2).png'
    },
    {
        name: 'Sophia Nguyen',
        title: 'Product Designer at NovaTech',
        quote:
            'Callum brings strong visual taste and product thinking. He communicates clearly with engineers and ships quality work on time.',
        avatar: '/images/Image (2).png'
    }
]

const Feedback = () => {
    return (
        <section className="feedback container">
            <div className="feedback__header">
                <h2>Expert feedback</h2>
                <p>
                    Read insights and praises from mentors and peers who have guided and
                    witnessed my professional growth.
                </p>
            </div>

            <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    900: { slidesPerView: 2 },
                    1280: { slidesPerView: 3 }
                }}
                className="feedback__swiper"
            >
                {testimonials.map((t, idx) => (
                    <SwiperSlide key={idx}>
                        <article className="feedback-card">
                            <div className="feedback-card__avatar">
                                <img src={t.avatar} alt={t.name} />
                            </div>
                            <h3 className="feedback-card__name">{t.name}</h3>
                            <span className="feedback-card__title">{t.title}</span>
                            <p className="feedback-card__quote">“{t.quote}”</p>
                        </article>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Feedback


