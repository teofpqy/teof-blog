import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Item extends PureComponent {

  componentDidMount() {
    this.props.fetchItem(this.props.id);
  }

  render() {
    const { id, data ={}} = this.props;
    return (<div>
      {id}
      <a href={data.url} target="_blank" rel="noopener noreferrer">{data.title}</a>
    </div>);
  }
}



Item.propTypes = {
  id: PropTypes.number,
  data: PropTypes.object,
  fetchItem: PropTypes.func,
};



export default Item;
