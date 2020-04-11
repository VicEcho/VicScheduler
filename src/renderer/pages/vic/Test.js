import React from 'react';
import { connect } from 'dva';
import { Button, Input } from 'antd';
import { IM } from '../../socket/Packet';
import uuidv4 from "uuid/v4";
import webSocket from '../../socket';

class Test extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    componentDidMount() {
    }

    addData() {
        console.log('点击了新增', global.realm);
        global["realm"].then(real => {
            real.write(() => {
                const vicTest = real.create('Theme', {
                    id: uuidv4(),
                    name: 'VicTest',
                });
                console.log('vicTest', vicTest)
            });
        })
    }

    onChangeValue(ee) {
        this.setState({
            value: ee.target.value
        })
    }

    // 发送消息
    sendMessage() {
        global["webSocket"].sendMessage({ name: 'echo', words: this.state.value });
    }

    // 发送protoBuf
    sendPacket() {
        // const im = IM.ImMessage.create();
        const data = {name: 'echo', words: '2222222222222222222222'}
        const packet = IM.ImMessage.encode(data).finish();
        global["webSocket"].sendPacket(packet);
    }

    // testSocket
    testSocket() {
        webSocket.connect();
    }
    render() {
        const { value } = this.state;
        return (
            <div>
                <Input value={value} onChange={this.onChangeValue.bind(this)} />
                <Button onClick={this.sendMessage.bind(this)}>发送消息</Button>
                <Button onClick={this.addData.bind(this)}>新增到数据库</Button>
                <Button onClick={this.sendPacket.bind(this)}>发送Proto</Button>
                <Button onClick={this.testSocket.bind(this)}>testSocket</Button>
            </div>
        )
    }
}
const mapStateToProps = ({ }) => ({

});
export default connect(mapStateToProps)(Test)