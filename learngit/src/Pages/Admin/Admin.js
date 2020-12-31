import React, { Component } from 'react'
import { Row, Col } from 'antd'
import 'antd/dist/antd.css'
import "./Admin.scss"
import Header from "../../Component/Header/Header"

import Footer from "../../Component/Footer/Footer"
import NavLeft from "../../Component/NavLeft/NavLeft"
// import Home from '../Home/Home'

export default class Admin extends Component {
    render() {
        return (

            <Row className="container">

                <Col span="4" className="left">
                    <NavLeft></NavLeft>
                </Col>

                <Col span="20" className="right">
                    <Header></Header>
                    <Row className="content">
                        
                            {this.props.children}
                        
                    </Row>
                    <Footer></Footer>
                </Col>

            </Row>

        )
    }
}
