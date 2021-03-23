import React from "react"
import Typography from '@material-ui/core/Typography'

const styles = {
    footerContainer: {
        backgroundColor: "#0B0C10",
        color: "white",
        textAlign: "center",
        margin: "auto",
        padding: "10px"
    }
};

export default function ContactMe() {
    return (
        <div style={styles.footerContainer}>
            <Typography
                align="center">
                Copyright © 2021 Maksym Haponov 
            </Typography>
        </div>
    )
}