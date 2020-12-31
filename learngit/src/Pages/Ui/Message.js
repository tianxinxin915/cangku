import React, { Component } from 'react'
import { message, Button} from 'antd';

export default class Messages extends Component {
    render() {
        const success = () => {
            message.success('This is a success message');
        };

        const error = () => {
            message.error('This is an error message');
        };

        const warning = () => {
            message.warning('This is a warning message');
        };
        return (
            <div>
                <Button style={{marginLeft:50}}onClick={success}>Success</Button>
                <Button style={{marginLeft:50}}onClick={error}>Error</Button>
                <Button style={{marginLeft:50}}onClick={warning}>Warning</Button>
            </div>
        )
    }
}
