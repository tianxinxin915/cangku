import React, { Component } from 'react'
import "./Header.scss"

export default class Header extends Component {
    state = {
        username: "小姐姐",
        time: null
    }
    Timers() {
        return new Date().getFullYear() + "年" + (new Date().getMonth() + 1) + "月" + new Date().getDate() + "日" + new Date().toLocaleTimeString()
    }
    componentDidMount() {
        //给获取到的时间定时
        this.setState({
            time: this.Timers()
        })
        setInterval(() => {
            // let Timers = new Date().getFullYear() + "年" + (new Date().getMonth() + 1) + "月" + new Date().getDate() + "日" + new Date().toLocaleTimeString()
            this.setState({
                time: this.Timers()
            })
        }, 1000)

    }

    render() {

        return (
            <div className="Header">
                <div className="top">
                    <span>欢迎：{this.state.username}</span>
                    <a href="/xxx">退出</a>
                </div>
                <div className="bottom">
                    <span className="index">首页</span>
                    <span className="event">晴转多云 </span>
                    <span className="weather">{this.state.time} </span>
                    <div className="triangle"> </div>
                </div>
            </div>
        )
    }
}
