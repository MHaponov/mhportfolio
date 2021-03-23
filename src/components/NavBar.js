import React from "react"
//import { NavLink } from "react-router-dom"
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import EmailIcon from '@material-ui/icons/Email'
import LinkedinIcon from '@material-ui/icons/LinkedIn'
import FacebookIcon from '@material-ui/icons/Facebook'
import HideOnScroll from './HideOnScroll'
import BackToTop from "./BackToTop"

import {
    Fab,
    Menu,
    MenuItem,
    Container,
    Hidden
} from "@material-ui/core";
import { KeyboardArrowUp } from "@material-ui/icons";

const styles = {
    button: {
        color: "white",
        '&:hover': {
            backgroundColor: "white",

        }
    }

}

export default function NavBar() {
    return (
        <header style={{ backgroundColor: "#1F2833", minHeight: "64px" }} >
            <HideOnScroll style={{ minHeight: "64px" }}>
                <AppBar position="fixed" style={{ minHeight: "64px" }}>
                    <Toolbar color="primary" style={{ minHeight: "64px" }}>
                        <Container xs="12">
                            <Grid container
                                justify="space-between">
                                <Grid item>
                                    <Hidden mdUp>
                                        Sandwich Drawer Menu
                                    </Hidden>
                                    <Hidden smDown>
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
            <Toolbar id="back-to-top-anchor" />
            <BackToTop>
                <Fab color="secondary" size="large" aria-label="scroll back to top">
                    <KeyboardArrowUp />
                </Fab>
            </BackToTop>
        </header>
    )
}