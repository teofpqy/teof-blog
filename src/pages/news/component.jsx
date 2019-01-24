import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import NewItem from './item';

class News extends Component {

  componentDidMount() {
    const { fetchTopStories } = this.props;
    fetchTopStories && fetchTopStories();
  }

  render() {
    const { news } = this.props;
    return <Grid container spacing={8} direction="row">
      {news.map((item) => <NewItem key={item.id} data={item}/>)}
      </Grid>;
  }

}
News.propTypes = {
  topstories: PropTypes.any,
  news: PropTypes.array,
  fetchTopStories: PropTypes.func,
  fetchNewById: PropTypes.func,
};

export default News;
