import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import RouterLink from "./router-link"
import one from "./one"
import two from "./two"
import three from "./three"
import four from "./four"
import No from './no'

export default class RouterExit extends Component {
    render() {
        return (
            <Router>
                <RouterLink>
                    <Switch>
                        <Route path="/one" component={one}></Route>
                        <Route path="/two" component={two}></Route>
                        <Route path="/three" component={three}></Route>
                        <Route path="/four" component={four}></Route>
                        <Route component={No}></Route>
                    </Switch>
                </RouterLink>
            </Router>
        )
    }
}
