import React from "react"
import Grid from '@material-ui/core/Grid'
import Background from '../images/head_back.jpg'
import { fade } from '@material-ui/core/styles/colorManipulator'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Image from 'material-ui-image'

const styles = {
    headContainer: {
        backgroundImage: `url(${Background})`,
        backgroundColor: fade('#000000', 0.3),
        height: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    },
    customImg: {
        height: "500px"
    },
    bg: {
        
    }
};

export default function Head() {
    return (
        <div id="home" style={styles.headContainer}>
            <Grid container
                justify="center"
                alignItems="center">
                <Grid item>
                    <Typography color="secondary"
                        align="center">
                        <h1>Software Developer</h1>
                        <h2>Maksym Haponov</h2>
                        <p>I am coder from Ukraine, currently studing in Canada.</p>
                        <p>The website is under construction.</p>
                    </Typography>
                </Grid>
            </Grid>

        </div>
    )
}