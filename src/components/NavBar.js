import React from "react"
//import { NavLink } from "react-router-dom"
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import EmailIcon from '@material-ui/icons/Email'
import LinkedinIcon from '@material-ui/icons/LinkedIn'
import FacebookIcon from '@material-ui/icons/Facebook'
import GithubIcon from '@material-ui/icons/GitHub'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import HideOnScroll from './HideOnScroll'
import BackToTop from "./BackToTop"
import {
    Fab,
    MenuList,
    MenuItem,
    Container,
    Hidden
} from "@material-ui/core";
import { KeyboardArrowUp } from "@material-ui/icons";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import SideDrawer from '../components/SideDrawer'

const styles = {
    button: {
        color: "white"
    }
}

export default function NavBar() {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = open;
    }, [open]);

    return (
        <header style={{ backgroundColor: "#1F2833", minHeight: "64px" }} >
            <Toolbar id="back-to-top-anchor" />
            <HideOnScroll style={{ minHeight: "64px" }}>
                <AppBar position="fixed" style={{ minHeight: "64px" }}>
                    <Toolbar color="primary" style={{ minHeight: "64px" }}>
                        <Container>
                            <Grid container
                                justify="space-between"
                                alignItems="center">
                                <Grid item>
                                    <Hidden mdUp>
                                        <SideDrawer/>
                                    </Hidden>
                                    <Hidden smDown>
                                        <Button style={styles.button} href="#home">Home</Button>
                                        <Button style={styles.button} href="#about" >About me</Button>
                                        <Button style={styles.button} href="#my-projects">My Projects</Button>
                                        <Button
                                            ref={anchorRef}
                                            aria-controls={open ? 'menu-list-grow' : undefined}
                                            aria-haspopup="true"
                                            onClick={handleToggle}
                                            endIcon={ open ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
                                            style={styles.button}>
                                            Social media
                                            </Button>
                                        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                                            {({ TransitionProps, placement }) => (
                                                <Grow
                                                    {...TransitionProps}
                                                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
                                                    <Paper>
                                                        <ClickAwayListener onClickAway={handleClose}>
                                                            <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                                                <MenuItem onClick={handleClose}><LinkedinIcon/>  LinkedIn</MenuItem>
                                                                <MenuItem onClick={handleClose}><FacebookIcon/>  Facebook</MenuItem>
                                                                <MenuItem onClick={handleClose}><GithubIcon/>  GitHub</MenuItem>
                                                            </MenuList>
                                                        </ClickAwayListener>
                                                    </Paper>
                                                </Grow>
                                            )}
                                        </Popper>
                                    </Hidden>
                                </Grid>
                                <Grid item justifyItems="center">
                                    <Button
                                        href="mailto:gaponovm08@gmail.com"
                                        variant="contained"
                                        color="secondary"
                                        startIcon={<EmailIcon />}>
                                        Contact me
                                    </Button>
                                </Grid>
                            </Grid>
                        </Container>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <BackToTop>
                <Fab color="secondary" size="large" aria-label="scroll back to top">
                    <KeyboardArrowUp />
                </Fab>
            </BackToTop>
        </header>
    )
}