import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { request } from 'utils';


class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      page: 1,
    };
  }

  async componentDidMount() {
    /** @type Array<number> */
    const { page } = this.state;
    const res = await request('https://hacker-news.firebaseio.com/v0/topstories.json');
    const ids = res.slice((page -1) *10, page * 10);
    const datas = await Promise.all(ids.map(id => request(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)));
    this.setState({ data: datas});
  }
  render() {

    return <>
    {
      <ul>
        {
          this.state.data.map((item) => <li key={item.id}>
            <a href={item.url}  rel="noopener noreferrer" target="_blank" key={item.id}>{item.title}</a>
          </li>)
        }
        <li></li>
      </ul>
    }
    </>;
  }

}
News.propTypes = {
  data: PropTypes.array,
};

export default News;
