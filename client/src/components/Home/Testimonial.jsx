import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import '../../css/Home/Testimonial.css'

import { Pagination  ,Autoplay } from 'swiper/modules';


function Testimonial() {

    const [comments, setComments] = useState([
        {
            id: 1,
            name: "Alex Johnson",
            comment: "This was honestly one of the best travel experiences I've ever had. Everything from booking to the end of the trip was seamless. The accommodations were clean and comfortable, the guides were friendly and knowledgeable, and the scenery in Iceland was just breathtaking.",
            imageAdd : "/images/customers/IMG_5086.JPG"
        },
        {
            id: 2,
            name: "Emily Carter",
            comment: "Loved every moment of the Japan tour! The temples, the food, and the cultural touches were unforgettable. Highly recommend it.",
            imageAdd : "/images/customers/IMG_5087.JPG"
        },
        {
            id: 3,
            name: "Michael Lee",
            comment: "The hiking tour through the Alps was truly unforgettable. I'm a nature enthusiast, and this trip delivered everything I hoped for: majestic landscapes, fresh mountain air, and well-organized trails.",
            imageAdd : "/images/customers/IMG_5085.JPG"
        },
        {
            id: 4,
            name: "Sophia Davis",
            comment: "The beach resort in Bali was so relaxing. Beautiful views, great food, and friendly staff. Just what I needed.",
            imageAdd : "/images/customers/IMG_5088.JPG"
        },
        {
            id: 5,
            name: "Lily Thompson",
            comment: "I booked a last-minute weekend getaway and was genuinely impressed with how smooth everything went. The support team responded quickly to my questions, and all arrangements—from transportation to hotel check-in—were handled efficiently. ",
            imageAdd : "/images/customers/IMG_5089.JPG"
        },
    ]);

    return ( 
        <section className="testimonial">
            <div className="content">
                <p className="title">Testimonials ___</p>
                <h1>What People Say About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quae deserunt eius, quo eaque velit quod labore vero, atque accusamus eum nobis eveniet nesciunt sunt blanditiis dolorem, tenetur impedit commodi!</p>
            </div>
            <Swiper
            direction={'vertical'}
            loop={true}
            pagination={{
                clickable: true,
            }}
            autoplay={{
                delay: 8000,
                disableOnInteraction: false,
            }}
            modules={[Pagination , Autoplay]}
            className="mySwiper"
            >
                {
                    comments.map((comment) => (
                        <SwiperSlide key={comment.id}>
                            <div className="comment">
                                <div className="information">
                                    <img src={comment.imageAdd} alt="" />
                                    <h2>{comment.name}</h2>
                                </div>
                                <div>
                                    <p>{comment.comment}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </section>
     );
}

export default Testimonial;