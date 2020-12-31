import React, { Component } from 'react'
import { Form, Select, Button, Table, Modal } from 'antd';
import { gets } from "./Axios"
// import fun from "../Until/Until"
const FormItem = Form.Item
const Option = Select.Option



export default class City extends Component {
    state = {
        loading: false,
        list: [],
        xx: true,
        isShowOpenCity: false,
        visible: false,
    }

    UNSAFE_componentWillMount() {
        this.requestList()
    }
    requestList = () => {
        gets("/city").then((res) => {
            let val = res.data.map((item, index) => {
                item.key = index
                return item
            })
            this.setState({
                list: val
            })

        })
    }
    okok = () => {
        this.setState({
            xx: false
        })
    }
    handleOpenCity = () => {
        this.setState({
            visible: true
        })
    }
    
    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false, visible: false });
        }, 3000);
      };
    
    handleCancel = () => {
        this.setState({ visible: false });
        console.log(this.state.visible);
    };
    render() {
        const columns = [
            {
                title: '城市field',
                dataIndex: 'field',
            },
            {
                title: '状态',
                dataIndex: 'label',
            },
            {
                title: '用车模式',
                dataIndex: 'initialValue',
                render(initialValue) {
                    return initialValue === 1 ? '停车点' : '禁停区'
                },
            },
            {
                title: '营运模式',
                dataIndex: 'type',
                render(type) {
                    return type === 'SELECT' ? '自营' : '加盟'
                },
            },
            {
                title: '授权加盟商',
                dataIndex: 'shouquan',
                render(shouquan) {
                    return shouquan === '11' ? '授权' : '未授权'
                },
            },
            {
                title: '城市开通时间',
                dataIndex: 'open_time',
            },
            {
                title: '操作时间',
                dataIndex: 'update_time',
                // render: fuc.formateDate,
            },
            {
                title: '操作人',
                dataIndex: 'sys_user_name',
            },
        ]
        const { visible, loading } = this.state;
        console.log(visible);
        return (
            <div>
                {/* 打开弹出页面 */}
                <Modal title="OK提示" visible={this.state.xx} onOk={this.okok}>
                    你已经成功获取到机密文件了!
				</Modal>
                {/* 顶端布局 */}
                <Form layout="inline">
                    <FormItem label="城市">
                        <Select style={{ width: 100 }} placeholder="全部">
                            <Option value="">全部</Option>
                            <Option value="1">北京市</Option>
                            <Option value="2">天津市</Option>
                            <Option value="3">深圳市</Option>
                        </Select>
                    </FormItem>

                    <FormItem label="用车模式">
                        <Select style={{ width: 120 }} placeholder="全部">
                            <Option value="">全部</Option>
                            <Option value="1">指定停车点模式</Option>
                            <Option value="2">禁停区模式</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="营运模式">
                        <Select style={{ width: 80 }} placeholder="全部">
                            <Option value="">全部</Option>
                            <Option value="1">自营</Option>
                            <Option value="2">加盟</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="加盟商授权状态">
                        <Select style={{ width: 100 }} placeholder="全部">
                            <Option value="">全部</Option>
                            <Option value="1">已授权</Option>
                            <Option value="2">未授权</Option>
                        </Select>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" style={{ margin: '0 20px' }}>
                            查询
					</Button>
                        <Button>重置</Button>
                    </FormItem>
                </Form>
                {/* 开通城市 */}
                <Button type="primary" danger style={{ margin: 10 }} onClick={this.handleOpenCity}>
                    开通城市
                    <Modal
                        visible={visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        footer={[
                            <Button key="back" onClick={this.handleCancel}>
                              cancle
                            </Button>,
                            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                              ok
                            </Button>,
                          ]}
                    >
                        <OpenCityForm />
                    </Modal>
                </Button>
                {/* 获取数据 */}
                <div className="content-wrap">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.list}
                    // pagination={this.state.pagination}
                    />
                </div>
            </div>
        )
    }
}

//开通城市弹出框
class OpenCityForm extends React.Component {
    render() {
        // 用于页面布局的
        const formItemLayout = {
            labelCol: {
                span: 5,
            },
            wrapperCol: {
                span: 19,
            },
        }
        return (
            <Form layout="horizontal">
                <FormItem label="选择城市" {...formItemLayout}>
                    <Select style={{ width: 100 }}>
                        <Option value="">全部</Option>
                        <Option value="1">北京市</Option>
                        <Option value="2">天津市</Option>
                    </Select>
                </FormItem>
                <FormItem label="营运模式" {...formItemLayout}>
                    <Select style={{ width: 100 }}>
                        <Option value="1">自营</Option>
                        <Option value="2">加盟</Option>
                    </Select>
                </FormItem>
                <FormItem label="用车模式" {...formItemLayout}>
                    <Select style={{ width: 100 }}>
                        <Option value="1">指定停车点</Option>
                        <Option value="2">禁停区</Option>
                    </Select>
                </FormItem>
            </Form>
        )
    }
}

