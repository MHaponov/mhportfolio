import React from "react"
//import { NavLink } from "react-router-dom"
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Link from '@material-ui/core/Link'
import EmailIcon from '@material-ui/icons/Email'
import LinkedinIcon from '@material-ui/icons/LinkedIn'
import FacebookIcon from '@material-ui/icons/Facebook'
import HideOnScroll from './HideOnScroll'
import BackToTop from "./BackToTop"

import {
    Fab,
    Menu,
    MenuItem,
    MenuList,
    List,
    ListItem,
    ListItemText,
    Container
} from "@material-ui/core";
import { KeyboardArrowUp, MenuBook } from "@material-ui/icons";

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

const styles = {
    button: {
        color: "white",
    }
}

export default function NavBar() {

    return (
        <header style={{ backgroundColor: "#3f51b5" }}>
            <Toolbar id="back-to-top-anchor" />
            <HideOnScroll>
                <AppBar position="fixed">
                    <Toolbar style={{ backgroundColor: "#070057" }}>
                        <Container>
                            <Grid container
                                justify="space-between">
                                <Grid item>
                                    <Button style={styles.button} href="#home">Home</Button>
                                    <Button style={styles.button} href="#about" >About me</Button>
                                    <Button style={styles.button} href="#my-projects">My Projects</Button>
                                    <Button style={styles.button}>Social media</Button>
                                    <Menu>
                                        <MenuItem leftIcon={<LinkedinIcon />}>
                                            LinkedIn
                                        </MenuItem>
                                        <MenuItem startIcon={<FacebookIcon />}>
                                            Facebook
                                        </MenuItem>
                                    </Menu>
                                </Grid>
                                <Grid item>
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