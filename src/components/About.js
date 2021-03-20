import React from "react"
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { List, ListItemText } from '@material-ui/core'
import Image from 'material-ui-image'
import Photo from '../images/photo.jpg'

const styles = {
    aboutContainer: {
        border: "1px solid black",
    },
    imgStyle: {
        borderRadius: "50%"
    }
};

export default function About() {
    return (
        <div id="about" style={styles.aboutContainer}>
            <Container style={{ marginBottom: "3%", marginTop: "2%" }}>
                <h1>About me</h1>
                <Grid container
                    justify="space-between"
                    spacing={8}>
                    <Grid item sm="4" xs="12">
                        <h2>Who am I?</h2>
                        <Image src={Photo} imageStyle={styles.imgStyle} />
                        <Typography align="left">
                            <p>Full Name: Maksym Haponov</p>
                            <p>Age: 22</p>
                            <p>Specialization: Computer Science, Software Developer</p>
                        </Typography>

                    </Grid>
                    <Grid item sm="7" xs="12">
                        <Typography align="left">
                            <h3>Qualification</h3>
                            <List>
                                <ListItemText>fsdsfds sdfg aaw</ListItemText>
                                <ListItemText>fgfg sdfddfg dsfgdfg sdg</ListItemText>
                            </List>
                            <h3>Technology</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <h3>Education</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}