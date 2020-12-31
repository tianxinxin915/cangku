import React, { Component } from 'react'
import { Button, notification} from 'antd';

export default class Advices extends Component {

    render() {
        const openNotificationWithIcon = type => {
            notification[type]({
                message: 'Notification Title',
                description:
                    'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            });
        };
        return (
            <div>
                <Button style={{marginLeft:50}} onClick={() => openNotificationWithIcon('success')}>Success</Button>
                <Button style={{marginLeft:50}} onClick={() => openNotificationWithIcon('info')}>Info</Button>
                <Button style={{marginLeft:50}} onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
                <Button style={{marginLeft:50}} onClick={() => openNotificationWithIcon('error')}>Error</Button>
            </div>
        )
    }
}
