import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {
  Card,
  CardHeader,
  CardContent,
  CardActionArea,
  Grid,
  Typography,
  Link,
} from '@material-ui/core';

dayjs.extend(relativeTime);

class Item extends PureComponent {

  render() {
    const { data } = this.props;
    return (<Grid item xs={12}>
      <Card> <CardActionArea>
        <CardHeader title={<Link href={data.url} target='_blank' rel="noopener noreferrer">{data.title}</Link>} />
        <CardContent>
          <Typography>
            {`${data.score} points by ${data.by} ${dayjs.unix(data.time).toNow()} | ${data.kids ? `${data.kids.length} coments` : ''} `}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Card>
    </Grid>);
  }
}


Item.propTypes = {
  data: PropTypes.object,
  fetchItem: PropTypes.func,
};

export default Item;
