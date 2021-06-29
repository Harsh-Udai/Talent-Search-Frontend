import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import EditIcon from '@material-ui/icons/Edit';


const useStyles = makeStyles((theme) => ({
  root: {
    marginRight:'30px',
    marginBottom:'30px',
    right:'0',
    bottom:'0',
    position:'fixed',
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
  { icon: <VideoLibraryIcon />, name: 'Add Content' },
];

const hidden = false;
export default function SpeedDialTooltipOpen(props) {

 

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  
  

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    
    setOpen(false);
  };
  const handleClose1 = () => {
    props.toggleCh(false);
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
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleClose1}
          />
        ))}
      </SpeedDial>
    </div>
  );
}
