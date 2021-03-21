import React from "react"
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

const styles = {
    footerContainer: {
        backgroundColor: "black",
        textAlign: "center",
        margin: "auto",
        padding: "10px"
    }
};

export default function ContactMe() {
    return (
        <div style={styles.footerContainer}>
            <Typography color="secondary"
                align="center">
                Copyright © 2021 Maksym Haponov 
            </Typography>
        </div>
    )
}