import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import PersonIcon from '@material-ui/icons/Person'
import CodeIcon from '@material-ui/icons/DeveloperMode'
import LinkedinIcon from '@material-ui/icons/LinkedIn'
import FacebookIcon from '@material-ui/icons/Facebook'
import GithubIcon from '@material-ui/icons/GitHub'

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#091921',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  listPaddingLeft: {
    paddingLeft: '10px',
    color: 'white'
  },
  drawerContent: {
    color: 'white'
  }
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openNested, setOpenNested] = React.useState(false);

  const handleDrawerClick = () => {
    setOpenNested(!openNested);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
    setOpenNested(false);
  };

  return (
    <div className={classes.root} >
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        className={clsx(classes.menuButton, open && classes.hide)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        className={classes.drawer}
        variant="Temporary"
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
        classes={{
          paper: classes.drawerPaper,
        }}>
        <div className={classes.drawerHeader}>
          <IconButton className={classes.drawerContent} onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        {/* DRY */}
        <List>
          <ListItem className={classes.drawerContent} onClick={handleDrawerClose} onKeyDown={handleDrawerClose} component={Button} href="#home">
            <ListItemIcon><HomeIcon className={classes.drawerContent}/></ListItemIcon>
            <ListItemText primary='Home' />
          </ListItem>
          <ListItem className={classes.drawerContent} onClick={handleDrawerClose} onKeyDown={handleDrawerClose} component={Button} href="#about">
            <ListItemIcon><PersonIcon className={classes.drawerContent}/></ListItemIcon>
            <ListItemText primary='About me' />
          </ListItem>
          <ListItem className={classes.drawerContent} onClick={handleDrawerClose} onKeyDown={handleDrawerClose} component={Button} href="#my-projects">
            <ListItemIcon><CodeIcon className={classes.drawerContent}/></ListItemIcon>
            <ListItemText primary='My projects' />
          </ListItem>
          <ListItem className={classes.drawerContent} onClick={handleDrawerClick} onKeyDown={handleDrawerClose} component={Button} endIcon={ openNested ? <ExpandLessIcon/> : <ExpandMoreIcon/>}>
            <ListItemIcon><MailIcon className={classes.drawerContent}/></ListItemIcon>
            <ListItemText primary='Social Media' />
            
          </ListItem>
          <Collapse in={openNested} timeout="auto" unmountOnExit>
            <List disablePadding>
              <ListItem className={classes.drawerContent} button component="a" href="https://www.linkedin.com/in/maksym-haponov-2b7a201a1">
                <ListItemIcon className={classes.listPaddingLeft}>
                  <LinkedinIcon />
                </ListItemIcon>
                <ListItemText primary="LinkedIn" />
              </ListItem>
              <ListItem className={classes.drawerContent} button component="a" href="https://www.facebook.com/maksym.haponov.9">
                <ListItemIcon className={classes.listPaddingLeft}>
                  <FacebookIcon />
                </ListItemIcon>
                <ListItemText primary="Facebook" />
              </ListItem>
              <ListItem className={classes.drawerContent} button component="a" href="https://github.com/MHaponov">
                <ListItemIcon className={classes.listPaddingLeft}>
                  <GithubIcon />
                </ListItemIcon>
                <ListItemText primary="GitHub" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Drawer>
    </div>
  );
}