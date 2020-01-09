import styles from './index.css';
import React from 'react';
import { Button, Col, Row, Layout, Icon } from 'antd';
import router from 'umi/router';
const { Header, Footer, Sider, Content } = Layout;

export default class BasicLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    }
  }

  componentDidMount() {
     
  }

  render() {
    console.log('this.props.pathName', this.props.location)
    const { collapsed } = this.state;
    return (
      <div className={styles.normal} >
        {
          this.props.pathname === localStorage.getItem("currentRoute") ?
          <div>{this.props.children}</div> :
          <Layout>
          <Sider style={{ backgroundColor: '#87CEFA' }} trigger={null} collapsible collapsed={this.state.collapsed}>
            <Row style={{width: '100%', height: '60px', marginTop: "20px"}}>
              <Icon style={{fontSize: '40px', color: '#FFFFFF', cursor: 'pointer'}} type="schedule" />
            </Row>
            <Row  style={{width: '100%', height: '60px', marginTop: "20px"}}>
              <Icon style={{fontSize: '40px', color: '#FFFFFF', cursor: 'pointer'}} type="notification" />
            </Row>
            <Row  style={{width: '100%', height: '60px', marginTop: "20px"}}>
              <Icon style={{fontSize: '40px', color: '#FFFFFF', cursor: 'pointer'}} type="setting" />
            </Row>
          </Sider>
          <Layout>
            <Button onClick={() => this.setState({ collapsed: !collapsed })}>ss</Button>
            <Content>{this.props.children}</Content>
          </Layout>
        </Layout>
        }
      </div>
    )
  }
}

