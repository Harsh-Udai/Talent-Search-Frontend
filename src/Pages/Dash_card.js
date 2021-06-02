import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
    width:354,
    margin: theme.spacing(2),
  },
  media: {
    height: 190,
  },
}));

function Media(props) {
  
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
            <Skeleton animation="wave" variant="circle" width={40} height={40} />
        }
        action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
        }
        title={
            <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
        }
        subheader={<Skeleton animation="wave" height={10} width="40%" /> }
      />
        <Skeleton animation="wave" variant="rect" className={classes.media} />
    </Card>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function Facebook() {
  return (
    <div>
        <h1 className={'text'} style={{textAlign: 'center',fontSize:'250%'}} >Images</h1>
        <div style={{display: 'flex',justifyContent: 'center',flexWrap:'wrap'}}>
        
        <Media />
        <Media />
        <Media />
        <Media />
        <Media />
        <Media />
      </div>
    </div>
  );
}
