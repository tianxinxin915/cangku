import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

export default class one extends Component {
    render() {
        return (
            <div>

                <Link to="/one/xx">跳到xx页面</Link>
                <Link to="/one/yy">跳到yy页面</Link>
                {/* 子路由跳转的方式 */}
                <Route path="/one/:id"
                    render={
                        ({ match }) => {
                            return (
                                <div>我是 { match.params.id} 页面</div>
                            )

                        }
                    }
                />
            </div>
        )
    }
}
