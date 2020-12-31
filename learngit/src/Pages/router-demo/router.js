import React, { Component } from 'react'
import { Link, BrowserRouter as Router, Route } from "react-router-dom"
import a from "./a"
import b from "./b"
import c from "./c"
import Admin from "../Admin/Admin"

export default class Router01 extends Component {
    render() {
        return (

            <Router>
                <Admin>
                    <Link to="/a">跳转到a页面</Link>
                    <Link to="/b">跳转到b页面</Link>
                    <Link to="/c">跳转到c页面</Link>
                    <Route path="/a" component={a}></Route>
                    <Route path="/b" component={b}></Route>
                    <Route path="/c" component={c}></Route>

                </Admin>
            </Router>

        )
    }
}
