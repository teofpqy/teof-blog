import { fetchTopStories, fetchNewById } from  'data/hackerNews/actions';
import { connect } from 'react-redux';
import News from './component';

const mapStateToProps = (state) => {
  return {
    topstories: state.hackerNews.topstories || [],
    news: state.hackerNews.news|| [],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTopstories: dispatch(fetchTopStories()),
    fetchNewById: (id) => dispatch(fetchNewById(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
