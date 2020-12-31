import React, { Component } from 'react'
import { Button, Menu, Dropdown } from 'antd';

export default class Buttons extends Component {

    render() {
        function handleMenuClick(e) {
            console.log('click', e);
        }
        const menu = (
            <Menu onClick={handleMenuClick}>
                <Menu.Item key="1">1st item</Menu.Item>
                <Menu.Item key="2">2nd item</Menu.Item>
                <Menu.Item key="3">3rd item</Menu.Item>
            </Menu>
        );
        return (
            <div>
                <div style={{ float: "left" }}>
                    <Button type="primary">primary</Button>
                    <Button>secondary</Button>
                    <Dropdown.Button overlay={menu}>Actions</Dropdown.Button></div>
                <div style={{ float: "right" ,marginLeft:"50px"}}>
                    <Button type="primary" danger>
                        Primary
    </Button>
                    <Button danger>Default</Button>
                    <Button type="dashed" danger>
                        Dashed
    </Button>
                    <Button type="text" danger>
                        Text
    </Button>
                    <Button type="link" danger>
                        Link
    </Button></div>
            </div>
        )
    }
}
