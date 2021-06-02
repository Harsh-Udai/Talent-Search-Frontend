import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import DescriptionIcon from '@material-ui/icons/Description';
import EditIcon from '@material-ui/icons/Edit';

import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight:'30px',
    marginBottom:'30px',
    right:'0',
    bottom:'0',
    position:'absolute',
    transform: 'translateZ(0px)',
    flexGrow: 1,
  },
  speedDial: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const actions = [
  { icon: <VideoLibraryIcon />, name: 'Add Videos' },
  { icon: <PhotoLibraryIcon />, name: 'Add Images' },
  { icon: <DescriptionIcon />, name: 'Add Scripts' },
];

export default function SpeedDialTooltipOpen() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);

  const handleVisibility = () => {
    setHidden((prevHidden) => !prevHidden);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        className={classes.speedDial}
        hidden={hidden}
        icon={<SpeedDialIcon openIcon={<EditIcon />} /> }
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={<Link to='/dash/content' style={{textDecoration:'none',color:'#909497',marginTop:'7px'}}>{action.icon}</Link>}
            tooltipTitle={<Link to='/dash/content' style={{textDecoration:'none',color:'#909497',marginTop:'7px'}}>{action.name}</Link>}
            tooltipOpen
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </div>
  );
}
