import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewItem from './item';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      page: 1,
      pageSize: 10,
    };
  }

  componentDidMount() {
    const { fetchTopStories } = this.props;
    fetchTopStories && fetchTopStories();
  }

  pageChange() {

  }

  render() {
    const { topstories, fetchNewById, news } = this.props;
    const { page, pageSize } = this.state;
    const data = topstories.slice(0, 10);
    return <>
      <ul>
        {data.map((item) => <NewItem key={item} id={item} fetchItem={fetchNewById} data={news[item]}/>)
        }
      </ul>
      <div>
        <span>pageSize: {pageSize}, currentPage: { page}</span>
      </div>
    </>;
  }

}
News.propTypes = {
  topstories: PropTypes.any,
  news: PropTypes.object,
  fetchTopStories: PropTypes.func,
  fetchNewById: PropTypes.func,
};

export default News;
