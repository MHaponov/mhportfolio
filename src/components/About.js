import React from "react"
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { List, ListItemText } from '@material-ui/core'
import Image from 'material-ui-image'
import Photo from '../images/photo.png'
import CodeIcon from '@material-ui/icons/DeveloperMode'
import PersonIcon from '@material-ui/icons/Person'

const styles = {
    aboutContainer: {
        paddingTop: "10px",
    },
    imgStyle: {
        borderRadius: "50%"
    },
    iconWrap: {
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap"
    }
};

export default function About() {
    return (
        <div id="about" style={styles.aboutContainer}>
            <Container style={{ marginBottom: "3%", marginTop: "2%" }}>
                <h1>About me</h1>
                <Grid container
                    justify="space-between" spacing={4}>
                    <Grid item sm="4" xs="12">
                        <Image src={Photo} imageStyle={styles.imgStyle} />
                        <Typography align="left">
                            <h3 style={styles.iconWrap}><PersonIcon /> Details</h3>
                            <p>Full Name: Maksym Haponov</p>
                            <p>Age: 22</p>
                            <p>Specialization: Computer Science, Software Developer</p>
                            <h3 style={styles.iconWrap}><CodeIcon /> Credentials</h3>
                            <p>Programming languages: C/C++, C#, Java, PHP, JavaScript, Python </p>
                            <p>Databases: Oracle Database, MySQL, SQL Server </p>
                            <p>Operating systems: Microsoft Windows, Linux (CentOS, Ubuntu)</p>
                        </Typography>

                    </Grid>
                    <Grid item sm="8" xs="12">
                        <Typography align="left">
                            <h3>Qualification</h3>
                            <List>
                                <ListItemText>fsdsfds sdfg aaw</ListItemText>
                                <ListItemText>fgfg sdfddfg dsfgdfg sdgo	</ListItemText>
                            </List>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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