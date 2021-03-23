import React from "react"
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/icons/Email'
import LinkedinIcon from '@material-ui/icons/LinkedIn'
import FacebookIcon from '@material-ui/icons/Facebook'
import GithubIcon from '@material-ui/icons/GitHub'

const styles = {
    contactMeContainer: {
        paddingTop: "25px",
        paddingBottom: "45px",
        backgroundColor: "#1F2833"
    },
    button: {
        color: "white"
    }
};

export default function ContactMe() {
    return (
        <div style={styles.contactMeContainer} color="primary">
            <Grid container
                direction="column">
                <Grid item>
                    <Typography style={styles.button}>
                        <h1>Let's work together</h1>
                    </Typography>
                </Grid>
                <Grid item>
                    <Button
                        href="mailto:gaponovm08@gmail.com"
                        variant="contained"
                        color="secondary"
                        size="large"
                        startIcon={<Icon />}>
                        Contact via email
                    </Button>
                </Grid>
                <Grid item>
                    <Typography style={styles.button}><h2>or</h2></Typography>
                </Grid>
                <Grid item>
                    <Button size="large" style={styles.button}><FacebookIcon /></Button>
                    <Button size="large" style={styles.button}><LinkedinIcon /></Button>
                    <Button size="large" style={styles.button}><GithubIcon /></Button>
                </Grid>
            </Grid>

        </div>
    )
}