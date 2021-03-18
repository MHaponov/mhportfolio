import React from "react"
import { NavLink } from "react-router-dom"
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Link from '@material-ui/core/Link'
import Icon from '@material-ui/icons/Email'
import HideOnScroll from './HideOnScroll'
import BackToTop from "./BackToTop";

import {
  Container,
  Fab
} from "@material-ui/core";
import { Home, KeyboardArrowUp } from "@material-ui/icons";


export default function NavBar() {
    return (
        <header style={{backgroundColor: "blue"}}>
            <HideOnScroll>
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography variant="subtitle1">Maksym Haponov</Typography>
                        <Grid container
                            alignItems="center"
                            justify="flex-end">
                            <Grid item>
                                <Link color="textPrimary" href="#home"><Typography>Home</Typography></Link>
                            </Grid>
                            <Grid item>
                                <Link color="textPrimary" href="#about"><Typography>About</Typography></Link>
                            </Grid>
                            <Grid item>
                                <Button
                                    href="mailto:gaponovm08@gmail.com"
                                    variant="contained"
                                    color="secondary"
                                    size="small"
                                    startIcon={<Icon />}>
                                    Contact me
                            </Button>
                            </Grid>
                        </Grid>
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