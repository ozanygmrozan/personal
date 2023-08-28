import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Yazılım hizmetlerinizden çok etkilendik! Profesyonel ekibiniz, işletmemize özel çözümler sunarak iş süreçlerimizi büyük ölçüde kolaylaştırdı.",
    },
    {
      img: profilePic2,
      review:
        "Odessa Yazılımı'ın yazılım hizmetleriyle iş süreçlerimizi kolaylaştırdık, markamızı güçlendirdik. Profesyonel ve müşteri odaklı yaklaşımlarıyla tavsiye ediyoruz",
    },

    {
      img: profilePic4,
      review:
        "Odessa Yazılım'ın yazılım hizmetleri iş süreçlerimize büyük katkı sağladı. Uzman ekibinizin profesyonelliği ve müşteri odaklı yaklaşımı sayesinde markamızı güçlendirdik. Tavsiye ediyoruz",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Odessa</span>
        <span> Yazılım </span>
        <span>Olarak Biz</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
