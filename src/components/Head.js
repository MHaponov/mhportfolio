import React from "react"
import Grid from '@material-ui/core/Grid'
import Background from '../images/head_back.jpg'
import { fade } from '@material-ui/core/styles/colorManipulator'
import Typography from '@material-ui/core/Typography'

const styles = {
    headContainer: {
        backgroundImage: `url(${Background})`,
        backgroundColor: "black",
        height: "93%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column"
    },
    customImg: {
        filter: "Brightness(50%)"
    },
    bg: {

    }
};

export default function Head() {
    return (
        <div style={styles.headContainer}>
            <Grid container
                justify="center"
                alignItems="center"
                justifyContent="center"
                style={{}}>
                <Grid item>
                    <Typography style={{color: "white"}}
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