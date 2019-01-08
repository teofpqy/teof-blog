import React, { Component } from 'react';
import { List } from 'antd';
const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];


class Posts extends Component {
  constructor(props)  {
    super(props);
    this.state = {
      data: data,
    };
  }


  render() {
    return <List
      itemLayout="horizontal"
      dataSource={this.state.data}
      header="文章列表"
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            title={item.title}
            description="this is post"
        />
        </List.Item>
      )}>

    </List>
  }

}

export default Posts;
