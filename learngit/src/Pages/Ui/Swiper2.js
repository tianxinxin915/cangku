import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import tsIcon1 from '../../Resource/pic/01.jpg'
import tsIcon2 from '../../Resource/pic/02.jpg'
import tsIcon3 from '../../Resource/pic/03.jpg'
import tsIcon4 from '../../Resource/pic/04.jpg'

export default class Swiper2 extends Component {
    render() {
        return (
            <div>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><img src={tsIcon1} alt="" style={{height:400,width:800}} /></SwiperSlide>
                    <SwiperSlide><img src={tsIcon2} alt="" style={{height:400,width:800}} /></SwiperSlide>
                    <SwiperSlide><img src={tsIcon3} alt="" style={{height:400,width:800}} /></SwiperSlide>
                    <SwiperSlide><img src={tsIcon4} alt="" style={{height:400,width:800}} /></SwiperSlide>
      ...
    </Swiper>
            </div>
        )
    }
}
