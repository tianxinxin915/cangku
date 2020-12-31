import React, { Component } from 'react';
import { Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Meta } = Card;

export default class Cards extends Component {
    render() {
        return (
            <div>
                <Card
                    style={{ width: 300 }}
                    cover={
                        <img
                            style={{ width: 300, height: 300 }}
                            alt="example"
                            src="https://img.alicdn.com/imgextra/i2/725677994/O1CN01cVUz6d28vIiaVHXu4_!!725677994.jpg_430x430q90.jpg"
                        />
                    }
                    actions={[
                    <SettingOutlined key="setting"  onClick={()=>{console.log(1)}}/>,
                        <EditOutlined key="edit" onClick={()=>{console.log(2)}}/>,
                        <EllipsisOutlined key="ellipsis"onClick={()=>{console.log(3)}} />,
                    ]}
                >
                    <Meta
                        avatar={<img alt="" style={{ width: 30, height: 30 }} src="https://img.alicdn.com/imgextra/i2/725677994/O1CN01cVUz6d28vIiaVHXu4_!!725677994.jpg_430x430q90.jpg" />}
                        title="营养早餐"
                        description="早餐是必备的"
                    />
                </Card>
            </div>
        );
    }
}

