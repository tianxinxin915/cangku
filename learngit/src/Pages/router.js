import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Admin from "./Admin/Admin"
import App from "../App"

import Home from './Home/Home'
import No from './no'
import Buttons from './Ui/Button'
import Alerts from './Ui/Alerts'
import Cards from "./Ui/Card"
import Loadings from "./Ui/Loading"
import Advices from "./Ui/Advice"
import Messages from "./Ui/Message"
import Tab from "./Ui/Tabs"
import Swiper1 from "./Ui/Swiper1"
import Swiper2 from "./Ui/Swiper2"
import Basics from './Form/Basics'
import High from './Form/High'
import Rich from './Rich'
import City from './City'
import Bars from "../Pages/Chars/Bars";
import Line from "../Pages/Chars/Line";
import Pics from "../Pages/Chars/Pics";
import Common from "./common"
import Order from './Order/Order'
import OrderDetail from './Order/orderdetail'
import Users from './User'



export default class Routers extends Component {
    render() {
        return (
            <Router>
                <App>
                    <Switch>
                        <Route path="/common" render={() => (
                            <Common>
                                <Route exact path="/common/order/detail/:orderId" component={OrderDetail} />
                            </Common>
                        )} />
                   



                    <Route path="/" render={() => {
                        return (
                            <Admin>
                                <Switch>
                                    <Route exact path="/admin/home" component={Home}></Route>

                                    <Route path="/admin/ui/buttons" component={Buttons}></Route>
                                    <Route path="/admin/ui/alerts" component={Alerts}></Route>
                                    <Route path="/admin/ui/cards" component={Cards}></Route>
                                    <Route path="/admin/ui/loading" component={Loadings}></Route>
                                    <Route path="/admin/ui/advice" component={Advices}></Route>
                                    <Route path="/admin/ui/message" component={Messages}></Route>
                                    <Route path="/admin/ui/tab" component={Tab}></Route>
                                    <Route path="/admin/ui/swiper" component={Swiper1}></Route>
                                    <Route path="/admin/ui/swipers" component={Swiper2}></Route>

                                    <Route path="/admin/form/basics" component={Basics}></Route>
                                    <Route path="/admin/form/high" component={High}></Route>

                                    <Route path="/admin/rich" component={Rich}></Route>
                                    <Route path="/admin/city" component={City}></Route>
                                    <Route path="/admin/chars/bar" component={Bars}></Route>
                                    <Route path="/admin/chars/pic" component={Pics}></Route>
                                    <Route path="/admin/chars/line" component={Line}></Route>
                                    <Route path="/admin/order" component={Order}></Route>
                                    <Route path="/admin/users" component={Users}></Route>




                                    <Route component={No}></Route>
                                </Switch>
                            </Admin>
                        )
                    }} />
                     </Switch>
                </App>
            </Router>
        )
    }
}
