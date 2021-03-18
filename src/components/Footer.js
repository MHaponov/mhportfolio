import React from "react"
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/icons/Email'

const styles = {
    footerContainer: {
        border: "1px solid black",
        height: "50px",
        align: "center"
    }
};

export default function ContactMe() {
    return (
        <div style={styles.footerContainer}>
            <Typography color="primary"
                align="center">
                Copyright , Maksym Haponov
            </Typography>

        </div>
    )
}