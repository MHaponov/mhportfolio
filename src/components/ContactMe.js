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
        backgroundColor: "#380E36"
    }
};

export default function ContactMe() {
    return (
        <div style={styles.contactMeContainer}>
            <Grid container
                direction="column">
                <Grid item>
                    <Typography color="secondary">
                        <h1>Let me know what you up to</h1>
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
                    <Typography color="secondary"><h2>or</h2></Typography>
                </Grid>
                <Grid item>
                    <Button color="secondary"><FacebookIcon /></Button>
                    <Button color="secondary"><LinkedinIcon /></Button>
                    <Button color="secondary"><GithubIcon /></Button>
                </Grid>
            </Grid>

        </div>
    )
}