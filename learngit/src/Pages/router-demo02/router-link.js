import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class RouterLink extends Component {
    render() {
        return (
            <div>
                <Link to="/one">跳到one页面</Link>
                <Link to="/two">跳到two页面</Link>
                <Link to="/three">跳到three页面</Link>
                <Link to="/four">跳到four页面</Link>
                {this.props.children}
            </div>
        )
    }
}
