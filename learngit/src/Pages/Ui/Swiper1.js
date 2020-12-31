import React, { Component } from 'react'
import { Carousel } from 'antd';
import tsIcon1 from '../../Resource/pic/01.jpg'
import tsIcon2 from '../../Resource/pic/02.jpg'
import tsIcon3 from '../../Resource/pic/03.jpg'
import tsIcon4 from '../../Resource/pic/04.jpg'

export default class Swiper1 extends Component {
    state = {}

    render() {
     
        return (
            <div>

                <Carousel autoplay style={{ width: 400, marginLeft:100}}>
                    <img alt="" src={tsIcon1} style={{height:300,width:400}}></img>
                    <img alt="" src={tsIcon2} style={{height:300,width:400}}></img>
                    <img alt="" src={tsIcon3} style={{height:300,width:400}}></img>
                    <img alt="" src={tsIcon4} style={{height:300,width:400}}></img>
                </Carousel>

            </div>


        )
    }
}
