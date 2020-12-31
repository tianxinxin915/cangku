import React, { Component } from 'react'
import { Spin, Switch, Alert, Space } from 'antd';

export default class Loadings extends Component {
    state = { loading: false };
    toggle = value => {
        this.setState({ loading: value });
    };
    render() {
        return (
            <div>
                <div style={{display:"inline-block" ,marginRight:30}}>
                    <Spin spinning={this.state.loading}>
                        <Alert
                            message="标题"
                            description="弹 出 内 容"
                            type="info"
                        />
                    </Spin>
                

                <div style={{ marginTop: 16}}>
                    加载开关：
                    <Switch checked={this.state.loading} onChange={this.toggle} />
                </div>
                </div>
                <div style={{ float: "right" ,display:"inline-block"}}>
                    <Space size="middle" style={{ marginTop: 16 }} >
                        <Spin size="small" />
                        <Spin />
                        <Spin size="large" />
                    </Space>
                </div>

            </div >
        )
    }
}
