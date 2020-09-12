import React, { Component } from 'react'
import {Modal, Button} from 'antd'
import 'antd/dist/antd.css';
import RegistrationForm from './RegistrationForm';
import './ModalExample.css'

class ModalExample extends Component {

    state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

 
    render() {
        return (
            <div>
                <Button className='btn' type="primary" onClick={this.showModal}>
                Open Modal
                </Button>

                <Modal
                title="Basic Modal"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                >
                <RegistrationForm />
                </Modal>
            </div>
        )
    }
}

export default ModalExample
