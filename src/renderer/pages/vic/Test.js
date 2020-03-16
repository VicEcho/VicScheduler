import React from 'react';
import { connect } from 'dva';
import { Button, Input } from 'antd';
import uuidv4 from "uuid/v4";

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
        global["webSocket"].sendMessage({name: 'echo', words: this.state.value});
    }
    render() {
        const { value } = this.state;
        return (
            <div>
                <Input value={value} onChange={this.onChangeValue.bind(this)}/>
                <Button onClick={this.sendMessage.bind(this)}>发送消息</Button>
                <Button onClick={this.addData.bind(this)}>新增到数据库</Button>
            </div>
        )
    }
}
const mapStateToProps = ({}) => ({

});
export default connect(mapStateToProps)(Test)