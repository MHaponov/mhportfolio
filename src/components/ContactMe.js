import React from "react"
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/icons/Email'

const styles = {
    contactMeContainer: {
        height: "200px",
        backgroundColor: "#3f51b5"
    }
};

export default function ContactMe() {
    return (
        <div style={styles.contactMeContainer}>
            <Grid container
                justify="center"
                alignItems="center"
                direction="column">
                <Grid item>
                    <Typography color="secondary"
                        align="center">
                        <h1>Lets discuss</h1>
                    </Typography>
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

        </div>
    )
}