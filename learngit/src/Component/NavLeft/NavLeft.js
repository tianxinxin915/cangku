import React, { Component } from 'react'
import menuList from "../../Resource/menuConfig"
import { Menu } from 'antd'
import {Link} from "react-router-dom"
import logo from "../../Resource/01.jpg"
import "./NavLeft.scss"
import { MailOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;

export default class NavLeft extends Component {
    state = {}
    componentDidMount() {
        const list = this.rendermenu(menuList)//调取函数
        this.setState({
            list
        })

       
    }
    //封装函数
    rendermenu = (menuList) => {
      return  menuList.map((item) => {
            if (item.children) {

                return (
                    <SubMenu key={item.key}  title={item.title} icon={<MailOutlined />}>
                        { this.rendermenu(item.children)}
                    </SubMenu>
                )
            }
            //没有子时显示的内容
            return (
                <Menu.Item key={item.key}>
                   <Link to={item.key}> {item.title}</Link>
                </Menu.Item>
            )
        })
    }

    render() {
        return (
            <div>
                <img src={logo} alt="" width='100' className="tu"/>
                {/* <img src={require('../../Resource/01.jpg')}  alt="" width='100' /> */}
                <Menu theme="light" >
                  {this.state.list}
                </Menu>
                {/* <Link to="/denglu">跳转到登录界面</Link> */}
            </div>
        )
    }
}
