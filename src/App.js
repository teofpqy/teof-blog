import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import Posts from './pages/posts';
import Styles from './styles';

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Layout className={Styles.container}>
        <Header>
          <Menu theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['posts']}
            style={{ lineHeight: '64px' }}>
            <Menu.Item key='posts'>Posts</Menu.Item>
            <Menu.Item key='archive'>Archive</Menu.Item>
          </Menu>
        </Header>
        <Content>
          <Posts />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          teof's blog @2018
        </Footer>
      </Layout>
    )
  }
}

export default App;
