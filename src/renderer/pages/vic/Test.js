import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
class Test extends React.Component {

    addData() {
        console.log('点击了新增', global.realm);
        global["realm"].then(real => {
            real.write(() => {
                const vicTest = real.create('Theme', {
                    id: '1',
                    name: 'VicTest',
                });
                console.log('vicTest', vicTest)
        });
     })
    }
    render() {
        return (
            <div>
                
                <Button onClick={this.addData.bind(this)}>新增</Button>
            </div>
        )
    }
}
const mapStateToProps = ({}) => ({

});
export default connect(mapStateToProps)(Test)